import React from 'react';
import './expense-item.scss';

const FinalExpense = () => {
    return(
        <div className="expense-item">
            <div className="top-row">
                <div className="top-row normal">
                    <div className="top-tag" style={{backgroundColor: 'yellow'}}>
                        <p className="tag-letter">A</p>
                    </div>
                    <div className="top-tag" style={{backgroundColor: '#fc194a'}}>
                        <p className="tag-letter">B</p>
                    </div>
                    <div className="top-tag" style={{backgroundColor: '#19fc59'}}>
                        <p className="tag-letter">C</p>
                    </div>
                    <p style={{margin: '0 2px'}}>+3</p>
                </div>
                <p className="item-amount">Sneha</p>
            </div>
            <div className="top-row down">
                <div className="short-list">
                    <p className="short-title">Need to Pay</p>
                    <div className="short-list">
                        <p className="short-item">Pranshu ₹ 200</p>
                    </div>
                </div>
                <div className="short-list">
                    <p className="short-title">Will Receive</p>
                    <div className="short-list">
                        <p className="short-item">All</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FinalExpense;