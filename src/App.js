import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";
import {bindActionCreators} from 'redux'
import {fetchApiHandler} from './actions'
import {connect} from 'react-redux'


function App({fetchApiHandler , projects}) {

  useEffect(() => fetchApiHandler, []);


  return (
    <div className="App">
  {JSON.stringify.projects}
    </div>
  );
}

const mapStateToProps = (state) => ({
  projects: state.projects
})

const mapActionsToProps = (dispatch) =>
bindActionCreators({fetchApiHandler , projects},dispatch)

export default connect((mapStateToProps, mapActionsToProps) (App));
