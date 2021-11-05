import React from "react";
import del from '../../assets/delete.png';
import './list-item.scss';

const ListItem = ({deleteAction}) => {
    return(
        <div className='list-item'>
            <p className="list-name">Pranshu</p>
            <div onClick={deleteAction}>
            <img src={del} alt='del' className='delete' />
            </div>
        </div>
    )
}
export default ListItem;