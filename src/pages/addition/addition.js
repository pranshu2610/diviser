import React,{useState} from 'react';
import Button from '../../components/button/button';
import AddListItem from '../../components/list-item/add-list-item';
import ListItem from '../../components/list-item/list-item';
import './addition.scss';

import { useSelector, useDispatch } from 'react-redux'
import { updateFriends } from '../../store/friendSlice'

const Addition = ({nextPage}) => {
    const count = useSelector((state) => state.friends.friends)
    const dispatch = useDispatch()
    const [friends, addFriends] = useState(count);
    
    const nextPageAction = () => {
        dispatch(updateFriends([...friends]));
        nextPage();
    }

    let friendArray = [...friends];
    return(
        <div className="addition">
            <p className="welcome-title spacebelow">Add Friends</p>
            {
                friendArray.map(item => (
                    <ListItem key={item} name={item} originalSet={friends} deleteAction={addFriends}/>
                ))
            }
            <AddListItem originalSet={friends} addAction={addFriends} />
            <Button
                button_text="Next"
                action={()=>nextPageAction()} 
            />
        </div>
    )
}
export default Addition;