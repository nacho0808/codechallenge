const formulario = document.getElementById("formulario");

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    enviarFormulario();

});

function enviarFormulario(){
    const formData = new FormData(formulario);

    // Convierte los datos a json
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    })
    

     // Fetch y metodo Post
    fetch(' https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        // Maneja la respuesta del servidor si no hay errores
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


