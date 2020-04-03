//numbers
//done
sum = () => {
    let a = +prompt("Введите первое число", "");
    let b = +prompt("Введите второе число", "");
    return sum = (a + b);
};
//done
mnojItem = () => {
    let sum = +(0.2 + 0.1).toFixed(1);
    let result = sum + '$';
    return result;

};

//done
readNumber = () => {
    let num;

    do {
        num = prompt("Введите число", 0);
    } while (!isFinite(num));

    if (num === null || num === '') return null;

    return +num;
};


random = (max) => {
    let result = Math.round(Math.random() * max);
    return result;

};

randomBetween = (min, max) => {
    let result = min + Math.random() * (max - min - 1);
    return result;

};
//done
randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);

};

//string
//done
// Если строка пуста, str[0] вернёт undefined,
// а у undefined нет метода toUpperCase(), поэтому мы получим ошибку.
ucFirst = (str) => {

    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);

};
//done
checkSpam = (str) => {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
};

//done
truncate = (str, maxlength) => {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;

};

askGetSum = () => {
    let sums = [];
    let num = 0;
    do {
        num = prompt('Введите число?', '');
        sums.push(num);
    } while (+num >= 0) ;
    let result = 0;
    for (let i = 0; i < sums.length - 1; i++) {
        result += +sums[i];
    }
    return result;
};

//done
extractCurrencyValue = (string) => {
    return +string.slice(1);

};

const findArr = ["test", 2, 1.5, false];

find = (arr, value) => {
    let result = arr.find(val => {
        return val === value;
    });
    return result ? arr.indexOf(result) : -1;
};

const filterArr = [5, 4, 3, 8, 0];

filterRange = (arr = [], a, b) => {
    return arr.filter(elem => elem >= a && elem <= b)
};


let maxsum1 = [-1, 2, 3, -9];
let maxsum2 = [2, -1, 2, 3, -9];
let maxsum3 = [-1, 2, 3, -9, 11];

getMaxSubSum = (arr = []) => {
    //каждый раз записываем (переписывае) в maxSum результат сравнения
    //за основу берем ноль, чтобы венуть 0, потому что 0 больше отрицательного числа
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        //вложенный массив происходит для элемента на котором остановились выше
        for (let j = i; j < arr.length; j++) {
            //sumFixedStart это рузельтат предыдущей + текущее значение
            sumFixedStart += arr[j]; //0+(-1);-1+2;1+3;4+(-9);
            //maxSum это сравнение предыдущего максимума с sumFixedStart
            maxSum = Math.max(maxSum, sumFixedStart);//0>-1;1>0;4>1;4>-9;
            //после первой итерации максимальная сумма это 4
            //после второй это 5 и после третей 5
        }
    }
    return maxSum;

};
getMaxSubSum2 = (arr = []) => {
    let maxSum = 0;
    let sumFixedStart = 0;
    for (let num of arr) {
        sumFixedStart += num;
        maxSum = Math.max(maxSum, num);
        if (sumFixedStart < 0) sumFixedStart = 0;
    }
    return maxSum;
};
//array methods
camelize = (str) => {
    const pos = str.indexOf('-') + 1;
    const symb = str.charAt(pos).toLocaleUpperCase();
    const first_word = str.slice(0, pos - 1);
    const second_word = str.slice(pos + 1);
    const class_name = first_word + symb + second_word;
    return class_name;
};

let customClasses = {
    className: 'open close'
};
addClass = (classes, cls) => {
    if (!classes.className.includes(cls)) {
        let stringArr = classes.className.split(' ');
        stringArr.push(cls);
        classes.className = stringArr.join(' ');
    }
    return classes;
};

let customObject = {
    className: 'this that add'
};


removeClass = (classes, cls) => {
    if (classes.className.includes(cls)) {
        let stringArr = classes.className.split(' ');
        classes.className = stringArr.filter(val => val !== cls).join(' ');
    }
    return classes;
};
const clearArr = [5, 3, 8, 1];

filterRangeInPlace = (arr, a, b) => {
    for (let el of arr) {
        if (a <= el && el <= b) break;
        else {
            arr.splice(arr.indexOf(el), 1);
        }
    }
    console.log(arr);
};

const sortReverseArr = [5, 2, 1, -10, 8];

sortReverse = (arr = []) => {
    return arr.sort().reverse();

};

const array = ["HTML", "JavaScript", "CSS"];

arrSorted = (arr) => {
    const arrSorted = arr.slice().reverse();
    console.log(arr);
    console.log(arrSorted);
    return arrSorted;
};

randomShake = (arr = []) => {
    const result = arr.sort(() => Math.random() - 0.5);
    return result;
};

let vasya = {name: "Вася", surname: "Пупкин", age: 23};
let masha = {name: "Маша", surname: "Печкина", age: 18};
let vovochka = {name: "Вовочка", surname: "Петров", age: 6};

let people = [vasya, masha, vovochka];


sortByAge = (array = []) => {
    return [array.concat().sort((a, b) => a.age - b.age)];
};

let petya = {name: "Петя", surname: "Иванов", age: 30};
let users = [vasya, petya, masha];

getNames = (array = []) => {
    return [array.map(person => person.name)];
};

getFullNames = (array = []) => {
    return array.map(person => {
        return {
            fullName: `${person.name} ${person.surname}`,
            id: person.id
        }
    })
};
const anagram = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        // отсортированные буквы слова воз --- взо
        let sorted = arr[i].toLowerCase().split("").sort().join("");
        //переписываем значение ключа по каждому отсортированному слову
        //если встретим такое
        //сначала 'взо': 'воз', затем 'взо': 'ЗОВ'
        obj[sorted] = arr[i];
    }

    return Object.values(obj);
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

// мой способо
function unique(arr = []) {
    let newArr = [];
    //перебираем все слова в массиве
    for (let i = 0; i <= arr.length - 1; i++) {
        //если соседи равны, прерываем и продолжаем
        if (arr[i] === arr[i + 1]) continue;
        else {
            //если нет, то зансим слово в новый массв
            newArr.push(arr[i]);
            //если в массиве набрались слова
            if (newArr.length > 2) {
                //проверяем чтобы в нем не оказалось повторов,
                //не учитвывем слово которое только что добавили
                for (let j = 0; j <= newArr.length - 2; j++) {
                    //если уже есть такое слово где то вначале,то удаляем из конца
                    //так как добавили его последним
                    if (newArr[j] === arr[i]) newArr.pop();
                }
            }
        }
    }
    return newArr;
}

//норм способ
function unique2(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}


shuffle = (arr = []) => {
    const _arr = arr.concat();
    let qty = arr.length;
    const returnArray = [];

    while (qty--) {
        const rand = Math.floor(Math.random() * _arr.length);
        returnArray.push(_arr[rand]);
        _arr.splice(rand, 1);
        if (!_arr.length) {
            return returnArray;
        }
    }
    return returnArray;
};

getAverageAge = (arr = []) => {
    let number = arr.map(person => person.age)
        .reduce((a, b) => a + b);
    return Math.ceil(number / 3);
};

//done
//objects as massive
function objectCreate() {
    let user = {};
    user.name = 'Вася';
    user.surname = 'Петров';
    console.log(user);
    user.name = 'Сергей';
    console.log(user);
    delete user.name;
    console.log(user);

}

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let schedule = {};

//    alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";
//
//    alert( isEmpty(schedule) ); // false

function sumSalaries(salaries) {

    let sum = 0;

    for (let name in salaries) {

        sum += salaries[name]
    }
    return sum;
}

let salaries = {
    "Vasya": 100,
    "Petya": 300,
    "Dasha": 250
};

function whoIsRich(salaries) {

    let max = 0;
    let maxName = "";
    for (let name in salaries) {
        if (max < salaries[name]) {
            max = salaries[name];
            maxName = name;
        }

    }
    return maxName;
}

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (isNumeric(menu[key])) {
            menu[key] *= 2;
        }

        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        }
    }
    alert("menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title);
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

let goods = ['apple', 'orange', 'banana'];

function getLastFruit() {
    alert(goods);
    alert(goods[goods.length - 1]);
}

function pushToArray() {
    goods[goods.length] = 'melon';
    alert(goods);
}

let styles = ['Джаз', 'Блюз'];

function unshiftArray() {
    alert(styles);
    styles[styles.length] = 'Рок-н-Ролл';
    alert(styles);
    styles[styles.length - 2] = 'Классика';
    alert(styles);
    alert(styles.shift());
    alert(styles);
    styles.unshift('Рэп', 'Регги');
    alert(styles);

}

let arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

function alertRandom() {
    let min = 0;
    let max = arr.length - 1;
    let rand = min + Math.floor(Math.random() * (max + 1 - min));
    //let rand = Math.floor(Math.random() * arr.length);
    alert(arr[rand])

}

function createElements() {
    let arr = [];
    let element = prompt('Элемент', '');
    if (element) {

        arr.push(element);
        element = prompt('Элемент', '')
    } else return arr;
//     arr.push( prompt('Элемент', ''));
//	arr.push( prompt('Элемент', ''));
//    arr.push( prompt('Элемент', ''));
    console.log(arr);


}

let classes = {
    className: 'open menu'
}

function filterClassName() {


}

let words = ["Есть", "жизнь", "на", "Марсе"];

function forToMap() {
    let lengthAr = words.map(function (word) {
        return word.length
    });
    alert(lengthAr)
}

let nmbs = [1, 2, 3, 4, 5];

function getSums(arr) {
    let result = [];
    if (!arr.length) return result;

    let totalSum = arr.reduce(function (prev, curr) {
        result.push(prev);// заносит prev - результат суммы
        console.log(prev + ' prev');
        console.log(curr + ' curr');
        return prev + curr // это значение возвращает prev

    });
    result.push(totalSum);
}

function getMnoj(arr) {
    let result = [];
    if (!arr.length) return result;
    let totalSum = arr.map(function (item, i) {
        if (arr[i - 1] > 0) {
            return item * arr[i - 1]

        }


    });
    result.push(totalSum);
    console.log(result)
}

//arguments
function argmnts() {
    return result = (arguments.length) ? 1 : 0;

}

function argumentsSum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
        console.log(typeof result);
    }
    return result;
}

//DATE
createDate = () => {
    let date = new Date(2012, 1, 20, 3, 12);
    return date;

};
let customDate = new Date(2012, 0, 3);

//мое решение
getWeekDay = (date) => {
    let week_day = date.getDay();
    let result;
    switch (week_day) {
        case 0:
            return result = 'вс';
        case 1:
            return result = 'пн';
        case 2:
            return result = 'вт';
        case 3:
            return result = 'ср';
        case 4:
            return result = 'чт';
        case 5:
            return result = 'пт';
        case 6:
            return result = 'сб';
    }

};

//учебник
getWeekDay2 = (date) => {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
};

//учебник
getLocalDay = (date) => {
    let day = date.getDay();

    if (day === 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
    }

    return day;
};

getDateAgo = (date, days) => {
    let day = date.getDate();
    let newDate = new Date(date);
    newDate.setDate(day - days);
    return newDate;

};

getLastDayOfMonth = (year, month) => {
    //мой вариант
    let date = new Date(year, month + 1);
    //вариант учебника, если передать 0,то выдаст последний день пред. месяца hack
    let date2 = new Date(year, month + 1, 0);
    date.setDate(date.getDate() - 1);
    return date.getDate();
};

getSecondsToday = () => {
    let now = new Date;
    let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((now - date) / 1000);
};

getSecondsToTomorrow = () => {
    let now = new Date;
    let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.round((date - now) / 1000);
};
let d = new Date(2014, 0, 30);


formatDate = (d) => {
    const date = +d;
    const now = Date.now();
    const diff = Math.ceil(now - date);
    console.log('diff', diff);
    if (0 < diff && diff <= 1000) {
        return 'только что';
    } else if (1000 <= diff && diff < 60000) {
        return `${Math.ceil(diff / 1000)} сек. назад`;
    }
    else if (60000 <= diff && diff < 3600000) {
        return `${Math.ceil(diff / 60000)} минут. назад`;
    }
    else if (3600000 <= diff && diff < 86400000) {
        return `${ Math.round(diff / 3600000)} часов. назад`;
    } else if (86400000 <= diff) {

        let full_date = d;
        full_date = [
            '0' + d.getDate(),
            '0' + (d.getMonth() + 1),
            '' + d.getFullYear(),
            '0' + d.getHours(),
            '0' + d.getMinutes()
        ].map(component => component.slice(-2));
        return full_date.slice(0, 3).join('.') + ' ' + full_date.slice(3).join(':');
    }
};
//учебник
formatDate2 = (date) => {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    // форматирование
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
};

returnFormatDate = () => {
    console.log(formatDate(new Date(new Date - 1)));
    console.log(formatDate(new Date(new Date - 30 * 1000)));
    console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
    console.log(formatDate(new Date(new Date - 79200 * 1000)));
    console.log(formatDate(new Date(new Date - 86400 * 1000)));
};