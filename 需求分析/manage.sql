-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-07-23 19:00:47
-- 服务器版本： 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `manage`
--

-- --------------------------------------------------------

--
-- 表的结构 `act`
--

CREATE TABLE `act` (
  `ano` int(6) NOT NULL,
  `type` varchar(10) NOT NULL,
  `startime` datetime NOT NULL,
  `endtime` datetime NOT NULL,
  `area` varchar(20) NOT NULL,
  `state` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `act`
--

INSERT INTO `act` (`ano`, `type`, `startime`, `endtime`, `area`, `state`) VALUES
(2, '日常', '2018-07-15 08:00:00', '2018-07-15 10:00:00', 'F101', NULL),
(3, '晚点名', '2018-07-16 08:00:00', '2018-07-16 10:00:00', 'F102', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `lotstudent`
--

CREATE TABLE `lotstudent` (
  `sno` char(12) NOT NULL,
  `sname` varchar(10) NOT NULL,
  `keyid` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `uno` varchar(20) NOT NULL,
  `name` varchar(10) NOT NULL,
  `psw` varchar(15) NOT NULL,
  `tel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `act`
--
ALTER TABLE `act`
  ADD PRIMARY KEY (`ano`);

--
-- Indexes for table `lotstudent`
--
ALTER TABLE `lotstudent`
  ADD PRIMARY KEY (`sno`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uno`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `act`
--
ALTER TABLE `act`
  MODIFY `ano` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
