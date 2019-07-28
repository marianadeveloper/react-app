import React from 'react';


class TodoForm extends React.Component{

    constructor () {
        super();
        this.status = {
          title: '',
          responsible:'',
          description:'',
          priority:'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleInput(e){
          console.log(e.target.value, e.target.name);
          const {value, name} = e.target;
          this.setState({
              [name]: value
          })
          console.log(this.state)
      }

      handleSubmit(e){
          e.preventDefault();
          this.props.onAddTodo(this.state);
          console.log('sending the data...')
      }

      render(){
          return(
              <div className="card ml-4 p-4">
                  <form className="card-body" onSubmit={this.handleSubmit}>
                      <div className="form-group">
                      <h3>Add New Task</h3>
                      </div>
                      <div className="form-group">
                          <input
                          type="text"
                          name="title"
                          onChange={this.handleInput}
                          className="form-control"
                          placeholder="Title"
                          />
                      </div>
                      <div className="form-group">
                          <input
                          type="text"
                          name="responsible"
                          className="form-control"
                          placeholder="Responsible"
                          onChange={this.handleInput}
                          />
                      </div>
                      <div className="form-group">
                      <input
                          type="text"
                          name="description"
                          className="form-control"
                          placeholder="Description"
                          onChange={this.handleInput}
                          />
                      </div>
                      <div className="form-group">
                      <select
                          name="priority"
                          className="form-control"
                          onChange={this.handleInput}
                          >
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                          </select>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                  </form>
              </div>
          )
      }

}

export default TodoForm;