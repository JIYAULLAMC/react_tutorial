import React from "react";


const Student = props => {
    return (
        <div>
        <h2>This is <em>{props.name}</em> Component</h2>
        <p>This is how we are reusing the components passing the props and reusing it </p>
        </div>
    );
}

export default Student;