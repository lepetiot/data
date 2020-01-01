-- Adminer 4.7.4 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `tbtest`;
CREATE TABLE `tbtest` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `nama` varchar(254) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `tbtest` (`id`, `nama`) VALUES
(1,	'satu'),
(2,	'dua');

-- 2020-01-01 10:16:15
