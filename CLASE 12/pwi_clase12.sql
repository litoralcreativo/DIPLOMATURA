-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 21-05-2021 a las 00:17:47
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pwi_clase12`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `trabajo_id` int(11) NOT NULL,
  `edad` int(3) NOT NULL,
  `salario` int(11) NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `eliminado` tinyint(1) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `apellido`, `trabajo_id`, `edad`, `salario`, `mail`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Juan', 'Hagan', 1, 32, 1200, 'juan_hagan@bignet.com', 0, '2021-05-20 17:35:32', '2021-05-20 17:57:25'),
(2, 'Gonzalo', 'Pillai', 1, 32, 1100, 'g_pillai@bignet.com', 0, '2021-05-20 17:41:59', '2021-05-20 17:57:42'),
(3, 'Ana', 'Dharma', 2, 27, 900, 'ana@bignet.com', 0, '2021-05-20 17:41:59', '2021-05-20 17:57:50'),
(4, 'Maria', 'Anchor', 2, 26, 850, 'mary@bignet.com', 0, '2021-05-20 17:43:16', '2021-05-20 17:58:00'),
(5, 'Alfred', 'Fernandez', 3, 31, 750, 'af@bignet.com', 0, '2021-05-20 17:43:16', '2021-05-20 17:58:10'),
(6, 'Juan', 'Agüero', 3, 36, 850, 'juan@bignet.com', 0, '2021-05-20 17:45:41', '2021-05-20 17:58:21'),
(7, 'Eduardo', 'Sacan', 3, 25, 850, 'eddi@bignet.com', 0, '2021-05-20 17:45:41', '2021-05-20 17:58:34'),
(8, 'Alejandro', 'Nanda', 3, 32, 700, 'alenanda@bignet.com', 0, '2021-05-20 17:45:41', '2021-05-20 17:58:46'),
(9, 'Hernan', 'Rosso', 4, 33, 900, 'hernan@bignet.com', 1, '2021-05-20 17:47:21', '2021-05-20 19:05:01'),
(10, 'Pablo', 'Simon', 4, 43, 850, 'ps@bignet.com', 0, '2021-05-20 17:47:21', '2021-05-20 17:59:04'),
(11, 'Arturo', 'Hernandez', 4, 32, 750, 'arturo@bignet.com', 0, '2021-05-20 17:47:21', '2021-05-20 17:59:15'),
(12, 'Jimena', 'Cazado', 6, 32, 1100, 'jimena@bignet.com', 0, '2021-05-20 17:49:20', '2021-05-20 17:59:30'),
(13, 'Roberto', 'Luis', 5, 35, 1000, 'roberto@bignet.com', 0, '2021-05-20 17:49:20', '2021-05-20 17:59:45'),
(14, 'Daniel', 'Gutierrez', 5, 34, 900, 'daniel@bignet.com', 0, '2021-05-20 17:49:20', '2021-05-20 19:11:10'),
(15, 'Miguel', 'Harper', 7, 36, 1200, 'miguel@bignet.com', 0, '2021-05-20 17:51:52', '2021-05-20 18:00:10'),
(16, 'Monica', 'Sanchez', 8, 30, 900, 'monica@bignet.com', 0, '2021-05-20 17:51:52', '2021-05-20 18:00:21'),
(17, 'Alicia', 'Simlai', 8, 27, 700, 'alicia@bignet.com', 0, '2021-05-20 17:51:52', '2021-05-20 18:00:30'),
(18, 'Jose', 'Iriarte', 8, 27, 720, 'jose@bignet.com', 0, '2021-05-20 17:53:35', '2021-05-20 18:00:38'),
(19, 'Sabrina', 'Allende', 9, 32, 2000, 'sabrina@bignet.com', 0, '2021-05-20 17:53:35', '2021-05-20 18:00:51'),
(20, 'Pedro', 'Campeon', 10, 36, 2200, 'pedro@bignet.com', 0, '2021-05-20 17:53:35', '2021-05-20 18:01:01'),
(21, 'Mariano', 'Dharma', 11, 28, 3000, 'mariano@bignet.com', 0, '2021-05-20 17:54:04', '2021-05-20 18:01:26'),
(22, 'Francisco', 'Perez', 3, 26, 900, 'francisco@bignet.com', 0, '2021-05-20 19:08:55', '2021-05-20 19:08:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puestos`
--

CREATE TABLE `puestos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `puestos`
--

INSERT INTO `puestos` (`id`, `nombre`) VALUES
(1, 'Programador senior'),
(2, 'Desarrollador web'),
(3, 'Programador'),
(4, 'Especialista multimedia'),
(5, 'Administrador de sistemas'),
(6, 'Diseñador web'),
(7, 'Ejecutivo de ventas senior'),
(8, 'Ejecutivo de ventas'),
(9, 'Gerente de soporte tecnico'),
(10, 'Gerente de finanzas'),
(11, 'Presidente');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `trabajo_id` (`trabajo_id`);

--
-- Indices de la tabla `puestos`
--
ALTER TABLE `puestos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `puestos`
--
ALTER TABLE `puestos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`trabajo_id`) REFERENCES `puestos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
