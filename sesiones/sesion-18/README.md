# Sesión 18

**Funciones recursivas tipadas**

## Ejercicio 1. Factorial para organizar paquetes
Una empresa de San Miguel desea conocer de cuántas maneras diferentes puede organizar una cantidad determinada de paquetes. Para apoyar el cálculo, deberá desarrollar una función recursiva que obtenga el factorial de un número entero.

La función debe:

Recibir un número entero.
Retornar un resultado de tipo number.
Contener un caso base claramente identificable.
Reducir el número recibido en cada llamada.
Rechazar o informar cuando se reciba un número negativo.
Antes de ejecutar, represente en papel las llamadas que se producen al calcular el factorial de 4.

## Ejercicio 2. Ahorro acumulado durante varios días
Una estudiante decide iniciar un reto de ahorro: el primer día guarda un dólar, el segundo día dos dólares, el tercero tres dólares y así sucesivamente.

Desarrolle una función recursiva que determine cuánto habrá ahorrado al finalizar una cantidad N de días.

La función debe:

Recibir la cantidad de días.
Retornar la suma desde 1 hasta N.
Definir qué resultado corresponde cuando la cantidad de días es 0.
Reducir la cantidad de días en cada llamada recursiva.
Validar que no se utilicen cantidades negativas.
Realice manualmente el seguimiento para N = 5 y prediga el resultado antes de ejecutar el programa.

## Ejercicio 3. Crecimiento de una secuencia
Un equipo de estudiantes está modelando una secuencia en la que cada nuevo valor se obtiene sumando los dos valores anteriores. Los primeros valores son 0 y 1.

Desarrolle una función recursiva que calcule un término de la sucesión de Fibonacci. Posteriormente, utilice la función para mostrar los primeros N términos.

La solución debe:

Indicar explícitamente el tipo de retorno.
Contener los casos base correspondientes a las primeras posiciones.
Calcular cada posición mediante llamadas recursivas.
Solicitar o establecer la cantidad de términos que se mostrarán.
Evitar posiciones negativas.
Antes de ejecutar, dibuje el árbol de llamadas utilizado para obtener el término ubicado en la posición 4.

Para este ejercicio se trabajará con cantidades pequeñas, porque la implementación recursiva básica de Fibonacci repite numerosos cálculos.

##  Ejercicio 4. Contador recursivo de caracteres
La biblioteca universitaria necesita conocer la longitud de ciertos códigos textuales sin utilizar directamente la propiedad .length para obtener el resultado final.

Desarrolle una función recursiva que reciba una cadena y cuente cuántos caracteres contiene.

La función debe:

Retornar 0 cuando reciba una cadena vacía.
Reducir la cadena en cada llamada.
Sumar una unidad por cada carácter encontrado.
Retornar un valor de tipo number.
Probarse con un código como "UNIVO2026".
Explique qué parte de la cadena es enviada a la siguiente llamada y por qué el proceso termina.#