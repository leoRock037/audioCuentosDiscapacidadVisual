function reconocer_busqueda() {
  var recognition = new webkitSpeechRecognition();
  recognition.lang = 'es-CO';
  
  recognition.onresult = function(event) { 
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        alert(event.results[i][0].transcript);
      }
    }
  }

  recognition.onerror = function(event) {
    alert('ERROR: ' + event.error);
  }

  recognition.onend = function(event) {
    console.log('end');
  }

  recognition.start()
  console.log('init');
}

function reproducir_audio(archivo, callback) {
  var audio = new Audio();
  
  audio.src = archivo;
  audio.addEventListener('ended', callback);

  audio.play();
}

function bienvenida() {
  reproducir_audio('/static/core/mp3/bienvenida.mp3', solicitud)
}

function solicitud() {
  reproducir_audio('/static/core/mp3/solicitud.mp3', reconocer_busqueda);  
}

$(document).ready(function() {
  
  bienvenida();
});