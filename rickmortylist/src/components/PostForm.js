import React, { Component } from 'react'

class PostForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       notes: ' '
    }
  }
  
  render() {
    const { notes } = this.state
    return (
      <div>
        <form>
          <div>
            <input type='text' name='note'></input>
          </div>
          
        </form>
      </div>
    );
  }
}

export default PostForm;
