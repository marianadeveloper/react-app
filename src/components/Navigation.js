
import React from 'react';
import {todos} from '../todos.json';

console.log(todos);

class Navigation extends React.Component {
  constructor () {
    super();
    this.status = {
      todos
    };
  }

  render(){ 
  return (
    //toda mi aplicacion esta dentro del div
    <nav className="navbar navbar-dark bg-dark">
    <a href=" " className="text-white ml-5 mr-5">
       <h3>            
       {"React - Tasks Web Application"}       
       </h3>
    </a>  
    </nav>
  );
}
}

export default Navigation;