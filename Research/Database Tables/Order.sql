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

