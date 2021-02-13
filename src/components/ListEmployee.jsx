import * as React from 'react';
import {DataGrid, RowSelectedParams} from '@material-ui/data-grid';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import {ButtonGroup, IconButton} from "@material-ui/core";
import {Component} from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployee extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedRows: [],
      employees: [],
      rows: [],
      columns: [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'firstName', headerName: 'First name', width: 200},
        {field: 'lastName', headerName: 'Last name', width: 200},
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 200,
          valueGetter: (params) =>
              `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        },
        {field: 'email_id', headerName: 'Email', width: 200},
        {field: 'career', headerName: 'Career', width: 250},
      ]
    };
  }

  componentDidMount() {
    EmployeeService.getEmployees()
        .then(e => {
          let tmpRow = []
          e.data.map(employee => {
            tmpRow.push({
              id: employee.id,
              lastName: employee.lastName,
              firstName: employee.firstName,
              email_id: employee.emailId,
              career: employee.career
            })
          });
          this.setState({rows: tmpRow})
        });
  }

  render() {
    return (
        <div style={{height: 400, width: '100%'}}>
          <ButtonGroup style={{margin: '10px 0 10px'}}>
            <IconButton color="secondary">
              <DeleteOutlinedIcon/>
            </IconButton>
            <IconButton color="primary">
              <AddCircleOutlineOutlinedIcon/>
            </IconButton>
            <IconButton style={{color: 'orange'}}>
              <BorderColorOutlinedIcon/>
            </IconButton>
          </ButtonGroup>
          <DataGrid
              rows={this.state.rows} columns={this.state.columns} pageSize={5}
              checkboxSelection columnBuffer={2}
              onSelectionChange={e => this.setState({selectedRows: e})}
          />
        </div>
    );
  }
}

export default ListEmployee;