import React from 'react';
import './expense-item.scss';

const ExpenseItem = ({label,colorCode,totalAmt,paidBy,sharedWithAll,sharedBy}) => {
    return(
        <div className="expense-item">
            <div className="top-row">
            <div className="top-tag" style={{backgroundColor: colorCode}}>
                    <p className="tag-letter">{label}</p>
                </div>
                <p className="item-amount">₹ {totalAmt}</p>
            </div>
            <div className="top-row down">
                <div className="short-list">
                    <p className="short-title">Paid By</p>
                    <div className="short-list">
                        {
                            paidBy.map(item => (<p className="short-item">{`${item.name} ₹ ${item.amt}`}</p>))
                        }
                    </div>
                </div>
                <div className="short-list">
                    <p className="short-title">Shared with</p>
                    <div className="short-list">
                        {
                            sharedWithAll ? <p className="short-item">All</p> : 
                            sharedBy.map(item => (<p className="short-item">{item}</p>))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExpenseItem;