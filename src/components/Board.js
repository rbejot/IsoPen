import React from 'react'

const Row = ({type}) => {
  let cells = []
  for (let i = 0; i < 18; i++) {
    if ((i % 2 === 0 && type === "up") || (i % 2 !== 0 && type === "down")) {
      cells.push(
        <div key={i} style={{display:'flex'}}>
          <div className="cellUpLeft"></div>
          <div className="cellUpRight"></div>
        </div>
      )
    } else {
      cells.push(
        <div key={i} style={{display:'flex'}}>
          <div className="cellDownLeft"></div>
          <div className="cellDownRight"></div>
        </div>
      )
    }
  }  
  return (
    <div className="row" style={{marginLeft:'-24px'}}>
      {cells}
    </div>
  )
}

const Rows = () => {
  let rows = []
  for (let i = 0; i < 17; i++) {
    if (i % 2 === 0)
      rows.push(<Row key={i} type={"up"}/>)
    else
      rows.push(<Row key={i} type={"down"}/>)
  }
  return (
    <div>
      {rows}
    </div>
  )
}

const Board = () => {
  return (
    <div className="board">
      <Rows />
    </div>
  )
}

export default Board