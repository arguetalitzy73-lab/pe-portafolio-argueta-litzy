# Sesión 22
**Tuplas en typeScript**
Datos heterogéneos con longitud, tipos y orden definidos

1. Modelado de coordenadas geográficas para logística en Oriente
Una empresa de encomiendas con sede en San Miguel necesita almacenar de forma
compacta y ordenada las coordenadas de entrega de sus camiones. Modela una tupla de dos
valores numéricos que represente (latitud, longitud). Define una variable tipada con las
coordenadas del Parque Central de San Miguel (13.4833, -88.1833). Experimenta
intentando asignar un tercer valor o invirtiendo el orden con un texto y analiza la respuesta
del compilador de TypeScript.

2. Registro inmutable de matrícula universitaria
El departamento de Registro Académico de la UNIVO requiere una estructura fija para
procesar rápidamente en consola el identificador de un estudiante en un trámite de
ventanilla: [nombre_completo, edad]. Declara la tupla correspondiente asegurando que la
primera posición sea estrictamente textual y la segunda un número entero. Asigna los datos
de un estudiante y muestra en consola un mensaje formateado extrayendo los valores por su
posición.

3. Cálculo de cobro en punto de venta de pupusería
Un negocio típico en San Miguel registra líneas de compra con la siguiente estructura
indivisible: [nombre_del_producto, precio_unitario, cantidad_ordenada]. Declara una tupla
con esta estructura para registrar una orden (ej. "Pupusas revueltas", $0.75, 6). Implementa
una función que reciba exactamente esta tupla como argumento, calcule el total a pagar y
muestre el desglose en consola.

4. Auditoría de consistencia de tipos: Arreglo vs. Tupla
Analiza el siguiente escenario: un desarrollador junior intentó modelar una respuesta de
servidor de estado y mensaje declarando la variable como let respuesta: (string | number)[]
= [200, "OK"];. Explica y demuestra mediante código por qué esta declaración permite
mutaciones no deseadas (como agregar un tercer elemento arbitrario o alterar el orden a
["OK", 200]). Corrige el código aplicando una tupla estricta para blindar el contrato de
datos.

5. Mini-inventario local mediante colección de tuplas
Una ferretería migueleña requiere registrar en memoria su inventario rápido de mostrador
sin recurrir a estructuras complejas de objetos. Declara un arreglo tipado compuesto
exclusivamente por tuplas de la forma [codigo_sku, nombre_herramienta, precio_dolares,
stock_disponible]. Puebla la colección con al menos cuatro productos y elabora un
recorrido que procese la lista e imprima un reporte de inventario indicando el valor
monetario total retenido en stock.

6. Decisión arquitectónica: Tupla vs. Interface
Redacta una justificación técnica comparando los siguientes dos modelos para representar
un registro de pago municipal:
- Opción A: Tupla [string, number, boolean] representando [numero_cuenta,
monto, solvente].
- Opción B: Interfaz formal con nombres de campo declarados.
Establece en qué casos prácticos la tupla resulta superior en rendimiento o simplicidad y en
qué situaciones la falta de claves semánticas genera deuda técnica en el desarrollo. 


