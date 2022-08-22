import React from 'react';


function Box(props) {

    const [state, setState] = React.useState(props.on);

    const styles = {
        backgroundColor: state ? "#222222" : "transparent"
    };

    function handleClick() {
        setState((v)=>{
            return (v) ? false : true;
        })
    }

    return (
        <div key={props.id} on={props.on} style={styles} onClick={handleClick}></div>
    )
}

export default Box

