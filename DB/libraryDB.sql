-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema librarydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `librarydb` ;

-- -----------------------------------------------------
-- Schema librarydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `librarydb` DEFAULT CHARACTER SET utf8 ;
USE `librarydb` ;

-- -----------------------------------------------------
-- Table `Book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Book` ;

CREATE TABLE IF NOT EXISTS `Book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `author` VARCHAR(100) NOT NULL,
  `genre` VARCHAR(100) NULL,
  `year` INT NULL,
  `checked_out` TINYINT NULL,
  `isbn` VARCHAR(100) NULL,
  `img_url` VARCHAR(250) NULL,
  `publisher` VARCHAR(250) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS user@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'user'@'localhost' IDENTIFIED BY '1qaz!QAZ';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Book`
-- -----------------------------------------------------
START TRANSACTION;
USE `librarydb`;
INSERT INTO `Book` (`id`, `title`, `author`, `genre`, `year`, `checked_out`, `isbn`, `img_url`, `publisher`) VALUES (1, 'Forges of Mars', 'Graham McNeill', 'Sci-Fi', 2018, 0, '978-1-78496-497-9', NULL, 'Black Library');
INSERT INTO `Book` (`id`, `title`, `author`, `genre`, `year`, `checked_out`, `isbn`, `img_url`, `publisher`) VALUES (2, 'The Shadow Rising', 'Robert Jordan', 'Fantasy', 1992, 0, '978-0-8125-1373-8', NULL, 'Tor');
INSERT INTO `Book` (`id`, `title`, `author`, `genre`, `year`, `checked_out`, `isbn`, `img_url`, `publisher`) VALUES (3, 'Let\'s Talk Spanish', 'Tracy Van Bischop', 'Language', 2006, 0, '978-1-4351-6059-0', NULL, 'Fall River Press');
INSERT INTO `Book` (`id`, `title`, `author`, `genre`, `year`, `checked_out`, `isbn`, `img_url`, `publisher`) VALUES (4, 'The Object-Oriented Thought Process', 'Matt Weisfeld', 'Technology/Programming', 2019, 0, '978-0-13-518196-6', NULL, 'Addison-Wesley');
INSERT INTO `Book` (`id`, `title`, `author`, `genre`, `year`, `checked_out`, `isbn`, `img_url`, `publisher`) VALUES (5, 'The Message: The Bible in Contemporary Language (duoton leatherlike)', 'Eugene H. Peterson', 'Religion', 2016, 0, '978-1-63146-578-9', NULL, 'NavPress');
INSERT INTO `Book` (`id`, `title`, `author`, `genre`, `year`, `checked_out`, `isbn`, `img_url`, `publisher`) VALUES (6, 'The Holy Bible ESV (navy trutone)', 'Various', 'Religion', 2016, 0, '978-1-4335-6683-7', NULL, 'Crossway');

COMMIT;

