# Sesión 23

**Métodos comunes de arreglos tipados (`push`, `pop`, `shift`, `unshift`, `splice`, `slice`)**

## Ejercicio 1: Gestión de inventario y pedidos
Una tienda en línea necesita procesar una compra y actualizar su inventario. Desarrolla un programa en TypeScript con las interfaces Producto (id, nombre, precio, stock y categoria) e ItemCarrito (productoId y cantidad).

Crea un catálogo inicial y agrega un producto mediante .push().
Obtén los productos con existencias usando .filter()
Construye una función que busque por identificador mediante .find(), verificando si el producto existe antes de utilizarlo.
Simula un carrito de compras y usa .map() para generar el detalle con nombre del producto, cantidad y subtotal. Calcula el total mediante .reduce() y descuenta las unidades compradas del inventario con .forEach(). Finalmente, muestra en consola el detalle del pedido, el total en dólares y las existencias actualizadas.

## Ejercicio 2: Gestión de turnos de pacientes
Un centro de salud necesita administrar su lista de espera. Desarrolla un programa en TypeScript con una interfaz Paciente que incluya identificador, nombre y motivo de consulta, y crea un arreglo tipado con cuatro pacientes iniciales.

Agrega un paciente regular al final mediante .push() y uno de emergencia al inicio con .unshift(). Simula el llamado al consultorio retirando al primero con .shift() y la cancelación de turno retirando al último con .pop(). En ambos casos, verifica que exista un paciente antes de mostrar su nombre.

Utiliza .splice() para insertar a un paciente de atención preferencial en el índice 1 sin eliminar a nadie. Después, retira al paciente del índice 2, simulando su derivación a otro centro médico. Finalmente, usa .slice() para obtener los próximos dos pacientes y muestra esta selección junto con la cola completa, comprobando que la copia no modifica la lista original.

## Ejercicio 3: Gestión de inscripciones a talleres
La UNIVO necesita organizar las inscripciones a sus talleres. Desarrolla un programa en TypeScript con las interfaces Taller (id, nombre, costo y cupos disponibles) e Inscripcion (tallerId y cantidad de participantes). Crea un catálogo con cuatro talleres, incluyendo uno sin cupos.

Agrega un nuevo taller mediante .push() y utiliza .filter() para obtener únicamente los que tienen cupos disponibles. Implementa una función con .find() para buscar un taller por identificador y verifica que exista antes de utilizar sus datos.

Simula la inscripción a dos talleres y emplea .map() para generar un resumen con nombre del taller, cantidad de participantes y subtotal. Calcula el total en dólares mediante .reduce() y actualiza los cupos utilizando .forEach(). Para esta práctica, utiliza cantidades que no superen los cupos disponibles. Finalmente, muestra el resumen, el total y los cupos restantes.

## Ejercicio 4: Organización de solicitudes de soporte técnico
El laboratorio de informática necesita administrar las solicitudes de ayuda. Define una interfaz Solicitud con id, nombre del estudiante y problema reportado, e inicializa un arreglo tipado con cuatro solicitudes en orden de llegada.

Agrega una nueva solicitud al final mediante .push() e incorpora al inicio una solicitud urgente con .unshift(). Simula la atención de la primera utilizando .shift() y retira la última con .pop() porque el estudiante resolvió su problema. Verifica que los valores devueltos existan antes de mostrar los nombres correspondientes.

Utiliza .splice() para insertar una solicitud prioritaria en el índice 1 sin eliminar otras. Después, retira la solicitud del índice 3 porque será atendida por otro técnico. Obtén mediante .slice() las próximas dos solicitudes y muestra tanto la selección como la fila completa. Explica cuáles operaciones modificaron el arreglo original y cómo comprobaste que .slice() lo conservó.







