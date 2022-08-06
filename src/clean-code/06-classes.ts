(() => {
  // No aplica el principio de responsabilidad unica
  type Gender = 'M' | 'F';
  class Person {
    constructor(
      public birthdate: Date,
      public gender: Gender,
      public name: string
    ){}
  }

  class User extends Person {
    private lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      birthdate: Date,
      gender: Gender,
      name: string,
      ) {
        super(birthdate, gender, name)
        this.lastAccess = new Date();
      }

      checkCredentials() {
        return true;
      }
  }

  class UserSettings extends User {
    constructor(
      birthdate: Date,
      email: string,
      gender: Gender,
      name: string,
      public lastOpenFolder: string,
      public workingDirectory: string,
      role: string,
    ) {
      super(email, role, birthdate, gender, name)
    }
  }
  const userSettings = new UserSettings(new Date('1993-04-09'), "@", "M", "Hernán", "/home", "/", "Admin");
  /*const person = new Person('Hernán', 'M', new Date('09-04-1993'));console.log({ person });*/
})();