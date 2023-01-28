//複数のオブジェクト要素を持つ配列の定義
const object = [
    {id: 1, name: 'ジョン', age: 15},
    {id: 2, name: 'ボブ', age: 20},
    {id: 3, name: 'マイケル', age: 15}
];
console.log(object);

//配列オブジェクト複数のオブジェクト要素を持つ配列からオブジェクト取得
console.log(object[1]);

//複数のオブジェクト要素を持つ配列からプロパティの値取得
console.log(object[2].age);

//配列をコピーして、新しい配列を作成しよう
const arr = [10, 20];
const newarr = [...arr];
console.log(newarr);

//配列の中に要素を追加して、新しい配列を作成しよう
const color = ['red', 'blue', 'yellow'];
const newColor = [...color, 'blue', 'orange'];
console.log(newColor);

//2つの配列を結合して、新しい配列を作成しよう
const str = ['10', '20'];
const match = [...arr, ...str];
console.log(match);

//オブジェクトをコピーして、新しいオブジェクトを作成しよう
const person1 = {
    id:4,
    name: '鈴木'
};
const copyPerson = {...person1, };
console.log(copyPerson);

//オブジェクトの中にプロパティを追加して、新しいオブジェクトを作成しよう
const person2 = {
    ...person1,
    age: 24,
    job: 'programmer'
};
const newPerson = {...person2};
console.log(newPerson);

//オブジェクトのプロパティを分割代入しよう
//Arrayの非構造化
let arr2 = ['john', 'smith'];
let [firstname, surname] = arr2;
console.log(firstname);
console.log(surname);


