import React, { Component } from 'react'
import './App.css'

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

        </div>  
        
      </div>
    )
  }
}

// mapStateToProps: gets props passed from root-reducers.js > store.js (via connect)
const mapStateToProps = state => ({
  username: state.defaultUsername.username
})

// mapDispatchToProps: Send changed props to username.reducer.js > root-reducers.js > store.js (via connect)
const mapDispatchToProps = dispatch => ({
  setUserName: changedUserName => dispatch(setUserName(changedUserName))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
