function getMiddle(s) {
    let sum = Number.isInteger([...s].length / 2)
    let arr = [...s]
        if (sum){
            return `${arr[arr.length/2-1 ]}${arr[[arr.length/2]]}`
        }else {
            return arr[Math.ceil(arr.length/2)-1]
        }
}
function getMiddle2(s)
{
    let len = Math.floor(s.length/2);
    return s.length%2 == 0 ? s.charAt(len -1) + s.charAt(len) : s.charAt(len);
}

console.log(getMiddle("test"))