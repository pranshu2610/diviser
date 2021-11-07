export const algo = ({label, paidBy, sharedWithAll, sharedBy, totalAmt, friends, cache}) => {
    var output = [...cache];
    var sharePerHead = 0;
    if (sharedWithAll) {
        sharePerHead = totalAmt/friends.length;
        if (paidBy.length===1) {
            friends.forEach(item => {
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
        sharePerHead = totalAmt/(sharedBy.length+paidBy.length);
        if (paidBy.length===1) {
            sharedBy.forEach(item => {
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