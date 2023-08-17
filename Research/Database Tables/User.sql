CREATE TABLE User_Info
(
	[user_Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[first_name] VARCHAR(100) NOT NULL,
	[last_name] VARCHAR(100) NOT NULL,
	[email] VARCHAR(100) NOT NULL,
	[password] VARCHAR(255) NOT NULL,
	[address] varchar(255) NOT NULL,
	[mobile] varchar(15) NOT NULL,
	[role_id] int NOT NULL, 
    CONSTRAINT [FK_USER_TO_ROLE] FOREIGN KEY ([role_id]) REFERENCES [Role]([role_id])
)
