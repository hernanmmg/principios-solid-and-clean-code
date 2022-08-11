## Acrónimo STUPID
-----------------------
- *Singleton*: Patrón singleton.
- *Tight Coupling*: Alto acoplamiento.
- *Untestability*: Código no portable (unit test).
- *Premature optimization*: Optimizaciones prematuras.
- *Indescriptive Naming*: nombres poco descriptivos.
- *Dupliocation*: Duplicidad de código, no aplicar el principio DRY.

## Singleton

* [PRO] 
  * Garantiza una única instancia de la clase a lo largo de toda la aplicación.

* [CONS]
  * Vive en el contexto global
  * Dificil de testear
  * No sabemos donde fueron los cambios
  * Cualquiera lo puede modificar

## Alto acoplamiento
- Bajó acoplamiento: Cuán relacionadas o dependientes son dos clases o módulos entre sí
+ Buena cohesión: lo que la clase (o módulo) puede hacer

## Còdigo no probable

* Código dificilmente testable
  * Código con alto acoplamiento
  * Código con muchas dependencias no inyectadas.
  * Dependencias en el contexto global (Tipo Singleton)

  **Debemos tener en cuenta las pruebas desde la creación del código**

## Optimizaciones prematuras

* Mantener abiertas las opciones retrasando la toma de desiciones nos permite darle mayor relevancia a lo que es más importante en una aplicación (busca equilibrio)

  * **Complejidad accidental**: implementar una solución compleja a la mínima indispensable.

  * **Complejidad esencial**: Es inherente al problema.

## Nombres pocos descriptiovos

- Nombres de variables mal nombradas
- Nombres de clases genéricas
- Nombres de funciones mal nombradas
- Ser muy especifico o demasiado genérico

## Duplicidad de código
* Significa no aplicar el principío DRY
  * **Real**: Código identico y cumple la misma función
  * **Accidental**: Código luce similar pero cumple funciones distintas