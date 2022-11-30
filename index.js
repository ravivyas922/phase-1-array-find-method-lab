// code your solution here
function superbowlWin(record)
{
    
    let array = record.find(season => season.result === "W");
    if(array == undefined)
    {
        return undefined;
    }
    else
    {
        return array.year;
    }

    
}
