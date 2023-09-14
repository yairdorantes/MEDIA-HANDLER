-- MariaDB dump 10.19-11.1.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: MediaCloudDB
-- ------------------------------------------------------
-- Server version	11.1.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Files`
--

DROP TABLE IF EXISTS `Files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Files` (
  `id_file` int(11) NOT NULL AUTO_INCREMENT,
  `owner` int(11) DEFAULT 0,
  `file_type` char(50) DEFAULT '',
  `name` varchar(100) NOT NULL,
  `file_size` bigint(20) DEFAULT NULL,
  `upload_time` timestamp NULL DEFAULT current_timestamp(),
  `source` varchar(500) DEFAULT NULL,
  `category` varchar(50) DEFAULT '',
  PRIMARY KEY (`id_file`),
  KEY `owner` (`owner`),
  CONSTRAINT `Files_ibfk_1` FOREIGN KEY (`owner`) REFERENCES `Users` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=192 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Files`
--

LOCK TABLES `Files` WRITE;
/*!40000 ALTER TABLE `Files` DISABLE KEYS */;
INSERT INTO `Files` VALUES
(4,1,'imagetest','example1.jpg',1024,'2023-09-12 01:11:18','ex/ex2/ex3',''),
(5,1,'imagetest','xd.jpg',1024,'2023-09-12 01:25:44','ex/ex2/ex3',''),
(6,1,'imagetest','xd.sql',1024,'2023-09-12 01:27:22','ex/ex2/ex3',''),
(62,1,'imagetest','xd.jpg',1024,'2023-09-12 01:38:50','ex/ex2/ex3',''),
(133,1,NULL,'xd.sql',NULL,'2023-09-12 02:08:08','w/w/w/w/w',''),
(134,1,'text/plain','txt.txt',63,'2023-09-12 02:08:49','w/w/w/w/w',''),
(135,1,'application/pdf','cv Yair Dorantes.pdf',93746,'2023-09-12 02:09:22','w/w/w/w/w',''),
(136,1,'video/mp4','vid.mp4',17833751,'2023-09-12 02:11:16','w/w/w/w/w',''),
(137,1,'image/jpeg','xd.jpg',455941,'2023-09-12 02:16:59','w/w/w/w/w',''),
(138,1,'image/jpeg','xd.jpg',455941,'2023-09-12 02:18:22','192.168.1.2/files/xd.jpg',''),
(139,1,'image/jpeg','xd.jpg',455941,'2023-09-12 02:18:59','http://192.168.1.2/files/xd.jpg',''),
(140,1,'image/jpeg','xd.jpg',455941,'2023-09-12 02:21:47','http://192.168.1.2/files/xd.jpg',''),
(141,1,'image/jpeg','xd.jpg',455941,'2023-09-12 02:23:24','http://192.168.1.2/files/xd.jpg',''),
(142,1,'application/pdf','cv Yair Dorantes.pdf',93746,'2023-09-12 02:25:45','http://192.168.1.2/files/cv Yair Dorantes.pdf',''),
(143,1,'image/jpeg','xd.jpg',455941,'2023-09-12 02:26:23','http://192.168.1.2/files/xd.jpg',''),
(144,1,'image/jpeg','xd.jpg',455941,'2023-09-12 02:26:24','http://192.168.1.2/files/xd.jpg',''),
(145,1,'image/jpeg','xd.jpg',455941,'2023-09-12 02:26:24','http://192.168.1.2/files/xd.jpg',''),
(146,1,'image/jpeg','xd.jpg',455941,'2023-09-12 02:26:24','http://192.168.1.2/files/xd.jpg',''),
(147,1,'image/jpeg','xd.jpg',455941,'2023-09-12 02:26:24','http://192.168.1.2/files/xd.jpg',''),
(148,1,'image/jpeg','ajaj.jpeg',81414,'2023-09-12 02:26:29','http://192.168.1.2/files/ajaj.jpeg',''),
(149,1,'image/jpeg','ajaj.jpeg',81414,'2023-09-12 02:26:30','http://192.168.1.2/files/ajaj.jpeg',''),
(150,1,'image/jpeg','ajaj.jpeg',81414,'2023-09-12 02:26:30','http://192.168.1.2/files/ajaj.jpeg',''),
(151,1,'image/jpeg','ajaj.jpeg',81414,'2023-09-12 02:26:30','http://192.168.1.2/files/ajaj.jpeg',''),
(152,1,'image/jpeg','ajaj.jpeg',81414,'2023-09-12 02:26:30','http://192.168.1.2/files/ajaj.jpeg',''),
(153,1,'image/jpeg','ajaj.jpeg',81414,'2023-09-12 02:26:31','http://192.168.1.2/files/ajaj.jpeg',''),
(154,1,'application/pdf','SKM_C30823090517210.pdf',485666,'2023-09-12 02:26:42','http://192.168.1.2/files/SKM_C30823090517210.pdf',''),
(155,1,'text/csv','addresses.csv',328,'2023-09-12 13:54:43','http://192.168.1.2/files/addresses.csv',''),
(156,1,'text/csv','addresses.csv',328,'2023-09-12 14:03:10','http://192.168.1.2/files/addresses.csv',''),
(157,1,'text/csv','addresses.csv',328,'2023-09-12 14:05:58','http://192.168.1.2/files/addresses.csv',''),
(158,1,'application/x-desktop','brave-hnpfjngllnobngcgfapefoaidbinmjnm-Default.desktop',302,'2023-09-12 14:05:58','http://192.168.1.2/files/brave-hnpfjngllnobngcgfapefoaidbinmjnm-Default.desktop',''),
(159,1,'application/x-desktop','brave-jgeocpdicgmkeemopbanhokmhcgcflmi-Default.desktop',1379,'2023-09-12 14:05:58','http://192.168.1.2/files/brave-jgeocpdicgmkeemopbanhokmhcgcflmi-Default.desktop',''),
(160,1,'text/csv','addresses.csv',328,'2023-09-12 14:06:15','http://192.168.1.2/files/addresses.csv',''),
(161,1,'text/plain','txt.txt',63,'2023-09-12 14:06:15','http://192.168.1.2/files/txt.txt',''),
(162,1,'application/sql','xd.sql',165,'2023-09-12 14:06:15','http://192.168.1.2/files/xd.sql',''),
(163,1,'video/mp4','vid.mp4',17833751,'2023-09-12 14:06:16','http://192.168.1.2/files/vid.mp4',''),
(164,1,'text/csv','addresses.csv',328,'2023-09-12 14:11:30','http://192.168.1.2/files/addresses.csv',''),
(165,1,'text/csv','addresses.csv',328,'2023-09-12 14:23:25','http://192.168.1.2/files/addresses.csv',''),
(166,1,'image/jpeg','xd.jpg',455941,'2023-09-12 14:23:25','http://192.168.1.2/files/xd.jpg',''),
(167,1,'application/sql','xd.sql',165,'2023-09-12 14:23:25','http://192.168.1.2/files/xd.sql',''),
(168,1,'application/x-desktop','brave-mjoklplbddabcmpepnokjaffbmgbkkgg-Default.desktop',296,'2023-09-12 14:24:21','http://192.168.1.2/files/brave-mjoklplbddabcmpepnokjaffbmgbkkgg-Default.desktop',''),
(169,1,'text/csv','addresses.csv',328,'2023-09-12 14:29:53','http://192.168.1.2/files/addresses.csv',''),
(170,1,'application/x-desktop','brave-hnpfjngllnobngcgfapefoaidbinmjnm-Default.desktop',302,'2023-09-12 14:29:53','http://192.168.1.2/files/brave-hnpfjngllnobngcgfapefoaidbinmjnm-Default.desktop',''),
(171,1,'application/x-desktop','brave-jgeocpdicgmkeemopbanhokmhcgcflmi-Default.desktop',1379,'2023-09-12 14:29:53','http://192.168.1.2/files/brave-jgeocpdicgmkeemopbanhokmhcgcflmi-Default.desktop',''),
(172,1,'text/csv','addresses.csv',328,'2023-09-12 14:58:13','http://192.168.1.2/files/addresses.csv',''),
(173,1,'application/x-desktop','brave-lgnggepjiihbfdbedefdhcffnmhcahbm-Default.desktop',296,'2023-09-12 14:58:13','http://192.168.1.2/files/brave-lgnggepjiihbfdbedefdhcffnmhcahbm-Default.desktop',''),
(174,1,'application/x-desktop','brave-jgeocpdicgmkeemopbanhokmhcgcflmi-Default.desktop',1379,'2023-09-12 14:58:13','http://192.168.1.2/files/brave-jgeocpdicgmkeemopbanhokmhcgcflmi-Default.desktop',''),
(175,1,'text/csv','addresses.csv',328,'2023-09-12 15:04:10','http://192.168.1.2/files/addresses.csv',''),
(176,1,'image/jpeg','ajaj.jpeg',81414,'2023-09-12 15:04:10','http://192.168.1.2/files/ajaj.jpeg',''),
(177,1,'application/x-desktop','brave-agimnkijcaahngcdmfeangaknmldooml-Default.desktop',822,'2023-09-12 15:04:10','http://192.168.1.2/files/brave-agimnkijcaahngcdmfeangaknmldooml-Default.desktop',''),
(178,1,'image/jpeg','xd.jpg',455941,'2023-09-12 15:05:58','http://192.168.1.2/files/xd.jpg',''),
(179,1,'video/mp4','vid.mp4',17833751,'2023-09-12 15:05:59','http://192.168.1.2/files/vid.mp4',''),
(180,1,'application/sql','xd.sql',165,'2023-09-12 15:06:23','http://192.168.1.2/files/xd.sql',''),
(181,1,'video/mp4','vid.mp4',17833751,'2023-09-12 15:06:24','http://192.168.1.2/files/vid.mp4',''),
(182,1,'text/csv','addresses.csv',328,'2023-09-12 15:07:21','http://192.168.1.2/files/addresses.csv',''),
(183,1,'application/x-desktop','brave-jgeocpdicgmkeemopbanhokmhcgcflmi-Default.desktop',1379,'2023-09-12 15:07:21','http://192.168.1.2/files/brave-jgeocpdicgmkeemopbanhokmhcgcflmi-Default.desktop',''),
(184,1,'application/x-desktop','brave-lgnggepjiihbfdbedefdhcffnmhcahbm-Default.desktop',296,'2023-09-12 15:07:21','http://192.168.1.2/files/brave-lgnggepjiihbfdbedefdhcffnmhcahbm-Default.desktop',''),
(185,1,'video/mp4','vid.mp4',17833751,'2023-09-12 15:11:58','http://192.168.1.2/files/vid.mp4',''),
(186,1,'image/jpeg','xd.jpg',455941,'2023-09-12 15:11:58','http://192.168.1.2/files/xd.jpg',''),
(187,1,'application/pdf','42316274281.pdf',22274,'2023-09-12 15:12:10','http://192.168.1.2/files/42316274281.pdf',''),
(188,1,'application/pdf','42316274281.pdf',22274,'2023-09-12 15:15:50','http://192.168.1.2/files/42316274281.pdf',''),
(189,2,'jpg','img1',12334,'2023-09-12 16:28:28','a/a/a/',''),
(190,1,'image/jpeg','ajaj.jpeg',81414,'2023-09-13 00:14:51','http://192.168.1.2/files/ajaj.jpeg',''),
(191,1,'image/jpeg','20230910_143056.jpg',67701,'2023-09-13 00:20:21','http://192.168.1.2/files/20230910_143056.jpg','');
/*!40000 ALTER TABLE `Files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) DEFAULT '',
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES
(1,'yair','123'),
(2,'master','122223');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-12 18:26:53
