import React, {Component} from 'react';
import {Button, FormControl, FormHelperText, Grid, Input, InputLabel, Modal, TextField} from "@material-ui/core";
import EmployeeService from "../services/EmployeeService";

class AddEmployee extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      firstName: '',
      lastName: '',
      emailId: '',
      career: ''
    }
  }

  handleOpen() {
    this.setState({open: true})
  }

  handleClose() {
    this.setState({open: false})
  }

  handleCancelForm() {
    this.handleClose()
    this.resetForm();
  }

  resetForm() {
    this.setState({
      firstName: '',
      lastName: '',
      emailId: '',
      career: ''
    })
  }

  handleSaveForm() {
    this.handleClose()
    const employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      career: this.state.career
    }
    EmployeeService.addEmployee(employee)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    this.resetForm()
  }

  render() {
    const body = (
        <div style={{width: '50%', backgroundColor: 'whitesmoke', margin: "auto", padding: '20px'}}>
          <h3 id="simple-modal-title" style={{textAlign: "center",}}>Add new employee</h3>
          <form autoComplete="off" style={{padding: '10px', textAlign: "auto"}}>
            <TextField
                label="First name"
                variant="outlined"
                color="primary"
                onChange={(e) => {
                  this.setState({firstName: e.target.value})
                }}
                value={this.state.firstName}
            />
            <TextField
                label="Last name"
                variant="outlined"
                color="primary"
                onChange={(e) => {
                  this.setState({lastName: e.target.value})
                }}
                value={this.state.lastName}
            />

            <TextField
                type="email"
                label="Email Address"
                variant="outlined"
                color="primary"
                onChange={(e) => {
                  this.setState({emailId: e.target.value})
                }}
                value={this.state.emailId}
            />
            <TextField
                label="Career"
                variant="outlined"
                color="primary"
                onChange={(e) => {
                  this.setState({career: e.target.value})
                }}
                value={this.state.career}
            />
          </form>
          <Button color="primary"
                  onClick={() => this.handleSaveForm()}
          >Save</Button>
          <Button color="secondary"
                  onClick={() => this.handleCancelForm()}
          >Cancel</Button>
        </div>
    );
    return (
        <div>
          <button type="button" onClick={() => this.handleOpen()}>
            Open Modal
          </button>
          <Modal
              open={this.state.open}
              onClose={() => this.handleClose()}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
    );
  }
}

export default AddEmployee;