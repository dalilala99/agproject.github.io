document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']; // Add your image filenames

    let currentIndex = 0;

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    // Create image elements and append to the carousel container
    images.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        carouselContainer.appendChild(imgElement);
    });

    // Set up event listeners for next and previous buttons
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.addEventListener('click', nextImage);

    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Previous';
    prevBtn.addEventListener('click', prevImage);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    });

    // Append buttons to the document
    document.body.appendChild(prevBtn);
    document.body.appendChild(nextBtn);
});

 // Toggle navigation menu for small screens
 document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('show');
});

// checks contact form
function riempita(box)
    {
    if (box.value.length < 1)
      {
      alert ("Errore! La casella di testo � vuota!");
      return false;
      }
    return true;
    }  
    function email(box)
    {
    var apos, dotpos, lastpos; 
    apos = box.value.indexOf("@");
    dotpos = box.value.lastIndexOf(".");
    lastpos = box.value.lenght-1;
    if (apos<1 || dotpos-apos<2 || lastpos-dotpos>3)
      {
      alert("Errore! La casella di testo non contiene un indirizzo mail valido!");
      return false;
      } 
    return true;
    }