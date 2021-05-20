function callback_activate_search(){
    //trayendo inputs para predicciones
    const prediction_input = document.getElementById("prediction_input");
    prediction_input.addEventListener("keyup", iterar_medicamentos)



    const comienza_con = function (busqueda_value, medicamento_nombre){
        if (busqueda_value == ""){

        } else {
            return medicamento_nombre.toUpperCase().startsWith(busqueda_value.toUpperCase()) //Comparando input con medicamentos.nombre   
        }

    }

    let tres_prod_seleccionados = []; //Arreglo que guarda los 3 productos seleccionados y uno será añadido a la tabla.

    //Se ejecuta al pulsar una tecla, actualiza el valor del input y lo compara con la base de datos.
    function iterar_medicamentos(){
        let pred_num = 1;

        for (var l = 1; l < 4; l++){ //Limpiando resultados de la pulsación anterior. {loop}
        let prediction_number = document.querySelector(`.prediction_${l}`)
        prediction_number.innerHTML = ("")
        }

        for (var i = 0; i < medicamentos.length; i++){
            

            
            let contenido_seleccionado = (`${medicamentos[i].productName} Precio: $${medicamentos[i].productSellingPrice}`)
            
            let contenido = (`
                
                <p>${medicamentos[i].productName}</p>
                <p>marca</p>
                <p>$${medicamentos[i].productSellingPrice}</p>
                <p>#Disponibles</p>

            `) //Nombre y Precio / Producto.
            let nombre_a_comparar = (medicamentos[i].productName).toUpperCase()
            
            
            if (comienza_con( prediction_input.value, nombre_a_comparar)){            
                let prediction_number = document.querySelector(`.prediction_${pred_num++}`) //<li> para mostrar producto
                
                if (pred_num <= 4){
                    prediction_number.innerHTML = contenido_seleccionado;    
                    tres_prod_seleccionados[pred_num] = (medicamentos[i])  
                           
                }

            }              


        }
        

    }


    //Trayendo los 3 input de recomendaciones
    let prediction_number_1 = document.querySelector(`.prediction_1`)
    let prediction_number_2 = document.querySelector(`.prediction_2`)
    let prediction_number_3 = document.querySelector(`.prediction_3`)
    
    //Llamando las funciones al hacer click en cada recomendación
    prediction_number_1.addEventListener("click", añadir_producto_1)
    prediction_number_2.addEventListener("click", añadir_producto_2)
    prediction_number_3.addEventListener("click", añadir_producto_3)

    //Funciones al clicar cada resultado
    function añadir_producto_1(){

        if(prediction_number_1.innerHTML == "..." ) {
            console.log("Error (...) corregido correctamente")
        } else if (prediction_number_1.innerHTML == ""){
            console.log("Error (null) Evitado correctamente")
        }
        else{
            console.log(prediction_number_1.innerHTML);
            prediction_input.value = prediction_number_1.innerHTML;

            //Asignando valores para crear la tabla
            
            compra_name = tres_prod_seleccionados[2].productName;
            compra_price = tres_prod_seleccionados[2].productSellingPrice;

            añadir_producto_ticket(tres_prod_seleccionados[2]) //Construyendo ticket (origen en imprimir.js)
        }    
    }




    function añadir_producto_2(){
        if (prediction_number_2.innerHTML == ""){
            console.log("Error (null) Evitado correctamente")
        } else{
            console.log(prediction_number_2.innerHTML)
            prediction_input.value = prediction_number_2.innerHTML;
           
            
            compra_name = tres_prod_seleccionados[3].productName;
            compra_price = tres_prod_seleccionados[3].productSellingPrice;  
            añadir_producto_ticket(tres_prod_seleccionados[3]) //Construyendo ticket (origen en imprimir.js)
        }
        console.log(compra_name)
    }




    function añadir_producto_3(){  
        if (prediction_number_3.innerHTML == ""){
            console.log("Error (null) Evitado correctamente")
        } else{
            console.log(prediction_number_3.innerHTML)
            prediction_input.value = prediction_number_3.innerHTML;

            
            compra_name = tres_prod_seleccionados[4].productName;  
            compra_price = tres_prod_seleccionados[4].productSellingPrice;

            añadir_producto_ticket(tres_prod_seleccionados[4]) //Construyendo ticket (origen en imprimir.js)
        }      
        console.log(compra_name)
    }



    //Llamando la función para añadir producto seleccionado a la tabla-resumen de esta venta.
    const btn_add_product = document.querySelector(".btn_add_product");
    btn_add_product.addEventListener("click", callback_construir_tabla) //Callback existe en templates.js
    btn_add_product.addEventListener("click", estilizar_tabla)// Función existe en styles.js
    
}


//Agregando productos seleccionados al body de la tabla (es llamado en templates.js)
function agregar_tabla(contenido_tabla){
    document.querySelector(".first_tr")//Trayendo el primer elemento de la tabla existente
    

    let tr = document.createElement("tr")
    tr.innerHTML = contenido_tabla;

    const tabla_comprando_body = document.querySelector(".tabla_comprando-body");
    console.log(tabla_comprando_body)
    console.log(contenido_tabla)

    tabla_comprando_body.appendChild(tr)

    añadir_producto_ticket() //Construyendo el ticket (origen en imprimir.js)
}





