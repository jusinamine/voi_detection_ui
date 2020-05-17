
document.getElementById('sel-vid').onchange = function(e){
    let nextImg = document.querySelector('#next-bx img')
    console.log(e.srcElement.files[0]["name"]);
    document.getElementById("state-msg").innerText = e.srcElement.files[0]["name"]
    nextImg.src = './icon/next_blue.png'
    document.getElementById('cur-eff-r').style.visibility = "visible";
}