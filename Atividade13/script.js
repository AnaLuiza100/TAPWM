function transformarTexto(tipo) {
    const input = document.getElementById('meuInput');
    if (tipo === 'maiusculas') {
        input.value = input.value.toUpperCase();
    } else if (tipo === 'minusculas') {
        input.value = input.value.toLowerCase();
    }
}