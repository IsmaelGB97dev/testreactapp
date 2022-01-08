import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {id:0, rating: 4, title: 'Harry Potter', image: 'libro1.jpg'},
        {id:1, rating: 3, title: 'Las mil y una noche', image: 'libro2.jpg'},
        {id:2, rating: 5, title: 'Azul', image: 'libro3.jpg'},
        {id:3, rating: 2, title: '50 sombras de Grey', image: 'libro4.jpg'},
        {id:4, rating: 1, title: 'Between love and hate', image: 'libro5.jpg'}
      ]
    };
  }

  render(){
    return(
      <div>  
        <Menu title="LibreriAPP" />
        <List items={this.state.books} />
      </div>
    );
  }
}

export default App;
