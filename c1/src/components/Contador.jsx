import React from 'react';

//export default ({name,number}) tambien se puede asi
export default class Contador extends React.Component{
   
    constructor(){
        super();
        this.state = {
            valor : 0
        }
    }    

    incrementar = ()=>{
        
         this.setState({valor: this.state.valor+1});
    }
    decrementar = ()=>{
        this.setState({valor: this.state.valor-1});
    }

    render(){
        return (
            <div>
                <h1>Contador</h1>
                <h3>El valor es: {this.state.valor}</h3>
                <button onClick={this.incrementar}>Incrementar</button>
                <button onClick={this.decrementar}>Decrementar</button>
            </div>
            )
    }
}