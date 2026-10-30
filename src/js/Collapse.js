export default class Collapse {
  constructor(element) {
    this.element = element;
    this.toggleButton = this.element.querySelector(".collapse__toggle");
    this.body = this.element.querySelector(".collapse__body");
    this.content = this.element.querySelector(".collapse__content");
    this.isCollapsed = false;

    this.onTransitionEnd = this.onTransitionEnd.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  init() {
    this.toggleButton.addEventListener("click", this.toggleCollapse);
    this.body.addEventListener("transitionend", this.onTransitionEnd);
  }

  toggleCollapse() {
    if (this.isCollapsed) {
      this.show();
    } else {
      this.hide();
    }
    this.isCollapsed = !this.isCollapsed;
  }

  hide() {
    // Фиксируем текущую высоту, чтобы transition сработал от конкретного
    // значения (переход от "auto" к "0" браузер не анимирует).
    this.body.style.height = `${this.content.offsetHeight}px`;
    // Принудительный reflow, иначе браузер объединит изменения стилей.
    void this.body.offsetHeight;
    this.body.classList.add("collapse__body_collapsed");
    this.body.style.height = "0px";
  }

  show() {
    this.body.style.height = `${this.content.offsetHeight}px`;
    this.body.classList.remove("collapse__body_collapsed");
  }

  onTransitionEnd() {
    // После раскрытия возвращаем auto, чтобы блок подстраивался
    // под изменение размеров содержимого и окна.
    if (!this.isCollapsed) {
      this.body.style.height = "auto";
    }
  }
}
