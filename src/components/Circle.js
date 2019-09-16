import React from 'react';

const Circle= (props)=>{

    const {row,col,color} = props

    const playTurn=(e)=>{
        props.playTurn(e)
    }

    return (
        <td className={`col ${col} row ${row} square`}>
             <div className={`circle ${color}`} onClick={(e)=>{playTurn(e)}} value={col}></div>
        </td>
    )
}

export default Circle