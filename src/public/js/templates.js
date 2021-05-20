//  AQUÍ SE DEFINEN LAS 3 SECCIONES PRINCIPALES DEL PROGRAMA:

//PLANTILLA DEL MENÚ PRINCIPAL
const menu_window = (`
    
        <div class="row menu_principal_container">

        <!--Inicio del panel lateral-->

        <div class="left_panel-container col-3 pe-0 ps-0">

            <div class="logo_left_container">
              <div  class=" d-flex align-items-center">
                <a href="/">
                  <img class="main_logo" src="./assets/logo_recortado.png" alt="">
                </a>
              </div>
            </div>


            <div class="left_options_container">
              <div class="fila_lateral d-flex align-items-center">
                <figure class="lateral_panel-icon">
                    <img src="./assets/pharmacy.png" alt="UsrImage">
                </figure>
                <label>Menu</label>
              </div>

              <div class="fila_lateral fila_ajustes d-flex align-items-center op_selected">
                  <figure class="lateral_panel-icon">
                      <img src="./assets/settings_icon.png" alt="Ajustes">
                  </figure>
                  <label>Ajustes</label>                
              </div>

              <div class="fila_lateral fila_empleados d-flex align-items-center">
                  <figure class="lateral_panel-icon">
                      <img src="./assets/users_icon.png" alt="Empleados">
                  </figure>
                  <label>Empleados</label>
              </div>

              <div class="fila_lateral fila_logout d-flex align-items-center">
                  <figure class="lateral_panel-icon">
                      <img id="logout_lateral_icon-image" src="./assets/logout_icon.png" alt="Logout">
                  </figure>
                  <label>Cerrar sesión</label>
              </div>
            </div>
            

        </div>


        <div class="col main_menu-container">

          <div class="row menu_title">
            <div class="menu_title_container">
              <img src="assets/pharmacy.png" alt="" class="menu_icon_title">
              <h2 class="active_menu_title">Menu Principal</h2>
            </div>
          </div>

            <div class="row">
                <div class="col text-center menu_buttons_container">
                    <figure class="menu_button">
                        <img id="vender_btn-icon" src="./assets/shopping_car.png" alt="">
                        <a class="main_buttons-title">Vender</a> 
                    </figure>
                </div>
            <div class="col text-center menu_buttons_container">
                <figure class="menu_button">
                    <img id="info_image" src="./assets/info_icon.png" alt="">
                    <a class="main_buttons-title">Estadística</a>    
                </figure>                  
            </div>                
            </div>
            
            <div class="row">
            <div class="col text-center menu_buttons_container">
                <figure class="menu_button">
                    <img id="inventory_image" src="./assets/inventory_checked.png" alt="">
                    <a class="main_buttons-title">Inventario</a> 
                </figure>
            </div>
            <div class="col">
              
            </div>
            </div>

        </div>



        
        </div>
    
`)


let total_venta = 0;
const venta_window = (`
<div class="vender_menu-container position-relative container">
          <div class="row">
            <div class="col-1 col1_custom-zindex">
              <figure class="back_button-container mt-4">
                <img src="./assets/back_arrow.png" alt="">
              </figure>

              <div class="logout_container position-absolute bottom-0">
                <button class="btn_logout btn btn-outline-danger">
                  <img id="logout_icon" src="./assets/logout_icon.png" alt="">                      
                  Cerrar Sesión
                </button>
              </div>

            </div>

            <div class="col-11">
              <main class="bg-light  pt-5 mt-5 mt-sm-0 pb-2">
                <div class="container d-flex justify-content-center">
        
                    <div class="search_wrapper">
                        
                        <div class="input-group mb-3">
                            <input id="prediction_input" type="text" class="form-control dropdown-toggle" placeholder="Buscar un producto..." aria-label="Example text with button addon" aria-describedby="button-addon1" data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off">
                            <button class="btn btn-outline-secondary btn_add_product" type="button" id="button-addon1">+ Agregar</button>
                            <ul class="recomendaciones_drop dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="prediction_1 dropdown-item" href="#">...</a></li>
                                <li><a class="prediction_2 dropdown-item" href="#"></a></li>
                                <li><a class="prediction_3 dropdown-item" href="#"></a></li>
                            </ul>
                        </div>
        
                    </div>

                    <!--Spinner Activo al descargar la base de datos.-->
                    <div class="custom_spinner-css spinner-border text-primary ms-2 mt-1" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
        
                </div>


                <div class="container container_custom-width">
                  <h2 class="text-center mb-5 mt-4">Resumen de la venta</h2>

                  <div class="table_container container">
                    <table class="table">

                      <thead></thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Producto</th>
                          <th scope="col">Detalles</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Cantidad</th>
                        </tr>
                      </thead>

                      <tbody class="tabla_comprando-body">
                       
                        
                      </tbody>

                      <tfoot>
                        <tr>
                          <th scope="row">Total:</th>
                          <td></td>
                          <td>--</td>
                          <td id="total_venta_td">0</td>
                        </tr>
                      </tfoot>

                    </table>
                  </div>

                  <div class="btn_cerrar_venta-container container d-flex mt-4">
                  <a href="javascript:imprimir_ticket('seleccion')">
                      <button id="realizar_venta_btn" type="button text-center" class="btn btn-primary">Realizar Venta</button>
                    </a>
                    <div class="printing-advice d-flex align-items-center mb-3">
                      <p class="mb-0">Imprimiendo...</p>
                      <div class="printing-signal spinner-grow text-primary ms-2" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>

                  </div>

                  


                </div>

            </div>
          </div>
        </div>

`)



//Creando todos los atributos para la tabla
let compra_number= 1;
let compra_name = "";
let compra_details= "";
let compra_price= 0;
let compra_cantidad= 1.00;

function callback_construir_tabla(){
  const comprar_producto_tabla = (`  
    <th scope="row">${compra_number}</th>
    <td>${compra_name}</td>
    <td>${compra_details}</td>
    <td>${compra_price}</td>
    <td>${compra_cantidad}</td>  
  `)
  //Llamando a la función construir tabla para añadir el innerHTML en el "body" de la tabla. (Origen en search.js)
  if (compra_name == ""){

  }else{
    agregar_tabla(comprar_producto_tabla); 
    prediction_input.value = ("");
    compra_name = "";
    compra_number++


      //Total de esta venta:
    let total_venta_td = document.getElementById("total_venta_td");
    total_venta = total_venta + compra_price;
    total_venta_td.innerHTML = (`$${total_venta.toFixed(2)}`);
  }



 
}




//************ CONTRENIDO PARA LA TABLA */

const table_content = (`
<div class="inventory_title_container">
      <img src="./assets/packages_icon.png" alt="">
      <h2 class="text-center mt-4">Existencias</h2>
    </div>
    

    <div class="container inventory_input-container mb-3 mt-4">
      <div id="input_group_styling" class="input-group">
        <span class="input-group-text" id="inventory_search_btn">Buscar</span>
        <input id="inventory_search_input" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Buscar por nombre...">
      </div>
    </div>
    

    <div id="inventory_table_container" class="container table_container mt-2">
      <div class="table-responsive">
        <table class="table">

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Marca</th>
              <th scope="col">Código</th>
              <th scope="col">$Compra</th>
              <th scope="col">$Venta</th>              
              <th scope="col">Existencias</th>
              <th scope="col">Opciones</th>
                           
            </tr>
          </thead>
          
          <tbody id="inventory_tbody"></tbody>
          
        </table>
      </div>
    </div>
`)




// CONTENEDOR PARA LA TABLA

const inventory_window=(`

  <div class="row inventory_wrapper_styles">

  <!--Inicio del panel lateral-->
  <div class="left_panel-container col-3 pe-0 ps-0">

      <div class="logo_left_container">
        <div  class=" d-flex align-items-center">
            <img class="main_logo" src="./assets/logo_recortado.png" alt="">
        </div>
      </div>
      <div class="left_options_container">

        <div id="existencias_inventario_btn" class="fila_lateral d-flex align-items-center">
          <figure class="lateral_panel-icon">
              <img src="./assets/packages_icon.png" alt="">
          </figure>
          <label>Existencias</label>
        </div>

          <div id="addproduct_inventario_btn" class="fila_lateral d-flex align-items-center">
            <figure class="lateral_panel-icon">
                <img src="./assets/plus_icon-orange.png" alt="">
            </figure>
            <label>Añadir Producto</label>
          </div>

          <div class="fila_lateral fila_crear_ofertas d-flex align-items-center">
            <figure class="lateral_panel-icon">
                <img src="./assets/offer.png" alt="">
            </figure>
            <label>Crear Ofertas</label>
          </div>

          <div id="estadisticas_inventario_btn" class="fila_lateral d-flex align-items-center">
            <figure class="lateral_panel-icon">
                <img src="./assets/chart_icon.png" alt="">
            </figure>
            <label>Estadísticas</label>
          </div>


      </div>
      

      

      

  </div>


  <div class="col inventory_container">
      ${table_content}
  </div>
`)






