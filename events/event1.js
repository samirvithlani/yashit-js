function myFunc(){

    console.log("Hello World");
    document.getElementById("print").innerHTML="hi"
    document.getElementsByName("txt")[0].innerHTML="Good Night"
    document.getElementsByClassName("myClass")[0].style.color="blue"
}

function light(){

    document.getElementById("l").style.backgroundColor="white"
    console.log("light")
}
function changeurl(){

    document.getElementById("google").href="https://www.facebook.com/"
}