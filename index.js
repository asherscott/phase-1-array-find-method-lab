// code your solution here

function superbowlWin(array) {
    const didWin = array.find(ele => ele.result === 'W') 
    return didWin ? didWin.year : undefined;
}