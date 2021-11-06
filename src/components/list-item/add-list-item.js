import React, {useState} from "react";
import check from '../../assets/check.png';
import './list-item.scss';

const AddListItem = ({originalSet, addAction}) => {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState('');

    const getUpdate = () => {
        let newSet = new Set(originalSet);
        newSet.add(name);
        addAction(newSet);
    }

    return(
        <div className={editMode? 'list-item marginbot':'add-list-item'} onClick={() => {if (!editMode) {setEditMode(true);}}}>
            {editMode ? 
            <div className="edit-list">
                <input onChange={e=>setName(e.target.value)} className="list-input" placeholder="Type..."/>
                <div onClick={()=>{getUpdate(); setEditMode(false)}}>
                    <img src={check} alt='del' className='delete' />
                </div>
            </div>
            :<p className="list-name">Add New Name</p>}
        </div>
    )
}
export default AddListItem;