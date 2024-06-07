function eventHandler(event) {
  console.info('#eventHandler', event, this);
  // if (event.target == )
  // event.target.classList.toggle('active');
}

function addListeners(selector) {
  const els = document.querySelectorAll(selector);
  if (els && els.length) {
    els.forEach((el) => {
      el.addEventListener('click', eventHandler);
    });
  }
}


document.addEventListener('DOMContentLoaded', function() {
  console.info('#DOMContentLoaded', this);
  const selector = '.stack-item';
  addListeners(selector);
});
