function crearpersona( nombre, apellido, edad ,dni){
    objeto = {
        "El_nombre": nombre,
        "El_apellido": apellido, 
        "La_edad": edad,
        "El_dni": dni,
    };
    return objeto;
}

function agregarApodo(persona,apodo){
    persona = {
    nombre: "juan",    
    apellido: "perez",    
    edad: 18,    
    DNI: 1234567,    
    };
    persona.NuevoApodo = apodo;
    return persona;
} 

function sinDocumento(persona){
    persona = {
    nombre: "juan",    
    apellido: "perez",    
    edad: 18,    
    DNI: 1234567,    
    };
    let Indocumentado={};
    Indocumentado.nombre = persona.nombre;
    Indocumentado.apellido = persona.apellido;
    Indocumentado.edad = persona.edad;
    return Indocumentado;
} 

function nombreCompletoPersona(persona){
    persona = {
    nombre: "juan",    
    apellido: "perez",    
    edad: 18,    
    DNI: 1234567,    
    };
    let nombreCompleto;
    nombreCompleto1 = persona.nombre;
    nombreCompleto2 = persona.apellido;
    let nombrecompleto3= nombreCompleto1 + nombreCompleto2; 
    return nombrecompleto3;
}  


function felizCumpleaños(persona) {
    persona = {
        nombre: "juan",    
        apellido: "perez",    
        edad: 18,    
        DNI: 1234567,    
    };
    persona.edad+=1;
    return persona;
}

function sonLaMismaPersona(persona1, persona2) {
    persona1 = {
        nombre: "juan",    
        apellido: "perez",    
        edad: 18,    
        DNI: 1234567,    
    };
    persona2= {
        nombre: "juan",    
        apellido: "perez",    
        edad: 18,    
        DNI: 1234567,    
    };
    if(persona1.DNI==persona2.DNI){
        console.log("Son la misma persona");
    }else{
        console.log("No son la misma persona");
    }
}
