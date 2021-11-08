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
                <div className={classes.form_control}>
                    <label for="position" className={classes.form_control__label}>Position</label>
                    <input type="text" id="position" className={classes.form_control__input} />
                </div>
                <div className={classes.form_control}>
                    <label for="company" className={classes.form_control__label}>Company</label>
                    <input type="text" id="company" className={classes.form_control__input} />
                </div>
                <button type="submit">Add Application</button>
            </form>
        </div>
    )
};

export default ApplicationForm;