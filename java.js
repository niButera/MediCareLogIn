function updateTextBox() {
    var selectElement = document.getElementById("corem");
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var siglaTextBox = document.getElementById("estadoSigla");
    siglaTextBox.value = selectedOption.value; // Define o valor da caixa de texto como a sigla do estado selecionado
}
