//Ejemplo de comentario


//Variables primitivas (utilizar typeof variable en consola para ver el tipo)
let nombre = "Jofre";

let edad = 43;

let invencible = false;

let iq;

let humor = null;

let profe = {
    nombreProfe: "Jofre",
    edadProfe: 42,
    claseProfe: "Web"

}

let alumnosCef = ["juanMa", "david", "elaine"]

console.log(alumnosCef[1]);

alumnosCef[3] = "Lorena";

console.log(alumnosCef[3]);

console.log(profe.nombreProfe);

console.log(alumnosCef.length);






//El console.Log("texto"); imprime texto en la consola
console.log(profe.edadProfe);


function saludar(alumno1, alumno2){
    console.log("Hola a todos");
    console.log("Vamos a pasar lista");
    console.log("Veo que " + alumno1 + " y " + alumno2 + " han llegado tarde.")

}

saludar("Superman", "Batman");

function suma(num1, num2){
    return num1 + num2;

}

console.log(suma(3, 2));