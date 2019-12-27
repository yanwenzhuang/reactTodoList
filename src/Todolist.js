import React, { Component, Fragment } from "react";
import TodoItem from './todoItem';
import "./style.css";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          {/*这是一个input框 */}
          <label htmlFor="insertArea">输入内容：</label>
          <input
            className="input"
            id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChang.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提价</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) =>{
              return (
                <TodoItem 
                  content={item} 
                  index={index}
                  deleteItem={this.handleItemDelete.bind(this)}
                />
              )
            })
          }
        </ul>
      </Fragment>
    );
  }
  handleButtonTest() {
    console.log("this的指向：", this);
  }
  handleInputChang(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }
  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }
}
export default Todolist;
