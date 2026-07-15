const messages = document.getElementById("messages");

function sendMessage(){

    let input = document.getElementById("msg");

    let text = input.value.trim();

    if(text==="") return;

    let div = document.createElement("div");

    div.className="message sent";

    div.innerText=text;

    messages.appendChild(div);

    input.value="";

    messages.scrollTop=messages.scrollHeight;

    setTimeout(reply,1000);
}

function reply(){

    let div=document.createElement("div");

    div.className="message received";

    div.innerText="Hello 👋";

    messages.appendChild(div);

    messages.scrollTop=messages.scrollHeight;
}

document.getElementById("msg").addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});