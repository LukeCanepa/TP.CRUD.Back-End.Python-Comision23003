/*
function guardar(){

  let n = document.getElementById('nombre').value;
    let p = document.getElementById('precio').value;
    let s = document.getElementById('stock').value;
    let i = document.getElementById('imagen').value;

    let producto = {
        nombre: n,
        precio: p,
        stock: s,
        imagen: i
    }

    let url = 'http://127.0.0.1:5000/productos';

    let options ={
        body: JSON.stringify(producto),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    };

    fetch(url, options)
        .then(function(){
        alert('Producto guardado exitosamente');
        window.location.href = './productos.html';
        })
        .catch((error)=>{
            alert('No pudo guardarse el nuevo producto');
            console.error(error);
        })
}
*/
function guardar(){
    
    let id = document.getElementById('id').value;    
    let ven = document.getElementById('venue').value;
    let loc = document.getElementById('location').value;
    let win = document.getElementById('winner').value;
    let ru = document.getElementById('runner_up').value;
    let sc = document.getElementById('score').value;
    let att = document.getElementById('attendance').value;
    let offp = document.getElementById('official_poster').value;

    let final = {
        id: id,
        venue: ven,
        location: loc,
        winner: win,
        runner_up: ru,
        score: sc,
        attendance: att,
        official_poster: offp
    }

    //let url = 'http://127.0.0.1:5000/productos';
    let url = "https://lukecanepa.pythonanywhere.com/productos";

    let options ={
        body: JSON.stringify(final),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    };

    fetch(url, options)
        .then(function(){
        alert('Final FIFA World Cup guardada exitosamente !');
        window.location.href = './productos.html';
        })
        .catch((error)=>{
            alert('Atención: No se pudo guardar la nueva final FIFA World Cup!');
            console.error(error);
        })

}



/*
winner
runner_up
score
location
venue
attendance
official_poster
*/


