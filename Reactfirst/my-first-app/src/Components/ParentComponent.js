import React, { Component } from "react";
import ChildCompnent from "./ChildCompnent";
class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ParentName: "Parent",
    };
    this.GreetParent = this.GreetParent.bind(this);
  }
  GreetParent() {
    alert(`I am from  ${this.state.ParentName} component `);
  }
  GreetParent(childmsg) {
    alert(`I am from ${childmsg}`);
  }
  render() {
    return (
      <div>
        <ChildCompnent greetHandler={this.GreetParent}></ChildCompnent>
      </div>
    );
  }
}

export default ParentComponent;
