import React, { useState } from 'react';
import classes from './ApplicationForm.module.css';

const ApplicationForm = () => {
    const [positionState, setPositionState] = useState('');
    const [companyState, setCompanyState] = useState('');
    const [statusState, setStatusState] = useState(0);

    const positionChangeHandler = (e) => {
        setPositionState(e.target.value);
        
    };
    const companyChangeHandler = (e) =>{
        setCompanyState(e.target.value);
    };

    const statusChangeHandler = (e) =>{
        setStatusState(e.target.value);
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(statusState);
        setPositionState('');
        setCompanyState('');
        setStatusState(0)
    }
    return (
        <div className={classes.new_application}>
            <h2>Add new application</h2>
            <form id="add_application" onSubmit={onSubmitHandler}>
                <div className={classes.form_control}>
                    <label for="position" className={classes.form_control__label}>Position</label>
                    <input 
                        type="text" 
                        id="position" 
                        className={classes.form_control__input} 
                        value={positionState}
                        onChange={positionChangeHandler}
                        />
                </div>
                <div className={classes.form_control}>
                    <label for="company" className={classes.form_control__label}>Company</label>
                    <input 
                        type="text" 
                        id="company" 
                        className={classes.form_control__input} 
                        value={companyState}
                        onChange={companyChangeHandler}
                        />
                </div>
                <div className={classes.form_control}>
                    <label for="status" className={classes.form_control__label}>Status</label>
                    <select value={statusState} name="status" id="status" className={classes.form_control__input} onChange={statusChangeHandler} >
                        <option value="0">Applied</option>
                        <option value="1">Requested Interview</option>
                        <option value="2">Awaiting Decision</option>
                        <option value="3">Declined</option>
                    </select>

                </div>
                <button type="submit">Add Application</button>
            </form>
        </div>
    )
};

export default ApplicationForm;