import React from 'react';
import ApplicationItem from './ApplicationItem';
import classes from './ApplicationList.module.css';

const ApplicationList = props => {
    return (
        <div className={classes.container}>
            <h2>Applications</h2>
            <table className={classes.application_list}>
                <thead className={classes.application_list__header}>
                    <th>Position</th>
                    <th>Company</th>
                    <th>Status</th>
                </thead>
                <tbody>

                    {props.data.map(application=>
                        <ApplicationItem application={application}/>
                    )}
                </tbody>
            </table>
            
        </div>
    )
};

export default ApplicationList;