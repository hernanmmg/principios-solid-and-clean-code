(() => {

  // función para obtener información de una película por Id
  function getMoviesById( movieId: string ) {
      console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieActorsById( movieId: string ) {
      console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getActor( actorId: string ) {
      console.log({ actorId });
  }
  
  // Crear una película
  interface IMovie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie({ title, description, rating, cast }: IMovie) {
      console.log({ title, description, rating, cast });
  }

  function verifyName(fullName: string) {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    return fullName === "hernan";
  }

  // Crea un nuevo actor
  function createActor( fullName: string, birthdate: Date ): boolean {
      
      
      if ( verifyName(fullName) ) return false;

      console.log('Crear actor');
      return true;        

  }

  // Continuar
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if ( isDead ) return 1500;
    if ( isSeparated ) return 2500;
    return isRetired ? 3000 : 4000; 
}

})();
