import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber(){
    const randomNum = Math.floor(Math.random()*1000)+1
    return randomNum
}

function greeting(user){
    return <div className = "container">
        <h1> Whats up {user.name}</h1>
        <h2 className = "text-muted"> Your lucky number is {luckyNumber()} </h2>
    </div>
}

const user = {
    name: 'Kurosh',
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);

