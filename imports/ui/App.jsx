

import React, { Component } from 'react';

 

import Task from './Task.jsx';

 

// App component - represents the whole app

export default class App extends Component {

  getTasks() {

    return [

      { _id: 1, text: 'Banglore' },

      { _id: 2, text: 'Hydrebad' },

      { _id: 3, text: 'Delhi' },

     { _id: 3, text: 'Mumbai' },


    ];

  }

 

  renderTasks() {

    return this.getTasks().map((task) => (

      <Task key={task._id} task={task} />

    ));

  }

 

  render() {

    return (

      <div className="container">

        <header>

          <h1>Cleanest Cities Survey</h1>

        </header>

 

        <ul>

          {this.renderTasks()}

        </ul>

      </div>

    );

  }

}


