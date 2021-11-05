import React, {useState} from "react";
import check from '../../assets/check.png';
import './list-item.scss';

const AddListItem = ({addAction}) => {
    const [editMode, setEditMode] = useState(false);
    return(
        <div className={editMode? 'list-item marginbot':'add-list-item'} onClick={() => setEditMode(true)}>
            {editMode ? 
            <div className="edit-list">
                <input className="list-input" placeholder="Type..."/>
                <div onClick={addAction}>
                <img src={check} alt='del' className='delete' />
                </div>
            </div>
            :<p className="list-name">Add New Name</p>}
        </div>
    )
}
export default AddListItem;