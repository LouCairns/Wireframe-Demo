
//TRYING TO WORK OUT HOW TO INSERT LIVE DATE
//const today = new Date();


//TRYING TO WORK OUT HOW TO DO IMAGE CHANGE ON CLICK

   // let user;

   // function yourName() {
    //  user = prompt("What is your name?");
      //return document.write(user);
    //}
 

//ABSOLUTELY NO IDEA HERE

    //function guessANumber() {let user;

//function yourName() {user = prompt("TYPE YOUR NAME");

let user;

function yourName() {user = prompt("Who are you?");

alert("Welcome " + user ); 

console.log(user); return user;
}

  yourName()    


  function displayRating() {
    let output = "";
    let rating = prompt("Rate Doris' work on a scale of 1 to 5");
    for (let i = 0; i < rating; i++) {
      output += "<img class='star' src='Images/smallstar.jpg' alt='rating star'>";
    }
    return document.write(output);
  }

  displayRating()

