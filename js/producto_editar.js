//console.log(location.search)
/*
let argsUrl = location.search.substring(1).split('&');
console.log(argsUrl)

let data = [];
for(let i = 0; i < argsUrl.length; i++){
    data[i] = argsUrl[i].split('=');
}
console.log(data)

document.getElementById('id').value = decodeURIComponent(data[0][1]);
document.getElementById('nombre').value = decodeURIComponent(data[1][1]);
document.getElementById('precio').value = decodeURIComponent(data[2][1]);
document.getElementById('stock').value = decodeURIComponent(data[3][1]);
document.getElementById('imagen').value = decodeURIComponent(data[4][1]);

function modificar(){
    // Actualizar el producto en la BBDD
    let id = document.getElementById('id').value;
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

    let url = 'http://127.0.0.1:5000/productos/'+id;

    let options ={
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
    };

    fetch(url, options)
    .then(function(){
        alert('Registro modificado exitosamente');
        window.location.href= './productos.html';
    })
    .catch(err => {
        alert('No pudo modificarse el registro');
        console.error(err);
    })
}
*/
//console.log(location.search)

let argsUrl = location.search.substring(1).split('&');

//console.log(argsUrl)

let data = [];
for(let i = 0; i < argsUrl.length; i++){
    data[i] = argsUrl[i].split('=');
//    alert(argsUrl[i].split('='));
}
console.log(data)

document.getElementById('id').value = decodeURIComponent(data[0][1]);
document.getElementById('venue').value = decodeURIComponent(data[1][1]);
document.getElementById('location').value = decodeURIComponent(data[2][1]);
document.getElementById('winner').value = decodeURIComponent(data[3][1]);
document.getElementById('runner_up').value = decodeURIComponent(data[4][1]);
document.getElementById('score').value = decodeURIComponent(data[5][1]);
document.getElementById('attendance').value = decodeURIComponent(data[6][1]);
document.getElementById('official_poster').value = decodeURIComponent(data[7][1]);

/*
id_year
venue
location
winner
runner_up
score
attendance
official_poster
*/

function modificar(){
    // Actualizar el producto en la BBDD    
    let id = document.getElementById('id').value;            
    let ven = document.getElementById('venue').value;
    let loc = document.getElementById('location').value;
    let win = document.getElementById('winner').value;
    let ru = document.getElementById('runner_up').value;
    let sc = document.getElementById('score').value;
    let att = document.getElementById('attendance').value;
    let offp = document.getElementById('official_poster').value;

    let producto = {
//      id : id,
        venue: ven,
        location: loc,
        winner: win,
        runner_up: ru,
        score: sc,
        att: att,
        official_poster: offp
    }

    //let url = 'http://127.0.0.1:5000/productos/'+id;
    let url = "http://lukecanepa.pythonanywhere.com/productos/"+id;

    let options ={
        body: JSON.stringify(producto),        
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},        
    };

    fetch(url, options)
    .then(function(){
        alert('Final de FIFA World Cup modificada exitosamente!');
        window.location.href= './productos.html';
    })
    .catch(err => {
        alert('Atención: No se pudo modificar la final de FIFA World Cup!');
        console.error(err);
    })
}
