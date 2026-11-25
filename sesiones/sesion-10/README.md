# Sesión 10: 

**Modularización y declaración de funciones tradicionales y flecha**

## Ejercicio 1. Cálculo del área de un espacio
Una empresa de San Miguel necesita calcular el área de diferentes espacios antes de instalar
piso cerámico. Cree una función tradicional llamada calcularAreaRectangulo que reciba el
largo y el ancho del espacio como números y retorne el área calculada.
Pruebe la función con al menos dos espacios de dimensiones diferentes y presente los
resultados mediante mensajes comprensibles.

## Ejercicio 2. Verificación de números pares
En una actividad académica, los estudiantes con número de lista par formarán un equipo y
los estudiantes con número impar formarán otro. Cree una función flecha llamada
esNumeroPar que reciba un número y retorne un valor booleano.
Pruebe la función con diferentes números y muestre un mensaje que indique si cada número
evaluado es par o impar.

## Ejercicio 3. Eliminación de código repetido
Un programa muestra tres mensajes de bienvenida para diferentes participantes de un
evento universitario. Actualmente, el saludo completo se escribe nuevamente para cada
participante.
Analice el bloque repetido y conviértalo en una función reutilizable que reciba el nombre
del participante. Llame a la función tres veces utilizando nombres diferentes.
El resultado deberá incluir:
• Un encabezado de bienvenida.
• El nombre del participante.
• Un mensaje de agradecimiento por asistir.
## Ejercicio 4. Saludo personalizado
Cree una función que reciba el nombre de una persona y retorne un saludo formateado. El
mensaje deberá incluir el nombre recibido y una bienvenida a la Universidad de Oriente.
Guarde el valor retornado por la función en una variable y después muéstrelo en la consola.
Pruebe la función con al menos dos nombres.

## Ejercicio 5. Función sin valor de retorno
Una aplicación necesita mostrar un aviso antes de iniciar el registro de datos. Cree una
función llamada mostrarInstrucciones que no reciba parámetros y que únicamente imprima
las indicaciones en la consola.
La función deberá utilizar el tipo de retorno void. Llámela antes de mostrar cualquier otro
contenido del programa.

## Ejercicio 6. Refactorización del registro de ventas
Retome el programa de registro de ventas desarrollado en la sesión anterior. Organice el
código mediante funciones para reducir su extensión y facilitar su lectura.
El programa deberá conservar su comportamiento original y utilizar funciones separadas
para realizar, como mínimo, las siguientes tareas:
• Mostrar el encabezado del sistema.
• Validar o convertir el precio ingresado.
• Clasificar el tipo de cliente.
• Calcular el total de la venta.
• Mostrar el resumen final.
Analice qué información debe recibir cada función, qué tipo de dato debe retornar y cuáles
funciones solamente mostrarán información