class ColorGenerator {
  constructor(selector) {
    this.spans = document.querySelectorAll(selector);
    this.colors = [];
    this.locked = new Set();
    this._bindLockListeners();
  }

  _bindLockListeners() {
    this.spans.forEach((span, index) => {
      span.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleLock(index);
      });
    });
  }

  toggleLock(index) {
    if (this.locked.has(index)) {
      this.locked.delete(index);
      this.spans[index].classList.remove('locked');
    } else {
      this.locked.add(index);
      this.spans[index].classList.add('locked');
    }
  }

  isLocked(index) {
    return this.locked.has(index);
  }

  randomColor(options = {}) {
    const {
      hueMin = 0,
      hueMax = 360,
      satMin = 60,
      satMax = 90,
      lightMin = 45,
      lightMax = 65
    } = options;

    const hue = Math.floor(Math.random() * (hueMax - hueMin) + hueMin);
    const sat = Math.floor(Math.random() * (satMax - satMin) + satMin);
    const light = Math.floor(Math.random() * (lightMax - lightMin) + lightMin);

    return { hue, sat, light, toString: () => `hsl(${hue}, ${sat}%, ${light}%)` };
  }

  generate(options = {}) {
    this.spans.forEach((span, index) => {
      if (this.isLocked(index)) return;
      const color = this.randomColor(options);
      this.colors[index] = color;
      span.style.color = color.toString();
    });
    return this.colors;
  }

  setColor(index, color) {
    if (this.spans[index]) {
      this.spans[index].style.color = color;
      this.colors[index] = color;
    }
  }

  getColors() { return this.colors; }
}

const colorGen = new ColorGenerator('span');
const trigger = document.getElementById('random');

trigger.addEventListener('click', () => {
  colorGen.generate();
});

colorGen.generate();
