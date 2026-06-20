function closePopup(){
    document.getElementById("leadPopup").style.display="none";
}

window.onload=function(){
    setTimeout(function(){
        document.getElementById("leadPopup").style.display="flex";
    },1000);
} 
// Scroll To Top Button
const scrollBtn =
document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        scrollBtn.style.display="block";

    }
    else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
//end

//ai bot
function toggleChat(){

    const chat =
    document.getElementById("chatContainer");

    if(chat.style.display==="block"){

        chat.style.display="none";

    }else{

        chat.style.display="block";

    }

}

function sendMessage(){

    let input =
    document.getElementById("userInput");

    let text =
    input.value;

    if(text==="") return;

    let chatBody =
    document.getElementById("chatBody");

    chatBody.innerHTML +=
    `<div class="user-message">${text}</div>`;

    let reply =
    getBotReply(text);

    setTimeout(()=>{

        chatBody.innerHTML +=
        `<div class="bot-message">${reply}</div>`;

        chatBody.scrollTop =
        chatBody.scrollHeight;

    },500);

    input.value="";
}

function getBotReply(msg){

    msg=msg.toLowerCase();

    if(msg.includes("training"))
        return "We provide Full Stack, Python, AI, Data Science and Digital Marketing training.";

    if(msg.includes("project"))
        return "We provide IEEE, Mini, Final Year and Real-Time Projects.";

    if(msg.includes("contact"))
        return "Call us at +91 6379530183";

    if(msg.includes("website"))
        return "We develop professional business websites.";

    return "Our team will contact you shortly.";
}
//end