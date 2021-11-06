import React from 'react';
import { labelObj } from '../../helper/labelAndCode';
import './expense-item.scss';

const FinalExpense = ({name, events, get, pay}) => {

    return(
        <div className="expense-item">
            <div className="top-row">
                <div className="top-row normal">
                {
                    events.map(item => (
                        <div className="top-tag" style={{backgroundColor: `${labelObj[item]}`}}>
                            <p className="tag-letter">{item}</p>
                        </div>
                    ))
                }
                {
                    events.length > 3 ? <p style={{margin: '0 2px'}}>{`+${events.length-3}`}</p> : null
                }   
                </div>
                <p className="item-amount">{name}</p>
            </div>
            <div className="top-row down">
                <div className="short-list">
                    <p className="short-title">Need to Pay</p>
                    <div className="short-list">
                        {
                            Object.keys(pay).map(i => (
                                <p className="short-item">{`${i} ₹ ${pay[i]}`}</p>
                            ))
                        }
                    </div>
                </div>
                <div className="short-list">
                    <p className="short-title">Will Receive</p>
                    <div className="short-list">
                        {
                            Object.keys(get).map(i => (
                                <p className="short-item">{`${i} ₹ ${get[i]}`}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FinalExpense;