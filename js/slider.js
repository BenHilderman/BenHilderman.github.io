// const slider = document.querySelector('.slider-container');
// const sliderLeft = document.querySelector('.slider-left');
// const sliderRight = document.querySelector('.slider-right');
// const sliderHandle = document.querySelector('.slider-handle');

// let isDragging = false;

// // Handle Dragging
// sliderHandle.addEventListener('mousedown', () => {
//   isDragging = true;
//   document.body.style.cursor = 'grabbing';
// });

// document.addEventListener('mousemove', (e) => {
//   if (isDragging) {
//     const rect = slider.getBoundingClientRect();
//     const offsetX = e.clientX - rect.left;

//     if (offsetX > 0 && offsetX < rect.width) {
//       const leftWidth = (offsetX / rect.width) * 100;
//       sliderLeft.style.width = `${leftWidth}%`;
//       sliderRight.style.width = `${100 - leftWidth}%`;
//       sliderHandle.style.left = `calc(${leftWidth}% - 20px)`;
//     }
//   }
// });

// document.addEventListener('mouseup', () => {
//   isDragging = false;
//   document.body.style.cursor = 'default';
// });

// // Smooth scrolling to the bottom of the page
// document.querySelector('.scroll-to-bottom').addEventListener('click', (e) => {
//     e.preventDefault(); // Prevent the default anchor behavior
//     document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
//  });
 