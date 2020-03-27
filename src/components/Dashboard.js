import React, { Component } from 'react';
import Tabletop from 'tabletop';
import Section from './Section';

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
      callback: this.formatData,
      simpleSheet: false
    })
  }

  formatData = (googleData, tabletop) => {
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
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container py-lg-3">
        <div className="row">
          <div className="col-12 py-3">
            <h1>Dashboard</h1>
            <div className="row mt-3">
              {data.map((item, key) => {
                let total = item.data.reduce((prev, curr) => {
                  return prev + Number(curr['Total']);
                }, 0);

                let descriptor;
                let icon;

                switch (item.name) {
                  case 'Activities':
                    descriptor = 'Completed'
                    icon = 'fas fa-tv'
                    break;
                  case 'Fitness':
                    descriptor = 'workouts'
                    icon = 'fas fa-dumbbell'
                    break;
                  case 'Games':
                    descriptor = 'Games Played'
                    icon = 'fas fa-dice'
                    break;
                  case 'Puzzles':
                    descriptor = 'Pieces'
                    icon = 'fas fa-puzzle-piece'
                    break;
                  default:
                    descriptor = ''
                    icon = ''
                }

                return (
                  <div className="col-md-3" key={item.name+key}>
                    <div className="card generl-card p-2">
                      <div className="card-body">
                        <div className="card-title text-xl">
                          {item.name}{` `}<i className={icon}></i>
                        </div>

                        <p className="card-text text-left total">
                          {total}{` `}
                          <span>{descriptor}</span>
                        </p>
                      </div>
                    </div>
                    
                  </div>
                )
              })}
            </div>
            <div className="row">
              {data.map(item => {
                let keys = Object.keys(item.data[0])

                return (<Section key={item.name} name={item.name} data={item.data} keys={keys} />)
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;