'use strict';

const reactElement = React.createElement;

const LikeButton = () => {
  const [liked, setLiked] = React.useState(false);
    if(liked) {
      return ('You like that. Dont you?')
    }
    return reactElement(
      'button',
      { onClick: () => setLiked(true) },
      'Like'
    )
}


//Here we select/pick/peek with normal document API the #like_button_container from the index.html page
const domContainer = document.querySelector('#like_button_container');
//Here we render with the ReactDOM API and our earlier reactElement crated with the React API
//inside the render function we passing as a first argument our reactElement(which is actually a 
//function that can take as argument custom React Function Element) and as a second argument we passing
// the selected normal DOM element from the index.html page
ReactDOM.render(reactElement(LikeButton), domContainer);