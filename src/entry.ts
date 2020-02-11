import './index.css';

const select = document.querySelector('#my-select');
if (select) {
  select.addEventListener('change', (e: Event) => {
    const target = e.target as HTMLSelectElement;
    console.log(target.value);
  })
}
