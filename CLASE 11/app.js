/*

Instlamos XAMPP
usamos PHPMyAdmin en http://localhost/phpmyadmin/
Creamos una base de datos (pwi2021)
creamos la tabla usuarios dentro de la bs (usuarios)

hicimos llamadas sql

SELECT        (seleccionar)
*             (all)
FROM          (desde que base tabla)
`users`       (la tabla)
WHERE         (donde)
id = 2        (el id sea 2)
LIKE "%ton"   (busca todo lo que termina con "ton")
LIKE "ton%"   (busca todo lo que empieza con "ton")
LIKE "%ton%"  (busca todo lo que contiene "ton")
JOIN          (muestra de otras tablas)

Ejemplos:
SELECT * FROM `users` WHERE id = 2
SELECT * FROM `users` WHERE username LIKE "%on%"
SELECT * FROM productos JOIN categorias ON productos.id_categoria = categorias.id

 */
