# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT 
	ProductName,
    CategoryName 
FROM Products as p
JOIN Categories as c
ON p.CategoryID = c.CategoryID;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT 
	OrderID,
    ShipperName
FROM Orders as o 
JOIN Shippers as s 
ON o.ShipperID = s.ShipperID WHERE OrderDate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT
	p.ProductName,
	od.Quantity
FROM Products as p
JOIN OrderDetails as od
ON od.ProductID=p.ProductID WHERE od.OrderID = 10251;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT 
	OrderID,
    CustomerName,
    LastName
FROM Orders AS o JOIN
Customers AS c JOIN 
Employees AS e 
ON o.EmployeeID=e.EmployeeID AND c.CustomerID=o.CustomerID;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT CategoryName, COUNT(ProductID) as Count 
FROM Categories AS c
JOIN Products AS p
ON c.CategoryID = p.CategoryID GROUP BY p.CategoryID;

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT o.OrderID, COUNT(od.ProductID) as ItemCount
FROM Orders as o
JOIN OrderDetails as od
ON od.OrderID = o.OrderID 
GROUP BY od.OrderID;