import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Force complete cache clear v5
// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          console.log('SW update found');
        });
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Handle PWA install prompt
let deferredPrompt: any;
window.addEventListener('beforeinstallprompt', (e) => {
  console.log('PWA install prompt available');
  e.preventDefault();
  deferredPrompt = e;
  
  const installButton = document.createElement('button');
  installButton.textContent = '📱 Install App';
  installButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    padding: 12px 16px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;
  
  installButton.addEventListener('click', () => {
    installButton.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the PWA install prompt');
      }
      deferredPrompt = null;
    });
  });
  
  document.body.appendChild(installButton);
});

window.addEventListener('appinstalled', () => {
  console.log('PWA was installed successfully');
  const installButton = document.querySelector('button[style*="Install App"]') as HTMLElement;
  if (installButton) {
    installButton.style.display = 'none';
  }
});

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
