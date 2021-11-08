import React from 'react';
import classes from './ApplicationItem.module.css';

const ApplicationItem = props => {
    return (
        <tr key={props.application.id}>
            <td>{props.application.title}</td> 
            <td>{props.application.company}</td>
            <td>{props.application.status}</td>
        </tr>
    )
};

export default ApplicationItem;