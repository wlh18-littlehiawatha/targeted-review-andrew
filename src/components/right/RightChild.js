import React from 'react'
import {connect} from 'react-redux'


const RightChild = (props) => {
  console.log(props)
  return (
    <div className="right-child">
      Right Child - access stuff here
  <p>Value 1: {props.value1} </p>
      <p>Value 2: {props.value2} </p>
      <p>Value 3: {props.value3} </p>
      <p>Value 4: {props.value4} </p>
    </div>
  )
}

const mapStateToProps = reduxState =>{
  return reduxState
}

export default connect(mapStateToProps)(RightChild)
