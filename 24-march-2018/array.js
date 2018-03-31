const arr = [
    {
        id: 1,
        name: 'Bob',
        age: 21
    },
    {
        id: 1,
        name: 'Amy',
        age: 18
    },
    {
        id: 1,
        name: 'Ali',
        age: 23
    }
];

arr.forEach(item => {
    console.log('age is ', item.age);
});

const filtered = arr.filter(item => {
    return item.age > 20;
});

const mapped = arr.map(item => {
    return item.age * 2;
});

const reduced = [1, 2, 3, 4, 5, 6].reduce(function (prev, next) {
    console.log(prev, next);
    return prev + next;
}, 0);

const arrayedOf = Array.of(1, 2, 3, 4, 5);

const find = [1, 5, 10, 20, 30, 50].find(function (item) {
    return item > 20;
});

const findIndex = [1, 5, 10, 20, 30, 50].findIndex(function (item) {
    return item > 20;
});

console.log('find: ', find);
console.log('findindex: ', findIndex);