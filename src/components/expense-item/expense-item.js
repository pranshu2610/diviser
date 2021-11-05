import React from 'react';
import './expense-item.scss';

const ExpenseItem = () => {
    return(
        <div className="expense-item">
            <div className="top-row">
                <div className="top-tag">
                    <p className="tag-letter">A</p>
                </div>
                <p className="item-amount">₹ 5000</p>
            </div>
            <div className="top-row down">
                <div className="short-list">
                    <p className="short-title">Paid By</p>
                    <div className="short-list">
                        <p className="short-item">Sneha ₹ 3000</p>
                        <p className="short-item">Pranshu ₹ 2000</p>
                    </div>
                </div>
                <div className="short-list">
                    <p className="short-title">Shared with</p>
                    <div className="short-list">
                        <p className="short-item">All</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExpenseItem;