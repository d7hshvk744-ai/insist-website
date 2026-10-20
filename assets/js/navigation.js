const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');

if (toggle && navigation) {
  const mobile = window.matchMedia('(max-width: 47.99rem)');
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('span').textContent = open ? '−' : '+';
    navigation.hidden = mobile.matches && !open;
  };
  const syncMenu = () => {
    toggle.hidden = !mobile.matches;
    setOpen(false);
  };
  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  navigation.addEventListener('click', (event) => {
    if (mobile.matches && event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  mobile.addEventListener('change', syncMenu);
  syncMenu();
}
