/*
    Feature from Ton Group 3:
    Scroll to Top with when click entities symbol"
*/
export function scrollToTop(event){
    event.preventDefault();
    window.scrollTo({top:0,behavior:"smooth"});
}

/*
    Feature from Ton Group 3:
    Play sound when sending message.
*/
const submitSound = new Audio('./audio/cork-85200.mp3');
// submitSound.play();
export{submitSound}
