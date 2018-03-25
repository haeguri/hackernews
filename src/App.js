import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const isSearched = (item, searchTerm) => item.toLowerCase().includes(searchTerm.toLowerCase());

let list = [
  {
    title: 'React.',
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

    this.state = { 
      list,
      searchTerm: ''
    };
    // bind를 하지 않아도 실행 가능.
    // bind는 언제 쓰는 것?
    // this.onDissmiss = this.onDismiss.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  
  onDismiss(id) {
    console.log(this);
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({list: updatedList});
  }

  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    const { 
      list, 
      searchTerm 
    } = this.state;

    return (
      <div className="page">
        <div className="interactions">
          <Search 
            value={searchTerm} 
            onChange={this.onSearchChange}
          >
            Search
          </Search>
        </div>
        <Table 
          list={list}
          onDismiss={this.onDismiss}
          searchTerm={searchTerm}
        />
      </div>
    );
  }
}

const Search = ({value, onChange, children}) => (
  <form>
    {children}
    <input type="text"
           value={value}
           onChange={onChange} />
  </form>
);

const Table = ({list, onDismiss, searchTerm}) => {
  const largeColumn = { width: '40%' };
  const mediumColumn = { width: '30%' };
  const smallColumn = { width: '10%' };

  return (
    <div className="table">
      {list.filter(item => isSearched(item.title, searchTerm)).map(item => 
        <div key={item.objectID} className="table-row">
          <span style={largeColumn}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={mediumColumn}>
            {item.author}
          </span>
          <span style={smallColumn}>
            {item.num_comments}
          </span>
          <span style={smallColumn}>
            {item.points}
          </span>
          <span style={smallColumn}>
            <Button 
              onClick={() => onDismiss(item.objectID)}
              className="button-inline"
            >
              dismiss1
            </Button>
          </span>
        </div>
      )}
    </div>
  )
}

const Button = ({onClick, children, className = ''}) => (
  <button 
    type="button"
    onClick={onClick}
    className={className}
  >
    {children}
  </button>
)

export default App;