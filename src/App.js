import logo from './logo.svg';
import './App.css';
import React, { useEffect , useState } from "react";
import {bindActionCreators} from 'redux'
import {fetchApiHandler} from './actions'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'



function App({fetchApiHandler , projects}) {

  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  

useEffect(fetchApiHandler, []);

  return (
    <div className="App">
<div>
<h1 id='title'>kaay Labs Table</h1>
<DropdownButton
      alignRight
      title="Fillter"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}    
        >
              <Dropdown.Item eventKey="option-2">Completed</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">In Progress</Dropdown.Item>
      </DropdownButton>


<table id='students'>
               <thead>
                   <tr>
                       <th>Prject ID</th>
                       <th>Project Name</th>
                       <th>Description</th>
                       <th>Start-Date</th>
                       <th>End-Date</th>
                       <th>Company_Name</th>
                       <th>Status</th>
                   </tr>
               </thead>
               <tbody>
               {value == 'option-2' ? projects.projectsList.filter(it => it.status == 'Completed').map(u =>
                   <tr key={u.project_id}>
                       <td>{u.project_id}</td>
                       <td>{u.project_code}</td> 
                       <td>{u.description}</td>
                       <td>{u.start_date}</td>
                       <td>{u.end_date}</td>
                       <td>{u.company_name}</td>
                       <td>{u.status}</td>
                   </tr>
               ): projects.projectsList.filter(it => it.status == 'In Progress').map(u =>
                <tr key={u.project_id}>
                    <td>{u.project_id}</td>
                    <td>{u.project_code}</td> 
                    <td>{u.description}</td>
                    <td>{u.start_date}</td>
                    <td>{u.end_date}</td>
                    <td>{u.company_name}</td>
                    <td>{u.status}</td>
                </tr> )}
               </tbody>
           </table>
    </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  projects: state.projects
})

const mapActionsToProps = (dispatch) =>
bindActionCreators({fetchApiHandler},dispatch)

export default connect(mapStateToProps, mapActionsToProps)(App);
