import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super();

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'

    }

    this.updateColor = this.updateColor.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateFamily = this.updateFamily.bind(this)
    this.updateEditStatus = this.updateEditStatus.bind(this)
  }
  // write all four methods compiled into one method
  // updater(cb) {
  //   return cb(val);
  // }
  // updateColor
  updateColor(val) {
    
      this.setState({

        fontColor: val

      })
    
  }
  // updateSize
  updateSize(val) {
    
      this.setState({

        fontSize: val

      })
    
  }
  // updateFamily
  updateFamily(val) {
    
      this.setState({
        fontFamily: val

      })
    
  }

  //updateEditStatus
    updateEditStatus(val) {
      this.setState({
        allowEdit: val
      })
    }

    
  //   // updateEditStatus
  //   updateEditStatus(val) {
  //     this.setState({
  //       allowEdit: val
  //     })
  //   }

  //    // updateColor
  // updateColor(val) {
  //   if (this.state.allowEdit == 'true') {
  //     this.setState({

  //       fontColor: val

  //     })
  //   }
  // }
  // // updateSize
  // updateSize(val) {
  //   if (this.state.allowEdit == 'true') {
  //     this.setState({

  //       fontSize: val

  //     })
  //   }
  // }
  // // updateFamily
  // updateFamily(val) {
  //   if (this.state.allowEdit == 'true') {
  //     this.setState({
  //       fontFamily: val

  //     })
  //   }
  // }

  //   // updateEditStatus
  //   updateEditStatus(val) {
  //     this.setState({
  //       allowEdit: val
  //     })
  //   }

    render() {
      return (
        <div>
          <div className="headerBar">
            { /* Render EditToggle */}
            <div><EditToggle update={this.updateEditStatus} allowEdit={this.state.allowEdit} /></div>
            { /* Render ColorChanger */}
            <div><ColorChanger update={this.updateColor} allowEdit={this.state.allowEdit} /></div>
            { /* Render SizeChanger */}
            <div><SizeChanger update={this.updateSize} allowEdit={this.state.allowEdit} /></div>
            { /* Render FamilyChanger */}
            <div><FamilyChanger update={this.updateFamily} allowEdit={this.state.allowEdit} /></div>
          </div>
          <div className="textArea">
            { /* Render TextContainer */}
            <TextContainer
              fontColor={this.state.fontColor}
              fontSize={this.state.fontSize}
              fontFamily={this.state.fontFamily}
            />
          </div>
        </div>
      )
    }
  }

  export default App;
