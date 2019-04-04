import React, { Component } from 'react';

class HelloWorld extends Component {
    state = {
        count: 0,
    };

    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        const { count } = this.state;
        return (
            <>
                <h1>
                    Hola mundo cruel {this.state.count}
                </h1>
                <button onClick={this.handleCount}>añadir</button>
            </>
        );
    }
}

export default HelloWorld;