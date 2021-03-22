function() {
    var linha = document.createElement('tr');
    linha.insertCell(0).innerHTML += document.getElementsById('nome').value;
    linha.insertCell(0).innerHTML += document.getElementsById('e-mail').value;
    linha.insertCell(0).innerHTML += document.getElementsById('telefone').value;
    document.getElementsById('tabela-pessoa').appendChild(linha);
    return false;
}
