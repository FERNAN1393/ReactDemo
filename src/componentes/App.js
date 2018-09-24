import React, { Component } from 'react';
import Header from './Header';
import '../css/index.css';
import Formulario from './Formulario';
import Listado from './Listado';
class App extends Component {

  //Constructor
  constructor(props)
  {
    super(props);
    this.state = {
      libros: {}
    }
  }
  
  //Mandamos llamar por props el metodo agregarlibro
  agregarlibro = libro =>{
    //Spread operator crea una copia de nuestro objeto actual
    const libros = {...this.state.libros}
    //Le asigno Date.now para que tenga un identificador unico y haya una sobreescritura al agregar varios libros
    //cada libro que viene desde nuestro formulario lo asignamos a la variable const libros junto con una key unica
    libros[`libro${Date.now()}`] = libro;

    this.setState({
        libros
      })


  }
  render() {
    return (
      <div className="App container">
      <Header
      titulo = "Control de Libros"
      />
      <div className="contenido-principal">
          <div className ="row">
              <div className="one-half-column">
              <Formulario
              //Mandamos el metodo
                agregarlibro = {this.agregarlibro}
              />
              </div>
              <div className="second-half-column">
             <Listado
             libros = {this.state.libros}
             />
              </div>
          </div>
      </div>
      </div>
    
    );
  }
}

export default App;
