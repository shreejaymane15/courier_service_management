CREATE TABLE [dbo].[Complaint]
(
	[complaint_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[complaint] varchar(255) NOT NULL,
	[status] varchar(100) NOT NULL,
	[placed_date] date NOT NULL,
	[resolved_date] date DEFAULT NULL,
	[order_id] int NOT NULL,
	[customer_id] int NOT NULL,
	CONSTRAINT [Fk_Complaint_To_Order] FOREIGN KEY ([order_id]) REFERENCES [Order]([order_id]),
	CONSTRAINT [Fk_Complaint_To_User_Info] FOREIGN KEY ([customer_id]) REFERENCES [User_Info]([user_id]),
);


CREATE TABLE [dbo].[Delivery_Personnel] (
    [personnel_id] INT           IDENTITY (1, 1) NOT NULL,
    [location]     VARCHAR (100) NOT NULL,
    PRIMARY KEY CLUSTERED ([personnel_id] ASC),
    CONSTRAINT [FK_Delivery_Personnel_To_User_Info] FOREIGN KEY ([personnel_id]) REFERENCES [dbo].[User_Info] ([user_Id])
);



CREATE TABLE [dbo].[Dispatcher] (
    [dispatcher_id] INT           NOT NULL,
    [hub_location]  VARCHAR (100) NOT NULL,
    PRIMARY KEY CLUSTERED ([dispatcher_id] ASC),
    CONSTRAINT [Fk_Dispatcher_TO_User_Info] FOREIGN KEY ([dispatcher_id]) REFERENCES [dbo].[User_Info] ([user_Id])
);



CREATE TABLE [dbo].[Feedback] (
    [feedback_id]   INT           IDENTITY (1, 1) NOT NULL,
    [rating]        INT           NOT NULL,
    [comment]       VARCHAR (255) NOT NULL,
    [feedback_date] DATE          NOT NULL,
    [order_id]      INT           NOT NULL,
    [customer_id]   INT           NOT NULL,
    PRIMARY KEY CLUSTERED ([feedback_id] ASC),
    CONSTRAINT [Fk_Feedback_To_Order] FOREIGN KEY ([order_id]) REFERENCES [dbo].[Order] ([order_id]),
    CONSTRAINT [Fk_Feedback_To_User_Info] FOREIGN KEY ([customer_id]) REFERENCES [dbo].[User_Info] ([user_Id])
);





CREATE TABLE [dbo].[Order] (
    [order_id]         INT           NOT NULL,
    [reciver_name]     VARCHAR (100) NOT NULL,
    [reciver_email]    VARCHAR (100) NOT NULL,
    [receiver_mobile]  VARCHAR (15)  NOT NULL,
    [receiver_address] VARCHAR (100) NOT NULL,
    [package_count]    INT           NOT NULL,
    [amount]           REAL          NOT NULL,
    [status]           VARCHAR (100) NOT NULL,
    [customer_id]      INT           NOT NULL,
    [personnel_id]     INT           NOT NULL,
    PRIMARY KEY CLUSTERED ([order_id] ASC),
    CONSTRAINT [FK_Order_To_User_Info] FOREIGN KEY ([customer_id]) REFERENCES [dbo].[User_Info] ([user_Id]),
    CONSTRAINT [FK_Delivery_Personnel_To_Delivery_Personnel] FOREIGN KEY ([personnel_id]) REFERENCES [dbo].[Delivery_Personnel] ([personnel_id])
);



CREATE TABLE [dbo].[Package] (
    [package_id]    INT           IDENTITY (1, 1) NOT NULL,
    [length]        INT           NOT NULL,
    [width]         INT           NOT NULL,
    [height]        INT           NOT NULL,
    [weight]        INT           NOT NULL,
    [type]          VARCHAR (100) NOT NULL,
    [order_id]      INT           NOT NULL,
    [dispatcher_id] INT           NOT NULL,
    PRIMARY KEY CLUSTERED ([package_id] ASC),
    CONSTRAINT [FK_Package_To_Package_Pricing] FOREIGN KEY ([type]) REFERENCES [dbo].[Package_Price] ([package_type]),
    CONSTRAINT [FK_Package_To_Dispatcher] FOREIGN KEY ([dispatcher_id]) REFERENCES [dbo].[Dispatcher] ([dispatcher_id]),
    CONSTRAINT [FK_Package_To_Order] FOREIGN KEY ([order_id]) REFERENCES [dbo].[Order] ([order_id])
);



CREATE TABLE [dbo].[Package_Price] (
    [package_type]  VARCHAR (100) NOT NULL,
    [package_price] DECIMAL (18)  NOT NULL,
    PRIMARY KEY CLUSTERED ([package_type] ASC)
);



CREATE TABLE [dbo].[Payment] (
    [payment_id]   INT           IDENTITY (1, 1) NOT NULL,
    [amount]       REAL          NOT NULL,
    [payment_date] DATE          NOT NULL,
    [UTR]          VARCHAR (100) DEFAULT (NULL) NULL,
    [STATUS]       VARCHAR (50)  NOT NULL,
    [order_id]     INT           NOT NULL,
    PRIMARY KEY CLUSTERED ([payment_id] ASC),
    CONSTRAINT [FK_Payment_To_Order] FOREIGN KEY ([order_id]) REFERENCES [dbo].[Order] ([order_id])
);







CREATE TABLE [dbo].[Role] (
    [role_id]   INT          IDENTITY (1, 1) NOT NULL,
    [role_name] VARCHAR (20) NOT NULL,
    PRIMARY KEY CLUSTERED ([role_id] ASC)
);




CREATE TABLE [dbo].[Tracking] (
    [tracking_id]   INT           IDENTITY (1, 1) NOT NULL,
    [departed_from] VARCHAR (50)  NOT NULL,
    [reached_at]    VARCHAR (50)  NOT NULL,
    [destination]   VARCHAR (50)  NOT NULL,
    [status]        VARCHAR (100) NOT NULL,
    [updated_at]    DATE          NOT NULL,
    [order_id]      INT           NOT NULL,
    PRIMARY KEY CLUSTERED ([tracking_id] ASC),
    CONSTRAINT [FK_Tracking_To_Order] FOREIGN KEY ([order_id]) REFERENCES [dbo].[Order] ([order_id])
);





CREATE TABLE [dbo].[User_Info] (
    [user_Id]    INT           IDENTITY (1, 1) NOT NULL,
    [first_name] VARCHAR (100) NOT NULL,
    [last_name]  VARCHAR (100) NOT NULL,
    [email]      VARCHAR (100) NOT NULL,
    [password]   VARCHAR (255) NOT NULL,
    [address]    VARCHAR (255) NOT NULL,
    [mobile]     VARCHAR (15)  NOT NULL,
    [role_id]    INT           NOT NULL,
    PRIMARY KEY CLUSTERED ([user_Id] ASC),
    CONSTRAINT [FK_USER_TO_ROLE] FOREIGN KEY ([role_id]) REFERENCES [dbo].[Role] ([role_id])
);

