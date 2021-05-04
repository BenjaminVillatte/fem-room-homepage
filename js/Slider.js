export default class Slider {
  constructor(selectors) {
    this.currentItemIdx = 0;
    this.sliders = []
    selectors.forEach((selector) => {
      this.sliders.push(document.querySelectorAll(selector));
    })
    
    document.querySelector('.slider-control .previous').addEventListener('click', this.previous)
    document.querySelector('.slider-control .next').addEventListener('click', this.next)
  }

  previous = () => {
    this.currentItemIdx -= 1;
    if (this.currentItemIdx < 0) {
      this.currentItemIdx = this.sliders[0].length - 1
    }
    this.show()
  }
  
  next = () => {
    this.currentItemIdx += 1;
    if (this.currentItemIdx > this.sliders[0].length - 1) {
      this.currentItemIdx = 0
    }
    this.show()
  }

  show = () => {
    this.sliders.forEach((sliders) => {
      sliders.forEach((el, index) => {
        if (index === this.currentItemIdx) {
          el.classList.add('active')
        } else {
          el.classList.remove('active')
        }
      })
    })
    
  }
}