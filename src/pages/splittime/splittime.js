import React from 'react';
import FinalExpense from '../../components/expense-item/final-expense';
import Button from '../../components/button/button';
import './splittime.scss';

const SplitTime = ({nextPage}) => {
    return(
        <div className="splittime">
            <p className="welcome-title spacebelow">Split Time!!</p>
            <FinalExpense />
            <Button
                button_text="Restart Again"
                action={nextPage} 
            />
        </div>
    )
}
export default SplitTime;