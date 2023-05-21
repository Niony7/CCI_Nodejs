-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 28 mars 2022 à 16:40
-- Version du serveur :  5.7.19
-- Version de PHP :  7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `gestiondesapprenti`
--

-- --------------------------------------------------------

--
-- Structure de la table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES
(1, 'test', 'test', 'test@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `apprenti`
--

DROP TABLE IF EXISTS `apprenti`;
CREATE TABLE IF NOT EXISTS `apprenti` (
  `matApp` varchar(50) NOT NULL,
  `nomApp` varchar(50) NOT NULL,
  `prenomApp` varchar(50) NOT NULL,
  `dateNaiss` date NOT NULL,
  `baccSerie` varchar(1) NOT NULL,
  `anneBacc` varchar(4) NOT NULL,
  `numPhon` int(9) NOT NULL,
  `Email` varchar(100) NOT NULL,
  PRIMARY KEY (`matApp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `apprenti`
--

INSERT INTO `apprenti` (`matApp`, `nomApp`, `prenomApp`, `dateNaiss`, `baccSerie`, `anneBacc`, `numPhon`, `Email`) VALUES
('IM-001-19', 'Alexander', 'DRA', '2000-08-23', 'D', '2017', 345667899, 'Alex@yaki.com'),
('IM-003-19', 'RATOKO', 'Halidi', '2021-08-16', 'D', '2013', 341234565, 'halidi@gmail.com'),
('IM-004-19', 'RAJAO', 'NANTA', '2021-08-06', 'C', '2017', 323344455, 'nanta@gmail.com'),
('IM-005-19', 'kiady', 'RANDRIA', '2021-08-06', 'C', '2012', 341663044, 'kiady@gmail.com'),
('IM-006-20', 'Ralahiniony ', 'herve', '2021-08-05', 'A', '2017', 341632333, 'herve@gmail.com'),
('IM-007-20', 'MONS', 'Yva', '2021-08-05', 'C', '2014', 321234567, 'yva@gmai.com');

-- --------------------------------------------------------

--
-- Structure de la table `formation`
--

DROP TABLE IF EXISTS `formation`;
CREATE TABLE IF NOT EXISTS `formation` (
  `idForm` int(11) NOT NULL AUTO_INCREMENT,
  `matApp` varchar(50) NOT NULL,
  `idStage` int(11) NOT NULL,
  `codeMet` varchar(50) NOT NULL,
  `dateFormt` date NOT NULL,
  `resultForm` varchar(10) NOT NULL,
  PRIMARY KEY (`idForm`),
  KEY `nomApp` (`matApp`),
  KEY `idStage` (`idStage`),
  KEY `codeMet` (`codeMet`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `formation`
--

INSERT INTO `formation` (`idForm`, `matApp`, `idStage`, `codeMet`, `dateFormt`, `resultForm`) VALUES
(10, 'IM-001-19', 11, 'MT-003', '2021-08-17', 'REUSSI'),
(13, 'IM-003-19', 13, 'MT-002', '2021-08-10', 'REUSSI'),
(16, 'IM-005-19', 12, 'MT-002', '2021-08-26', 'ECHOUE'),
(17, 'IM-006-20', 16, 'MT-001', '2021-08-09', 'REUSSI');

-- --------------------------------------------------------

--
-- Structure de la table `matiere`
--

DROP TABLE IF EXISTS `matiere`;
CREATE TABLE IF NOT EXISTS `matiere` (
  `codeMat` varchar(50) NOT NULL,
  `codeMet` varchar(50) NOT NULL,
  `matApp` varchar(50) NOT NULL,
  `NomMat` varchar(100) NOT NULL,
  `NoteMat` double NOT NULL,
  `CoefMat` double NOT NULL,
  PRIMARY KEY (`codeMat`),
  KEY `codeMet` (`codeMet`),
  KEY `matApp` (`matApp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `matiere`
--

INSERT INTO `matiere` (`codeMat`, `codeMet`, `matApp`, `NomMat`, `NoteMat`, `CoefMat`) VALUES
('MTR-001', 'MT-003', 'IM-007-20', 'francais', 12, 3),
('MTR-002', 'MT-002', 'IM-005-19', 'Angalais', 5, 2),
('MTR-003', 'MT-002', 'IM-001-19', 'Science', 13, 3),
('MTR-004', 'MT-003', 'IM-001-19', 'Francais', 17, 2),
('MTR-005', 'MT-002', 'IM-005-19', 'Physique', 8, 3),
('MTR-006', 'MT-003', 'IM-004-19', 'Informatque Bureautique', 13, 3),
('MTR-007', 'MT-003', 'IM-006-20', 'Allemand', 12.5, 2),
('MTR-008', 'MT-002', 'IM-003-19', 'Communication administrative', 11, 3),
('MTR-009', 'MT-002', 'IM-003-19', 'Secretariat general', 15, 2),
('MTR-010', 'MT-003', 'IM-006-20', 'INFO', 14, 2),
('MTR-011', 'MT-003', 'IM-006-20', 'Anglais', 10, 3),
('MTR-012', 'MT-003', 'IM-006-20', 'francais', 8, 2);

-- --------------------------------------------------------

--
-- Structure de la table `metier`
--

DROP TABLE IF EXISTS `metier`;
CREATE TABLE IF NOT EXISTS `metier` (
  `codeMet` varchar(50) NOT NULL,
  `designMet` varchar(50) NOT NULL,
  PRIMARY KEY (`codeMet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `metier`
--

INSERT INTO `metier` (`codeMet`, `designMet`) VALUES
('MT-001', 'Comptable'),
('MT-002', 'Secretariat'),
('MT-003', 'Hotellerie et Tourisme');

-- --------------------------------------------------------

--
-- Structure de la table `stage`
--

DROP TABLE IF EXISTS `stage`;
CREATE TABLE IF NOT EXISTS `stage` (
  `idStage` int(11) NOT NULL AUTO_INCREMENT,
  `matApp` varchar(50) NOT NULL,
  `codeMet` varchar(50) NOT NULL,
  `nomEntreprise` varchar(50) NOT NULL,
  `noteStage` double NOT NULL,
  PRIMARY KEY (`idStage`),
  KEY `matApp` (`matApp`),
  KEY `codeMet` (`codeMet`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `stage`
--

INSERT INTO `stage` (`idStage`, `matApp`, `codeMet`, `nomEntreprise`, `noteStage`) VALUES
(11, 'IM-001-19', 'MT-003', 'Telma', 18.5),
(12, 'IM-005-19', 'MT-001', 'orange', 10),
(13, 'IM-003-19', 'MT-002', 'JIRAMA', 17),
(15, 'IM-005-19', 'MT-002', 'TELMA', 18),
(16, 'IM-006-20', 'MT-001', 'JIRAMA', 18);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `formation`
--
ALTER TABLE `formation`
  ADD CONSTRAINT `formation_ibfk_1` FOREIGN KEY (`matApp`) REFERENCES `apprenti` (`matApp`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `formation_ibfk_2` FOREIGN KEY (`idStage`) REFERENCES `stage` (`idStage`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `formation_ibfk_3` FOREIGN KEY (`codeMet`) REFERENCES `metier` (`codeMet`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `matiere`
--
ALTER TABLE `matiere`
  ADD CONSTRAINT `matiere_ibfk_1` FOREIGN KEY (`codeMet`) REFERENCES `metier` (`codeMet`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `matiere_ibfk_2` FOREIGN KEY (`matApp`) REFERENCES `apprenti` (`matApp`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `stage`
--
ALTER TABLE `stage`
  ADD CONSTRAINT `stage_ibfk_1` FOREIGN KEY (`matApp`) REFERENCES `apprenti` (`matApp`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stage_ibfk_2` FOREIGN KEY (`codeMet`) REFERENCES `metier` (`codeMet`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
