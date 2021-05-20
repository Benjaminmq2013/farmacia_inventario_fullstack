function activar_navegacion_inventario (){
    const inventory_container = document.querySelector(".inventory_container")
    const existencias_inventario_btn = document.getElementById("existencias_inventario_btn")

    //  Botón EXISTENCIAS
    existencias_inventario_btn.addEventListener("click", ()=>{
        inventory_container.innerHTML = existencias_inventory_content;
        //Activando funciones del inventario (origen en inventory.js)
        updateDB()
    })

    //  Botón ESTADÍSTICAS
    const estadisticas_inventario_btn = document.getElementById("estadisticas_inventario_btn")
    estadisticas_inventario_btn.addEventListener("click", ()=>{
        inventory_container.innerHTML = estadisticas_inventory_content;
        statistics_management()
    })


    // Botón VOLVER AL MENÚ
    let main_logo = document.querySelector(".main_logo")
    main_logo.addEventListener("click", mostrar_menu)

    // Botón AÑADIR PRODUCTO
    let addproduct_inventario_btn = document.getElementById("addproduct_inventario_btn")
    addproduct_inventario_btn.addEventListener("click", ()=>{
        inventory_container.innerHTML = add_product_inventory_layout;
        add_product_management()
    })

    
    
}

const existencias_inventory_content = (table_content) //Table_content está en templates.js


const estadisticas_inventory_content = (`
    <div class="row menu_title">
        <div class="menu_title_container">
            <img src="assets/chart_icon.png" alt="" class="menu_icon_title">
            <h2 class="active_menu_title">Total de ventas de esta semana</h2>
        </div>
    </div>
    <div class="container grafica_contenedor">
        <canvas id="myChart" ></canvas>
    </div>


    <!-- BOOTSTRAP ACCORDION -->
    <!--Lista de las ventas del día:-->

    <div class="accordion accordion-flush accordion_custom_css mt-4" id="accordionFlushExample">

        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
            </div>
        </div>
  

    </div>
`)

const add_product_inventory_layout = (`
<div class="add_product_title d-flex justify-content-center align-items-center pt-4">
            <img id="add_produt_tab_icon" src="./assets/plus_icon-orange.png" alt="">
            <h3 class="ms-2 mt-2">Añadir Producto Nuevo</h3>
            <p class="reabastecer-btn mt-4 me-5">¿Buscas "<a href="">Reabastecer</a>"?</p>
        </div>

        <div class="añadir_productos_contenedor">

            <form id="send_medicines_form" action="none">
                <div class="form_item">
                    <label for="productName">Nombre del producto:</label>
                    <input id="productName" type="text" name="productName" required = true> 
                </div>
                    
                <div class="form_item">
                    <label for="productCodeBar">Código del producto:</label>
                    <input id="productCodeBar" type="number" name="productCodeBar" placeholder="#" required = true> 
                </div>
                
                <div class="form_item">
                    <label for="productBuyingPrice">Precio de compra</label>
                    <input id="productBuyingPrice" type="number" name="productBuyingPrice" placeholder="$" required = true> 
                </div>
                
                <div class="form_item">
                    <label for="productSellingPrice">Precio de venta</label>
                    <input id="productSellingPrice" type="number" name="productSellingPrice" placeholder="$" required = true> 
                </div>
                
                <div class="form_item d-flex">
                    <div class="add_item_left">
                        <label for="productInStock">Cantidad en bodega</label>
                        <input id="productInStock" type="number" name="productInStock" placeholder="$" required = true> 
                    </div>
                    
                    <div class="add_item_right">
                        <label for="productBrand">Marca</label>
                        <input id="productBrand" type="text" name="productBrand" required = true> 
                    </div>
                        
                </div>

                <div class="send_medicines_btn_container">
                    <button id="add_btn">Añadir</button>
                </div>
                
            </form>
        </div>
`)


function statistics_management(){
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    
    // The data for our dataset
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [{
            label: 'Ventas de la semana: $',
            
            data: [510, 918, 687, 300, 680, 200, 900]
        }]
    },

    // Configuration options go here
    options: {
        title:{
            display: true,
            text: "Total de ventas de esta semana",
            fontSize: 30,
            padding: 30,

        },
        elements:{
            line:{
                borderWidth: 5,
                fill: false,
                borderColor: "orange",
            },
            point:{
                backgroundColor:"white",                
                radius: 6,
                borderWidth: 3,       
                borderColor: "orange",      
                hoverRadius: 8,
                hoverBorderWidth: 4,
            }
        },
        tooltips:{
            backgroundColor:"#0584f6",
            titleFontSize: 20,
            titleMarginBottom: 10,
            xPadding: 20,
            yPadding: 20,
            bodyFontSize: 15,
            bodySpacing: 10,
        }
    },
});
}


function add_product_management(){
    const add_btn = document.getElementById("add_btn")
    add_btn.addEventListener("click", (e)=>{
        e.preventDefault()        
        saveProducts()
        send_medicines_form.reset()
    })


    let medicinesURL = (window.location.origin + "/medicines")

    const productName = document.getElementById("productName")
    const productCodeBar = document.getElementById("productCodeBar")
    const productBuyingPrice = document.getElementById("productBuyingPrice")
    const productSellingPrice = document.getElementById("productSellingPrice")
    const productInStock = document.getElementById("productInStock")
    const productBrand = document.getElementById("productBrand")


    function saveProducts(){
        const medicines = {
            productName: productName.value,
            productCodeBar: productCodeBar.value,
            productBuyingPrice: productBuyingPrice.value,
            productSellingPrice: productSellingPrice.value,
            productInStock: productInStock.value,
            productBrand: productBrand.value,
        }
        console.log(medicines)

        fetch(medicinesURL, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(medicines)
        })
            .then( data => console.log(data))
            .catch( err => console.log(err))
    }
}