import React, {useState} from 'react';
import Input from '../input/input';
import Select from 'react-select';
import check from '../../assets/check.png';
import './expense-item.scss';
import Button from '../button/button';
import HollowButton from '../button/hollow-button';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

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
    const [selectedOption, setSelectedOption] = useState(null);
    const [paidBy, setPaidBy] = useState([]);
    return(
        <div className="expense-item">
            <div className="top-row">
            <div className="top-tag" style={{backgroundColor: 'yellow'}}>
                    <p className="tag-letter">A</p>
                </div>
                <p className="item-amount">₹ 5000</p>
            </div>
                <div className="short-list stretch">
                    <p className="short-title">Paid By</p>
                    <div className="short-list">
                        <p className="short-item">Sneha ₹ 3000</p>
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
                        <Input type={"number"} short={true} placeholder="Amt" />
                        <div>
                            <img src={check} alt='del' className='delete' />
                        </div>
                    </div>
                </div>
                <div className="short-list stretch">
                    <p className="short-title">Shared with</p>
                    <div className="top-row space-equal">
                        <HollowButton name="All" action={()=>console.log('All')} />
                        <HollowButton name="Uneven" action={()=>console.log('Uneven')} />
                    </div>
                    <div className="short-list">
                        <p className="short-item">Sneha</p>
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
                        
                        <div>
                            <img src={check} alt='del' className='delete' />
                        </div>
                    </div>
                </div>
            <Button short={true} button_text="Add Expense" action={()=>console.log("Add Expense")}/>
        </div>
    )
}
export default EditExpenseItem;