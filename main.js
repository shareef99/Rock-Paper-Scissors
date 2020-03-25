let paper = document.querySelector('.icon-paper');
let scissors = document.querySelector('.icon-scissors');
let rock = document.querySelector('.icon-rock');
let bgTri = document.querySelector('.bg-triangle');
let pickedUser = document.querySelector('.pickedUser');
let pickedHouse = document.querySelector('.pickedHouse');
let userPickedPaper = document.querySelector('.pickedPaperUser');
let userPickedScissors = document.querySelector('.pickedScissorsUser');
let userPickedRock = document.querySelector('.pickedRockUser');
let userText = document.querySelector('.pickedh3User');
let housePickedPaper = document.querySelector('.pickedPaperHouse');
let housePickedScissors = document.querySelector('.pickedScissorsHouse');
let housePickedRock = document.querySelector('.pickedRockHouse');
let houseText = document.querySelector('.pickedh3House');
let playAgain = document.querySelector('.textButton');
let youwin = document.querySelector('.youwin');
let youlose = document.querySelector('.youlose');
let draw = document.querySelector('.draw');
let text = document.querySelector('.textDiv');
let score = document.querySelector('.scoreNumber');
let scoreCount = 0;

paper.addEventListener('click', picked);
scissors.addEventListener('click', picked);
rock.addEventListener('click', picked);
playAgain.addEventListener('click', startOver);

function picked(e) {

    bgTri.style.display = "none";

    let randomNumber = Math.floor((Math.random() * 3) + 1);

    userText.style.display = "inline-block";
    houseText.style.display = "inline-block";

    if (e.target.alt == "icon-paper" || e.target.id == "paper") {
        
        userPickedPaper.style.display = "inline-block";   
        userPickedScissors.style.display = "none";  
        userPickedRock.style.display = "none";  

        setTimeout(function () {
            if (randomNumber == 1) {
                text.style.display = 'inline-block';
                draw.style.display = 'flex';
                playAgain.style.display = 'flex';

                scoreCount = scoreCount;
            }else if (randomNumber == 2) {   
                text.style.display = 'inline-block';
                youlose.style.display = 'flex';
                playAgain.style.display = 'flex';

                scoreCount--;
            }else if (randomNumber == 3){
                text.style.display = 'inline-block';
                youwin.style.display = 'flex';
                playAgain.style.display = 'flex';
                scoreCount++;
            } 
            score.innerText = scoreCount;
        },1500);        
    }
    
    if (e.target.alt == "icon-scissors" || e.target.id == "scissors") {
    
        userPickedPaper.style.display = "none";   
        userPickedScissors.style.display = "inline-block";  
        userPickedRock.style.display = "none";         
    
        setTimeout(function () {
            if (randomNumber == 1) {
                text.style.display = 'inline-block';
                youwin.style.display = 'flex';
                playAgain.style.display = 'flex';

                scoreCount++;
            }else if (randomNumber == 2) {
                text.style.display = 'inline-block';
                draw.style.display = 'flex';
                playAgain.style.display = 'flex';

                scoreCount = scoreCount;
            }else if (randomNumber == 3){
                text.style.display = 'inline-block';
                youlose.style.display = 'flex';
                playAgain.style.display = 'flex';

                scoreCount--;
            }
            score.innerText = scoreCount;
        },1500); 

    }
    
    if (e.target.alt == "icon-rock" || e.target.id == "rock") 
    {
    
        userPickedPaper.style.display = "none";   
        userPickedScissors.style.display = "none";  
        userPickedRock.style.display = "inline-block";         
    

        setTimeout(function () {
            if (randomNumber == 1) {
                text.style.display = 'inline-block';
                youlose.style.display = 'flex';
                playAgain.style.display = 'flex';

                scoreCount--;
            }else if (randomNumber == 2) {    
                text.style.display = 'inline-block';
                youwin.style.display = 'flex';
                playAgain.style.display = 'flex';

                scoreCount++;
            }else if (randomNumber == 3){
                
                text.style.display = 'inline-block';
                draw.style.display = 'flex';
                playAgain.style.display = 'flex';

                scoreCount = scoreCount;
            }
            score.innerText = scoreCount;
        },1500); 

    }
    
    setTimeout(function(){ 
        
        if (randomNumber == 1) {

            housePickedPaper.style.display = "inline-block";   
            housePickedScissors.style.display = "none";  
            housePickedRock.style.display = "none";

            setTimeout(function (){
                housePickedPaper.style.display = "none";   
            },2500);
        }
        if (randomNumber == 2) {

            housePickedPaper.style.display = "none";   
            housePickedScissors.style.display = "inline-block";  
            housePickedRock.style.display = "none";
            
            setTimeout(function (){
                housePickedScissors.style.display = "none";  
            },2500);
        }
        if (randomNumber == 3) {
            
            housePickedPaper.style.display = "none";   
            housePickedScissors.style.display = "none";  
            housePickedRock.style.display = "inline-block"; 

            setTimeout(function (){
                housePickedRock.style.display = "none"; 
            },2500);
        }
    
    }, 1000);

}

function startOver(e) {
    bgTri.style.display = "flex";

    if(youwin.style.display == 'flex' || playAgain.style.display == 'flex') {
        youwin.style.display = 'none';
        playAgain.style.display = "none";
    }

    if (youlose.style.display == 'flex' || playAgain.style.display == 'flex') {
        youlose.style.display = 'none';
        playAgain.style.display = "none";
    }

    if (draw.style.display == 'flex' || playAgain.style.display == 'flex') {
        draw.style.display = 'none';        
        playAgain.style.display = "none";
    }

    userPickedPaper.style.display = "none";   
    userPickedScissors.style.display = "none";  
    userPickedRock.style.display = "none";
    userText.style.display = "none";
    housePickedPaper.style.display = "none";   
    housePickedScissors.style.display = "none";  
    housePickedRock.style.display = "none";
    houseText.style.display = "none";

    
}