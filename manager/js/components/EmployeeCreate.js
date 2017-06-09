import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate, employeeUpdate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  saveEmployee() {
    const { currentUser, name, phone, shift } = this.props;
    console.log(currentUser);
    this.props.employeeCreate({ currentUser, name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.saveEmployee.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { currentUser: state.auth.user, name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeCreate, employeeUpdate
})(EmployeeCreate);
