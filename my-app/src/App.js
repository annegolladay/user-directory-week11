import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import data from './data';
import Buttons from './components/Buttons';
import Directory from './components/Directory';
import Header from './components/Header';



export default class App extends Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      data: data
    }

    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
  }

  handleNext() {
    this.setState({
      index: this.state.index + 1,
    })
  }

  handlePrevious() {
    this.setState({
      index: this.state.index - 1,
    })
  }
  
  render() {
    let dataArr = this.state.data.map(person => {
      return <Directory  key={person.id} person={person}/>
    })

    return (
    <div className="App">
        <Header />
        {dataArr[this.state.index]}
        <Buttons handleNext={this.handleNext} handlePrevious={this.handlePrevious}/>
    </div>
    )
  }
}









// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
