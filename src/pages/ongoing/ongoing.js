import React from 'react';
import Button from '../../components/button/button';
import EditExpenseItem from '../../components/expense-item/edit-expense-item';
import ExpenseItem from '../../components/expense-item/expense-item';
import './ongoing.scss';

import { useSelector, useDispatch } from 'react-redux'

const Ongoing = ({nextPage}) => {
    const expense = useSelector((state) => state.expense.expense)
    const dispatch = useDispatch()
    return(
        <div className="ongoing">
            <p className="welcome-title spacebelow">Include your Expenses</p>
            <div className="scrollable-div">
            <EditExpenseItem />
            {
                expense.map(item => (
                    <ExpenseItem 
                        label={item.label}
                        colorCode = {item.colorCode}
                        totalAmt= {item.totalAmt}
                        paidBy= {item.paidBy}
                        sharedWithAll= {item.sharedWithAll}
                        sharedBy= {item.sharedBy}
                    />
                ))
            }
            </div>
            <Button
                button_text="Split Now"
                action={nextPage} 
            />
        </div>
    )
}
export default Ongoing;