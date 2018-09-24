import React, {Component} from 'react';

class Libro extends Component {
    render(){
        const {nombreLibro, nombreAutor} = this.props.libro;
           return(
               <div>
               <p>{nombreLibro}</p>
               <p>{nombreAutor}</p>
               </div>       
           ) 
        }
    
}

export default Libro;