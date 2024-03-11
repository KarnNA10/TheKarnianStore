function amp(imgDir, type, price, descr){
    const topCont = document.querySelector('.topCont')
    topCont.style.display = 'block'

    const imag = document.createElement('img')
    imag.src  = "static/img/"+imgDir // "static/img/prod/"+imgDir
    document.querySelector('.e1').appendChild(imag)
    imag.setAttribute("class","prodImgAmp")

    document.getElementById("type").innerHTML=type;
    document.getElementById("descrip").innerHTML=descr;
    document.getElementById("prec").innerHTML=price;
}
function cerrar() {
    // topCont.style.background = '#00ff00'
    const topCont = document.querySelector('.topCont');
    topCont.style.display = 'none'; 
    document.getElementById("type").innerHTML = '';
    document.getElementById("descrip").innerHTML = '';
    document.getElementById("prec").innerHTML = '';
    var imag = document.querySelector('.prodImgAmp')
    imag.remove()
}

function cambiarCss(a){
    const valor = a.value;
    const A = `static/styles/e${valor}.css`;
    document.querySelector('.liiink').setAttribute("href",A)
    if(valor==3){
        document.querySelector('.sss').remove()
    }
}
