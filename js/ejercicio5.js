function verificarCadena() {
    const cadena = document.getElementById('cadena').value.trim();

    if (!/[a-zA-Z]/.test(cadena)) {
        alert('La cadena debe contener al menos una letra.');
        return;
    }

    if (cadena === cadena.toUpperCase() && cadena !== cadena.toLowerCase()) {
        document.getElementById('resultado').textContent = 'La cadena está en mayúsculas.';
    } else if (cadena === cadena.toLowerCase() && cadena !== cadena.toUpperCase()) {
        document.getElementById('resultado').textContent = 'La cadena está en minúsculas.';
    } else {
        document.getElementById('resultado').textContent = 'La cadena no está ni en mayúsculas ni en minúsculas.';
    }
}