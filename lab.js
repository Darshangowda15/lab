const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    if (req.url === "/lab") {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write("<h1 style='text-align:center;'>Welcome to Darshan Ctrl+C Ctrl+V Zone </h1>");
        res.write("<h3 style='text-align:center;'>Bro's and My Dear Girls, Just Execute & Escape This Lab </h3>");


        res.write(`
            <pre>
#include <stdio.h>

int main() {
    printf("# ADVANCE DATABASE MANAGEMENT SYSTEM LAB PROGRAMS

## 1) Create and Manage University Database

### Question

Perform the following operations:

* Create tables: Student, Course, and Enrolment with appropriate attributes and constraints (Primary key, Foreign key).
* Insert minimum 5 records into each table.
* Display all student details enrolled in a specific course.
* Update a student's name using UPDATE command.
* Delete a course using DELETE command.

### Code

```sql
CREATE TABLE Student (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE,
    phone VARCHAR(15),
    dept VARCHAR(30)
);

CREATE TABLE Course (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL UNIQUE,
    credits INT CHECK (credits > 0)
);

CREATE TABLE Enrolment (
    enrolment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrol_date DATE,
    FOREIGN KEY (student_id) REFERENCES Student(student_id)
    ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Course(course_id)
    ON DELETE CASCADE
);

INSERT INTO Student VALUES (1, 'Asha', 'asha@gmail.com', '9876543210', 'MCA');
INSERT INTO Student VALUES (2, 'Ravi', 'ravi@gmail.com', '9876543211', 'MCA');
INSERT INTO Student VALUES (3, 'Kiran', 'kiran@gmail.com', '9876543212', 'BCA');
INSERT INTO Student VALUES (4, 'Meena', 'meena@gmail.com', '9876543213', 'BSc');
INSERT INTO Student VALUES (5, 'Arjun', 'arjun@gmail.com', '9876543214', 'BCA');

INSERT INTO Course VALUES (101, 'DBMS', 4);
INSERT INTO Course VALUES (102, 'OS', 3);
INSERT INTO Course VALUES (103, 'CN', 3);
INSERT INTO Course VALUES (104, 'Java', 4);
INSERT INTO Course VALUES (105, 'AI', 3);

INSERT INTO Enrolment VALUES (1001, 1, 101, '2026-02-16');
INSERT INTO Enrolment VALUES (1002, 2, 101, '2026-01-02');
INSERT INTO Enrolment VALUES (1003, 3, 104, '2026-02-02');
INSERT INTO Enrolment VALUES (1004, 4, 102, '2026-03-02');
INSERT INTO Enrolment VALUES (1005, 5, 105, '2026-04-02');

SELECT S.*
FROM Student S
JOIN Enrolment E ON S.student_id = E.student_id
JOIN Course C ON E.course_id = C.course_id
WHERE C.course_name = 'DBMS';

UPDATE Student
SET student_name = 'Kiran Kumar'
WHERE student_id = 3;

DELETE FROM Course
WHERE course_id = 105;
```

---

## 2) Employee, Department and Salary Database

### Question

Perform the following operations:

* Create tables: Employee, Department, and Salary.
* Insert sample records into each.
* Display list of employees working in a specific department using JOIN.
* Display total salary paid per department using GROUP BY and aggregate function.
* Create a view that displays employee name, department, and salary.

### Code

```sql
CREATE TABLE Department (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(40) NOT NULL UNIQUE,
    location VARCHAR(40)
);

CREATE TABLE Employee (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50) NOT NULL,
    phone VARCHAR(15),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES Department(dept_id)
);

CREATE TABLE Salary (
    salary_id INT PRIMARY KEY,
    emp_id INT,
    basic_salary DECIMAL(10,2) CHECK (basic_salary > 0),
    FOREIGN KEY (emp_id) REFERENCES Employee(emp_id)
    ON DELETE CASCADE
);

INSERT INTO Department VALUES (10, 'HR', 'Bengaluru');
INSERT INTO Department VALUES (20, 'IT', 'Mysuru');
INSERT INTO Department VALUES (30, 'Finance', 'Mangaluru');
INSERT INTO Department VALUES (40, 'Sales', 'Hubli');
INSERT INTO Department VALUES (50, 'Admin', 'Belagavi');

INSERT INTO Employee VALUES (1, 'Asha', '9876543210', 20);
INSERT INTO Employee VALUES (2, 'Ravi', '9876543211', 20);
INSERT INTO Employee VALUES (3, 'Kiran', '9876543212', 10);
INSERT INTO Employee VALUES (4, 'Meena', '9876543213', 30);
INSERT INTO Employee VALUES (5, 'Arjun', '9876543214', 40);

INSERT INTO Salary VALUES (101, 1, 45000);
INSERT INTO Salary VALUES (102, 2, 50000);
INSERT INTO Salary VALUES (103, 3, 35000);
INSERT INTO Salary VALUES (104, 4, 60000);
INSERT INTO Salary VALUES (105, 5, 40000);

SELECT E.emp_id, E.emp_name, D.dept_name
FROM Employee E
JOIN Department D ON E.dept_id = D.dept_id
WHERE D.dept_name = 'IT';

SELECT D.dept_name, SUM(S.basic_salary) AS total_salary
FROM Department D
JOIN Employee E ON D.dept_id = E.dept_id
JOIN Salary S ON E.emp_id = S.emp_id
GROUP BY D.dept_name;

CREATE VIEW Emp_Dep_Salary AS
SELECT E.emp_name, D.dept_name, S.basic_salary
FROM Employee E
JOIN Department D ON E.dept_id = D.dept_id
JOIN Salary S ON E.emp_id = S.emp_id;

SELECT * FROM Emp_Dep_Salary;
```

---

## 3) Library Database

### Question

Perform the following operations:

* Create tables: Books, Authors, Borrowers.
* Insert sample records for at least 5 books and 3 borrowers.
* Retrieve book details borrowed by a specific borrower using nested queries.
* Count how many books each borrower has taken using aggregate functions.
* Create a view showing borrower name and books borrowed.

### Code

```sql
CREATE TABLE Authors (
    author_id INT PRIMARY KEY,
    author_name VARCHAR(50) NOT NULL
);

CREATE TABLE Borrowers (
    borrower_id INT PRIMARY KEY,
    borrower_name VARCHAR(50) NOT NULL,
    phone VARCHAR(15)
);

CREATE TABLE Books (
    book_id INT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author_id INT,
    borrower_id INT,
    FOREIGN KEY (author_id) REFERENCES Authors(author_id),
    FOREIGN KEY (borrower_id) REFERENCES Borrowers(borrower_id)
);

INSERT INTO Authors VALUES (1, 'Chetan Bhagat');
INSERT INTO Authors VALUES (2, 'R K Narayan');
INSERT INTO Authors VALUES (3, 'J K Rowling');
INSERT INTO Authors VALUES (4, 'Sudha Murthy');
INSERT INTO Authors VALUES (5, 'Dan Brown');

INSERT INTO Borrowers VALUES (101, 'Asha', '9876543210');
INSERT INTO Borrowers VALUES (102, 'Ravi', '9876543211');
INSERT INTO Borrowers VALUES (103, 'Meena', '9876543212');

INSERT INTO Books VALUES (1, 'Harry Potter', 3, 101);
INSERT INTO Books VALUES (2, 'The Guide', 2, 102);
INSERT INTO Books VALUES (3, 'Angels and Demons', 5, 101);
INSERT INTO Books VALUES (4, 'Wise and Otherwise', 4, 103);
INSERT INTO Books VALUES (5, '2 States', 1, NULL);

SELECT *
FROM Books
WHERE borrower_id = (
    SELECT borrower_id
    FROM Borrowers
    WHERE borrower_name = 'Asha'
);

SELECT B.borrower_name, COUNT(Bo.book_id) AS total_books_taken
FROM Borrowers B
LEFT JOIN Books Bo ON B.borrower_id = Bo.borrower_id
GROUP BY B.borrower_name;

CREATE VIEW Borrower_Books AS
SELECT Br.borrower_name, Bo.title
FROM Borrowers Br
JOIN Books Bo ON Br.borrower_id = Bo.borrower_id;

SELECT * FROM Borrower_Books;
```

---

## 4) Hospital Database

### Question

Perform the following operations:

* Create tables: Patient, Doctor, and Appointment.
* Insert sample data for at least 5 patients and 3 doctors.
* Retrieve patient names who have appointments with a specific doctor.
* Display total number of appointments per doctor.
* Create an index on Doctor_ID.

### Code

```sql
CREATE TABLE Patient (
    patient_id INT PRIMARY KEY,
    patient_name VARCHAR(50) NOT NULL,
    age INT CHECK (age > 0),
    gender VARCHAR(10),
    phone VARCHAR(15) UNIQUE
);

CREATE TABLE Doctor (
    doctor_id INT PRIMARY KEY,
    doctor_name VARCHAR(50) NOT NULL,
    specialization VARCHAR(40),
    phone VARCHAR(15) UNIQUE
);

CREATE TABLE Appointment (
    appointment_id INT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    appointment_date DATE NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES Patient(patient_id)
    ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id)
    ON DELETE CASCADE
);

INSERT INTO Patient VALUES (1, 'Asha', 22, 'Female', '9876543210');
INSERT INTO Patient VALUES (2, 'Ravi', 25, 'Male', '9876543211');
INSERT INTO Patient VALUES (3, 'Kiran', 30, 'Male', '9876543212');
INSERT INTO Patient VALUES (4, 'Meena', 28, 'Female', '9876543213');
INSERT INTO Patient VALUES (5, 'Arjun', 35, 'Male', '9876543214');

INSERT INTO Doctor VALUES (101, 'Dr. Suresh', 'Cardiology', '9998887771');
INSERT INTO Doctor VALUES (102, 'Dr. Anitha', 'Dermatology', '9998887772');
INSERT INTO Doctor VALUES (103, 'Dr. Mahesh', 'Orthopedic', '9998887773');

INSERT INTO Appointment VALUES (1001, 1, 101, '2026-01-02');
INSERT INTO Appointment VALUES (1002, 2, 101, '2026-02-02');
INSERT INTO Appointment VALUES (1003, 3, 102, '2026-03-02');
INSERT INTO Appointment VALUES (1004, 4, 103, '2026-04-02');
INSERT INTO Appointment VALUES (1005, 5, 101, '2026-05-02');

SELECT P.patient_name
FROM Patient P
JOIN Appointment A ON P.patient_id = A.patient_id
JOIN Doctor D ON A.doctor_id = D.doctor_id
WHERE D.doctor_name = 'Dr. Suresh';

SELECT D.doctor_name, COUNT(A.appointment_id) AS total_appointments
FROM Doctor D
LEFT JOIN Appointment A ON D.doctor_id = A.doctor_id
GROUP BY D.doctor_name;

CREATE INDEX idx_doctor_id ON Doctor(doctor_id);
```

---

## 5) Customer Product Orders Database

### Question

Execute the following queries:

* Create tables: Customer, Product, and Orders.
* Insert sample data for 5 customers and 5 products.
* Display all products ordered by a specific customer using JOIN.
* Find customers who haven't placed any orders using NOT IN.
* Create a view that shows product name, quantity, and customer name.

### Code

```sql
CREATE TABLE Customer (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    phone VARCHAR(15) UNIQUE,
    city VARCHAR(30)
);

CREATE TABLE Product (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL UNIQUE,
    price DECIMAL(10,2) CHECK (price > 0)
);

CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    quantity INT CHECK (quantity > 0),
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
    ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
    ON DELETE CASCADE
);

INSERT INTO Customer VALUES (1, 'Asha', '9876543210', 'Bengaluru');
INSERT INTO Customer VALUES (2, 'Ravi', '9876543211', 'Mysuru');
INSERT INTO Customer VALUES (3, 'Kiran', '9876543212', 'Mangaluru');
INSERT INTO Customer VALUES (4, 'Meena', '9876543213', 'Hubli');
INSERT INTO Customer VALUES (5, 'Arjun', '9876543214', 'Belagavi');

INSERT INTO Product VALUES (101, 'Laptop', 55000);
INSERT INTO Product VALUES (102, 'Mobile', 20000);
INSERT INTO Product VALUES (103, 'Headphones', 2500);
INSERT INTO Product VALUES (104, 'Keyboard', 1200);
INSERT INTO Product VALUES (105, 'Mouse', 600);

INSERT INTO Orders VALUES (1001, 1, 101, 1, '2026-01-02');
INSERT INTO Orders VALUES (1002, 1, 103, 2, '2026-02-02');
INSERT INTO Orders VALUES (1003, 2, 102, 1, '2026-03-02');
INSERT INTO Orders VALUES (1004, 3, 105, 3, '2026-04-02');
INSERT INTO Orders VALUES (1005, 4, 104, 1, '2026-05-02');

SELECT C.customer_name, P.product_name, O.quantity, O.order_date
FROM Orders O
JOIN Customer C ON O.customer_id = C.customer_id
JOIN Product P ON O.product_id = P.product_id
WHERE C.customer_name = 'Asha';

SELECT customer_name
FROM Customer
WHERE customer_id NOT IN (
    SELECT customer_id
    FROM Orders
);

CREATE VIEW Customer_Product_View AS
SELECT C.customer_name, P.product_name, O.quantity
FROM Orders O
JOIN Customer C ON O.customer_id = C.customer_id
JOIN Product P ON O.product_id = P.product_id;

SELECT * FROM Customer_Product_View;
```

---

## 6) Database Normalization

### Question

Execute the following queries:

* Convert the unnormalized Sales table to 1NF.
* Further convert to 2NF.
* Normalize to 3NF and show the resulting tables.
* Explain primary and foreign keys in the resulting schema.

### Code

```sql
CREATE TABLE Sales_UNF (
    book_id INT,
    book_title VARCHAR(100),
    author_name VARCHAR(50),
    customer_name VARCHAR(50),
    customer_address VARCHAR(150),
    purchase_date DATE
);

CREATE TABLE Sales_1NF (
    book_id INT,
    book_title VARCHAR(100),
    author_name VARCHAR(50),
    customer_name VARCHAR(50),
    customer_address VARCHAR(150),
    purchase_date DATE
);

CREATE TABLE Books_2NF (
    book_id INT PRIMARY KEY,
    book_title VARCHAR(100) NOT NULL,
    author_name VARCHAR(50) NOT NULL
);

CREATE TABLE Customers_2NF (
    customer_name VARCHAR(50) PRIMARY KEY,
    customer_address VARCHAR(150) NOT NULL
);

CREATE TABLE Sales_2NF (
    book_id INT,
    customer_name VARCHAR(50),
    purchase_date DATE,
    PRIMARY KEY (book_id, customer_name, purchase_date),
    FOREIGN KEY (book_id) REFERENCES Books_2NF(book_id),
    FOREIGN KEY (customer_name) REFERENCES Customers_2NF(customer_name)
);

CREATE TABLE Author (
    author_id INT PRIMARY KEY,
    author_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE Books (
    book_id INT PRIMARY KEY,
    book_title VARCHAR(100) NOT NULL,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES Author(author_id)
);

CREATE TABLE Customer (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    customer_address VARCHAR(150) NOT NULL
);

CREATE TABLE Sales (
    sale_id INT PRIMARY KEY,
    book_id INT,
    customer_id INT,
    purchase_date DATE NOT NULL,
    FOREIGN KEY (book_id) REFERENCES Books(book_id),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

INSERT INTO Author VALUES (1, 'Chetan Bhagat');
INSERT INTO Author VALUES (2, 'R K Narayan');
INSERT INTO Author VALUES (3, 'J K Rowling');

INSERT INTO Books VALUES (101, '2 States', 1);
INSERT INTO Books VALUES (102, 'The Guide', 2);
INSERT INTO Books VALUES (103, 'Harry Potter', 3);

INSERT INTO Customer VALUES (1, 'Asha', 'Bengaluru');
INSERT INTO Customer VALUES (2, 'Ravi', 'Mysuru');
INSERT INTO Customer VALUES (3, 'Meena', 'Hubli');

INSERT INTO Sales VALUES (1001, 101, 1, '2026-01-02');
INSERT INTO Sales VALUES (1002, 103, 3, '2026-02-02');
INSERT INTO Sales VALUES (1003, 102, 2, '2026-03-02');
```

---

## 7) Teacher, Class and Subject Database

### Question

Perform the following operations:

* Create tables: Teacher, Class, Subject.
* Insert 5 records each.
* Display subject-wise list of teachers using JOIN.
* Count how many teachers are assigned per class.
* Create a view to show class name and total number of subjects taught.

### Code

```sql
CREATE TABLE Class (
    class_id INT PRIMARY KEY,
    class_name VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE Teacher (
    teacher_id INT PRIMARY KEY,
    teacher_name VARCHAR(50) NOT NULL,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Class(class_id)
    ON DELETE SET NULL
);

CREATE TABLE Subject (
    subject_id INT PRIMARY KEY,
    subject_name VARCHAR(50) NOT NULL,
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id)
    ON DELETE CASCADE
);

INSERT INTO Class VALUES (1, 'Class 1');
INSERT INTO Class VALUES (2, 'Class 2');
INSERT INTO Class VALUES (3, 'Class 3');
INSERT INTO Class VALUES (4, 'Class 4');
INSERT INTO Class VALUES (5, 'Class 5');

INSERT INTO Teacher VALUES (101, 'Anitha', 1);
INSERT INTO Teacher VALUES (102, 'Suresh', 2);
INSERT INTO Teacher VALUES (103, 'Mahesh', 3);
INSERT INTO Teacher VALUES (104, 'Kavya', 4);
INSERT INTO Teacher VALUES (105, 'Ravi', 5);

INSERT INTO Subject VALUES (201, 'Mathematics', 101);
INSERT INTO Subject VALUES (202, 'Science', 102);
INSERT INTO Subject VALUES (203, 'English', 103);
INSERT INTO Subject VALUES (204, 'Social Studies', 104);
INSERT INTO Subject VALUES (205, 'Computer', 105);

SELECT S.subject_name, T.teacher_name
FROM Subject S
JOIN Teacher T ON S.teacher_id = T.teacher_id
ORDER BY S.subject_name;

SELECT C.class_name, COUNT(T.teacher_id) AS total_teachers
FROM Class C
LEFT JOIN Teacher T ON C.class_id = T.class_id
GROUP BY C.class_name;

CREATE VIEW Class_Subject_Count AS
SELECT C.class_name, COUNT(S.subject_id) AS total_subjects
FROM Class C
LEFT JOIN Teacher T ON C.class_id = T.class_id
LEFT JOIN Subject S ON T.teacher_id = S.teacher_id
GROUP BY C.class_name;

SELECT * FROM Class_Subject_Count;
```

---

## 8) PL/SQL Withdrawal Program

### Question

Create a table Account(Account_No, Customer_Name, Balance) with appropriate data types and primary key constraint.

* Insert at least 3 sample records into the table.
* Write a PL/SQL block that:

  * Accepts an account number and withdrawal amount.
  * Checks if the account has sufficient balance.
  * If sufficient, deducts the amount and updates the balance.
  * If not, displays an appropriate message.
  * Includes exception handling for invalid account numbers and other errors.

### Code

```sql
CREATE TABLE Account (
    Account_No NUMBER PRIMARY KEY,
    Customer_Name VARCHAR2(50) NOT NULL,
    Balance NUMBER(10,2) CHECK (Balance >= 0)
);

INSERT INTO Account VALUES (101, 'Asha', 5000);
INSERT INTO Account VALUES (102, 'Ravi', 3000);
INSERT INTO Account VALUES (103, 'Meena', 1000);

COMMIT;

SET SERVEROUTPUT ON;

DECLARE
    acc NUMBER := &acc_no;
    amt NUMBER := &withdraw_amt;
    bal NUMBER;
BEGIN
    SELECT Balance INTO bal
    FROM Account
    WHERE Account_No = acc;

    IF amt > bal THEN
        DBMS_OUTPUT.PUT_LINE('Insufficient Balance! Available = ' || bal);
    ELSE
        UPDATE Account
        SET Balance = Balance - amt
        WHERE Account_No = acc;

        DBMS_OUTPUT.PUT_LINE('Withdrawal Successful. New Balance = ' || (bal - amt));
        COMMIT;
    END IF;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Invalid Account Number!');
END;
/

SELECT * FROM Account;
```

---

## 9) SAVEPOINT, ROLLBACK and COMMIT

### Question

Create a table Bank_Account(Account_No, Customer_Name, Balance) with suitable data types.

* Insert at least 3 records into the table.
* Write a PL/SQL block to simulate two transactions.
* Use SAVEPOINT to mark intermediate points.
* Use ROLLBACK to revert to a savepoint.
* Use COMMIT to finalize changes.
* Display the changes before and after rollback and commit.

### Code

```sql
CREATE TABLE Bank_Account (
    Account_No NUMBER(10) PRIMARY KEY,
    Customer_Name VARCHAR2(30),
    Balance NUMBER(10,2)
);

INSERT INTO Bank_Account VALUES (101, 'Sahana', 5000);
INSERT INTO Bank_Account VALUES (102, 'Ravi', 8000);
INSERT INTO Bank_Account VALUES (103, 'Meena', 12000);

COMMIT;

SET SERVEROUTPUT ON;

DECLARE
    v_bal101 Bank_Account.Balance%TYPE;
    v_bal102 Bank_Account.Balance%TYPE;
BEGIN
    DBMS_OUTPUT.PUT_LINE('--- Initial Balances ---');

    SELECT Balance INTO v_bal101
    FROM Bank_Account
    WHERE Account_No = 101;

    SELECT Balance INTO v_bal102
    FROM Bank_Account
    WHERE Account_No = 102;

    DBMS_OUTPUT.PUT_LINE('Account 101 Balance = ' || v_bal101);
    DBMS_OUTPUT.PUT_LINE('Account 102 Balance = ' || v_bal102);

    UPDATE Bank_Account
    SET Balance = Balance + 2000
    WHERE Account_No = 101;

    SAVEPOINT after_transaction1;

    DBMS_OUTPUT.PUT_LINE('--- After Transaction 1 ---');

    SELECT Balance INTO v_bal101
    FROM Bank_Account
    WHERE Account_No = 101;

    DBMS_OUTPUT.PUT_LINE('Account 101 Balance = ' || v_bal101);

    UPDATE Bank_Account
    SET Balance = Balance - 3000
    WHERE Account_No = 102;

    DBMS_OUTPUT.PUT_LINE('--- After Transaction 2 ---');

    SELECT Balance INTO v_bal102
    FROM Bank_Account
    WHERE Account_No = 102;

    DBMS_OUTPUT.PUT_LINE('Account 102 Balance = ' || v_bal102);

    ROLLBACK TO after_transaction1;

    DBMS_OUTPUT.PUT_LINE('--- After Rollback ---');

    SELECT Balance INTO v_bal101
    FROM Bank_Account
    WHERE Account_No = 101;

    SELECT Balance INTO v_bal102
    FROM Bank_Account
    WHERE Account_No = 102;

    DBMS_OUTPUT.PUT_LINE('Account 101 Balance = ' || v_bal101);
    DBMS_OUTPUT.PUT_LINE('Account 102 Balance = ' || v_bal102);

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('--- After Commit ---');

    SELECT Balance INTO v_bal101
    FROM Bank_Account
    WHERE Account_No = 101;

    SELECT Balance INTO v_bal102
    FROM Bank_Account
    WHERE Account_No = 102;

    DBMS_OUTPUT.PUT_LINE('Account 101 Balance = ' || v_bal101);
    DBMS_OUTPUT.PUT_LINE('Account 102 Balance = ' || v_bal102);
END;
/

SELECT * FROM Bank_Account;
```

---

## 10) MongoDB Student Collection

### Question

Create a MongoDB collection named Students with fields such as student_id, name, department, and marks.
Perform the following operations:

* Insert at least 5 student records.
* Update the marks of a student based on student_id.
* Delete a student record.
* Search for all students in a particular department.

### Code

```mongodb
use CollegeDB

db.Students.insertMany([
    { student_id: 101, name: "Sahana", department: "CSE", marks: 85 },
    { student_id: 102, name: "Ravi", department: "ISE", marks: 78 },
    { student_id: 103, name: "Meena", department: "CSE", marks: 92 },
    { student_id: 104, name: "Arjun", department: "ECE", marks: 74 },
    { student_id: 105, name: "Kiran", department: "CSE", marks: 88 }
])

db.Students.updateOne(
    { student_id: 102 },
    { $set: { marks: 90 } }
)

-- Verify Update
 db.Students.find({ student_id: 102 })

 db.Students.deleteOne({ student_id: 104 })

-- Verify Delete
 db.Students.find()

 db.Students.find({ department: "CSE" })

 db.Students.find({ department: "CSE" }).pretty()
```

---

## 11) MongoDB Aggregation Pipeline

### Question

Use the Students collection created earlier and perform aggregation operations using MongoDB’s aggregation pipeline:

* Count the number of students in each department.
* Calculate the average marks per department.

### Code

```mongodb
-- Count Number of Students in Each Department
 db.Students.aggregate([
    {
        $group: {
            _id: "$department",
            totalStudents: { $sum: 1 }
        }
    }
])

-- Average Marks Per Department
 db.Students.aggregate([
    {
        $group: {
            _id: "$department",
            avgMarks: { $avg: "$marks" }
        }
    },
    {
        $project: {
            _id: 0,
            department: "$_id",
            avgMarks: { $round: ["$avgMarks", 2] }
        }
    }
])
```

---

## 14) GRANT and REVOKE Privileges

### Question

Perform the following operations:

* Create two new users in the database with appropriate usernames and passwords.
* Grant SELECT and INSERT privileges on a table to one of the users.
* Log in as that user and perform operations to verify access.
* Revoke the privileges and attempt the same operations.
* Discuss the difference between GRANT and REVOKE operations.

### Code

```sql
CREATE TABLE Students (
    student_id NUMBER PRIMARY KEY,
    name VARCHAR2(50),
    GPA NUMBER(3,2),
    department VARCHAR2(20)
);

INSERT INTO Students VALUES (101, 'Asha', 8.5, 'CSE');
INSERT INTO Students VALUES (102, 'Rahul', 7.8, 'ECE');

COMMIT;

CREATE USER user1 IDENTIFIED BY pass123;
CREATE USER user2 IDENTIFIED BY pass456;

GRANT CREATE SESSION TO user1;
GRANT CREATE SESSION TO user2;

GRANT SELECT, INSERT ON Students TO user1;

SELECT * FROM mca1.Students;

INSERT INTO mca1.Students
VALUES (103, 'Meena', 9.1, 'CSE');

COMMIT;

REVOKE SELECT, INSERT ON Students FROM user1;

SELECT * FROM mca1.Students;
```

### Difference Between GRANT and REVOKE

* GRANT is used to provide privileges or permissions to users.
* REVOKE is used to remove privileges or permissions from users.
");
    return 0;
}
            </pre>
        `);

        res.end();
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 Page Not Found</h1>");
    }

});

// Port
const PORT = process.env.PORT || 4000;

// Start server
server.listen(PORT, "0.0.0.0", () => {
    console.log("Server Running...");
});
