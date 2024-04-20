// code your solution here
function superbowlWin(record){
    const win = record.find(thing => thing.result === "W");
    if(win !== undefined){
        return win.year; 
    }
    else{return undefined;}
}


