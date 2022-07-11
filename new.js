let arr = [1,2,3,4,5,6,54,4,4,1];
let brr = [101];
for(let i=0; i<101; i++){
    brr[i] = 0;
}
for(let i=0; i<arr.length; i++){
    brr[arr[i]]++;
}

for(let i =0; i<101; i++){
    console.log(i + "represent "+ brr[i] + ' times');
}
console.log('br=',...brr);