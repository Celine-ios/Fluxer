-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-06-2018 a las 23:06:10
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fluxer`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juanposts`
--

CREATE TABLE `juanposts` (
  `title` varchar(200) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `footer` longtext CHARACTER SET utf8 COLLATE utf8_spanish_ci,
  `comments` bigint(200) DEFAULT NULL,
  `likes` int(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `juanposts`
--

INSERT INTO `juanposts` (`title`, `time`, `footer`, `comments`, `likes`) VALUES
('@lil_xan', '0000-00-00 00:00:00', 'Qlq', 23, 199),
('@lilpeep', '0000-00-00 00:00:00', 'Hola', 132, 19),
('@foo_fighters', '0000-00-00 00:00:00', 'Hola bros, como van', 192, 932);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `DIRECCION` varchar(200) NOT NULL,
  `NOMBRE_USUARIO` text NOT NULL,
  `CORREO` text NOT NULL,
  `CONTRASENA` text NOT NULL,
  `LINK` varchar(200) NOT NULL,
  `PORTADA` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`DIRECCION`, `NOMBRE_USUARIO`, `CORREO`, `CONTRASENA`, `LINK`, `PORTADA`) VALUES
('juan', 'Juan GuzmÃ¡n', 'thejyjco@gmail.com', '$2y$10$xvI7wdNFicJEVKc0I2k7TuJ3poZVCzqbycSmhdFRjN4/ghGY7Nr92', '/juan/', '/dashboard/Fluxer/Perfil/juan/images/wallpaper.jpg'),
('kevin', 'Kevin Systrom', 'kevin@gmail.com', '$2y$10$HqrQ7XOjhFhUiLoUT5yrOetd17.U9qWlXZ6eOx.8DrEIQdN21LbYq', '/kevin/', '/dashboard/Fluxer/Perfil/kevin/images/wallpaper.jpg'),
('lilpeep', 'Lil Peep Official', 'lilpeep@gmail.com', '$2y$10$vzxBWaGW6hxRVObo.1YD5O4bPS9E3UoAhoi3FmBekOlo7PNOSB/Ce', '/lilpeep/', ''),
('mochniyivan', 'ivygon89', 'mochniyivan@gmail.com', '$2y$10$gL2Es1XbW674TVI60z2/8uAQTQD6hzT5nxH23OH6bZ90OjwMRw3ja', '/mochniyivan/', '/dashboard/Fluxer/Perfil/mochniyivan/images/wallpaper.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`DIRECCION`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
