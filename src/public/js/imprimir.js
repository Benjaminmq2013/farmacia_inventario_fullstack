
  let cuenta_num = 1;
  let total = 0;


  

function añadir_producto_ticket (tres_prod_seleccionados){

      // Añadiendo fecha al ticket
  const ticket_date = document.querySelector(".ticket_date");

  let fecha = (new Date()).toLocaleDateString()
  console.log(fecha)

  ticket_date.innerHTML=(`${fecha}`)

  //Añadiendo productos al tiket    

  const buying_wrapper = document.querySelector(".buying_wrapper")    //Contenedor de las filas del producto (ticket)
  const total_compra = document.getElementById("total_compra")        //Valor total de esta compra (ticket)

  const btn_añadir_ticket = document.getElementById("button-addon1")
  btn_añadir_ticket.addEventListener("click", agregar_producto_ticket)
      
  

    function agregar_producto_ticket(){
        
        if (tres_prod_seleccionados == undefined){
            console.log("Error producto vacío evitado correctamente")
        } else{
            let product_name = tres_prod_seleccionados.nombre;
            let product_price = tres_prod_seleccionados.precio;
            let product_quantity = cuenta_num;
            
            console.log(tres_prod_seleccionados)
      
            let product_component = `
            <div class="cantidad_container">
                ${product_quantity}
            </div>
      
            <div class="producto_container">
                ${product_name}
            </div>
      
            <div class="precio_container">
                $${product_price}
            </div>
        `
        
      
            
            let ticket_product_component =  document.createElement("div")
            ticket_product_component.classList.add("ticket_product_component")
            ticket_product_component.classList.add(`cuenta_${cuenta_num}`)
            ticket_product_component.innerHTML = (product_component)
      
            let before = (`cuenta_${cuenta_num}`);
            let element = document.querySelector(`.${before}`)
            buying_wrapper.insertBefore(ticket_product_component, element)
            
      
            console.log(ticket_product_component)
            
            cuenta_num +=1;
      
            
            
            
            total = total + product_price;
            total_compra.innerHTML=`$${total.toFixed(2)}`
    
            tres_prod_seleccionados = undefined;
        }
        
      }

      
      

      
}

  //IMPRIMIENDO
  
function imprimir_ticket(nombre){    
    var ficha = document.getElementById(nombre);
    var ventimp = window.open(' ', 'popimpr');
    ventimp.document.write( ficha.innerHTML );
    ventimp.document.close();    

    ventimp.onload = function(){
        ventimp.print();
        ventimp.close();
    }
        
    
    
    console.log(ventimp)
    mostrar_ventana()
}

let ventas = 0;
let total_caja = 100;

function llevar_cuentas_footer(){
    ventas +=1;

    const footer_ventas = document.getElementById("footer_ventas")
    const footer_total = document.getElementById("footer_total")
    realizar_venta_btn.addEventListener("click", ()=>{
        total_caja = total_caja + total;
        footer_ventas.innerHTML = (`Ventas: ${ventas}`)        
        footer_total.innerHTML = (`En Caja: ${total_caja.toFixed(2)}`)
    })

}