import React from 'react';
import './App.css';

import { connect } from "react-redux";
import { incNum, decNum } from "./redux/actions";

function App(props) {

  return (
    <div className="App">
      <input type="text" value={props.num} readOnly />
      <input type="button" value="Increment" onClick={props.incNum} />
      <input type="button" value="Decrement" onClick={props.decNum} />
    </div>
  );
}

const mapStateToProps = state => ({
  num: state.num,
});

const mapDispatchToProps = {
  incNum: incNum, 
  decNum: decNum
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
