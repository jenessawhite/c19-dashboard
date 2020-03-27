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
      <div className="container py-lg-3">
        <div className="row">
          <div className="col-12">
            <h1>Dashboard</h1>
            <div className="row">
              {
                data.map(item => {
                  let keys = Object.keys(item.data[0])

                  return (
                    <div className="col-12" key={item.name}>
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">{item.name}</h4>
                        </div>
                        <table className="table">
                          <thead>
                            <tr>
                            { keys.map(title => (
                              <th scope="col" key={title}>{title}</th>
                            ))}
                            </tr>
                          </thead>

                          <tbody>
                          { item.data.map((values, key) => (
                            <tr key={key}>
                              { Object.values(values).map((value, key) => (
                                <td key={key}>{value}</td>
                              ))}
                            </tr>
                          ))}
                          </tbody>
                        </table>

                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;