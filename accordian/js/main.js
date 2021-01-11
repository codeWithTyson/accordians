const faq__btns = document.querySelectorAll('.faq__title--icon');

// Looping through each Ele s
faq__btns.forEach(faq__btn => {
  
  // Defining Function 
  const accordiansHandler = () => {
      const parentEl = faq__btn.parentElement;
      
      // Reset 
      faq__btns.forEach(btn =>  btn.parentElement.classList.remove('active'));
      parentEl.classList.add('active');
  }

  // Adding Events & Executing Functions
  faq__btn.addEventListener('click', accordiansHandler)
});

