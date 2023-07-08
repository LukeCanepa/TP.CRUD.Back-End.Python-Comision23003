const {createApp} = Vue

createApp({
    data(){
        return{
           productos: [],
<<<<<<< HEAD
//           url: 'http://127.0.0.1:5000/productos', 
=======
//         url: 'http://127.0.0.1:5000/productos', 
>>>>>>> 47954892ddd6aba88db66c0718430ea96e723ba1
           url: "https://lukecanepa.pythonanywhere.com/productos", 
           cargando: true,
           error: false
        }
    },

    methods:{
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.productos = data;
                this.cargando = false;
            })
            .catch(err => {
                console.error(err);
                this.error = true;
            })
        },

        eliminar(producto) {
//          alert(producto)
//          alert('Se elimino satisfactoriamente la edicion de la FIFA World Cup '+producto)
<<<<<<< HEAD
//            const url = 'http://localhost:5000/productos/'+producto;
          const url = "https://lukecanepa.pythonanywhere.com/productos/"+producto;
=======
//          const url = 'http://localhost:5000/productos/'+producto;
            const url = "https://lukecanepa.pythonanywhere.com/productos/"+producto;
>>>>>>> 47954892ddd6aba88db66c0718430ea96e723ba1
            
            let options = {
                method: 'DELETE'
            }
            fetch(url, options)
            .then(res => res.json())
            .then(res => {
                    location.reload();
//                  alert('Se elimino satisfactoriamente la edicion de la FIFA World Cup '+producto)
            })
            .catch(err => {
                console.error(err);
                this.error = true;
            })
        }
    },

    created(){
        this.fetchData(this.url);
    }
}).mount('#app')
