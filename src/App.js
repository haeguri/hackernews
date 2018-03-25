import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

let list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props){
    super(props);

    this.state = { list };
  }

  render() {
    const helloWorld = '하이...';

    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        {list.map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        ))}

        <button onClick={this.onClick}>ddd</button>
      </div>
    );
  }

  onClick(){
    list = [];
    console.log(list);
  }
}

export default App;
