import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';

export default function Results(props) {

    return (
        <div className='resultsContainer'>
            <div className='geninfo-container'>
                <div>
                    <b>Full Name:</b> {props.fullName}
                </div>
                <div>
                    <b>Email:</b> {props.email}
                </div>
                <div>
                    <b>Phone:</b> {props.phone}
                </div>
            </div>
            <div className='edinfo-container'>
                <div>
                    <b>School:</b> {props.schoolName}
                </div>
                <div>
                    <b>Degree:</b> {props.degree}
                </div>
                <div>
                    <b>Date Attended</b> {props.gradDate}
                </div>
            </div>
            <div className='pacinfo-container'>
                <div>
                    <b>Company Name:</b> {props.companyName}
                </div>
                <div>
                    <b>Position Title:</b> {props.title}
                </div>
                <div>
                    <b>Date Worked</b> {props.dateWorked}
                </div>
                <div className='descriptionResults'>
                    <b>Description:</b> {props.description}
                </div>
                <button onClick={props.editResume} disabled={props.disableEditBtn}>Edit</button>
            </div>

        </div>
    );
}