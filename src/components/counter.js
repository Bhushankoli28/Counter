import React from "react";


 const Counter = (props) => {
     
    return(
        <div className='tcs'>
            <div >Value is {props.value}</div>
        <button className="btn btn-success" onClick={() => props.setValue(props.value+1)}>Increase</button>
        <button className="btn btn-danger" onClick={() => props.setValue(props.value-1)}>Decrease</button>
        <button className="btn btn-primary" onClick={() => props.setValue(props.value*2)}>Double Value</button>    
    </div>
    )
}




export default Counter;
