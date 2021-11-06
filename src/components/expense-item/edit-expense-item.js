import React, {useState} from 'react';
import Input from '../input/input';
import Select from 'react-select';
import check from '../../assets/check.png';
import './expense-item.scss';
import Button from '../button/button';
import HollowButton from '../button/hollow-button';
import {LABEL_AND_CODE} from '../../helper/labelAndCode';

import { useSelector, useDispatch } from 'react-redux'
import { updateExpense } from '../../store/expenseSlice'

const customStyles = {

    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'black',
    }),
    singleValue: (provided, state) => {

      return { ...provided };
    }
}

const EditExpenseItem = () => {
    const friends = useSelector((state) => state.friends.friends)
    const expense = useSelector((state) => state.expense.expense)
    const dispatch = useDispatch()

    const options = [];
    friends.map(item => {
        options.push({value: item, label: item});
    })

    const [selectedOption, setSelectedOption] = useState(null);
    const [paidBy, setPaidBy] = useState(new Set());
    const [amount, setAmount] = useState(0);

    const [sharedWithAll, setSharedWithAll] = useState(true);
    const [sharedBy, setSharedBy] = useState(new Set());

    const addNewPayment = () => {
        let a = new Set(paidBy);
        a.add({name: selectedOption.value, amt: amount})
        setPaidBy(a);
        setSelectedOption(null);
        setAmount(0);
    }
    const addNewShare = () => {
        let a = new Set(sharedBy);
        a.add(selectedOption.value)
        setSharedBy(a);
    }

    let ListPaidBy = [...paidBy]; 
    let ListSharedBy = [...sharedBy]; 

    const getTotalAmt = () => {
        let t = 0;
        paidBy.forEach(item => {
            t+=parseInt(item.amt);
        })
        return (t);
    }

    const updateExpenseStore = () => {
        let a = [...expense];
        let b = LABEL_AND_CODE(a.length);
        let total = getTotalAmt();
        a.push({
            label: b.label,
            colorCode: b.color,
            totalAmt: total,
            paidBy: [...paidBy],
            sharedWithAll: sharedWithAll,
            sharedBy: [...sharedBy]
        })
        setPaidBy(new Set())
        setSharedBy(new Set())
        setSharedWithAll(true)
        setAmount(0);
        setSelectedOption(null);

        dispatch(updateExpense(a));
    }

    let b = LABEL_AND_CODE(expense.length);
    return(
        <div className="expense-item">
            <div className="top-row">
            <div className="top-tag" style={{backgroundColor: b.color}}>
                    <p className="tag-letter">{b.label}</p>
                </div>
                <p className="item-amount">₹ {getTotalAmt()}</p>
            </div>
                <div className="short-list stretch">
                    <p className="short-title">Paid By</p>
                    <div className="short-list">
                        {
                            ListPaidBy.map(item => (<p className="short-item">{`${item.name} ₹ ${item.amt}`}</p>))
                        }
                    </div>
                    <div className="top-row">
                        <Select
                            styles={customStyles}
                            value={selectedOption}
                            defaultValue={selectedOption}
                            label="Select Name"
                            onChange={setSelectedOption}
                            options={options}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 10,
                                colors: {
                                ...theme.colors,
                                  text: 'black',
                                  primary25: 'black',
                                  primary: 'black',
                                },
                            })}
                        />
                        <Input value={amount} action={setAmount} type={"number"} short={true} placeholder="Amt" />
                        <div onClick={()=>addNewPayment()}>
                            <img src={check} alt='del' className='delete' />
                        </div>
                    </div>
                </div>
                <div className="short-list stretch">
                    <p className="short-title">Shared with</p>
                    <div className="top-row space-equal">
                        <HollowButton selected={sharedWithAll} name="All" action={()=>setSharedWithAll(true)} />
                        <HollowButton selected={!sharedWithAll} name="Uneven" action={()=>setSharedWithAll(false)} />
                    </div>
                    {
                        sharedWithAll ? null :
                        <div style={{width: '100%'}}>
                            <div className="short-list" style={{margin: '10px 0'}}>
                                {
                                    ListSharedBy.map(item => (<p className="short-item">{item}</p>))
                                }
                            </div>
                            <div className="top-row">
                                <Select
                                    styles={customStyles}
                                    defaultValue={selectedOption}
                                    label="Select Name"
                                    onChange={setSelectedOption}
                                    options={options}
                                    theme={(theme) => ({
                                        ...theme,
                                        borderRadius: 10,
                                        colors: {
                                        ...theme.colors,
                                        text: 'black',
                                        primary25: 'black',
                                        primary: 'black',
                                        },
                                    })}
                                />
                                
                                <div onClick={()=>addNewShare()}>
                                    <img src={check} alt='del' className='delete' />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            <Button short={true} button_text="Add Expense" action={()=>updateExpenseStore()}/>
        </div>
    )
}
export default EditExpenseItem;