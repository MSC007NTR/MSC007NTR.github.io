let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/11.jpeg') {
      myImage.setAttribute('src', 'images/22.jpeg');
    } else {
      myImage.setAttribute('src', 'images/11.jpeg');
    }
}