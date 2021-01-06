import React from 'react';

//export default ({name,number}) tambien se puede asi
export default class Contador extends React.Component{
   
    constructor(){
        super();
        this.state = {
            valor : 0
        }
        //bind en el constructor
        this.inc = this.incrementar.bind(this);
        this.dec = this.decrementar.bind(this);
    }    

    incrementar (){
         this.setState({valor: this.state.valor+1});
    }
    decrementar (){
        this.setState({valor: this.state.valor-1});
    }
    //Arrow
    /*decrementar = ()=>{
        this.setState({valor: this.state.valor-1});
    }*/

    render(){
        return (
            <div>
                <h1>Contador</h1>
                <h3>El valor es: {this.state.valor}</h3>
                <button onClick={this.inc}>Incrementar</button>
                <button onClick={this.dec}>Decrementar</button>
            </div>
            )
    }
}