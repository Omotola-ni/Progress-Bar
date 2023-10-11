function startAnimation() {
  const meter = document.getElementById("progressMeter");
  const percentage = document.getElementById("percentage");
  const checkProgressButton = document.getElementById("checkProgress");

  // Disable the "Check My Progress" button during animation
  checkProgressButton.disabled = true;

  let progress = 0;
  const increment = 1;
  const interval = 50; // Update every 50ms

  const randomPercentage = Math.floor(Math.random() * 101);

  const updateProgress = () => {
    progress += increment;

    if (progress <= randomPercentage) {
      meter.value = progress;
      percentage.innerText = `${progress}%`;
      requestAnimationFrame(updateProgress);
    } else {
      // Re-enable the "Check My Progress" button
      checkProgressButton.disabled = false;
    }
  };

  requestAnimationFrame(updateProgress);
}

function resetAnimation() {
  const meter = document.getElementById("progressMeter");
  const percentage = document.getElementById("percentage");

  // Reset the animation
  meter.value = 0;
  percentage.innerText = "0%";
}
