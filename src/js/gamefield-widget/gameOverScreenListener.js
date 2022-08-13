export default function gameOverScreenListener() {
  const gameOverScreen = document.querySelector('.gameOverScreen');
  gameOverScreen.addEventListener('click', () => {
    document.location.reload();
  });
}
