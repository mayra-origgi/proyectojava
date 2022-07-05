


/* Preguntamos el nombre de nuestra  clienta*/

const nombre = prompt('Ingrese su nombre')

alert("Hola"+" "+ nombre +"" +"  "  )





let tarea = prompt("¿Que servicio desea realizarce?") 

let serviciopestanias= 2000 
let serviciounias=1500 
let serviciomicroblading=5000

while (tarea != "no"){
//elegimos el servicio
switch (tarea) {
            case "microblading" :
          
            alert ("el precio de  microblading es de $"+ serviciomicroblading)

                    let pagoTotal = prompt('Con cuanto vas a pagar ?')
                                    if(pagoTotal < serviciomicroblading){

                                    alert('El pago es insuficiente')

                        pagoTotal = prompt('Con cuanto vas a pagar ?')

                        } else {

                                alert("Su pago es de" +pagoTotal + "el cambio es de " + (pagoTotal - serviciomicroblading))

    }
           break 
           case "uñas":
        
           alert ("el precio de uñas es de $"+serviciounias)

                        let pagoTotal2 = prompt('Con cuanto vas a pagar ?')
                            if(pagoTotal2 < serviciounias){

                            alert('El pago es insuficiente')

                            pagoTotal2 =  prompt('Con cuanto vas a pagar ?')

                            } else {

                                alert("Su pago es de" +pagoTotal2 + "el cambio es de " + (pagoTotal2 - serviciounias))


}

           break
           case "pestañas":
            

           alert ("el precio de pestañas es de $"+serviciopestanias )
         
    
                        let pagoTotal3 = prompt('Con cuanto vas a pagar ?')
                                        if(pagoTotal3 < serviciopestanias){
            
                                        alert('El pago es insuficiente')
            
                            pagoTotal3 =  prompt('Con cuanto vas a pagar ?')
            
                                        } else {
            
                                        alert("Su pago es de" +pagoTotal3 + "el cambio es de " + (pagoTotal3 - serviciopestanias))

            
                }
            
            
           break
           default:
           alert ("no tenemos ese servicio")
           break 
    }
   tarea= prompt("desea realizarce otro servicio,ingrese cual")
}
let turno =prompt("ingrese que dia y hora desea tomar el turno ")
alert ("tu turno fue asignado "+ turno )



 