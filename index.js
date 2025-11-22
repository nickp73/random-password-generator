const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">","."];

const generateBtn = document.querySelector(".Button");
const passwordOne = document.getElementById("passwordDisplayOne");
const passwordTwo = document.getElementById("passwordDisplayTwo");

function generatePassword() {
    let password = "";
    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

generateBtn.addEventListener("click", () => {
    passwordOne.textContent = generatePassword();
    passwordTwo.textContent = generatePassword();
});

async function copyPassword(elementId) {
	const displayElement = document.getElementById(elementId);
	const passwordText = displayElement.textContent;

	try {
		await navigator.clipboard.writeText(passwordText);
		alert('Password copied to clipboard!');
	} catch (err) {
		console.error('Failed to copy text: ', err);
		alert('Copy failed. Please try manually selecting the text.');
	}
}
