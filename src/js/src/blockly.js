//1.1.1. Ввод и вывод данных


function numInfo1(num) {
    let d = num;
    let squareD = d * d;
    let kubD = squareD * d;
    console.log(d);
    console.log(squareD);
    console.log(kubD);
    console.log("=====");
}

numInfo1(7)


function numInfo2(num) {
    let h = num;
    let squareH = h * h;
    console.log(`h = ${h}`);
    console.log(`h в квадрате = ${squareH}`);
    console.log("=====");

}

numInfo2(5)


function numInfo3(a, b) {
    let mnoj = a * b;
    let sum = a + b;
    console.log(`a*b = ${mnoj}`);
    console.log(`a+b =${sum}`);
    console.log("=====");

}

numInfo3(3, 5)

function numInfo4(d) {
    if ((d ^ 0) === d) {
        // if (d^0){
        // if (Number.isInteger(d)){
        let a = (d);
        let incr = a + 7;
        let decr = a - 9;
        console.log(incr);
        console.log(decr);
        console.log("=====");
    } else return false;


}

numInfo4(5)

function numInfo5(a,b) {
    if ((a ^ 0) === a && (b^0)===b) {
        console.log(a+b);
        console.log(a*b);
        console.log(a-b);
        console.log(b-a);
        console.log("=====");
    } else return false;


}

numInfo5(5,9)

///не очень решение
function numInfo6(a, b) {
    if ((a ^ 0) === a && (b ^ 0) === b) {
        let arr = [a, b];

        let arr2 = arr.map(num => {
            return num * num;
        });
        let sum = 0;
        console.log(arr2);
        for (let i = 0; i < arr2.length; i++) {
            sum += arr2[i];
            console.log(sum)
        }


    } else return false;


    console.log("=====");

}

numInfo6(4, 6);


function numInfo7(a, b) {
    if ((a ^ 0) === a && (b ^ 0) === b && b > a && b > 0 && a > 0) {
        console.log(b - a)

    } else return false

    console.log("=====");


}

numInfo7(2006, 2018);

//1.2.1. Неполное ветвление

function numInfo2_1(a) {

    if ((a ^ 0) === a && a > 0) {
        console.log(a * 2)

    } else return false;

    console.log("=====");

}

numInfo2_1(8)


function numInfo2_2(a) {

    if ((a ^ 0) === a && a === 0) {
        console.log('zero')

    } else return false

    console.log("=====");

}

numInfo2_2(0)


function numInfo2_3(a) {

    if ((a ^ 0) === a && a === 0) {
        console.log('zero')

    } else if ((a ^ 0) === a && a > 0) {
        console.log('positive')

    } else if ((a ^ 0) === a && a < 0) {

        console.log('negative')
    } else return false;



}
numInfo2_3(4)
numInfo2_3(-7)
numInfo2_3(0)
console.log("=====");



function numInfo2_4(a, b) {

    if ((a ^ 0) === a && a === b) {
        console.log('same')

    } else if ((a ^ 0) === a && a > b) {
        console.log(a + b)

    } else if ((a ^ 0) === a && a < b) {

        console.log(a * b)
    } else return false;

    console.log("=====");

}

numInfo2_4(1, 2)

function numInfo2_5(a, b) {

    if ((a ^ 0) === a && a * b > 0) {
        console.log('both + or -')

    } else if ((a ^ 0) === a && a * b < 0) {
        console.log('one has + or -')

    } else if ((a ^ 0) === a && a * b === 0) {

        console.log('error')
    } else return false;

    console.log("=====");

}

numInfo2_5(0, 0)

/**
 * Реализуйте функцию stringformat
 */
function stringformat(n) {
    let x='';
    if(n>0 && n<10){
       x =`0000${n}`
        console.log(`Score is ${x}`)
    }else if(n>9&&n<100){
        x =`000${n}`
        console.log(`Score is ${x}`)
    }else if(n>99&&n<1000){
        x =`00${n}`
        console.log(`Score is ${x}`)
    }else if(n>999&&n<10000){
        x =` 0${n}`
        console.log(`Score is ${x}`)
    } else if(n> 9999){
        x =`${n}`;

        console.log(`Score is ${x}`)


    } return false;

}
stringformat(321);



function drawRating(vote) {
    let rating;


    if(vote >= 0 && vote <= 20){
        rating='★☆☆☆☆';

    }else if(vote > 20 && vote <= 40 ){

        rating='★★☆☆☆';
    }else if(vote > 40 && vote <= 60){

        rating='★★☆☆☆';

    } else if(vote > 60 && vote <= 80){

        rating='★★★★☆';
    }else if(vote > 80 && vote <= 100){

        rating='★★★★★';
    } else console.log('error');
    console.log(rating)

}
drawRating(20)


function sequences(n) {
let ar=[];
let ar2=[];
let result=[];
    for(let i=1; i<=n; i++) {
    ar = [...ar,i];
        if (ar.length){
             ar2= [...ar].reverse().toString().replace(/,/g , '-');
            result.push(ar2);
        }
}
    console.log(result);
}

sequences(4);