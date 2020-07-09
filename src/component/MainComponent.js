import React, { Component } from "react";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AddItem: "",
      addData: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.DeleteItem = this.DeleteItem.bind(this);
  }
  componentDidMount() {
    if (this.state.addData.length === 0) {
      this.setState({
        addData: [],
      });
    }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    let AddData = this.state.addData;
    AddData.push(this.state.AddItem);
    this.setState({
      addData: AddData,
    });
  }
  DeleteItem(index) {
    let AddData = this.state.addData;
    AddData.splice(index, 1);
    this.setState({
      addData: AddData,
    });
  }
  render() {
    let data;
    if (this.state.addData.length === 0) {
      data = <h1>No Data In List</h1>;
    } else {
      data = (
        <table border="1">
          <thead>
            <th style={{ width: "40%" }}>Info</th>
            <td style={{ width: "40%" }}>Action</td>
          </thead>
          <tbody>
            {this.state.addData.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
                <td>
                  <button onClick={(e) => this.DeleteItem(index)}>
                    Detele
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return (
      <div>
        <div>
          <h3>To Do List</h3>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              value={this.state.AddItem}
              name="AddItem"
              onChange={this.onChange}
            />
            <button type="submit" type="submit">
              AddItem
            </button>
          </form>
          {data}
        </div>
      </div>
    );
  }
}

export default MainComponent;
