-- create table Students(
-- studentID int auto_increment primary key,
-- firstName varchar(50),
-- lastName varchar(50),
-- institutionName text,
-- studentNumber int,
-- gender varchar(30),
-- userPass text,
-- userRole  varchar(50),
-- userProfile text,
-- emailAdd varchar(45) unique,
-- cellphoneNumber varchar(30),
-- registrationDate date
-- );

-- create table Books(
-- id int auto_increment primary key ,
-- bookName varchar(50),
-- bookDescription text,
-- price decimal(10,2),
-- category text,
-- bookQuantity int,
-- imgURL text,
-- studentID int,
-- constraint student_book foreign key(studentID)
-- references Students(studentID)
-- on delete cascade
-- on update cascade
-- );

-- create table Donors(
-- donorID int auto_increment primary key,
-- donorDescription text,
-- donorDetails text,
-- donorIMG text,
-- studentID int,
-- constraint student_donor foreign key(studentID)
-- references Students(studentID)
-- on delete cascade
-- on update cascade
-- );

-- select * from Students;
-- select * from Books;
-- select * from Donors;








