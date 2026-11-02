const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword(){
    const passwordLength = Number(document.getElementById("inputNumber").value) || 15;
    let randomPassword1 = []
    let randomPassword2 = []
    
    for(let i = 0; i < passwordLength; i++){
        randomPassword1.push(characters[Math.floor(Math.random() * characters.length)])
        randomPassword2.push(characters[Math.floor(Math.random() * characters.length)])
    }
    
    document.getElementById("output1").textContent = randomPassword1.join("")
    document.getElementById("output2").textContent = randomPassword2.join("")
} 


function copyPassword(chosenPassword) {
    if(chosenPassword === 1){
        const passwordText = document.getElementById("output1").textContent;
        if (passwordText) {
            navigator.clipboard.writeText(passwordText);
            alert("Password 1 copied to clipboard!");
    }
    }else if(chosenPassword === 2)
    {
        const passwordText = document.getElementById("output2").textContent;
        if (passwordText) {
            navigator.clipboard.writeText(passwordText);
            alert("Password 2 copied to clipboard!");
        }
    }
}

