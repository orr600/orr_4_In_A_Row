import React from 'react';
import  '../BoardCss.css'
import Circle from './Circle'

class Board extends React.Component{
    
    buildTable(Arr){  
        let rowArray=[]
        for(let i=0;i<6;i++){

            let colArray=[]
            for(let j=0;j<7;j++){
                if(Arr[i][j]==="white"){
                    colArray.push(<Circle row={i} col={j} color="white" playTurn={this.props.playTurn}/>)
                }
                if(Arr[i][j]==="blue"){
                    colArray.push(<Circle row={i} col={j} color="blue" playTurn={this.props.playTurn}/>)
                }
                if(Arr[i][j]==="red"){
                    colArray.push(<Circle row={i} col={j} color="red" playTurn={this.props.playTurn}/>)
                }
        
            }
            rowArray.push(<tr>{colArray}</tr>)
         }
        return rowArray
    }
    
    render(){
        return (
            <table>{this.buildTable(this.props.colorArr)}</table>
            )
    }
}

export default Board