import React from 'react';
import boxes from './boxes';
import Box from './Box';

function App(props) {

    const [state, setState] = React.useState(boxes)


    const boxElements = state.map((v)=>{
        return <Box key={v.id} on={v.on}/>
    });


    return (
        <div className="box-parent">
        {boxElements}
        </div>
    )
}

export default App