const { LinkedList } = require('./linked-list');

const main = () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    console.log(list.pop());
    console.log(list.pop());
}

main();