setInterval(flashDate, 1000);

function flashDate(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}