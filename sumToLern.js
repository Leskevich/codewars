// function sumTo(s) {
//     let sum = 0
//     for (let i = 0; i <= s; i++) {
//         sum += i
//     }
// return sum
// }
// console.log(sumTo(1))
function sumTo1(s){
    if(s===1){
        return 1
    }else {
        return s + sumTo1(s-1)
    }
}
console.log(sumTo1(3))
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77));
// //Напишите функцию printList(list), которая выводит элементы списка по одному.
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
// function printList(list) {
//     let tmp = list;
//     while (tmp) {
//         alert(tmp.value);
//         tmp = tmp.next;
//     }
// }
//
// function printList1(list) {
//     alert(list.value)
//     if(list.next){
//         printList(list.next)
//     }
// }
