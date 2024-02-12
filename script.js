var radios = document.querySelectorAll('input[type=radio]');

// Adiciona um ouvinte de evento para cada botão de rádio
radios.forEach(function(radio) {
   radio.addEventListener('change', checkRadio);
});

function checkRadio(){
    // Quando um botão de rádio é clicado, define todos os outros como unchecked
    // mas apenas dentro do mesmo bloco
    var container = this.closest('.bloco');
    var radiosInSameContainer = container.querySelectorAll('input[type=radio]');
    
    radiosInSameContainer.forEach(function(radio){
       if (radio !== this) {
          radio.checked = false;
       }
    }, this);
}
  
document.getElementById('radio11').checked = true;
document.getElementById('radio21').checked = true;
document.getElementById('radio31').checked = true;