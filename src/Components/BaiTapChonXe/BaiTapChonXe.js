import React, { useState } from "react";

export default function BaiTapChonXe(props) {
  const [state, setState] = useState({
    srcImg: "./car/products/black-car.jpg",
  });

  return (
    <div className="container">
      <h1 className="display-4"> Bài Tập chọn xe</h1>
      <div className="row mt-5">
        <div className="col-6">
          <img src={state.srcImg} className="w-100" />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <button
                className="btn "
                style={{
                  backgroundColor: "black",
                  cursor: "pointer",
                  color: "white",
                }}
                onClick={() => {
                  setState({ srcImg: "./car/products/black-car.jpg" });
                }}
              >
                black car
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn"
                style={{
                  backgroundColor: "red",
                  cursor: "pointer",
                  color: "white",
                }}
                onClick={() => {
                  setState({ srcImg: "./car/products/red-car.jpg" });
                }}
              >
                red car
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn"
                style={{
                  backgroundColor: "gray",
                  cursor: "pointer",
                  color: "white",
                }}
                onClick={() => {
                  setState({ srcImg: "./car/products/steel-car.jpg" });
                }}
              >
                steel car
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn"
                style={{
                  backgroundColor: "silver",
                  cursor: "pointer",
                  color: "white",
                }}
                onClick={() => {
                  setState({ srcImg: "./car/products/silver-car.jpg" });
                }}
              >
                silver car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
