function speakHello() {
    var username = document.getElementById("username").value;
    var message = username + "is a gay";
    var msg = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(msg);
}