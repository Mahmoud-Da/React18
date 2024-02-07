import React from "react";
import "../Index.css";

const Order = () => {
  return (
    <>
      <form>
        <div className="order-body">
          <div className="row g-5">
            <div className="col">
              <label for="inputFull-Name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFull-Name"
                placeholder="Adam Smith"
              />
            </div>
            <div className="col">
              <label for="inputPhone-Number" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPhone-Number"
                placeholder="080-1234-5678"
              />
            </div>
            <div className="col">
              <label for="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="lili171819@gmail.com"
              />
            </div>
            <div className="col-5">
              <label for="inputFlower" className="form-label">
                Flower
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFlower"
                placeholder="Rose, Lyly..."
              />
            </div>
            <div className="col">
              <label for="inputFlower-style" className="form-label">
                Flower style
              </label>
              <select className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-4">
              <label for="inputPrice" className="form-label">
                Price
              </label>
              <input type="text" className="form-control" id="inputPrice" />
            </div>
            <div className="col-4">
              <label for="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="col-4">
              <label for="inputAddress2" className="form-label">
                Address 2
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="col-3">
              <label for="inputCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Hanoi"
              />
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Order;
