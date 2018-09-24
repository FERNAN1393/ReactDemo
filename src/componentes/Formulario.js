import React, {Component} from 'react';

class FormularioAlta extends Component{
    
    //Referencias para campos del formulario
    nombreLibro = React.createRef();
    nombreAutor = React.createRef();
    
    //Metodo 
    crearLibro = e =>
    {
        //Evita que cada que demos clic haga un post
        e.preventDefault();
        //Creamos el objeto
        const libro ={
            nombreLibro : this.nombreLibro.current.value,
            nombreAutor : this.nombreAutor.current.value
        }

        //Mandamos a la clase principal
        this.props.agregarlibro(libro);
        e.currentTarget.reset();
        //Limpiar campos
        console.log(libro);

    }
    render()
    {
        return(
            //mandamos llamar Metodo crearLibro
<form className="Alta" onSubmit={this.crearLibro}>
    <h2>Agregar Libro</h2>
    <div className="campo">
        <label>Nombre: </label>
        <br></br>
        <input ref={this.nombreLibro} className="u-full-width" type="text" placeholder="Ej. IT" />
    </div>

    <div className="campo">
    <br></br>
        <label>Autor</label>
        <br></br>
        <input ref={this.nombreAutor} className="u-full-width" type="text" placeholder="Ej. Stephen King" />
    </div>
    <br></br>
    <input className="u-full-width" type="submit" value="Agregar" />
</form>
        )
    }
}

export default FormularioAlta;