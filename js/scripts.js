<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Target your main (hero) section
    const heroSection = document.getElementById('home'); 
    // or document.querySelector('.hero');

    // Set the background image for the main (hero) section
    heroSection.style.backgroundImage = "url('images/cloudsbg.gif')";
    heroSection.style.backgroundSize = "cover";
    heroSection.style.backgroundPosition = "center";
    heroSection.style.backgroundRepeat = "no-repeat";
    heroSection.style.backgroundAttachment = "fixed";

    // Additional JavaScript for slider functionality remains here
    const sliderContainer = document.querySelector('.slider-container');
    const slider = document.querySelector('.slider');
    const sliderHandle = document.querySelector('.slider-handle');
    const sliderLeft = document.querySelector('.slider-left');
    const sliderRight = document.querySelector('.slider-right');

    let isDragging = false;

    const startDrag = (e) => {
      isDragging = true;
      document.body.style.cursor = 'grabbing';
      e.preventDefault();
    };

    const endDrag = () => {
      isDragging = false;
      document.body.style.cursor = 'default';
    };

    const onDrag = (e) => {
      if (!isDragging) return;

      const rect = sliderContainer.getBoundingClientRect();
      const offsetX = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;

      let percentage = (offsetX / rect.width) * 100;
      percentage = Math.max(0, Math.min(100, percentage));

      sliderLeft.style.width = `${percentage}%`;
      sliderRight.style.width = `${100 - percentage}%`;
      sliderHandle.style.left = `calc(${percentage}% - ${sliderHandle.offsetWidth / 2}px)`;
    };

    sliderHandle.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', endDrag);

    sliderHandle.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', onDrag);
    document.addEventListener('touchend', endDrag);
  });
</script>
