// Keep JavaScript progressive and minimal: the resume remains fully usable without it.
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
