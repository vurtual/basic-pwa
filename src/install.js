export function install() {
  let deferredPrompt;
  const installPWA = document.querySelector('.install-pwa');
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    console.log('before install prompt');

    installPWA.style.display = 'block';
    deferredPrompt = e;
  });

  installPWA.addEventListener('click', e => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
}
