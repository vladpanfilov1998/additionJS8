//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


let classList = document.body.getElementsByClassName('rules');
let iterArr = [...classList];

function recursion(iterArr, index = 0) {
    if (index >= classList.length) {
        console.log(iterArr);
        return;
    }
    console.log(iterArr[index]);
    return recursion(iterArr, index + 1);
}

recursion(iterArr, index = 0);
