import React, { Component } from 'react';

class Section extends Component {
  render() {
    const { name, data, keys } = this.props;
    return (
      <div className="col-6 my-2" key={name}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
          </div>
          <table className="table">
            <thead>
              <tr>
                {keys.map(title => (
                  <th scope="col" key={title}>{title}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((values, key) => (
                <tr key={key}>
                  {Object.values(values).map((value, key) => (
                    <td key={key}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

export default Section;
