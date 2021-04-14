document.querySelector('#btnSend').addEventListener('click', Enviar);


function Enviar(){

    var aNuevaPersona = [],
        name = '',
        phone = '',
        email = '';
        
    name = document.querySelector('#name').value;
    phone = document.querySelector('#phone').value; 
    email = document.querySelector('#email').value;  
      
    aNuevaPersona.push(name,phone,email);
    registrarPersonas(aNuevaPersona);
}
