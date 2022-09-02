import React from "react"

function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59e391" : "white"
    }
    return (
        <div 
            onClick={props.holdDice} 
            className="die-face" 
            style={styles}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>     
    )
}
export default Die

