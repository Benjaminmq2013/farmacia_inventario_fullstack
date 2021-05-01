
function callback_ventas_estilos(){
    const logout_icon = document.getElementById("logout_icon")
    const btn_logout = document.querySelector(".btn_logout")
    //btn_logout.addEventListener("onmouseover", cambiar_icono_logout)
    btn_logout.onmouseover = icono_rojo_logout;
    btn_logout.onmouseout = icono_blanco_logout;
    
    function icono_rojo_logout(){
        logout_icon.src="./assets/logout_white-icon.png"
    }
    
    function icono_blanco_logout(){
        logout_icon.src="./assets/logout_icon.png"
    }
}


function estilizar_tabla(){
    
}

function estilizar_tabla_margin(){
    const realizar_venta_btn = document.getElementById("realizar_venta_btn")
    const btn_cerrar_venta_container = document.querySelector(".btn_cerrar_venta-container")
    realizar_venta_btn.addEventListener("click", ()=>{
        btn_cerrar_venta_container.classList.add("mt-4")

    })
}




//Estilizando los íconos del inventario
function inventory_icons_style(){

    //Botón editar
    const db_edit_icon = document.querySelector(".db_edit_icon")
    db_edit_icon.addEventListener("mouseover", ()=>{
        db_edit_icon.src=("./assets/database/edit_product_green.png")
    })

    db_edit_icon.addEventListener("mouseout", ()=>{
        db_edit_icon.src=("./assets/database/edit_product.png")
    })


    //Botón añadir
    const db_add_icon = document.querySelector(".db_add_icon");
    db_add_icon.addEventListener("mouseover", ()=>{
        db_add_icon.src=("./assets/database/add_blue_icon.png")
    })

    db_add_icon.addEventListener("mouseout", ()=>{
        db_add_icon.src=("./assets/database/add_dark_icon.png")
    })


    //Botón eliminar
    const db_delete_icon = document.querySelector(".db_delete_icon");
    db_delete_icon.addEventListener("mouseover", ()=>{
        db_delete_icon.src=("./assets/database/close_red_icon.png")
    })

    db_delete_icon.addEventListener("mouseout", ()=>{
        db_delete_icon.src=("./assets/database/close_dark_icon.png")
    })
}