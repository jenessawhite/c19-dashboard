import React, { Component } from 'react';
import Tabletop from 'tabletop';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: this.props.sheetURL,
      callback: googleData => {
        Object.keys(googleData).forEach((key) => {
          this.setState({
            data: [
              {
                name: key,
                data: googleData[key].elements
              },
              ...this.state.data
            ]
          })
        });

      },
      simpleSheet: false,
      // debug: true
    })
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;