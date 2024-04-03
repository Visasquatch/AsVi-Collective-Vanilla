
//Carousel
  const textItems = document.querySelectorAll('.text-item');
  let currentIndex = 0;

  function showText(index) {
    textItems.forEach((item, i) => {
      item.style.display = i === index ? 'block' : 'none';
    });
  }

  function rotateText() {
    currentIndex = (currentIndex + 1) % textItems.length;
    showText(currentIndex);
  }

  // Initial display
  showText(currentIndex);

  // Rotate text every 3 seconds (adjust the time as needed)
  setInterval(rotateText, 3000);

//Currency
const currencyDropdown = document.getElementById("currencyDropdown");

//About Us
document.getElementById(aboutUs1).addEventListener('hover', function() {
  alert(' AsVi Collective, founded by Asagba Vincent is a site for anything and everything fashion. The newest in vogue that everyone who is everyone and who wants to be anyone is wearing. ')
})




