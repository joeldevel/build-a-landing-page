// navigation
const mediaQuery = window.matchMedia('(max-width: 599px)');

const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');

const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItems = [nav1, nav2, nav3, nav4, nav5];

function toggleNav() {

  //togle menu bars open/close
  menuBars.classList.toggle('change');
  // toggle menu active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // animate in overlay

    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // animate in nav items
    navAnimation('out', 'in');
  } else {
    // animate out overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');

    // animate out nav items
    navAnimation('in', 'out');
  }
}

function navAnimation(direction1, direction2) {
  navItems.forEach( (item, i) => {
    item.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);
  });
}

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!');
    console.log('min-width 600px');

    // control navigation animation


    // event listeners
    menuBars.addEventListener('click', toggleNav);
    navItems.forEach((navItem) => {
      navItem.addEventListener('click', toggleNav);
    });
  }

}
 
// Register event listener
// mediaQuery.addListener(handleTabletChange)
mediaQuery.addEventListener('change',handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)
