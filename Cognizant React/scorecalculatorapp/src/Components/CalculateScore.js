import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {

    const average = (props.goal / props.total) * 100;

    return (
        <div className="box">
            <h2>Student Details</h2>

            <p><b>Name :</b> {props.name}</p>

            <p><b>School :</b> {props.school}</p>

            <p><b>Total Marks :</b> {props.total}</p>

            <p><b>Goal :</b> {props.goal}</p>

            <h3>Average : {average}%</h3>
        </div>
    );
}

export default CalculateScore;