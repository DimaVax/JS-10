// 1
const createBtn = (message) => {
    return alert(message);
}
const showMessage = (createBtn) => {
    const result = createBtn('Are you want to say Hello world?');
    let mes;
    if (result === undefined) {
        mes = alert('Hello world!');
    }
    return mes;
}
console.log(showMessage(createBtn));
// Я не зрозумів що ви маои на увазі в 2-гій помилці
// 2
const randomizeNum = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const guessNumber = (randomizeNum) => {
    const randomNum = randomizeNum(1, 100);
    const input = prompt('Вгадайте число від 1 до 100!');
    let message;
    if (randomNum === Number.parseFloat(input)) {
        message = alert(`Я вас вітаю! Ви вгадали це число! Це було число ${randomNum}`);
    }
    else {
        message = alert(`Ви не вгадали( Це було число ${randomNum}. Оновіть сторінку та спробуйте ще раз!`);
    }
    return message;
};
guessNumber(randomizeNum);

// 3
const creatingAlerts =(message) => {
    let i;
    let input;
    for (i = 0; i > -1; i++) {
        input = confirm(message);
        if (input === false) {
            break;
        }
        input = 0;
    }
    return i
}
const searchingClics = (creatingAlerts) => {
    const i = creatingAlerts('Клікайте поки вам не набридне, а коли набридне натисніть відмінити. Потім ми порахуємо скільки разів ви клікнули');
    return alert(i);
}
searchingClics(creatingAlerts);

// 4
const squareCallback = (a) => {
    return a ** 2;
};
const array = [1, 2, 3, 4, 5];
const applyCallbackToEachElement = function (array, squareCallback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(squareCallback(array[i]));
    }
    return result
}
console.log(applyCallbackToEachElement(array, squareCallback));

// 5
const createDiscount = (discount) => {
    return 1 - (discount * 0.01);
};
const calculateDiscountedPrice = (price, createDiscount) => {
    return price * createDiscount(10);
};
console.log(`Discounted price: ${calculateDiscountedPrice(100, createDiscount)}$`);