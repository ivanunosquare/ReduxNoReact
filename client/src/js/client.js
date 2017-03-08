import HbrPromise from "./promises/promise";

const app = document.getElementById('app');

app.addEventListener('click', function() {
    HbrPromise.get({
        url:'https://jsonplaceholder.typicode.com/posts',
        reducer:'JSON'
    })
});



