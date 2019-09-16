import React from 'react';
import  '../BoardCss.css'
import Board from './Board'

class App extends React.Component{

    state={colorArr:Array(6).fill(Array(7).fill("white")),
    blueTurn:true,
    ifWin:"No winner yet"}

    playTurn=(e)=>{
        
        let col=e.target.getAttribute("value")
        if(this.state.ifWin==="No winner yet" && this.state.colorArr[0][col]==="white"){ 
            let arr= this.state.colorArr.map((element) => element.slice())
            for(let i=5;i>=0;i--){
                if(arr[i][col]==="white"){
                    arr[i][col]= this.state.blueTurn ? "blue":"red"
                    break;
                }
            }
            const nextTurn= this.state.blueTurn ? false: true
            const ifWin= this.checkWin(arr,nextTurn ? "red":"blue")
            let isNoWinner=this.isNoWinner(arr)
            if(isNoWinner){
                this.setState({colorArr:arr, blueTurn:nextTurn,ifWin:"Game Over! There is no winner"})
            }
            else{
                this.setState({colorArr:arr, blueTurn:nextTurn,ifWin})
            }
        }    
    }

    isNoWinner(arr){
        for(let i=0;i<6;i++){
            for(let j=0;j<7;j++){
                if(arr[i][j]==="white"){
                    return false
                }
            }
        }
        return true
    }

    checkWin=(arr, color)=>{

        for(let i=0;i<3;i++){
            for(let j=0;j<4;j++){
                if(arr[i][j]===color && arr[i+1][j+1]===color && arr[i+2][j+2]===color && arr[i+3][j+3]===color){
                    return `${color} player won`;
                }
        }
    }
        for(let i=0;i<3;i++){
            for(let j=6;j>=3;j--){
                if(arr[i][j]===color && arr[i+1][j-1]===color && arr[i+2][j-2]===color && arr[i+3][j-3]===color){
                    return `${color} player won`;
                }
        }
    }
        for(let i=0;i<3;i++){
            for(let j=0;j<7;j++){
                if(arr[i][j]===color && arr[i+1][j]===color && arr[i+2][j]===color && arr[i+3][j]===color){
                    return `${color} player won`;
                }
        }
    }
        for(let i=0;i<6;i++){
            for(let j=0;j<4;j++){
                if(arr[i][j]===color && arr[i][j+1]===color && arr[i][j+2]===color && arr[i][j+3]===color){
                    return `${color} player won`;
                }
        }
    }
    return "No winner yet"
}

    newGame=()=>{
        this.setState({
            colorArr:Array(6).fill(Array(7).fill("white")),
            ifWin:"No winner yet",
            blueTurn:true
        })
    }

    whichTurn(){
        if(this.state.ifWin!=="No winner yet"){
            return "Game Over"
        }
        return this.state.blueTurn===true ? "Blue turn":"Red turn"
    }

    render(){
        return (
           <div>
             <h1 className="gameName">4 In A Row</h1>
                <div className="newGame">
                    <button type="button" onClick={this.newGame}>New Game</button>
                </div>
                <h5 className="turn">{this.whichTurn()}</h5>
                <Board colorArr={this.state.colorArr} playTurn={this.playTurn}/>
                <p className="winner">{this.state.ifWin}</p>
            </div>)
    }
}


export default App