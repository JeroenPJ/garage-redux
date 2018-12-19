import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CarsIndex extends Component {
  componentWillMount = () => {
    this.props.fetchCars(this.props.garage);
  }

  renderCars = () => {
    return (
      this.props.cars.map((car) => {
        const url = `/cars/${car.id}`
        return (
          <Link to={url} key={car.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{car.brand} {car.model}</h5>
                <p className="card-text">owner: {car.owner}</p>
              </div>
            </div>
          </Link>
        )
      })
    );
  }

  render() {
    console.log(this.renderCars());
    return (
      <div>
        <h1>Index of {this.props.garage}</h1>
        <Link to="/new" className="btn btn-primary">Add car</Link>
        {this.renderCars()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage,
    cars: state.cars
  }
}

import { fetchCars } from '../actions/index.js';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars: fetchCars },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
