// var speechRecognition = window.webkitSpeechRecognition
// var recognition = new speechRecognition();

var recognition = new webkitSpeechRecognition();

var textbox = $("#textbox")
var instruction = $("#instruction")
var content = ''
console.log(recognition);
recognition.continuous = true

recognition.onstart =function(){
    instruction.text("Recording....")
}
recognition.onspeechend = function(){
    instruction.text("Recording paused")
}
recognition.onerror = function(){
    instruction.text("Try again")
}
recognition.onresult = function(){
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    content += transcript;

    textbox.val(content)
}
$("#start-btn").click(function(event){
    if(content.length){
        content += ''
    }
    recognition.start()
    document.getElementById('copy-btnp').innerText="Copy";
})
$("#stop-btn").click(function(event){
    
   recognition.stop();
   instruction.text("Recording paused");
   document.getElementById('copy-btnp').innerText="Copy";
})
$("#copy-btn").click(function(){
  
    textbox.select();
    document.getElementById('textbox').setSelectionRange(0, 99999);
    document.execCommand("copy");
    // alert("Copied the text: " + document.getElementById('textbox').value);
    document.getElementById('copy-btnp').innerText="Copied";
    console.log( content );
   
 })
$("#clear-btn").click(function(){
      document.getElementById('textbox').value=null;   
      location.reload();
 })
