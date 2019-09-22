import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    //pure function을 이용하여
    //그리고 setState를 이용하여 랜덤하게 강사를 고르고 랜덤하게 hobby 값을 지워주기

    setTimeout(() => {
      let randomInstructorPick = Math.floor(Math.random() * 4);
      let randomHobbyPick = Math.floor(Math.random() * 2);
      this.setState({
        instructors: this.state.instructors[randomInstructorPick].hobbies[randomHobbyPick].hidden
      })
    }, 5000);

  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
