var nav = true
function navbar () {
    if (nav) {
      document.getElementById('navcontainer').style.height = 'auto'
    } else {
      document.getElementById('navcontainer').style.height = '0'
    }
    nav =! nav
}
