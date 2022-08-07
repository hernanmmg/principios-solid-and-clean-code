```ts
class HtmlElement{
  // (1) propiedades estáticas
  public static domReady: boolean = false;

  // (2) propiedad públicas de último
  private _id: string;
  private type: string;

  // Métodos
  // (1) Empezando por los contructores estáticos
  static createInput(id: string) {
    return new HtmlElement(id, 'input');
  }
  // (2) Luego el construtor
  constructor(id: string, type: string) {
    this._id = id;
    this.type = type;
  }
  // (3) Seguidamente métodos estáticos
  // (4) Métodos privados después
  // (5) Resto de métodos de instancia
  // ordenados de mayor a menor importancia
  setType(type: string) {
    this.type = type;
  }

  // (6) Getters y Setters al final
  get id() {
    return this._id;
  }
}
```
