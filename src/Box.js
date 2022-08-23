import React from 'react';


function Box(props) {
    

    const styles = {
        backgroundColor: (props.on) ? "#222222" : "#cccccc" 
    }
    
    return (
        <div key={props.id} on={props.on} style={styles} onClick={()=>props.toggle(props.id)}></div>
    )
}

export default Box

