import './App.css';
import LifeCycleExamples from '../LifeCycleExamples';
import React from 'react';

class App extends React.Component {

  state = {
    isShow: true
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({isShow: !this.state.isShow})}>Hide / unhide</button>
        {this.state.isShow && <LifeCycleExamples/>}
      </div>
    );
  }
}


export default App;
