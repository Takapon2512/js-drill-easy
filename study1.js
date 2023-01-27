//定数定義
const apple = "りんご";
console.log(apple)

//変数定義
let weight = 70;
console.log(weight);
weight = 60;
console.log(weight);

//文字列を変数定義
const answer1 = "あいうえお";
console.log(answer1);

//文字列変数を変更
let answer2 = "あいうえお";
console.log(answer2);
answer2 = "かきくけこ";
console.log(answer2);

//2つの文字列を連結
const str1 = "あいうえお";
const str2 = "かきくけこ";
const answer3 = str1 + str2;
console.log(answer3);

//引数を2倍にする関数
const twice = (num) => {
    return num * 2;
}
console.log(twice(3));

//引数を+1する関数
const addOne = (num) => {
    return num + 1;
}
console.log(addOne(3))

//引数を-1する関数
const minusOne = (num) => {
    return num - 1;
}
console.log(minusOne(5))

//引数文字列の文字数を返す関数
const getLength = (str) => {
    return str.length;
}
console.log(getLength('apple'))

//引数の文字数が10文字未満か判定する関数
const judgeLength1 = (str) => {
    if (str.length < 10) {
        return true
    } else {
        return false
    }
}
console.log(judgeLength1('apple'));

//引数の文字数を判定する関数
const judgeLength2 = (str) => {
    if (str.length >= 5 && str.length < 10) {
        return true
    } else {
        return false
    }
}
console.log(judgeLength2('apple'));

//2つの引数を合計する関数
const getSum = (num1, num2) => {
    return num1 + num2;
}
console.log(getSum(3, 2));

//2つの引数の文字列を結合する関数
const getFullName = (firstName, lastName) => {
    return firstName + ' ' + lastName;
}
console.log(getFullName('Tanaka', 'Taro'))

//空のオブジェクト定義
const person1 = {}
console.log(person1);

//オブジェクト定義
const person2 = {
    name: 'ボブ',
    age: 20
}
console.log(person2);

//オブジェクトのプロパティの値変更
const object = {
    age: 35,
    weight: 80
}
object.age = 30
console.log(object)

//オブジェクトのプロパティの値変更2
const changeAge = (number, obj) => {
    obj.age = number;
    return obj;
}
console.log(changeAge(30, object));

//オブジェクトのプロパティの値を加算
const object2 = {
    age: 35,
    weight: 80
}
object2.age += 1
console.log(object2);

//オブジェクトにプロパティweightとその値"50kg"を追加する
const object3 = {
    name: 'Bob',
    age: 35
}
object3.weight = '50kg'
console.log(object3)

//オブジェクトのnameプロパティを削除する
const object4 = {
    name: 'Bob',
    age: 35
}
delete object4.name;
console.log(object4);

//文字列要素"りんご"、"みかん"、"いちご"が入った配列を定義する
const arr = ['りんご', 'みかん', 'いちご'];
console.log(arr)

//配列の2番目の要素をログ出力する
const arr2 = ['りんご', 'みかん', 'いちご'];
console.log(arr2[1]);

//配列の3番目の要素を”もも”に変更してログ出力する
const arr3 = ['りんご', 'みかん', 'いちご'];
arr3[2] = 'もも';
console.log(arr3);

//配列内の要素をすべて足し合わせる
const array = [1, 2, 3, 4, 5];
let total1 = 0;
for(i = 0; i < array.length; i++) {
    total1 += array[i];
}
console.log(total1);

//配列内の要素をすべて足し合わせる(関数)
let total2 = 0;
const calcTotal = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        total2 += arr[i];
    }
    return total2;
}
console.log(calcTotal(array));

//スプレッド構文を用いて配列の要素を展開する①
const arrayClone = [...array];
console.log(arrayClone);

//スプレッド構文を用いて配列の要素を展開する②
const array2 = [...array, 6, 7, 8, 9, 10];
console.log(array2);

//スプレッド構文を用いて配列の要素を展開する③
const array3 = [6, 7, 8, 9, 10];
const array4 = [...array, ...array3];
console.log(array4);
