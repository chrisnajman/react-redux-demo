import React, { Component } from 'react'
import './App.css'
import diagram from './assets/redux-demo-diagram.png'

// Redux
import { connect } from 'react-redux'
import { setUserName} from './redux/username/username.actions'

class App extends Component {

  setUserName = (event) => {
    this.props.setUserName(event.target.value)
  }
  render() {
    return (
      <div className="app">

        <div className="app-wrap">

          <h1>Redux Demo</h1>
          
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
const mapStateToProps = state => ({
  username: state.currentUserName.username
})

// mapDispatchToProps: Send changed props via username.actions.js to username.reducer.js > root-reducers.js > store.js (via connect)
const mapDispatchToProps = dispatch => ({
  setUserName: updatedUserName => dispatch(setUserName(updatedUserName))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
