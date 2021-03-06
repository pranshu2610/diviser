import React from 'react';
import FinalExpense from '../../components/expense-item/final-expense';
import {algo} from '../../helper/algorithm';
import CsvDownload from 'react-json-to-csv';
import './splittime.scss';

import { useSelector } from 'react-redux'

const SplitTime = ({nextPage}) => {
    const expense = useSelector((state) => state.expense.expense);
    const friends = useSelector((state)=> state.friends.friends);
    const category = useSelector((state) => state.category);
    var output = [];
    expense.forEach(item => {
        output = algo({...item,friends: friends, cache: output});
    })
    var display = {};
    friends.forEach(item => {
        display[item] = {event: new Set(), pay: {}, get: {}}
    })
    output.forEach(item => {
        display[item.person].event.add(item.event);
        if (Object.keys(display[item.person].pay).includes(item.to)) {
            display[item.person].pay[item.to]+=item.amount
        }
        else {
            display[item.person].pay[item.to]=item.amount
        }

        display[item.to].event.add(item.event); 
        if (Object.keys(display[item.to].get).includes(item.person)) {
            display[item.to].get[item.person]+=item.amount
        }
        else {
            display[item.to].get[item.person]=item.amount
        }

    })
    return(
        <div className="splittime">
            <p className="welcome-title spacebelow">Split Time!!</p>
            <div className="scrollable-div">
            {
                Object.keys(display).map(i => (
                    <FinalExpense name={i} events={[...display[i].event]} get={display[i].get} pay={display[i].pay} />
                ))
            }
            </div>
            <CsvDownload 
                data={output}
                filename={`${category.categoryName}-${category.categoryType}-diviser.csv`}
                style={{ //pass other props, like styles
                    height: "60px",
                    width: "250px",
                    color: "white",
                    borderRadius: "50px",
                    border: "none",
                    fontSize: "18px",
                    cursor: "pointer",
                    background: "linear-gradient(90deg, rgba(144,62,255,1) 0%, rgba(183,56,255,1) 100%)"
                }}
            >
                Export to CSV
            </CsvDownload>
        </div>
    )
}
export default SplitTime;