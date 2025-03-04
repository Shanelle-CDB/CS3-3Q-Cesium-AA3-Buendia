function hiddenMessage(){
    let message = prompt('Enter a Message');
    let result = "";
    
    if (message.includes("FR") && message.includes("AI")) {
        result = "The message \" " + message + "\" is legitimate!";
    } else if (message.includes("AI")) {
        result = "The message \" " + message + "\" is tampered with!";
    } else if (message.includes("aI") || message.includes("Ai")) {
        result = "The message \" " + message + "\" is tampered with!";
    } else if (message.includes("FR")) {
        result = "The message \" " + message + "\" is legitimate!";
    } else {
        result = "The message \" " + message + "\" is yet to be encoded.";
    }

    document.getElementById("result").innerText = result;
}