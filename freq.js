let inp=[1,1,1,1,2,2,2,3,3,4];

let n=inp.length;
console.log(frequent(inp, n));

function frequent(inp, n) {

    var map=new WeakMap();
    inp.forEach(element => {
        if(map.has(element)){
            map.set(element, map.get(element)+1)
        }
        else{
            map.set(element, 1)
        }
    })
    var min=inp[0], max=inp[0];
    var minValue=n, maxValue=0;
    for (const [key, value] of Object.entries(map)) {
        if(value==minValue || value==maxValue){
            if(value==maxValue){
                max=Math.min(maxValue, key)
            }
            if(value==minValue){
                min=Math.min(minValue, key)
            }
        }
        else if(value>maxValue){
            max=key
            maxValue=value
        }
        else if(value<minValue){
            min=key
            minValue=value
        }
    }
    return {
        max: maxValue,
        min: minValue
    };

}