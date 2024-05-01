const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 100; // 100px - the walk is the distance of the shadow at its outer limit

function shadow(e) {
  //   const width = herp.offsetWidth;
  //   const height = herp.offsetHeight;
  //   let x = e.offsetX;
  //   let y = e.offsetY;

  // or using destructuring just for flex:
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    // in this situation, this is hero
    // if we're hovering the h1, the x and y values won't be good
    // so we need to update them, by adding the top and left offset values of the h1
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);
  //   100 is he limit, but we're beginning at the middle, so at the best we can go +50 or +-50

  //   text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, 0.4)`;
  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7), ${
    xWalk * -1
  }px ${yWalk * -1}px 0 rgba(0, 255, 255, 0.7)`;
}

hero.addEventListener("mousemove", shadow);
