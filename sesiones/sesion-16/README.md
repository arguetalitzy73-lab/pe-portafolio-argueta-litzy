# Sesión 16
**Paso de parámetros por valor y por referencia**

## Ejercicio 1. ¿Cambió realmente el precio?
Una pequeña tienda registra el precio de un producto en una variable. Se desea crear una
función llamada duplicarPrecio que reciba el precio y multiplique el parámetro por dos.
Antes de ejecutar el programa, determine qué sucederá con la variable que contiene el
precio original después de llamar a la función.
Implemente el programa, muestre el valor antes y después de la llamada y explique con sus
propias palabras por qué obtuvo ese resultado.

## Ejercicio 2. Lista de estudiantes presentes
Un docente mantiene un arreglo con los nombres de estudiantes que han registrado
asistencia:
const presentes: string[] = ["Ana", "Carlos", "Mario"];
Diseñe una función que reciba este arreglo y agregue un nuevo estudiante.
Antes de ejecutarla, escriba su predicción:
¿El arreglo presentes tendrá tres o cuatro elementos después de ejecutar la función?
Compruebe posteriormente su hipótesis ejecutando el programa.
Además, determine si el comportamiento observado es igual o diferente al del ejercicio
anterior.

## Ejercicio 3- 4- 6
No se realizaran

## Ejercicio 5. Función segura vs. función con efecto secundario
Un negocio necesita aplicar un aumento de $0.25 a una lista de precios.
Diseñe dos alternativas:
Alternativa A: una función que modifique directamente el arreglo recibido.
Alternativa B: una función que permita obtener los precios modificados sin alterar la
colección original.
Después de probar ambas alternativas, determine:
• cuál produce un efecto secundario;
• cuál conserva los datos originales;
• en qué situación utilizaría cada alternativa.
No se proporciona el mecanismo para copiar el arreglo: investigue una alternativa
compatible con TypeScript y justifique su elección.

