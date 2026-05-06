function toggleMenu(){
  const nav=document.querySelector('.site-nav');
  if(nav) nav.classList.toggle('open');
}
function sendSandboxEmail(event){
  event.preventDefault();
  const name=document.getElementById('name')?.value || '';
  const email=document.getElementById('email')?.value || '';
  const service=document.getElementById('service')?.value || 'General Inquiry';
  const subject=document.getElementById('subject')?.value || service;
  const message=document.getElementById('message')?.value || '';
  const body=`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`;
  window.location.href=`mailto:sdbx@sandboxxmediagroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
