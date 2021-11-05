import React from 'react';
import Button from '../../components/button/button';
import EditExpenseItem from '../../components/expense-item/edit-expense-item';
import ExpenseItem from '../../components/expense-item/expense-item';
import './ongoing.scss';

const Ongoing = ({nextPage}) => {
    return(
        <div className="ongoing">
            <p className="welcome-title spacebelow">Include your Expenses</p>
            <ExpenseItem />
            <EditExpenseItem />
            <Button
                button_text="Split Now"
                action={nextPage} 
            />
        </div>
    )
}
export default Ongoing;