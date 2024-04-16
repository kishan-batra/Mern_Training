import React, { useState } from 'react'

const ControlledName = (props) => {
    let {name,onUpdate}=props;
    // const [name, setName] = useState("JAI SHREE RAM");
    // const [sname, setSname] = useState("HAR HAR MAHADEV");
    return (
       <div className='container mt-4'>
        <div className='fs-1'>{name}</div>
    {/* Bubbling of Event - When Event fire from Parent Component to the child component */}
     <button className='btn btn-warning' onClick={onUpdate}>ChangeName</button> 
    </div>
    )
}

export default ControlledName
