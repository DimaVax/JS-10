// 1
// const createBtn = function(message) {
//     const btn = alert(message);
//     return btn;
// }
// const showMessage = function(createBtn) {
//     const result = createBtn('Are you want to say Hello world?');
//     let mes;
//     if(result === undefined){
//        mes = alert('Hello world!');
//     }
//     return mes;
// }
// console.log(showMessage(createBtn));

// 2
// const randomizeNum = function(min, max){
//     const randomNum = Math.round(Math.random() * (max - min) + min);
//     return randomNum;
// } 

// const guessNumber = function(randomizeNum) {
//     const randomNum = randomizeNum(1, 100);
//     const input = prompt('Вгадайте число від 1 до 100!');
//     let message;
//     if(randomNum === Number.parseFloat(input) ){
//         message = alert(`Я вас вітаю! Ви вгадали це число! Це було число ${randomNum}`);
//     }
//     else{
//         message = alert(`Ви не вгадали( Це було число ${randomNum}. Оновіть сторінку та спробуйте ще раз!`);
//     }
//     return message;
// };
// guessNumber(randomizeNum);

// 3
// const creatingAlerts = function(message){
//     let i;
//     let input;
//     for(i = 0; i > -1; i++){
//         input = confirm(message);
//         if(input === false){
//             break;
//         }
//         input = 0;
//     }
//     return i
// }
// const searchingClics = function(creatingAlerts){
//     const i = creatingAlerts('Клікайте поки вам не набридне, а коли набридне натисніть відмінити. Потім ми порахуємо скільки разів ви клікнули');
//     const message = alert(i)
//     return message;
// }
// searchingClics(creatingAlerts);

// 4
// const squareCallback = function(a){
//     const square = a ** 2;
//     return square;
// };
// const array = [1, 2, 3, 4, 5];
// const applyCallbackToEachElement = function (array, squareCallback){
//     let result = [];
//     for(let i = 0; i < array.length; i++){
//         result.push(squareCallback(array[i]));
//     }
//     return result
// }
// console.log(applyCallbackToEachElement(array, squareCallback));

// 5
const createDiscount = function(discount) {
    const changedDiscount = 1 - (discount * 0.01);
    return changedDiscount
};
const calculateDiscountedPrice = (price, createDiscount) => {
    return price * createDiscount(10);
};
console.log(`Discounted price: ${calculateDiscountedPrice(100, createDiscount)}$`);