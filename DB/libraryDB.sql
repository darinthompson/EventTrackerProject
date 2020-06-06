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
  `genre` VARCHAR(100) NOT NULL,
  `year` INT NOT NULL,
  `checked_out` TINYINT NOT NULL,
  `isbn` VARCHAR(100) NOT NULL,
  `img_url` VARCHAR(250) NULL,
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
INSERT INTO `Book` (`id`, `title`, `author`, `genre`, `year`, `checked_out`, `isbn`, `img_url`) VALUES (1, 'Forges of Mars', 'Graham McNeill', 'Sci-Fi', 2018, 0, '9781784964979', NULL);
INSERT INTO `Book` (`id`, `title`, `author`, `genre`, `year`, `checked_out`, `isbn`, `img_url`) VALUES (2, 'The Shadow Rising', 'Robert Jordan', 'Fantasy', 1992, 0, '9780812513738', NULL);
INSERT INTO `Book` (`id`, `title`, `author`, `genre`, `year`, `checked_out`, `isbn`, `img_url`) VALUES (3, 'Let\'s Talk Spanish', 'Tracy Van Bischop', 'Language', 2006, 0, '9781435160590', NULL);
INSERT INTO `Book` (`id`, `title`, `author`, `genre`, `year`, `checked_out`, `isbn`, `img_url`) VALUES (4, 'The Object-Oriented Thought Process', 'Matt Weisfeld', 'Technology/Programming', 2019, 0, '9780135181966', NULL);

COMMIT;

