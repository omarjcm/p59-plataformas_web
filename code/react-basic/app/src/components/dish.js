import React, { Component, Fragment } from "react";

export class Bandera extends Component {
    render() {
        return (
            <Fragment>
                <h4>Encebollado</h4>
                <h4>Tallarin</h4>
            </Fragment>
        )
    }
}

export class Ingrediente extends Component {
    render() {
        return React.createElement('h4', {}, 'Ingrediente')
    }
}

class Plato extends Component {
    render() {
        return (
            <div className="Plato">
                <h1>Platillo</h1>
                <Ingrediente></Ingrediente>
                <button>Texto</button>
            </div>
        )
    }
}

export default Plato