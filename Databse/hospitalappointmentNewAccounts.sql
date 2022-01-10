-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 10, 2022 at 12:16 PM
-- Server version: 8.0.27
-- PHP Version: 7.4.26

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospitalappointment`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookappointment`
--

DROP TABLE IF EXISTS `bookappointment`;
CREATE TABLE IF NOT EXISTS `bookappointment` (
  `Appointment_ID` int NOT NULL AUTO_INCREMENT,
  `Patient_ID` int NOT NULL,
  `Doctor_ID` int NOT NULL,
  `Category` varchar(50) NOT NULL,
  `Date` date DEFAULT NULL,
  `Time` time DEFAULT NULL,
  `Fees` int NOT NULL,
  `Status` varchar(20) NOT NULL DEFAULT 'Pending',
  PRIMARY KEY (`Appointment_ID`),
  KEY `Patient_ID` (`Patient_ID`),
  KEY `Doctor_ID` (`Doctor_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `bookappointment`
--

INSERT INTO `bookappointment` (`Appointment_ID`, `Patient_ID`, `Doctor_ID`, `Category`, `Date`, `Time`, `Fees`, `Status`) VALUES
(1, 2, 1, 'Heart', '2022-01-10', '16:35:00', 0, 'Pending'),
(2, 2, 3, 'Bone', '2022-01-13', '16:46:00', 0, 'Pending'),
(3, 2, 4, 'Skin', '2022-01-10', '17:45:00', 0, 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `ID_Pharmacy` int NOT NULL AUTO_INCREMENT,
  `Patient_ID` int NOT NULL,
  `NAME` varchar(50) NOT NULL,
  `quantity` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`ID_Pharmacy`),
  KEY `Patient_ID` (`Patient_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`ID_Pharmacy`, `Patient_ID`, `NAME`, `quantity`, `price`) VALUES
(8, 2, 'Crocin', 2, 70),
(9, 1, 'Crocin', 1, 35);

-- --------------------------------------------------------

--
-- Table structure for table `confirmedorders`
--

DROP TABLE IF EXISTS `confirmedorders`;
CREATE TABLE IF NOT EXISTS `confirmedorders` (
  `Order_ID` int NOT NULL AUTO_INCREMENT,
  `Patient_ID` int NOT NULL,
  `NAME` varchar(50) NOT NULL,
  `Quantity` int NOT NULL,
  `Price` int NOT NULL,
  PRIMARY KEY (`Order_ID`),
  KEY `Patient_ID` (`Patient_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
CREATE TABLE IF NOT EXISTS `doctor` (
  `Doctor_ID` int NOT NULL AUTO_INCREMENT,
  `ID` int NOT NULL,
  `Qualification` varchar(50) NOT NULL,
  `Speciality` varchar(50) NOT NULL,
  `Doctor_Fee` float NOT NULL,
  `Meeting_Link` varchar(60) NOT NULL,
  `Status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`Doctor_ID`),
  UNIQUE KEY `ID` (`ID`),
  UNIQUE KEY `Doctor_ID` (`Doctor_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`Doctor_ID`, `ID`, `Qualification`, `Speciality`, `Doctor_Fee`, `Meeting_Link`, `Status`) VALUES
(1, 1, 'Mbbs', 'Heart', 450, 'https://zoom.us/j/2350488474?pwd=UjNuRmQ4Rkp6NFpHVERUTmhlZVJ', 1),
(2, 3, 'mbbs', 'Heart', 500, 'https://us05web.zoom.us/j/3578828586?pwd=Nk1mOWxPa3BhUFFoYzB', 1),
(3, 4, 'mbbs', 'Bone', 600, 'null', 1),
(4, 7, 'Mbbs', 'Skin', 600, 'demo', 1),
(5, 9, 'mbbs', 'Back Pain', 300, 'null', 1),
(6, 6, 'mbbs', 'Leg Pain', 400, 'null', 1);

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
CREATE TABLE IF NOT EXISTS `patient` (
  `Patient_ID` int NOT NULL AUTO_INCREMENT,
  `ID` int NOT NULL,
  PRIMARY KEY (`Patient_ID`),
  UNIQUE KEY `ID` (`ID`),
  UNIQUE KEY `Patient_ID` (`Patient_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`Patient_ID`, `ID`) VALUES
(1, 2),
(2, 5),
(3, 8);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(40) NOT NULL,
  `FullName` varchar(50) NOT NULL,
  `Address` varchar(200) DEFAULT NULL,
  `PhoneNo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `UserType` int NOT NULL,
  `First_login` tinyint NOT NULL DEFAULT '0',
  `SecurityQuestion` varchar(20) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Email` (`Email`),
  UNIQUE KEY `ID` (`ID`),
  UNIQUE KEY `Phone No` (`PhoneNo`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `Email`, `Password`, `FullName`, `Address`, `PhoneNo`, `UserType`, `First_login`, `SecurityQuestion`) VALUES
(1, 'keshav@gmail.com', 'keshav', 'Keshav ', 'pb', '123', 1, 1, 'Nike'),
(2, 'keshav@yahoo.com', 'keshav', 'keshav', NULL, '1234567890', 2, 1, ''),
(3, 'abc@gmail.com', 'abc', 'abc', 'MP', '5462812418', 1, 1, 'Panasonic'),
(4, 'pranav@gmail.com', 'pranav', 'pranav', 'CHD', '678', 1, 1, 'LG'),
(5, 'abc@yahoo.com', 'abc', 'abc', 'hp', '5667', 2, 1, ''),
(6, 'bhavuk@gmail.com', 'bg12', 'Bhavuk Gupta', 'Pb', '1234512345', 1, 1, 'Acer'),
(7, 'Aman@gmail.com', 'Aman', 'Aman', 'chd', '2222', 1, 1, ''),
(8, 'Aman@yahoo.com', '95a6080a7a999364880885c180d92bb5', 'Aman', 'Wb', '444', 2, 1, 'Dell'),
(9, 'Jai@gmail.com', 'Jay123', 'Jai Singh', 'chd', '71232431414', 1, 1, 'Dell');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookappointment`
--
ALTER TABLE `bookappointment`
  ADD CONSTRAINT `bookappointment_ibfk_1` FOREIGN KEY (`Patient_ID`) REFERENCES `patient` (`Patient_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `bookappointment_ibfk_2` FOREIGN KEY (`Doctor_ID`) REFERENCES `doctor` (`Doctor_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `confirmedorders`
--
ALTER TABLE `confirmedorders`
  ADD CONSTRAINT `confirmedorders_ibfk_1` FOREIGN KEY (`Patient_ID`) REFERENCES `patient` (`Patient_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `doctor_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `user` (`ID`);

--
-- Constraints for table `patient`
--
ALTER TABLE `patient`
  ADD CONSTRAINT `patient_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `user` (`ID`);
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
