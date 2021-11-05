import React, {useState} from 'react';
import Input from '../input/input';
import Select from 'react-select';
import './expense-item.scss';

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

    return(
        <div className="expense-item">
            <div className="top-row">
                <div className="top-tag">
                    <p className="tag-letter">A</p>
                </div>
                <p className="item-amount">₹ 5000</p>
            </div>
                <div className="short-list stretch">
                    <p className="short-title">Paid By</p>
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
                        <Input short={true} placeholder="Amt" />
                    </div>
                </div>
                <div className="short-list stretch">
                    <p className="short-title">Shared with</p>
                    <div className="top-row">
                        <p className="short-item">All</p>
                    </div>
                </div>
        </div>
    )
}
export default EditExpenseItem;