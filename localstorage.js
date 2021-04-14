var clientes = 
[
    ['Santiago Martin', '11 3456 6544', 'santiago.martin@gmail.com'],
    ['Veronica Marisa', '11 4444 7676', 'veronica@hotmail.com.ar'],
    ['Pablo Vazco', '11 5656 1233', 'pablo.vazco123@gmail.com'],
    ['Sharon Agustina', '11 7312 3636', 'sharon93@gmail.com'],
    ['Tomas Aramil', '11 2020 8787', 'tomas.moron@gmail.com'],
];

function registrarPersonas(pNuevoUsuario){

    var clientes = getClientes();
    clientes.push(pNuevoUsuario);

    localStorage.setItem('clientesLS', JSON.stringify(clientes));
}

function getClientes(){
    var clientesLocal = JSON.parse(localStorage.getItem('clientesLS'));
    if(clientesLocal == null){
        clientesLocal = clientes;
    }
    return clientesLocal;
}