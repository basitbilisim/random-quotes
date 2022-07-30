let quotes=[];

function GetQuotes(){
    return fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data=>{
        quotes=data;

        Change();
    })
}

function Change(){
    let count= quotes.length;
    let rndNumb=Math.floor(Math.random()*count);

    document.getElementById('text').innerText=quotes[rndNumb].text;
    document.getElementById('author').innerText="-"+quotes[rndNumb].author;

}

function ShareTweet(){
    let text=document.getElementById('text').innerText;
    let author=document.getElementById('author').innerText;

    window.location.href='https://twitter.com/intent/tweet?text='
    +encodeURIComponent(`"${text}" ~${author}`);
}


GetQuotes();