import React from 'react'

function StudentFuncComp(props){

    function handleNormalFunc(event) {
      // this how we prevent the exicution of event
      event.preventDefault();
      console.log("demonstrated to prevent the default behavior of the event! ")
    }

    const handleArroFunc = (event) => {
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
            <br /> <br />
            <a href="https://www.google.com/" onClick={handleNormalFunc}><button>Go to Google</button></a>

            {/* 
            <h2>In html</h2>
            <a href="https://www.google.com/" onclick="console.log('this is log'); return false">Preventing event in html</a>
             */}
        </div>
    )
}

export  default StudentFuncComp;