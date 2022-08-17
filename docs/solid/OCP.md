# Open and close principle

Es un principio que depende mucho del contexto

Establece que las entradas de software (clases, módulos, métodos, etc) deben estar abiertas para la extensión, pero cerradas para la modificación.

## Ejemplo

- Escribir en archivo hola.txt ------ Nuevos cambios -----> Escribir en archivo adios.txt

+ writeFile('hola.txt') ----------------------------------> writeFile('adios.txt')