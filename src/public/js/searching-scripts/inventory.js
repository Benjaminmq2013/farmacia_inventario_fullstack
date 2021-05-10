function inventory_management(){


    let medicamentos_inventory = medicamentos //Copia del array para modificarlo.    
    const inventory_search_btn = document.getElementById("inventory_search_input") //Funcion para la búsqueda de medicamentos dentro del inventario



    inventory_search_btn.addEventListener("keyup", buscar_medicamentos_inventario)
    function buscar_medicamentos_inventario(){
        let inventory_products = [] //Reinicia el array al pulsar una tecla
        let count_save = 0; //Reinicia el conteo al pulsar una tecla
        
        if (inventory_search_btn.value == ""){
            console.log("Esto está vacío")
            //Mostrar toda la lista de productos si no hay nada que buscar.
            for (let count = 0; count < medicamentos_inventory.length; count++){
                inventory_products[count_save++] = medicamentos_inventory.sort()[count]
            }
        } else{
            for (let count = 0; count < medicamentos_inventory.length; count++) {
            
                if (comparar_producto_inventario(inventory_search_btn.value, medicamentos_inventory[count].productName)){
                    inventory_products[count_save++] = medicamentos_inventory[count]
                }
            }
        }
        

        // console.log(inventory_products)
        inventory_tbody.innerHTML = ""
        construir_tablas_inventario(inventory_products)  //Probar pasando "medicamentos" Directamente.
    }

    function comparar_producto_inventario(inventory_input, medicamento_nombre){
        if (inventory_input == ""){
            console.log("La búsqueda está vacía")
        } else {
            return medicamento_nombre.toUpperCase().startsWith(inventory_input.toUpperCase()) //Comparando input con medicamentos.productName   
        }
    }
    




    
    function construir_tablas_inventario(inventory_products){
        // DATOS DE PRODUCTOS PARA EL INVENTARIO
        let inventory_product_number = 0;
        let inventory_product_name = ""
        let inventory_product_$compra = 0;
        let inventory_product_$venta = 0;
        let inventory_product_existencias = 1;





        for (let count = 0; count < inventory_products.length; count++) {
            
            inventory_product_name = inventory_products[count].productName;
            inventory_product_$venta = inventory_products[count].productSellingPrice;
            inventory_product_number ++;            
            //console.log(inventory_products)
            agregar_tabla_prueba(inventory_product_name, inventory_product_$venta, inventory_product_number)
        }


    
    }
    buscar_medicamentos_inventario()  
}
    
//Función para guardar los elementos de la búsqueda actual, por defecto guarda todos los disponibles.

/* CONSTRUYENDO TABLAS PARA EL INVENTARIO */

function agregar_tabla_prueba(inventory_product_name, inventory_product_$venta, inventory_product_number){
    const inventory_tbody = document.getElementById("inventory_tbody") //Marco de las tablas
    const contenido = (`
        <th scope="row">${inventory_product_number}</th>
        <td>${inventory_product_name}</td>
        <td>Null</td>
        <td>Null</td>
        <td>Null</td>
        <td>$${inventory_product_$venta}</td>
        <td>Null</td>

        <td>
            <img class="db_edit_icon" src="./assets/database/edit_product.png" alt="">
            <img class="db_add_icon ms-3" src="./assets/database/add_dark_icon.png" alt="">
            <img class="db_delete_icon" src="./assets/database/close_dark_icon.png" alt="">
        </td>
    `)

    const tr_object = document.createElement("tr") //Creando <tr>    
    tr_object.innerHTML = contenido;
    


    inventory_tbody.appendChild(tr_object)
    inventory_icons_style();
}


