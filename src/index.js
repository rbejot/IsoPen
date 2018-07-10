import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Board from './components/Board'

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <Board />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)