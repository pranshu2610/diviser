import React,{useState} from 'react';
import Button from '../../components/button/button';
import AddListItem from '../../components/list-item/add-list-item';
import ListItem from '../../components/list-item/list-item';

import './addition.scss';

const Addition = ({nextPage}) => {
    return(
        <div className="addition">
            <p className="welcome-title spacebelow">Add Friends</p>
            <ListItem deleteAction={()=>console.log("Delete")}/>
            <AddListItem addAction={()=>console.log('Add')} />
            <Button
                button_text="Next"
                action={nextPage} 
            />
        </div>
    )
}
export default Addition;