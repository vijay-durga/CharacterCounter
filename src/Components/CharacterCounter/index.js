import {Component} from 'react'
import {v4} from 'uuid'

import './index.css'

const noUserInputsImg =
  'https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png'

class CharacterCounter extends Component {
  state = {
    userInputList: [],
    userInput: '',
  }

  getUserInputs = event => {
    this.setState({userInput: event.target.value})
  }

  addUserInput = event => {
    event.preventDefault()
    const {userInput, userInputList} = this.state
    const newInputId = v4()
    const inputDetails = {userInput, id: newInputId}
    this.setState({userInputList: [...userInputList, inputDetails]})
    this.setState({userInput: ''})
    // console.log(inputDetails)
  }

  render() {
    const {userInputList, userInput} = this.state

    const noUserInputs = userInputList.length === 0
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="characters-display-container">
            <h1 className="heading1"> Count the characters like a Boss...</h1>
            {noUserInputs ? (
              <img src={noUserInputsImg} alt="no user inputs" />
            ) : (
              <ul>
                {userInputList.map(each => (
                  <li key={each.id} className="list-item">
                    <p>
                      {each.userInput} :<span> {each.userInput.length}</span>{' '}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="character-counter-container">
            <h1 className="heading2"> Character Counter</h1>
            <form className="input-container" onSubmit={this.addUserInput}>
              <input
                type="text"
                className="input-box"
                placeholder="Enter the Characters here"
                onChange={this.getUserInputs}
                value={userInput}
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
