import React, { Component } from 'react'
import './App.css'
import diagram from './assets/redux-demo-diagram.png'

// Redux
import { connect } from 'react-redux'
import { setUserName, setUserAge} from './redux/username/username.actions'

class App extends Component {

  setUserName = (event) => {
    this.props.setUserName(event.target.value)
  }
  setUserAge = () => {
    this.props.setUserAge(this.props.userage + 1)
  }
  render() {
    return (
      <div className="app">

        <div className="app-wrap">

          <h1>Redux Demo</h1>

          <div>
            <span>Default Userage:</span> 
            {this.props.userage}
          </div> 
          <button onClick={this.setUserAge}>Increment user age by 1</button>
          
          <div>
            <span>Default Username:</span> 
            {this.props.username}
          </div>

          <label htmlFor="changeUserName">
            <span>Enter a new username:</span>
            <input 
              onChange={this.setUserName}
              type="text"
              id="changeUserName"
            />
          </label>
          <img className="diagram" src={diagram} alt="Diagram" />

        </div>  
        
      </div>
    )
  }
}

// mapStateToProps: gets props passed from root-reducers.js > store.js (via connect)
/*
  Note:
  - username: and userage: keys are ARBITRARY names - they could be anything.
  -- These keys are then used as props within this (App.js) document.
  - currentUserName comes from root-reducer.js 
  - .username and .userage come from INITIAL_STATE of username.reducer.js
*/
const mapStateToProps = state => ({
  username: state.currentUserName.username,
  userage: state.currentUserName.userage
})

// mapDispatchToProps: Send changed props via username.actions.js to username.reducer.js > root-reducers.js > store.js (via connect)
/*
  Note:
  - setUserName: and setUserAge: are imported from username.actions.js
  - updatedUserName and updatedUserAge values are ARBITRARY names - they could be anything.
*/
const mapDispatchToProps = dispatch => ({
  setUserName: updatedUserName => dispatch(setUserName(updatedUserName)),
  setUserAge: updatedUserAge => dispatch(setUserAge(updatedUserAge))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
