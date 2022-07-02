var time="01:16:56 PM"

console.log(military(time));

function military(time){
    var hour=time.substring(0, 2)
    var min=time.substring(3, 5)
    var sec=time.substring(6, 8)
    if(time.charAt(9)=='P'){
        var times=hour+12;
    }
    
    var carry=0;
    if(sec+45>60){
        sec=sec+45-60;
        carry=1;
    }
    else sec+=45

    if(min+45+carry>60){
        min=min+45+carry-60;
        carry=1;
    }
    else{
        carry=0;
        min+=45;
    }

    if(times+carry>24){
        hour="00"
    }
    else hour=(times+1).toString()

    min=min.toString()
    sec=sec.toString()
    time=hour+":"+min+":"+sec;

    return time;
}