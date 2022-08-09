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