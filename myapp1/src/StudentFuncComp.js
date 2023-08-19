import React from 'react'

function StudentFuncComp(props){

    function handleNormalFunc() {
        console.log("this is normal function this argument : ")
    }

    const handleArroFunc = () => {
      console.log("this arrow function ", this)
    }
    return (
        <div>
            <hr />
            <h2>Student Fucntion Base Component</h2>
            <h3>Roll : {props.roll}</h3>
            <button onClick={handleNormalFunc}>Click Me</button>
            <br /> <br />
            <button onClick={handleArroFunc}>Click Me</button>
        </div>
    )
}

export  default StudentFuncComp;