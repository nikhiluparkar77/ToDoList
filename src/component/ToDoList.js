import React, { Component } from "react";

class ToDoList extends Component {
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
    if (localStorage.getItem("AddItem") === null) {
      this.setState({
        addData: [],
      });
    } else {
      let data = localStorage.getItem("AddItem").split(",");
      this.setState({
        addData: data,
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
    localStorage.setItem("AddItem", this.state.addData);
    this.setState({
      addData: AddData,
    });
  }
  DeleteItem(index) {
    let data = localStorage.getItem("AddItem").split(",");
    data.splice(index, 1);
    this.setState({
      addData: data,
    });
    localStorage.setItem("AddItem", this.state.addData);
    if (data.length === 0) {
      localStorage.removeItem("AddItem");
    }
  }
  render() {
    let data;
    if (this.state.addData.length === 0) {
      data = <h1>No Data In List</h1>;
    } else {
      data = (
        <table border="1" align="center">
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
      <div style={{ textAlign: "center" }}>
        <div>
          <h3>To Do List Using LocalStroage</h3>
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
          <hr />
          {data}
        </div>
      </div>
    );
  }
}

export default ToDoList;
