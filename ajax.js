document.querySelector('#boton').addEventListener('click', nuestrosVinos);

function nuestrosVinos(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'catalogo.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.querySelector('#res').innerHTML = this.responseText;
        }
    }
}