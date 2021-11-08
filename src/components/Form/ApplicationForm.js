import React, { useState } from 'react';
import classes from './ApplicationForm.module.css';

const ApplicationForm = () => {
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        console.log('hi')
    }
    return (
        <div className={classes.new_application}>
            <h2>Add new application</h2>
            <form id="add_application" onSubmit={onSubmitHandler}>
                <button type="submit">Add Application</button>
            </form>
        </div>
    )
};

export default ApplicationForm;