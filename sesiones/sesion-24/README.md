# Sesión 24
**Repaso: solicitudes de una biblioteca**
La biblioteca de una universidad de San Miguel necesita organizar las solicitudes de préstamo de libros. Cada solicitud ingresa a una lista de espera. Al atenderla, se retira de las solicitudes pendientes. Tu tarea es representar esta lista y demostrar cómo se registra, atiende y consulta la información.

1. Representa las solicitudes 
Declara una interface SolicitudPrestamo con las siguientes propiedades:
| Propiedad | Tipo | Información |
| --- | --- | --- |
| `id` | `number` | Identificador de la solicitud. |
| `estudiante` | `string` | Nombre del estudiante. |
| `libro` | `string` | Título del libro solicitado. |
| `categoria` | `string` | Categoría del libro. |

Crea un arreglo tipado con tres solicitudes iniciales e identificadores diferentes. Incluye dos solicitudes de la categoría "Tecnología". Muestra el arreglo inicial.

2. Registra y atiende solicitudes 
- Agrega una nueva solicitud al final.
- Incorpora al inicio una solicitud prioritaria
- Muestra el orden de la lista antes de atender.
- Retira la primera solicitud con shift y guarda el resultado.
- Comprueba que el resultado exista antes de mostrar el estudiante atendido y su libro. Si no existe, muestra un mensaje.

3. Consulta las solicitudes pendientes · 10 minutos
- Utiliza find para buscar una solicitud pendiente por identificador.
- Si existe, muestra sus datos; si no existe, presenta un mensaje. Prueba ambos resultados.
- Utiliza filter para obtener las solicitudes pendientes de "Tecnología".
- Muestra el arreglo filtrado directamente con console.log.

4. Comprueba los resultados · 5 minutos
- Muestra el arreglo final y la cantidad de solicitudes pendientes con length.
- Compara la cantidad de solicitudes del arreglo original antes y después de aplicar el filtro.
- Explica si el filtro retiró alguna solicitud del arreglo original.

