GO
CREATE DATABASE AdlerTask
GO
USE AdlerTask

CREATE TABLE tClient(
	idClient int IDENTITY(1,1) NOT NULL,
	Name nvarchar(50) NOT NULL,
CONSTRAINT PK_tClient PRIMARY KEY (idClient))

CREATE TABLE tOrder(
    idOrder int IDENTITY(1,1) NOT NULL,
	idClient int,
	OrderSum money NOT NULL,
	OrderDate smalldatetime NOT NULL
CONSTRAINT PK_tOrder PRIMARY KEY (idOrder))

ALTER TABLE tOrder ADD CONSTRAINT FK_tOrder_idClient FOREIGN KEY (idClient) REFERENCES tClient (idClient);
--ON DELETE CASCADE
--ON UPDATE CASCADE;

Insert into tClient values('Client1');
Insert into tClient values('Client2');
Insert into tClient values('Client3');
Insert into tClient values('Client4');
Insert into tClient values('Client5');
Insert into tClient values('Client6');

Insert into tOrder values(1,11,GETDATE());

Insert into tOrder values(2,21,GETDATE());
Insert into tOrder values(2,22,GETDATE());

Insert into tOrder values(3,31,GETDATE());
Insert into tOrder values(3,32,GETDATE());
Insert into tOrder values(3,33,GETDATE());

Insert into tOrder values(4,41,GETDATE());
Insert into tOrder values(4,42,GETDATE());
Insert into tOrder values(4,43,GETDATE());
Insert into tOrder values(4,44,GETDATE());

Insert into tOrder values(5,51,GETDATE());
Insert into tOrder values(5,52,GETDATE());
Insert into tOrder values(5,53,GETDATE());
Insert into tOrder values(5,54,GETDATE());
Insert into tOrder values(5,55,GETDATE());

Insert into tOrder values(6,61,GETDATE());
Insert into tOrder values(6,62,GETDATE());
Insert into tOrder values(6,63,GETDATE());
Insert into tOrder values(6,64,GETDATE());
Insert into tOrder values(6,65,GETDATE());
Insert into tOrder values(6,66,GETDATE());

SELECT * FROM tClient;
SELECT * FROM tOrder;

--**** TASK 1
-- Just Clients --
SELECT DISTINCT tc.idClient as IdClient, tc.Name as HasOrdersGreaterThan50 FROM tClient tc 
INNER JOIN tOrder tor ON tc.idClient = tor.idClient AND tor.OrderSum > 50;
-- Clients && Orders Over 50 --
SELECT tc.idClient as IdClient, tc.Name as Name, tor.OrderSum As OrdersGreaterThan50 FROM tClient tc 
INNER JOIN tOrder tor ON tc.idClient = tor.idClient AND tor.OrderSum > 50;

--**** TASK 2
SELECT tc.idClient as IdClient, tc.Name as Name, Sum(tor.OrderSum) As SumOrders FROM tClient tc 
INNER JOIN tOrder tor ON tc.idClient = tor.idClient
GROUP BY tc.idClient, tc.Name;

SELECT tc.idClient as IdClient, tc.Name as Name, Sum(tor.OrderSum) As SumOrdersGreaterThan100 FROM tClient tc 
INNER JOIN tOrder tor ON tc.idClient = tor.idClient
GROUP BY tc.idClient, tc.Name
HAVING Sum(tor.OrderSum) > 100;

--DROP DATABASE AdlerTask;