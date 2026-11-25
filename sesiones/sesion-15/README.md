# Sesión 15

**Introducción a tipos genéricos básicos (`<T>`)**

## Ejercicio 1: Extracción del elemento inicial
En los puntos de atención al cliente del Banco Agricola en San Miguel, se manejan distintas
colas de espera: una lista con los nombres de los usuarios en espera (string[]) y otra con los
números correlativos de tickets asignados (number[]).
Diseña e implementa una función genérica que reciba un arreglo con elementos de
cualquier tipo y devuelva únicamente el primer elemento de la colección. Comprueba su
comportamiento enviando tanto la lista de nombres como la lista de correlativos,
verificando que el tipo de dato devuelto se conserve exactamente sin usar conversiones
forzadas ni any.

## Ejercicio 2: Inversión de colecciones operativas
La tienda Galo en Usulután registra el historial de operaciones de despacho en orden
cronológico (montos de factura en dólares o códigos de despacho alfanuméricos) y necesita
visualizarlos en orden inverso para auditoría del cierre de caja.
Construye una función genérica que reciba un arreglo homogéneo de tipo T y retorne un
nuevo arreglo con los elementos en orden invertido. Asegúrate de que la colección original
no sea mutada y prueba la función con un arreglo de identificadores alfanuméricos y con un
arreglo de montos numéricos.

## Ejercicio 3: Envoltura de valor e identidad
Como parte de la arquitectura de validación de un sistema de registro académico en la
UNIVO, se necesita una función base que reciba un dato de entrada (DUI de estudiante,
código de carnet, o estado booleano de solvencia) y lo devuelva intacto para su posterior
procesamiento en la cadena de ejecución.
Declara una función genérica llamada identidad<T> que reciba un argumento de tipo T y
retorne exactamente ese mismo valor con su tipo correspondiente. Realiza pruebas
explícitas e inferidas pasando cadenas, números y valores booleanos.

## Ejercicio 4. any frente a un genérico
Analice las siguientes funciones:
 function conservaDatoAny(dato:any): any{
    return dato;
 }


 function conservaDatoGenerico<T>(dato:T): T{
    return dato;
 }

Realicen llamadas con valores de tipo string, number y boolean. Luego intenten aplicar
operaciones que no correspondan al tipo recibido.

Respondan:
1. ¿En cuál versión TypeScript conserva información sobre el tipo?
2. ¿En cuál versión podría pasar inadvertido un error?
3. ¿Qué ventajas ofrece el genérico?
4. ¿Las dos funciones devuelven el mismo valor durante la ejecución?
5. Si ambas devuelven el mismo valor, ¿por qué una alternativa es más segura?

## Ejercicio 5: Conteo y reporte de colecciones heterogéneas
En un sistema de control de inventarios para tiendas de conveniencia en La Unión, se
reciben lotes de datos diversos: listas de códigos de barras, listas de descripciones de
producto y registros booleanos de existencia.
Crea una función genérica que reciba un arreglo de cualquier tipo y retorne una estructura o
mensaje que confirme la cantidad total de elementos procesados junto con la confirmación
de la operación. La función debe admitir colecciones de cualquier tipo asegurando que el
argumento de entrada sea estrictamente un arreglo tipado.

## Ejercicio 6: Argumentación técnica sobre seguridad de tipos
En una sesión de revisión de código (code review), un compañero propone sustituir todos
los parámetros genéricos por any bajo el argumento de que "ambos permiten recibir
cualquier tipo de dato y con any se escribe menos código".
Redacta uno o dos parrafos argumentando tu explicación técnica sólida donde justifiques por qué
el uso de any degrada la seguridad de tipos (type safety), anula el autocompletado del editor
y oculta errores en tiempo de compilación frente a la parametrización de tipos con <T>