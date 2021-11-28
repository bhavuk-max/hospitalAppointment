-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 23, 2021 at 07:58 AM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `bookappointment`
--

INSERT INTO `bookappointment` (`Appointment_ID`, `Patient_ID`, `Doctor_ID`, `Category`, `Date`, `Time`, `Fees`, `Status`) VALUES
(1, 2, 1, 'Heart', '2021-10-25', '18:48:00', 0, 'Canceled'),
(2, 2, 1, 'Heart', '2021-10-30', '11:35:00', 0, 'Completed'),
(3, 2, 2, 'Bone', '2021-10-27', '23:35:00', 0, 'Canceled'),
(4, 2, 1, 'Heart', '2021-11-11', '11:39:00', 0, 'Completed'),
(5, 2, 1, 'Heart', '2021-10-26', '12:50:00', 0, 'Completed'),
(6, 2, 2, 'Bone', '2021-11-20', '12:00:00', 0, 'Pending'),
(7, 2, 1, 'Heart', '2021-11-20', '13:11:00', 0, 'Canceled'),
(8, 2, 1, 'Heart', '2021-11-27', '13:20:00', 400, 'Pending'),
(9, 2, 1, 'Heart', '2021-11-21', '21:17:00', 400, 'Pending'),
(10, 2, 1, 'Heart', '2021-11-20', '21:22:00', 400, 'Pending'),
(11, 2, 1, 'Heart', '2021-11-24', '12:09:00', 400, 'Pending');

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`ID_Pharmacy`, `Patient_ID`, `NAME`, `quantity`, `price`) VALUES
(1, 2, 'Crocin', 2, 70),
(2, 2, 'Lisnopril', 1, 35);

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
CREATE TABLE IF NOT EXISTS `chat` (
  `Message` varchar(500) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`Message`) VALUES
(''),
('hello this is a test message'),
(''),
('test 2');

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `confirmedorders`
--

INSERT INTO `confirmedorders` (`Order_ID`, `Patient_ID`, `NAME`, `Quantity`, `Price`) VALUES
(1, 2, 'Crocin', 2, 70),
(2, 2, 'Lisnopril', 1, 35);

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
CREATE TABLE IF NOT EXISTS `doctor` (
  `Doctor_ID` int NOT NULL AUTO_INCREMENT,
  `ID` int NOT NULL,
  `Doctor_Fee` float NOT NULL,
  `Meeting_Link` varchar(60) NOT NULL,
  PRIMARY KEY (`Doctor_ID`),
  UNIQUE KEY `ID` (`ID`),
  UNIQUE KEY `Doctor_ID` (`Doctor_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`Doctor_ID`, `ID`, `Doctor_Fee`, `Meeting_Link`) VALUES
(1, 1, 400, 'https://zoom.us/j/2350488474?pwd=UjNuRmQ4Rkp6NFpHVERUTmhlZVJ'),
(2, 3, 500, 'https://us05web.zoom.us/j/3578828586?pwd=Nk1mOWxPa3BhUFFoYzB'),
(3, 4, 600, '');

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`Patient_ID`, `ID`) VALUES
(1, 2),
(2, 5);

-- --------------------------------------------------------

--
-- Table structure for table `resetpassword`
--

DROP TABLE IF EXISTS `resetpassword`;
CREATE TABLE IF NOT EXISTS `resetpassword` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `Email` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `resetpassword`
--

INSERT INTO `resetpassword` (`ID`, `code`, `Email`) VALUES
(1, '160fef5a7cd4b2', 'hospitalappointment01@gmail.com'),
(2, '160fefb2118a6d', 'keshavsehgal27@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `sample`
--

DROP TABLE IF EXISTS `sample`;
CREATE TABLE IF NOT EXISTS `sample` (
  `date` date NOT NULL,
  `ID` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sample`
--

INSERT INTO `sample` (`date`, `ID`) VALUES
('0000-00-00', 1),
('2021-09-08', 2);

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

  `Speciality` varchar(150) DEFAULT NULL,

  `UserType` int NOT NULL,
  `First_login` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Email` (`Email`),
  UNIQUE KEY `ID` (`ID`),
  UNIQUE KEY `Phone No` (`PhoneNo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--


INSERT INTO `user` (`ID`, `Email`, `Password`, `FullName`, `Address`, `PhoneNo`, `Speciality`, `UserType`, `First_login`) VALUES


(1, 'keshav@gmail.com', 'keshav', 'keshav', 'hr', '333', 'Heart', 1, 1),
(2, 'keshav@yahoo.com', 'keshav', 'keshav', NULL, '1234567890', NULL, 2, 1),
(3, 'abc@gmail.com', 'abc', 'abc', NULL, NULL, 'Bone', 1, 1),
(4, 'pranav@gmail.com', 'pranav', 'pranav', 'CHD', '678', 'Skin', 1, 1),
(5, 'abc@yahoo.com', 'abc', 'abc', 'hp', '888', ' ', 2, 1);

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
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`Patient_ID`) REFERENCES `patient` (`Patient_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `confirmedorders`
--
ALTER TABLE `confirmedorders`
  ADD CONSTRAINT `confirmedorders_ibfk_1` FOREIGN KEY (`Patient_ID`) REFERENCES `cart` (`Patient_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

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
