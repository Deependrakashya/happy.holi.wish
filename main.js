const mainDiv = document.querySelector('.main')
const firstImg=document.getElementById('firstImg')
const firstImg2=document.getElementById('firstImg2')
const song1 = document.getElementById('1')
const song2 = document.getElementById('2')
const song3 = document.getElementById('3')

const song4 = document.getElementById('4')
const song5 = document.getElementById('5')
const nameInputBox = document.querySelector('#enterName')
let username = document.getElementById('name')
var randomSong =  Math.floor(Math.random() * (6 - 1)) + 1;
let dynamicName = document.getElementById('dynamicName')
console.log(randomSong, name);
function nameInput ( ){
	// const guess =parseInt(userInput.value)
	var name = username.value;
	
	
	dynamicName.innerHTML=name+'  jii'
	if(name!=''){
		nameInputBox.style.display='none'
		showImgs()
		playAudio()
		
	}
	
}
function playAudio() {
	
	if(randomSong==1){

		song1.play(); // Play the audio
	}
	if(randomSong==2){

		song2.play(); // Play the audio
	}
	if(randomSong==3){

		song3.play(); // Play the audio
	}
	if(randomSong==4){

		song4.play(); // Play the audio
	}
	if(randomSong==5){

		song5.play(); // Play the audio
	}
  }
function showImgs () {

   mainDiv.style.display='block'
	firstImg.style.display = 'block';
	setTimeout (()=>{
		
		firstImg.style.display="none"
	},5000)
} 

  

  