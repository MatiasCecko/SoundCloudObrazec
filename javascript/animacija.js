setTimeout(function () {
  const videoContainer = document.getElementById('videoContainer');
  const loginWrapper = document.getElementById('loginWrapper');
  videoContainer.classList.add('fade-out');
  setTimeout(function () {
    videoContainer.style.display = 'none';
    loginWrapper.style.display = 'block';
  }, 1000);
}, 3000);