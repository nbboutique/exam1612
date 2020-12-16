const Firstname = document.getElementById("firstnam");
const Imag = document.getElementById("image");
const Email = document.getElementById("em");
let num = 0;
let numb = 0;
let start = {
    Firstname: Firstname.innerText,
    Imag: Imag.src,
    Email: Email.innerText
};
Firstname.onclick = function(){
    
        Firstname.innerText = start.Firstname;        
        Imag.src = start.Imag;
        Email.innerText = start.Email;     
        
    $ajaxUtils.sendGetRequest("https://exam1612.herokuapp.com/data/" +num,function(response){
        const json =  (JSON.parse(response.responseText))[0];
        Firstname.innerText = json.title;            
        Email.innerText = json.text;
        Imag.src = json.photo;    
        },
    };