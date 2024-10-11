export function eventHandler(this: HTMLElement, event: Event) {
  console.info('#eventHandler', event, this);
  (event.target as HTMLElement).classList?.toggle('active');
}

export function addListeners(selector: string): void {
  const els = document.querySelectorAll(selector);
  if (els && els.length) {
    els.forEach(el => el.addEventListener('click', eventHandler));
  }
}
