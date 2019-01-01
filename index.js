
const DODGER = document.getElementById('dodger')
const DODGER_WIDTH=40
const GAME = document.getElementById('game')
const GAME_HEIGHT = 400
const GAME_WIDTH = 400
const LEFT_ARROW = 37 // use e.which!
const RIGHT_ARROW = 39 // use e.which!
const ROCKS = []
const START = document.getElementById('start')

var gameInterval = null









function checkCollision(rock) {
  const top = positionToInteger(rock.style.top)

  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)
<<<<<<< HEAD
    const dodgerRightEdge = dodgerLeftEdge+40;
=======

    // FIXME: The DODGER is 40 pixels wide -- how do we get the right edge?
    const dodgerRightEdge = dodgerLeftEdge+40;

>>>>>>> 257f453ea602420de81d7009c198fac25b80b067
    const rockLeftEdge = positionToInteger(rock.style.left)
    const rockRightEdge = rockLeftEdge+20;

<<<<<<< HEAD
=======
    // FIXME: The rock is 20 pixel's wide -- how do we get the right edge?
    const rockRightEdge = rockLeftEdge+20;


>>>>>>> 257f453ea602420de81d7009c198fac25b80b067
    if ((rockRightEdge > dodgerLeftEdge) && ((rockRightEdge-dodgerLeftEdge)<60)) {
      rock.remove()
      return true
    }
    else {
      return false
    }
  }
}


<<<<<<< HEAD
=======









>>>>>>> 257f453ea602420de81d7009c198fac25b80b067
function createRock(x) {
  console.log('hello you')
  const rock = document.createElement('div')
  GAME.append(rock)
<<<<<<< HEAD
  rock.className = 'rock'
  rock.style.left = `${x}px`
  var top = 0
  rock.style.top = top
  moveRock(rock)
}

=======
  
  rock.className = 'rock'
  rock.style.left = `${x}px`  //left side of rock assigned to parameter into function
  


  // Hmmm, why would we have used `var` here?  We need to reassign a new top for each new rock so they all start at the top.
  var top = 0
  rock.style.top = top
  //ROCKS=[rock]
  moveRock(rock)
  
  
  /*
   * Now that we have a rock, we'll need to append
   * it to GAME and move it downwards.
   */

}  
  
  
  
  

  
  



  /**
   * This function moves the rock. (2 pixels at a time
   * seems like a good pace.)
   */
 
 
 
/* 
 
function moveRock() {
  rockInterval = setInterval(function() {
    var top=parseInt(rock.style.top.split('px',1))+2
    if (top<379) {
      rock.style.top=`${top+2}px`   
    } 
    else {
      clearInterval(rockInterval)
    }
   }, 10)
 }
 
 */
 
 

 
function moveRock(movingRock) {
    // implement me!
    // (use the comments below to guide you!)
    /**
     * If a rock collides with the DODGER,
     * we should call endGame()
     */

    /**
     * Otherwise, if the rock hasn't reached the bottom of
     * the GAME, we want to move it again.
     */


    /**
     * But if the rock *has* reached the bottom of the GAME,
     * we should remove the rock from the DOM
     */

  var rock=movingRock

  rockInterval = setInterval(function() {
    var top=parseInt(rock.style.top.split('px',1))+2
    if ((top<(GAME_HEIGHT-20)) && (!checkCollision(rock))) {
      rock.style.top=`${top+2}px`   
    } 
    else if (checkCollision(rock)) {
      clearInterval(rockInterval)
      //console.log('cleared') ----->rock interval cleared!!
      endGame()
      //console.log('ended game') ----->successfully printed!!!
    }
    else {
      clearInterval(rockInterval)
      rock.remove()
      //ROCKS.pop()
    }
   }, 4)  

  //ROCKS.push(rock)
  //return rock
>>>>>>> 257f453ea602420de81d7009c198fac25b80b067


<<<<<<< HEAD

function moveRock(movingRock) {
  var rock=movingRock
  rockInterval = setInterval(function() {
    var top=parseInt(rock.style.top.split('px',1))+2
    if ((top<(GAME_HEIGHT-20)) && (!checkCollision(rock))) {
      rock.style.top=`${top+2}px`
    }
    else if (checkCollision(rock)) {
      clearInterval(rockInterval)
      endGame()
    }
    else {
      clearInterval(rockInterval)
      rock.remove()
    }
   }, 4)
=======
  // Add the rock to ROCKS so that we can remove all rocks
  // when there's a collision
 

  // Finally, return the rock element you've created
>>>>>>> 257f453ea602420de81d7009c198fac25b80b067

}


<<<<<<< HEAD
function endGame() {
  clearInterval(gameInterval)
=======




/**
 * End the game by clearing `gameInterval`,
 * removing all ROCKS from the DOM,
 * and removing the `moveDodger` event listener.
 * Finally, alert "YOU LOSE!" to the player.
 */
function endGame() {
  clearInterval(gameInterval)
  console.log('cleared')
  //for (var i=(ROCKS.length-1);i>=0;i--) {
  //  ROCKS[i].remove()
  //}
>>>>>>> 257f453ea602420de81d7009c198fac25b80b067
  window.removeEventListener('keydown', moveDodger)
  alert('YOU LOSE!')
}





function moveDodger(e) {
   if (e.which===LEFT_ARROW) {
     e.preventDefault()
     moveDodgerLeft()
     e.stopPropagation()
   }
   else if (e.which===RIGHT_ARROW) {
     e.preventDefault()
     moveDodgerRight()
     e.stopPropagation()
   }
}


function moveDodgerLeft() {
  var left = positionToInteger(DODGER.style.left)  //current left edge of dodger

  function step() {
    if (left > 3) {
      DODGER.style.left = `${left -= 4}px`
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}




function moveDodgerRight() {
  var left = positionToInteger(DODGER.style.left)  //current left edge of dodger

  function step() {
    if (left < ((GAME_WIDTH-DODGER_WIDTH)-3)) {
      DODGER.style.left = `${left += 4}px`
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}




/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}



function start() {
  window.addEventListener('keydown', moveDodger)

  START.style.display = 'none'

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  }, 1000)
}
<<<<<<< HEAD
=======




>>>>>>> 257f453ea602420de81d7009c198fac25b80b067
