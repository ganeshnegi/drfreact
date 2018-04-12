import React from 'react';
import './../App.css';

const UserTable = (props) =>{
    const user = props.user;
    const selUser = props.selUsers;
    const true_icon = <svg width='24' className="ok" height='24' viewBox='0 0 24 24' fill-rule='evenodd'><path d='M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0-2C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z'></path><path d='M10.3 13.6L7.7 11l-1.4 1.4 4 4L17.8 9l-1.4-1.4z'></path></svg>
    const false_icon=<svg width='24' className="notOk" height='24' viewBox='0 0 24 24' fill-rule='evenodd'><path d='M17.1 15.8l-1.5 1.5-3.7-3.8-3.8 3.8-1.5-1.5 3.8-3.8-3.7-3.8 1.5-1.5 3.8 3.8 3.9-3.8 1.5 1.5-4 3.8z'></path><path d='M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0-2C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z'></path></svg>;
    return (
        <tr>
            <td>
                <input data-event="select-all" id={user.id} class="bx--checkbox" type="checkbox" name={user.id} onClick={selUser}/>
                <label for={user.id} class="bx--checkbox-label" aria-label="Label name"></label>
            </td>
            <td>{user.full_name}</td>
            <td>{user.username}</td>
            <td>{user.is_superuser ? true_icon : false_icon }</td>
            <td>{user.is_staff ? true_icon : false_icon }</td>
            <td>{user.is_active ? true_icon : false_icon }</td>  
        </tr>
    );
}

export default UserTable;