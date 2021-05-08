function activar_navegacion_inventario (){
    const inventory_container = document.querySelector(".inventory_container")
    const existencias_inventario_btn = document.getElementById("existencias_inventario_btn")

    //Botón EXISTENCIAS
    existencias_inventario_btn.addEventListener("click", ()=>{
        inventory_container.innerHTML = existencias_inventory_content;
        //Activando funciones del inventario (origen en inventory.js)
        inventory_management()
    })

    const estadisticas_inventario_btn = document.getElementById("estadisticas_inventario_btn")
    estadisticas_inventario_btn.addEventListener("click", ()=>{
        inventory_container.innerHTML = estadisticas_inventory_content;
        statistics_management()
    })
    //Botón ESTADÍSTICAS


    // Botón regresar al menú
    let main_logo = document.querySelector(".main_logo")
    main_logo.addEventListener("click", mostrar_menu)
    
    
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