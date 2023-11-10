import React from 'react'

const Tracker = (props) => {
    const {name, value} = props
  return (
    <div>
        <h5>{name}: {value}</h5>
    </div>
  )
}

export default Tracker