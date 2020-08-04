// Рекурсия и стек
//done
sumTo = (n) => {
    let result = null;
    for (let i = 1; n >= i; n--) {
        result += n;
    }
    return result;
};
//done
sumToRec = (n) => {
    if (n === 1) return n;
    else {
        return n + sumToRec(n - 1);
    }
};

//Решение по формуле: sumTo(n) = n*(n+1)/2:
//арифм прогрессия
//done
sumToArifm = (n) => {
    return n * (n + 1) / 2;
};
//done
factorial = (n) => {
    return (n !== 1) ? n * factorial(n - 1) : 1;
};

//учебник
fib = (n) => {
    //0+1+1+2 = 3
    //0+1+1+2+3+5+8=13
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

//учебник
function fib2(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printList = (obj) => {

//if (!Object.entries(obj)) return;
    let ar = Object.entries(obj);
    for (let subarr of ar) {
        //console.log(subarr[1]);
        if (typeof subarr[1] === 'number') console.log(subarr);
        else if (!+subarr[1]) return;
        else printList(subarr);
    }

};


//Замыкание
//done
function chainSum(a) {
    //получил а

    return function (b) {
        //второй вызов получил b и видит a
        return a + b; // берёт "a" из внешнего лексического окружения
    };

}

testSome = () => {
    some = (t) => {
        let c = t;
        //выполнение прибавления одного и того же числа
        //подобно счетчику
        //с будет равно результату посл вызова 4 6 8 10
        return () => {
            return c += t;
        };
    };
    let test = some(2);
    console.log(test());
    console.log(test());
    console.log(test());

};

function makeCounter() {
    let count = 0;

    return function () {
        return count++; // есть доступ к внешней переменной "count"
    };
}

let counter = makeCounter();

//done
filtred = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];

    inBetween = (a, b) => {
        //получает агрументы
        return (c) => {
            //получает от arr.filter каждое число в массиве
            return c >= a && c <= b;
        }
    };

    inArray = (arr = []) => {
        let compared = arr;//1,2,10
        return (compare) => {//each of arr
            return compared.find((a) => {
                return a === compare;
            });
        };
    };

//учебник
    function inArray2(arr) {
        return function (x) {
            return arr.includes(x);
        };
    }

    console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
    console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

};
//done
sortBy = () => {
    let users = [
        {name: "John", age: 20, surname: "Johnson"},
        {name: "Pete", age: 18, surname: "Peterson"},
        {name: "Ann", age: 19, surname: "Hathaway"}
    ];

    byField = (field = '') => {
        //получает поле от вызова
        //создана в лекс окружении сорт и видит объекты для сравнения
        return (a, b) => a[field] > b[field] ? 1 : -1;
    };
    users.sort(byField('name'));
    console.log(users);
    users.sort(byField('age'));
    console.log(users);
    users.sort(byField('surname'));
    console.log(users);

};

//done
function makeArmy() {
    let shooters = [];
    //цикл имеет свое лексич окружение в отл от while
    //поэтому у стрелков свой номер
    for (let i = 0; i < 10; i++) {
        let shooter = function () { // функция shooter
            console.log(i); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}

let army = makeArmy();

//Объект функции, NFE

//done
function makeCounter2() {

    function counter() {
        return counter.count++;
    }

    //вызываем функцию из функуции
    //работает подобно методам у объектов
    //меняем свойсвто count
    //можем обратиться к этому свойству из вне,
    //т.к. сделали его доступным
    counter.set = function (value) {
        return counter.count = value;
    };

    counter.decrease = function () {
        return counter.count--;
    };

    counter.count = 0;

    return counter;
}

//учебник
function makeCounter3() {
    //count недоступна из вне, не явл свойством
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}


showCountner = () => {
    let counter2 = makeCounter2();
    console.log(counter2());//0
    console.log(counter2());//1
    console.log(counter2.set(4));//4
    console.log(counter2.decrease());
};

//учебник
//done
function chainSum2(a) {
    //старое число
    let currentSum = a;

//след число
    function f(b) {
        currentSum += b;
        return f;
    }

    //рекурсия
    // function f(b) {
    //     currentSum += b;
    //     return f(); // <-- рекурсивный вызов
    // }

//в конце  return f, т.е.
//происходит автоматическое приведение к примитиву,код функции
    //чтобы функция вызвалась с числом дальше,
    // возвращаем это число в момент НАШЕГО преобразования
    f.toString = function () {
        return currentSum;
    };

    return f;

}


showChainSum2 = () => {
    console.log(chainSum2(1)(2)(3))

};

//setTimeout и setInterval
//done
printNumbers = (from, to) => {

    let current = +from;

    let timerId = setInterval(function () {
        console.log(current);
        if (current === +to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
};

printNumbers2 = (from, to) => {

    let current = +from;

    let timerId = setTimeout(function () {
        console.log(current);
        if (current === +to) {
            clearTimeout(timerId);
        } else {
            current++;
            printNumbers2(current, to)
        }
    }, 1000);
};

//учебник
function printNumbers3(from, to) {
    let current = from;

    setTimeout(function go() {
        alert(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}


// Привязка контекста к функции

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password === "123") ok();
    else fail();
}

let user3 = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};
//сработает без bind, user
//askPassword(() => user.loginOk(), () => user.loginFail());

function askPassword2(ok, fail) {
    let password = prompt("Password?", '');
    if (password === "123") ok();
    else fail();
}

let user4 = {
    name: 'John',
    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

//Прототипное наследование
//done
protoChain = () => {

    let head = {
        glasses: 1
    };

    let table = {
        pen: 3,
        __proto__: head
    };

    let bed = {
        sheet: 1,
        pillow: 2,
        __proto__: table
    };

    let pockets = {
        money: 2000,
        __proto__: bed
    };
    console.log(pockets.pen);
    console.log(bed.glasses);
    // pockets → bed → table → head.
};

//done
humster = () => {

    // let hamster = {
    //
    //     eat(food) {
    //         this.stomach=[];
    //         this.stomach.push(food);
    //     }
    // };
    //
    // let speedy = {
    //     __proto__: hamster
    // };
    //
    // let lazy = {
    //     __proto__: hamster
    // };
    //учебник
    let hamster = {
        stomach: [],

        eat(food) {
            //this = speedy
            //не трогам пустое свойстово стомак,
            //чтобы оно было пустым для lazy
            // стомак у speedy заполняется у hamster нет
            this.stomach = [...this.stomach, food];
        }
    };

    let speedy = {
        __proto__: hamster
    };

    let lazy = {
        __proto__: hamster
    };

// Этот хомяк нашёл еду
    speedy.eat("apple");
    speedy.eat("orange");
    console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
    console.log(lazy.stomach); // apple
};


//F.prototype
//done
protoConstructor = () => {
    function Obj() {
        this.someval = 'name';
    }

    //нельзя переписывать свойсвто прототайп!
    //Obj.prototype={};
    console.log(Obj);
    let obj = new Obj();
    obj.fullName = 'old name';
    console.log(obj);
    // в конструкторе ссылка на прототип obj
    let obj2 = new obj.constructor();
    console.log(obj2);
};
//Встроенные прототипы
//done
addFuncMethod = () => {
    //образаемся к прототипу функуции
    Function.prototype.defer = function (ms) {
        //this это функция hello
        setTimeout(this, ms);
    };

    function hello() {
        console.log("Hello!");
    }

    console.log(hello.defer(1000));
};


//done
addFuncMethod2 = () => {
    Function.prototype.defer = function (ms) {
        let f = this;
        return function (...args) {
            setTimeout(() => f(...args), ms);
            //учебник
            //setTimeout(() => f.apply(this, args), ms);
        }
    };

    function hello(a, b) {
        console.log(a + b);
    }

    console.log(hello.defer(1000)(1, 2));
};

addSpecial = () => {
//создавая через дескриптор устанавливаем всему false
    let dictionary = Object.create(null, {
        toString: { // определяем свойство toString
            value() { // значение -- это функция
                return Object.keys(this).join();
            }
        }
    });


// ваш код, который добавляет метод dictionary.toString

// добавляем немного данных
    dictionary.apple = "Apple";
    dictionary.juice = "Apple juice"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
    for (let key in dictionary) {
        console.log(key); // "apple", затем "__proto__"
    }

// ваш метод toString в действии
    alert(dictionary);
};

//Класс: базовый синтаксис

//done
newClock=()=>{

    function Clock({ template }) {

        let timer;

        function render() {

        }

        this.stop = function() {
            clearInterval(timer);
        };

        this.start = function() {
            render();
            timer = setInterval(render, 1000);
        };

    }

    let clock = new Clock({template: 'h:m:s'});
    //clock.start();

    class Clock2{
        constructor({template}){
            this.template = template;

        }
        render(){
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            let output = this.template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }
        stop(){
            clearInterval(this.timer);
        };
        start(){
            this.render();
            this.timer = setInterval(this.render.bind(this), 1000);
        };
    }
    let clock2 = new Clock2({template:'h:m:s'});
    clock2.start();
    clock2.stop();

};

newRabbit =()=>{
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }

    class Rabbit extends Animal {
        constructor(name) {
            super(name);
            this.created = Date.now();
        }
    }

    let rabbit = new Rabbit("Белый кролик");
    console.log(rabbit.created)

};
newClock2=()=>{

    class Clock {
        constructor({ template }) {
            this.template = template;
        }

        render() {
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            let output = this.template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        stop() {
            clearInterval(this.timer);
        }

        start() {
            this.render();
            this.timer = setInterval(this.render.bind(this), 1000);
        }
    }
  class ExtendedClock extends Clock{
      constructor(options) {
          super(options);
          let { precision = 1000 } = options;
          this.precision = precision;
      }

      start() {
          this.render();
          this.timer = setInterval( this.render.bind(this), this.precision);
      }
  }
let clock = new ExtendedClock({template:'h:s:m'}, 1000);
    console.log(clock.precision);
    clock.start();
};
test = () => {
    class z {
        constructor() {
            this.name = 'ddd'
        }

        t() {
            console.log(this.name)
        }
    }
    console.log(z.prototype);
    class t{
        constructor() {
            this.name = 'rrr'
        }

        static t() {
            console.log(this.name)
        }

    }
    console.log(t.prototype);
};