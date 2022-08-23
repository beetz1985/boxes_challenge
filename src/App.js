import React from 'react';
import boxes from './boxes';
import Box from './Box';


function App() {

    const [state, setSquares] = React.useState(boxes)
    
    function toggle(id) { 

        //My Method
        //Is my method changing state directly????
        // setSquares((s)=>{
        //     const boxArr = [...s];
        //     const indx = boxArr.findIndex(v=>v.id === id)
        //     boxArr[indx].on = (boxArr[indx].on) ? false : true;
        //     return boxArr;
        // })

        
        //His Method
        setSquares((s)=>{
            return s.map((v)=>{
                return (v.id === id) ? {...v, on: !v.on} : v;
            })
        })
    }


    const boxElements = state.map((v)=>{
        return <Box key={v.id} id={v.id} on={v.on} toggle={toggle}/>
    });

    return (
        <div className="box-parent">
        {boxElements}
        </div>
    )
}

export default App