-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: quizmaster
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `cat_id` int NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(45) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Easy'),(2,'Intermediate'),(3,'Difficult');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exams`
--

DROP TABLE IF EXISTS `exams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exams` (
  `exam_id` int NOT NULL AUTO_INCREMENT,
  `attempted_datetime` datetime NOT NULL,
  `marks` int DEFAULT NULL,
  `sid` int DEFAULT NULL,
  `subject_id` int DEFAULT NULL,
  `cat_id` int DEFAULT NULL,
  PRIMARY KEY (`exam_id`),
  KEY `sid_fk_idx` (`sid`),
  KEY `subject_id_fk_idx` (`subject_id`),
  KEY `cat_id_fk_idx` (`cat_id`),
  CONSTRAINT `cat_id` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`cat_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sid` FOREIGN KEY (`sid`) REFERENCES `students` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `subject_id` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exams`
--

LOCK TABLES `exams` WRITE;
/*!40000 ALTER TABLE `exams` DISABLE KEYS */;
INSERT INTO `exams` VALUES (23,'2024-02-23 12:31:19',2,1,1,2),(24,'2024-02-23 12:34:17',0,1,1,1),(25,'2024-02-23 12:35:15',2,1,1,1),(26,'2024-02-24 12:07:49',0,1,2,3),(27,'2024-02-24 12:08:03',5,1,1,3),(28,'2024-02-24 13:43:24',3,1,1,2),(29,'2024-02-24 15:57:42',3,1,1,3);
/*!40000 ALTER TABLE `exams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experts`
--

DROP TABLE IF EXISTS `experts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experts` (
  `expert_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `qualification` varchar(45) NOT NULL,
  `email` varchar(80) DEFAULT NULL,
  `contact` varchar(45) NOT NULL,
  `uid` int DEFAULT NULL,
  `subject_id` int DEFAULT NULL,
  PRIMARY KEY (`expert_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `user_id_idx` (`uid`),
  KEY `subject_id_idx` (`subject_id`),
  CONSTRAINT `subject_idfk` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `uid_fk` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experts`
--

LOCK TABLES `experts` WRITE;
/*!40000 ALTER TABLE `experts` DISABLE KEYS */;
INSERT INTO `experts` VALUES (1,'Rishita','Rai','MSC','rishi@gmail.com','2376876986',4,1),(3,'Adesh','Thorat','Mtech','adeshthorat@gmail.com','8767658787',7,3),(4,'Shubham','Jadhav','MTech','shubham@gmail.com','8530702026',15,2),(5,'Bakul','Joshi','MTech','bakul@gmail.com','7865436728',17,4),(6,'Mahesh','Yadav','Btech','mahesh@gmail.com','6758452738',19,3);
/*!40000 ALTER TABLE `experts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `mode` varchar(45) DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `expirydate` date DEFAULT NULL,
  `sid` int DEFAULT NULL,
  PRIMARY KEY (`pid`),
  KEY `sid_idx` (`sid`),
  CONSTRAINT `sid_fk` FOREIGN KEY (`sid`) REFERENCES `students` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `qid` int NOT NULL AUTO_INCREMENT,
  `question_text` varchar(255) DEFAULT NULL,
  `option1` varchar(100) DEFAULT NULL,
  `option2` varchar(100) DEFAULT NULL,
  `option3` varchar(100) DEFAULT NULL,
  `option4` varchar(100) DEFAULT NULL,
  `answer` int DEFAULT NULL,
  `explanation` varchar(255) DEFAULT NULL,
  `subject_id` int DEFAULT NULL,
  `cat_id` int DEFAULT NULL,
  PRIMARY KEY (`qid`),
  KEY `subject_id_idx` (`subject_id`),
  KEY `cat_id_idx` (`cat_id`),
  CONSTRAINT `cat_id_fk` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`cat_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `subject_id_fk` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'if a=10 What is result of System.out.print(++a);\"','10','11','CTE','9',2,'++a is a pre-increment operator, which means it increments the value of a by 1 before it is used in the expression so a=11',1,1),(3,'Who invented Java Programming?','Guido van Rossum','James Gosling','Dennis Ritchie','Bjarne Stroustrup',2,'Java programming was developed by James Gosling at Sun Microsystems in 1995. James Gosling is well known as the father of Java.',1,1),(4,'Which type of casting is lossy in Java?','Widening typecasting','Narrowing typecasting','Manual typecasting','All of these',2,'In Narrowing typecasting data loss is there.',1,2),(5,'What is the extension of java code files?',' .js',' .txt','.class',' .java',4,'Java files have .java extension.',1,1),(6,'What is not the use of “this” keyword in Java?','Referring to the instance variable when a local variable has the same name','Passing itself to the method of the same class',' Passing itself to another method','Calling another constructor in constructor chaining',2,'“this” is an important keyword in java. It helps to distinguish between local variable and variables passed in the method as parameters.',1,2),(7,'Which of these cannot be used for a variable name in Java?','identifier & keyword','identifier','keyword','none of the mentioned',3,'Keywords are specially reserved words that can not be used for naming a user-defined variable, for example: class, int, for, etc.',1,1),(8,'Which of these are selection statements in Java?','break','continue','for()','if()',4,'Continue and break are jump statements, and for is a looping statement.',1,2),(9,'Which of the following is a superclass of every class in Java?','ArrayList','Abstract class','Object class','String',3,'Object class is superclass of every class in Java.',1,1),(10,'Which of these packages contains the exception Stack Overflow in Java?','java.io','java.system','java.lang',' java.util',3,'None',1,2),(11,'Which of these statements is incorrect about Thread?',' start() method is used to begin execution of the thread','run() method is used to begin execution of a thread before start() method in special cases',' A thread can be formed by implementing Runnable interface only','A thread can be formed by a class that extends Thread class',2,'run() method is used to define the code that constitutes the new thread, it contains the code to be executed.',1,3),(12,'Which of these keywords are used for the block to be examined for exceptions?','check','throw','catch','try',4,'try is used for the block that needs to checked for exception.',1,2),(14,'Which of the following is true about servlets?','Servlets can use the full functionality of the Java class libraries','Servlets execute within the address space of web server, platform independent','Servlets execute within the address space of web server','Servlets are platform-independent because they are written in java',2,'Servlets execute within the address space of a web server. Since it is written in java it is platform independent. The full functionality is available through libraries.',1,3),(17,' Which of the following should be true of the object thrown by a thrown statement?','Should be assignable to String type','Should be assignable to Exception type','Should be assignable to Throwable type','Should be assignable to Error type',3,'The throw statement should be assignable to the throwable type. Throwable is the super class of all exceptions.',1,3),(18,'What will happen if we provide concrete implementation of method in interface?','The concrete class implementing that method need not provide implementation of that method',' Runtime exception is thrown','Compilation failure','Method not found exception is thrown',3,'The methods of interfaces are always abstract. They provide only method definition.',1,3),(19,'What happens when a constructor is defined for an interface?','Compilation failure','Runtime Exception','The interface compiles successfully','The implementing class will throw exception',1,'Constructor is not provided by interface as objects cannot be instantiated.',1,3),(20,'To see the list of options provided by MYSQL which of the following command is used?','HELP','–HELP','-- HELP','ELP-',3,'To see the list of options provided by MYSQL we use -- HELP.',2,1),(21,'What is DOM','Document Object Model','xtv','sb','js',1,'none',1,3);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` int NOT NULL,
  `role_name` varchar(45) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'student'),(3,'subscribedStudent'),(4,'expert');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentanswers`
--

DROP TABLE IF EXISTS `studentanswers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentanswers` (
  `answer_id` int NOT NULL AUTO_INCREMENT,
  `student_answer` int DEFAULT NULL,
  `exam_id` int DEFAULT NULL,
  `qid` int DEFAULT NULL,
  PRIMARY KEY (`answer_id`),
  KEY `exam_id_idx` (`exam_id`),
  KEY `qid_idx` (`qid`),
  CONSTRAINT `exam_id` FOREIGN KEY (`exam_id`) REFERENCES `exams` (`exam_id`),
  CONSTRAINT `qid` FOREIGN KEY (`qid`) REFERENCES `questions` (`qid`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentanswers`
--

LOCK TABLES `studentanswers` WRITE;
/*!40000 ALTER TABLE `studentanswers` DISABLE KEYS */;
INSERT INTO `studentanswers` VALUES (1,2,23,6),(2,2,23,4),(3,1,24,5),(4,4,24,3),(5,1,24,1),(6,3,25,5),(7,2,25,3),(8,2,25,1),(9,3,27,17),(10,2,27,14),(11,2,27,11),(12,3,27,18),(13,1,27,19),(14,4,28,8),(15,2,28,6),(16,2,28,4),(17,4,28,10),(18,2,28,12),(19,1,29,17),(20,2,29,14),(21,1,29,21),(22,2,29,11),(23,1,29,18),(24,2,29,19);
/*!40000 ALTER TABLE `studentanswers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `sid` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `bdate` date NOT NULL,
  `education` varchar(45) NOT NULL,
  `contact` varchar(45) NOT NULL,
  `email` varchar(75) NOT NULL,
  `uid` int DEFAULT NULL,
  `subscription` int NOT NULL,
  PRIMARY KEY (`sid`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `user_id_idx` (`uid`),
  CONSTRAINT `FKap5kf80of7yo19mvcvf98q0yu` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'Pravin','Wagh','2003-06-03','Btech','872387164','pravinwagh@gmail.com',14,0),(2,'Shraddha','Kapoor','1999-03-03','MTech','8734528479','shradhak@gmail.com',16,1);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `subject_id` int NOT NULL AUTO_INCREMENT,
  `subject_name` varchar(45) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`subject_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'Java','Questions on core java'),(2,'Mysql','Questions related database'),(3,'Arithmetic aptitude','Questions to check  numeric ability'),(4,'Web Programming Technology','Web programming refers to the writing, markup and coding involved in Web development, which includes Web content, Web client and server scripting and network security. ');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `uname` varchar(45) NOT NULL,
  `pwd` varchar(55) NOT NULL,
  `status` bit(1) DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `uname_UNIQUE` (`uname`),
  KEY `role_id_idx` (`role_id`),
  CONSTRAINT `role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'Rishita@123','Rishita@123',_binary '',4),(5,'Admin','Admin@123',_binary '',1),(7,'Adesh@123','adesh@123',_binary '\0',4),(14,'Pravin@123','Pravin@123',_binary '',2),(15,'Shubhs@1232','2026',_binary '',4),(16,'Shraddha@123','Shraddha@123',_binary '',2),(17,'Bakul@gmail.com','Bakul@gmail.com',_binary '',4),(19,'Ma','1234',_binary '',4);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-24 16:33:22
