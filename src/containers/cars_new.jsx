import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { reduxForm, Field } from 'redux-form';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Add a car</h1>

        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
          />

          <Field
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
          />

          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
          />

          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
          />

          <button className="btn btn-primary" type="submit"
                  disabled={this.props.pristine || this.props.submitting}>
            Create Car
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  }
}

import { createCar } from '../actions/index.js';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createCar: createCar },
    dispatch
  );
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, mapDispatchToProps)(CarsNew)
);
