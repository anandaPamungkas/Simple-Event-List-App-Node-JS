-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 08, 2020 at 09:47 PM
-- Server version: 10.3.22-MariaDB-1
-- PHP Version: 7.3.15-3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `e_events`
--

CREATE TABLE `e_events` (
  `e_id` int(11) NOT NULL,
  `e_name` varchar(20) DEFAULT NULL,
  `e_start_date` datetime DEFAULT NULL,
  `e_end_date` datetime DEFAULT NULL,
  `e_date_added` datetime DEFAULT NULL,
  `e_date_modified` datetime DEFAULT NULL,
  `e_desc` text DEFAULT NULL,
  `e_location` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `e_events`
--

INSERT INTO `e_events` (`e_id`, `e_name`, `e_start_date`, `e_end_date`, `e_date_added`, `e_date_modified`, `e_desc`, `e_location`) VALUES
(19, 'event 1', '2020-05-03 00:00:00', '2020-05-24 00:00:00', NULL, NULL, 'description 1', 'location 1'),
(20, 'event  2', '2020-05-04 00:00:00', '2020-05-25 00:00:00', NULL, NULL, 'description 2', 'location 2'),
(22, 'event 3', '2020-05-05 00:00:00', '2020-05-26 00:00:00', NULL, NULL, 'description 3', 'location 3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `e_events`
--
ALTER TABLE `e_events`
  ADD PRIMARY KEY (`e_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `e_events`
--
ALTER TABLE `e_events`
  MODIFY `e_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
