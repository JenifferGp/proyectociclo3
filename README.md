# proyectociclo3
# Proyecto de Monitoreo de Medios
# La vista de Home.html, contiene el formulario con validacion para solicitar un demo del aplicativo.
# Ingrese a la vista login.html, allí podra ingresar digitando cualquier usuario y clave. Luego podra ver la diferentes vistas del proyecto hechas hasta el momento.
# Contamos con una tabla inicial de medios online de Argentina
# Apartir de alli, vamos a extraer las publicaciones de estos medios para formar una tabla de publicaciones
data_wp.py : -->Para la extraccion de estas publicaciones se utilizo un script en python para traer un maximo de 9990 publicaciones por medio, con el fin de contar con un historico, que para el resultado del ejercicio se cuenta con publicaiones desde enero de 1992. 137 medios. Se guardo la extraccion inical en archivos .csv por cada medio dispuestos en la carpeta 'publicaciones  por medios primera extraccion'.
df_to_sql.py : -->Este script permite por medio de la lista de archivos .csv, ingrsar los registros a la tabla de publicaciones. Para ello es necesario contar primero con la instalacion de la BD(Item BD).
# La tabla de publicaciones debe actualizarce periodicamente, y traer las publicaciones nuevas del medio.
# Esta tabla de publicaciones tiene que ser visualizada tanto por los clientes, como por el administrador
# Existe una tabla de usuarios, donde se identifica su rol, sea admin o cliente, asi como sus credenciales de acceso
# Otra tabla relaciona los usuarios con las marcas y asi mismo una tabla de marcas con palabras claves para identificar en las publicaciones 
# El administrador puede definir si una publicacion deberia verse al cliente o si no, asi como agregar otras variables de analisis para la publicacion
# El cliente solo puede ver las publicaciones asociadas con su marca y se contemplara relizar un dashboard si los tiempos de desarrollo lo permiten

Item BD
# Para restaurar la BD se deben seguir los siguientes pasos:
Sobre servidor anterior:
1. Realizar un backup de la BD
2. Guardar SQL de crecion de BD
Sobre servidor nuevo:
2. Descargar instalador de PostgreSQL en su ultima version
2. Generalmente en el paquete de instalacion tiene incluido pgAdmin, si no es asi instalar primero pgAdmin y luego PostgreSQL
3. Crear BD a partir de SQL
4. Restaurar BD a partir del backup