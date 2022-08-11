# Others code smells

- +10 Líneas de código

- Large classes

- obsesión primitiva (banderas, acumulación de variables, etc.)

- Lista larga de parámetros (3 ó 4 argumentos en un método) ¿Son necesarios? (sub-métodos)

- Feature Envy (acopladores) un modulo accede a info de otros lugares qué a su misma función

- Intimidad inapropiada, las clases deben saber menos de otras clases

- Cadenas de mensaje, A -> llama a B -> B llamada a C -> C llamada a D. (Comunicar A directamente a D)

- The Middle man, delegar el trabajo a otra clase ¿Por qué existe esa clase? (Evitar el punto intermedio)