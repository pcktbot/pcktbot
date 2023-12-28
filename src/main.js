function toggleClass(event) {
  console.info('#enlarge', event);
  const div = event.target;

  if (div.classList.contains('active')) {
    return div.classList.remove('active');
  };
  const divs = getDivs();
  reset(divs);
  div.classList.add('active');
}

function reset(divs) {
  for (const div of divs) {
    div.classList.remove('active');
  }
}

function handleClick(event) {
  toggleClass(event);
}

function getDivs() {
  return document.querySelector('.stack').children;
}
function addHandlers() {
  const divs = getDivs();
  console.info('#addHandlers', divs, divs.length);
  for (const div of divs) {
    div.addEventListener('click', handleClick);
  }
}

window.addEventListener('load', addHandlers);
