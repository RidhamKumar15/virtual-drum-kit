console.log(
    "%c Made by Ridham Verma ",
    "font-size: 20px; font-weight: bold; color:rgb(225, 200, 57); background: #222; padding: 1px; border-radius: 5px;"
  );
console.log("Hi devs...")
  


document.addEventListener("keydown", function (event) {
    let keypress = event.key.toUpperCase();

    // Checking if the key is present or not.
    let EventKey = document.querySelector(`.key[key-data="${keypress}"]`);

    if (EventKey) {
        EventKey.classList.add("highlight");
        console.log(`Added highlight to: ${keypress}`);

        musicplayer(keypress)
    }
});
document.addEventListener("keyup",function(event){
    let keypress = event.key.toUpperCase();

    let EventKey=document.querySelector(`.key[key-data="${keypress}"]`)
    if(EventKey){
        EventKey.classList.remove("highlight");
    }
})
function musicplayer(keypress){
    let music;


    switch (keypress) {
        case "A":
                console.log("A is clicked")
                music = new Audio("sounds/clap.wav");
            break;

        case "S":
                console.log("A is clicked")
                music = new Audio("sounds/hihat.wav");

                // music2.play();
            break;
        case "D":
            music = new Audio("sounds/kick.wav");
            break;
        case "F":
            music = new Audio("sounds/openhat.wav");
            break;
        case "G":
            music = new Audio("sounds/boom.wav");
            break;
        case "H":
            music = new Audio("sounds/ride.wav");
            break;
        case "J":
            music = new Audio("sounds/snare.wav");
            break;
        case "K":
            music = new Audio("sounds/tom.wav");
            break;
        case "L":
            music = new Audio("sounds/tink.wav");
            break;
        default: console.log("Invalid Key")
            break;
        }
        return music.play();
    
}




