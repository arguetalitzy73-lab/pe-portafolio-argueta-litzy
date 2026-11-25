# Sesión 12

**Parámetros rest tipados**

## Ejercicio 1. Total de calificaciones acumuladas
En una jornada de recuperación académica, un docente necesita conocer la suma de una
cantidad variable de calificaciones obtenidas por un estudiante. Cree una función que reciba
cualquier cantidad de calificaciones numéricas y retorne la suma total. Realice al menos
tres pruebas con cantidades diferentes de argumentos.

## Ejercicio 2. Promedio de notas
La coordinación de una carrera necesita calcular el promedio de las evaluaciones de un
estudiante, pero no todos los grupos tienen la misma cantidad de actividades. Diseñe una
función que reciba un número indefinido de notas y retorne su promedio. Decida y
documente qué resultado debe producir cuando no reciba ninguna nota, para evitar una
división entre cero.

## Ejercicio 3. Registro de números telefónicos
Para actualizar los datos de contacto de los estudiantes, se requiere registrar un nombre y
una cantidad variable de números telefónicos. Cree una función que reciba primero el
nombre del estudiante y después todos sus números telefónicos. La función deberá mostrar
el nombre y cada número registrado de manera ordenada. Pruebe el programa con
estudiantes que tengan uno, dos y tres números.

## Ejercicio 4. Mayor valor registrado
Una tienda de San Miguel desea identificar la venta de mayor valor entre varias
operaciones realizadas durante el día. Cree una función que reciba una cantidad indefinida
de valores numéricos y retorne el mayor. Analice qué debería suceder si no se proporciona
ningún valor y comunique ese caso con claridad.

## Ejercicio 5. Construcción de un mensaje
Una oficina universitaria genera mensajes a partir de fragmentos de texto que pueden variar
según el trámite. Diseñe una función que reciba un número indefinido de cadenas, las una
en el mismo orden y retorne el mensaje completo. Decida qué separador conviene utilizar
para que las palabras no queden pegadas.

## Ejercicio 6. Arreglo directo frente a parámetros rest
Cree dos funciones que sumen números. La primera deberá recibir un arreglo como único
argumento; la segunda deberá recibir los números mediante un parámetro rest. Ejecute
ambas con los mismos valores y compare la forma en que se invocan. Explique, mediante
comentarios en el código, por qué una función se llama con corchetes y la otra con
argumentos separados. Después, investigue cómo el operador de propagación permite
enviar un arreglo existente a la función que utiliza rest