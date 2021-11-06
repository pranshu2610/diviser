export const algo = ({label, paidBy, sharedWithAll, sharedBy, totalAmt, friends, cache}) => {
    var output = [...cache];
    if (sharedWithAll) {
        var sharePerHead = totalAmt/friends.length;
        if (paidBy.length===1) {
            friends.map(item => {
                if (item!==paidBy[0].name) {
                    let o = {
                        event: label,
                        person: item,
                        amount: sharePerHead,
                        to: paidBy[0].name
                    }
                    output.push(o);
                }
            })
        }
    }
    else {
        var sharePerHead = totalAmt/(sharedBy.length+paidBy.length);
        if (paidBy.length===1) {
            sharedBy.map(item => {
                let o = {
                    event: label,
                    person: item,
                    amount: sharePerHead,
                    to: paidBy[0].name
                }
                output.push(o);
            })
        }
    }
    return output
}