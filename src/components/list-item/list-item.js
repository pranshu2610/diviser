import React from "react";
import del from '../../assets/delete.png';
import './list-item.scss';

const ListItem = ({name, originalSet, deleteAction}) => {

    const getUpdate = () => {
        let newSet = new Set(originalSet);
        newSet.delete(name);
        deleteAction(newSet);
    }

    return(
        <div className='list-item'>
            <p className="list-name">{name}</p>
            <div onClick={()=>getUpdate()}>
            <img src={del} alt='del' className='delete' />
            </div>
        </div>
    )
}
export default ListItem;