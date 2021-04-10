import React, { useState } from "react";
// useState(): là hàm từ thư viện react thay thế this.state và this.setState cảu reactClasComponent
export default function UseStateDemo(props) {
  const [state, setState] = useState({ Number: 1 });
  const [number, setNumber] = useState(1);
  //array[0]
  //array[1]()
  /**this.state={
   * number:1
   * } */

  return (
    <div className="container">
      <h1 className="text-danger">Number:{number}</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <h1>{state.Number}</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          const newState = { Number: state.Number + 1 };
          setState(newState);
          //setState({
          //  number:state.number +1
          // })
        }}
      >
        +
      </button>
    </div>
  );
}
