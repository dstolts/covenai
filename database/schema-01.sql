-- CovenAI Database Schema v1
-- Database: JitAutomation (DEVINFRAVM)
-- Schema: covenai
-- Created: 2026-03-24
-- Status: DRAFT -- Dan reviews and runs migration

-- Create schema
IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = 'covenai')
    EXEC('CREATE SCHEMA covenai');
GO

-- Users table
CREATE TABLE covenai.Users (
    UserId INT IDENTITY(1,1) PRIMARY KEY,
    Username NVARCHAR(50) NOT NULL UNIQUE,
    Email NVARCHAR(255) NOT NULL UNIQUE,
    DisplayName NVARCHAR(100),
    GitHubId NVARCHAR(50),
    GitHubUsername NVARCHAR(50),
    YouTubeHandle NVARCHAR(100),
    TikTokHandle NVARCHAR(100),
    InstagramHandle NVARCHAR(100),
    LinkedInHandle NVARCHAR(100),
    DiscordId NVARCHAR(50),
    RedditHandle NVARCHAR(100),
    ActivePoints INT NOT NULL DEFAULT 0,
    LifetimePoints INT NOT NULL DEFAULT 0,
    CurrentTier TINYINT NOT NULL DEFAULT 0,
    CurrentLeague NVARCHAR(20) NOT NULL DEFAULT 'Bronze',
    StreakDays INT NOT NULL DEFAULT 0,
    StreakLastActivity DATETIME2,
    StreakFreezeUsed BIT NOT NULL DEFAULT 0,
    StreakFreezeDate DATE,
    ReferralCode NVARCHAR(20) UNIQUE,
    ReferredByUserId INT,
    IsActive BIT NOT NULL DEFAULT 1,
    IsBanned BIT NOT NULL DEFAULT 0,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    UpdatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT FK_Users_ReferredBy FOREIGN KEY (ReferredByUserId) REFERENCES covenai.Users(UserId)
);
GO

-- Engagements table (raw engagement events from all platforms)
CREATE TABLE covenai.Engagements (
    EngagementId BIGINT IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL,
    Platform NVARCHAR(20) NOT NULL, -- youtube, tiktok, instagram, linkedin, discord, reddit, github
    ActionType NVARCHAR(30) NOT NULL, -- like, comment, share, thread_start, hashtag_post, pr_merged, etc.
    ContentUrl NVARCHAR(500),
    ContentText NVARCHAR(500),
    BasePoints INT NOT NULL DEFAULT 0,
    Multiplier DECIMAL(4,2) NOT NULL DEFAULT 1.0,
    FinalPoints INT NOT NULL DEFAULT 0,
    Hashtag NVARCHAR(50),
    IsFirstResponder BIT NOT NULL DEFAULT 0,
    SourceId NVARCHAR(255), -- external platform ID to prevent duplicates
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT FK_Engagements_User FOREIGN KEY (UserId) REFERENCES covenai.Users(UserId),
    CONSTRAINT UQ_Engagements_Source UNIQUE (Platform, SourceId)
);
GO

-- Points ledger (aggregated daily snapshots)
CREATE TABLE covenai.PointsLedger (
    LedgerId BIGINT IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL,
    PointDate DATE NOT NULL,
    EngagementPoints INT NOT NULL DEFAULT 0,
    HashtagPoints INT NOT NULL DEFAULT 0,
    ChallengePoints INT NOT NULL DEFAULT 0,
    ReferralPoints INT NOT NULL DEFAULT 0,
    OSSPoints INT NOT NULL DEFAULT 0,
    StreakMultiplier DECIMAL(4,2) NOT NULL DEFAULT 1.0,
    DailyTotal INT NOT NULL DEFAULT 0,
    DailyCapped BIT NOT NULL DEFAULT 0, -- true if hit 100-point daily cap
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT FK_PointsLedger_User FOREIGN KEY (UserId) REFERENCES covenai.Users(UserId),
    CONSTRAINT UQ_PointsLedger_UserDate UNIQUE (UserId, PointDate)
);
GO

-- Leagues (weekly competition groups of 30)
CREATE TABLE covenai.Leagues (
    LeagueId INT IDENTITY(1,1) PRIMARY KEY,
    LeagueName NVARCHAR(20) NOT NULL, -- Bronze, Silver, Gold, Platinum, Diamond, Champion
    WeekStart DATE NOT NULL,
    WeekEnd DATE NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE()
);
GO

-- League membership (which users are in which league each week)
CREATE TABLE covenai.LeagueMembers (
    LeagueMemberId BIGINT IDENTITY(1,1) PRIMARY KEY,
    LeagueId INT NOT NULL,
    UserId INT NOT NULL,
    WeeklyPoints INT NOT NULL DEFAULT 0,
    RankInLeague INT,
    Promoted BIT NOT NULL DEFAULT 0,
    Demoted BIT NOT NULL DEFAULT 0,
    CONSTRAINT FK_LeagueMembers_League FOREIGN KEY (LeagueId) REFERENCES covenai.Leagues(LeagueId),
    CONSTRAINT FK_LeagueMembers_User FOREIGN KEY (UserId) REFERENCES covenai.Users(UserId),
    CONSTRAINT UQ_LeagueMembers_LeagueUser UNIQUE (LeagueId, UserId)
);
GO

-- Challenges
CREATE TABLE covenai.Challenges (
    ChallengeId INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(200) NOT NULL,
    Description NVARCHAR(2000),
    ChallengeType NVARCHAR(20) NOT NULL, -- weekly, monthly, seasonal, annual
    Hashtag NVARCHAR(50),
    StartDate DATETIME2 NOT NULL,
    EndDate DATETIME2 NOT NULL,
    EntryPoints INT NOT NULL DEFAULT 25,
    WinnerPoints INT NOT NULL DEFAULT 100,
    RunnerUpPoints INT NOT NULL DEFAULT 50,
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE()
);
GO

-- Challenge entries
CREATE TABLE covenai.ChallengeEntries (
    EntryId BIGINT IDENTITY(1,1) PRIMARY KEY,
    ChallengeId INT NOT NULL,
    UserId INT NOT NULL,
    SubmissionUrl NVARCHAR(500) NOT NULL,
    SubmissionText NVARCHAR(2000),
    Platform NVARCHAR(20),
    VoteCount INT NOT NULL DEFAULT 0,
    IsWinner BIT NOT NULL DEFAULT 0,
    IsRunnerUp BIT NOT NULL DEFAULT 0,
    SubmittedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT FK_ChallengeEntries_Challenge FOREIGN KEY (ChallengeId) REFERENCES covenai.Challenges(ChallengeId),
    CONSTRAINT FK_ChallengeEntries_User FOREIGN KEY (UserId) REFERENCES covenai.Users(UserId)
);
GO

-- Teams (OSS project teams of 3-5)
CREATE TABLE covenai.Teams (
    TeamId INT IDENTITY(1,1) PRIMARY KEY,
    TeamName NVARCHAR(100) NOT NULL UNIQUE,
    RepoUrl NVARCHAR(500),
    StoryUrl NVARCHAR(500), -- for private repos
    IsPublicRepo BIT NOT NULL DEFAULT 1,
    TotalPoints INT NOT NULL DEFAULT 0,
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE()
);
GO

-- Team members
CREATE TABLE covenai.TeamMembers (
    TeamMemberId INT IDENTITY(1,1) PRIMARY KEY,
    TeamId INT NOT NULL,
    UserId INT NOT NULL,
    JoinedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT FK_TeamMembers_Team FOREIGN KEY (TeamId) REFERENCES covenai.Teams(TeamId),
    CONSTRAINT FK_TeamMembers_User FOREIGN KEY (UserId) REFERENCES covenai.Users(UserId),
    CONSTRAINT UQ_TeamMembers_TeamUser UNIQUE (TeamId, UserId)
);
GO

-- Year badges (annual rolling badges)
CREATE TABLE covenai.YearBadges (
    BadgeId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL,
    BadgeYear INT NOT NULL,
    TierAtMint TINYINT NOT NULL,
    TierName NVARCHAR(20) NOT NULL,
    LifetimePointsAtMint INT NOT NULL DEFAULT 0,
    MintedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT FK_YearBadges_User FOREIGN KEY (UserId) REFERENCES covenai.Users(UserId),
    CONSTRAINT UQ_YearBadges_UserYear UNIQUE (UserId, BadgeYear)
);
GO

-- Referral tracking
CREATE TABLE covenai.Referrals (
    ReferralId INT IDENTITY(1,1) PRIMARY KEY,
    ReferrerUserId INT NOT NULL,
    ReferredUserId INT NOT NULL,
    ReferralCode NVARCHAR(20) NOT NULL,
    ReferredUserTier TINYINT NOT NULL DEFAULT 0,
    BonusPaid BIT NOT NULL DEFAULT 0, -- true when referred user hits Tier 2
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT FK_Referrals_Referrer FOREIGN KEY (ReferrerUserId) REFERENCES covenai.Users(UserId),
    CONSTRAINT FK_Referrals_Referred FOREIGN KEY (ReferredUserId) REFERENCES covenai.Users(UserId),
    CONSTRAINT UQ_Referrals_Referred UNIQUE (ReferredUserId)
);
GO

-- Indexes for common queries
CREATE INDEX IX_Engagements_UserId ON covenai.Engagements(UserId, CreatedAt DESC);
CREATE INDEX IX_Engagements_Platform ON covenai.Engagements(Platform, ActionType, CreatedAt DESC);
CREATE INDEX IX_PointsLedger_UserId ON covenai.PointsLedger(UserId, PointDate DESC);
CREATE INDEX IX_Users_ActivePoints ON covenai.Users(ActivePoints DESC);
CREATE INDEX IX_Users_LifetimePoints ON covenai.Users(LifetimePoints DESC);
CREATE INDEX IX_Users_CurrentTier ON covenai.Users(CurrentTier);
CREATE INDEX IX_ChallengeEntries_ChallengeId ON covenai.ChallengeEntries(ChallengeId, SubmittedAt DESC);
CREATE INDEX IX_LeagueMembers_LeagueId ON covenai.LeagueMembers(LeagueId, WeeklyPoints DESC);
GO
