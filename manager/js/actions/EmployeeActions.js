import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
      type: EMPLOYEE_UPDATE,
      payload: { prop, value },
    };
};

export const employeeCreate = ({ currentUser, name, phone, shift }) => {
  return (dispatch) => {
    console.log(name);
    console.log(phone);
    console.log(shift);
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE_SUCCESS });
      Actions.employeeList({ type: 'reset' });
    });
  };
};

export const employeesFetch = (currentUser) => {
  return (dispatch) => {
    console.log(currentUser);
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snap => {
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snap.val() });
    });
  };
};

export const employeeSave = ({ currentUser, name, phone, shift, uid }) => {
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeeDelete = ({ currentUser, uid }) => {
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove().then(() => {
        Actions.employeeList({ type: 'reset' });
      });
  };
};
