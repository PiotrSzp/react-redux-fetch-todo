import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className='container'>
                <h2>About App</h2>
                <p>This is To Do List App v1.0.0. </p>
                <p>I did it as an exercise of react, react-router, redux and fetching API.</p>
                <p>&copy; Piotr Szporko 2019</p>
            </section>
        );
    }
}

export default About;