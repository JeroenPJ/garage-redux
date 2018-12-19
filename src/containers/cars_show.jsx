import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id)
    }
  }

  deleteCar = () => {
    this.props.deleteCar(this.props.car.id, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  render() {
    const car = this.props.car
    if (car) {
      const url = `/cars/${car.id}`
      return (
        <div>
          <h1>Info of {car.brand} {car.model}</h1>
          <Link to="/" className="btn btn-primary">Back home</Link>

          <div className="card" key={car.id}>
            <div className="card-body">
              <p className="card-text">owner: {car.owner}</p>
              <p className="card-text">plate: {car.plate}</p>
            </div>
          </div>

          <a onClick={this.deleteCar} href="#" className="btn btn-danger">Delete</a>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
  }
}

function mapStateToProps(state, ownProps) {
  const carId = parseInt(ownProps.match.params.id, 10)
  const car = state.cars.find(c => c.id == carId)

  return {
    garage: state.garage,
    car: car
  }
}

import { fetchCar, deleteCar } from '../actions/index.js';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar: fetchCar, deleteCar: deleteCar },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
