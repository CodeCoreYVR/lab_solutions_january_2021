const express = require("express");
const app = express();
const fs = require('fs');

app.set('view engine', 'ejs');


app.get('/', (request, response) => {
    response.render('index');
})

app.get('/car_status', (request, response) => {
    const year = parseInt(request.query.year);
    let result = '';
    if (year >= 2030) {
        result = 'future';
    } else if (year < 2030 && year >= 2000) {
        result = 'new';
    } else if (year < 2000 && year >= 1990) {
        result = 'old';
    } else {
        result = 'very old';
    }
    response.render('car_status', { type: result });
})

app.get('/random_person', (request, response) => {
    let list = request.query.names;
    let randomName = '';
    if (list) {
        list = list.split(',');
        const randomNumber = Math.floor(Math.random() * list.length);
        randomName = list[randomNumber];
    }
    response.render('random_person', { name: randomName });
})


app.get('/fizz_buzz', function (request, response) {
    const number1 = request.query.number1;
    const number2 = request.query.number2;

    const fizzBuzzArr = [];
    if (number1 && number2) {
        for (let i = 1; i <= 100; i++) {
            if (i % number1 === 0 && i % number2 === 0) {
                fizzBuzzArr.push('FizzBuzz');
            } else if (i % number1 === 0) {
                fizzBuzzArr.push('Fizz');
            } else if (i % number2 === 0) {
                fizzBuzzArr.push('Buzz');
            } else {
                fizzBuzzArr.push(i);
            }
        }
    }
    response.render('fizz_buzz', { fizzBuzzArr, number1, number2 }); // === { fizzBuzzArr: fizzBuzzArr }
});

app.get('/directory_lister', (request, response) => {
    fs.readdir('.', (err, files) => {
        if (err) {
            response.send('An Error Occurred');
        }
        response.render('directory_lister', {
            files: files,
        });
    });
});


app.listen(3000, 'localhost', () => {
    console.log('Server is listening at http://localhost:3000')
})

// build an express project
//1 create a clean folder
//2 npm init -y
//3 create the main file (index.js)
//4 npm i express ejs (morgan)
//5 npm i -D nodemon
//6 add start script inside package.json "start": "nodemon"
//7 inside index.js 
//8 require express and create the initial of express()
//9 call app.listen function to listen on port and the localhost
//10 using app.set to let express know that what kind of view engine we are going to use
// app.set('view engine', 'ejs');
// create ejs files inside views folder

