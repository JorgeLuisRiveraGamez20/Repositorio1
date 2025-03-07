 // Funcion para agregar a la pantalla
function agregar(valor) {
    document.querySelector('.pantalla').value += valor
}

// Funcion para vaciar la pantalla
function borrar() {
    document.querySelector('.pantalla').value = ''
}

// Funcion para hacer los calculos
function calcular() {
    try {
        const valor_pantalla = document.querySelector('.pantalla').value
        const resultado = eval(valor_pantalla)
        document.querySelector('.pantalla').value = resultado
    } catch (e) {
        console.log("Error: " + e)
    }
}   

// Funcion para borrar un solo numero o elemento
function borrar1() {
    const pantalla = document.querySelector('.pantalla')
    const valor_actual = pantalla.value
    if (valor_actual.length > 0) {
        pantalla.value = valor_actual.slice(0, -1)
    }
}