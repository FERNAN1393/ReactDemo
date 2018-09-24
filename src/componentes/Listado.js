import React, {Component} from 'react';
import Libro from './Libro';
class Listado extends Component{

    render()
    {
        return(
            <div className="listado">
            <h2>Listado</h2>
            {Object.keys(this.props.libros).map(key =>(
                <Libro
                //Object keys vamos a iterar un objeto y con map podemos acceder a ese objeto
                //Se crea una propiedad y le asignamos el key que le estamos pasando, un key unico.
                key = {key}
                //agregamos key para que solo nos traiga el registro actual
                libro = {this.props.libros[key]}
                />
            ))}
            </div>
        )
    }
}

export default Listado;