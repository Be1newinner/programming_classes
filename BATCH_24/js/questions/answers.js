// Fibbonaci series

function fibb(n){
let prev_sl = 0;
let prev = 1;
let result = 0;
for(let i = 3; i <= n; i++) {
    result = prev_sl + prev;
    prev_sl = prev;
    prev = result;
} 
return result;
}

