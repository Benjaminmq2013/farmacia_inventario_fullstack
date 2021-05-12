

const main_content = document.getElementById("main_content") //Contenedor principal para menú, ventas y inventario.

//Trayendo botones:
const menu_button = document.getElementById("menu_button")
menu_button.addEventListener("click", mostrar_menu) //Mostrando menú

const ventana_button = document.getElementById("ventana_button", mostrar_ventana)
ventana_button.addEventListener("click", mostrar_ventana)

const inventory_button = document.getElementById("inventory_button");
inventory_button.addEventListener("click", mostrar_inventario)




//Dando contenido al main.

function mostrar_menu(){
    main_content.innerHTML = menu_window;
    
    menu_button.classList.add("active_menu")
    ventana_button.classList.remove("active_menu")
    inventory_button.classList.remove("active_menu")


    const vender_btn_icon = document.getElementById("vender_btn-icon")
    vender_btn_icon.addEventListener("click", mostrar_ventana)

    const inventory_image = document.getElementById("inventory_image")
    inventory_image.addEventListener("click", mostrar_inventario)
}
mostrar_menu()




// Mostrar ventana de Ventas:
function mostrar_ventana(){
    main_content.innerHTML = `` //Reseteando el contenido del contenedor
    main_content.innerHTML = venta_window;
    menu_button.classList.remove("active_menu")
    inventory_button.classList.remove("active_menu")
    ventana_button.classList.add("active_menu")

    //Estos callbacks ejecutan los scripts de las funciones para "ventas"
    callback_activate_search()
    callback_ventas_estilos()

    //Funciones activas de la ventana "ventas"
    const back_button_container = document.querySelector(".back_button-container")
    back_button_container.addEventListener("click", mostrar_menu)

    //Estilizaciones extra
    estilizar_tabla_margin()

    //Reseteando valores de la tabla
    reset_table_values()

    //Cuentas en el footer. Fué definida en imprimir.js
    llevar_cuentas_footer()
}






function mostrar_inventario(){
    main_content.innerHTML = ``
    main_content.innerHTML = inventory_window;


    inventory_button.classList.add("active_menu")
    ventana_button.classList.remove("active_menu")
    menu_button.classList.remove("active_menu")

    //Activando funciones del inventario (origen en inventory.js)
    renderizarInventario = true;
    updateDB();


    //Activando funciones de navegación interna del inventario.
    activar_navegacion_inventario()
}