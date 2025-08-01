// XSS vulnerability warning with contact info

const warning = document.createElement('div');
warning.innerHTML = `
  <strong style="font-size: 1.5em; color: #b71c1c;">⚠️ Security Warning!</strong><br>
  <span style="font-size: 1.2em;">
    This website is <strong>vulnerable to XSS attacks</strong>.<br>
    (Yes, even your grandma could hack this site right now!)<br>
    <em>If you want this fixed, contact:</em><br>
    <ul style="text-align: left; margin: 10px 0 0 30px;">
      <li><strong>Discord:</strong> weakauras</li>
      <li><strong>Reddit:</strong> Larsj_02</li>
      <li><strong>GitHub:</strong> Larsj02</li>
    </ul>
    <span style="font-size: 1em; color: #999;">
      <br>(This message will self-destruct… eventually.)
    </span>
  </span>
`;
warning.style.position = 'fixed';
warning.style.top = '20px';
warning.style.left = '50%';
warning.style.transform = 'translateX(-50%)';
warning.style.background = '#fff3cd';
warning.style.color = '#222';
warning.style.border = '2px solid #b71c1c';
warning.style.borderRadius = '10px';
warning.style.padding = '24px 32px';
warning.style.zIndex = '99999';
warning.style.boxShadow = '0 2px 10px rgba(183, 28, 28, 0.2)';
warning.style.textAlign = 'center';
warning.style.fontFamily = 'system-ui, sans-serif';
document.body.appendChild(warning);

// Remove the banner after 10 seconds
setTimeout(() => {
  warning.remove();
}, 10000);