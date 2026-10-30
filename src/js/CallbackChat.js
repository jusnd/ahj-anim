export default class CallbackChat {
  constructor(container) {
    this.container = container;
    this.isFormVisible = false;

    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  init() {
    this.render();
    this.button = this.container.querySelector(".callback-chat__button");
    this.form = this.container.querySelector(".callback-chat__form");
    this.closeButton = this.container.querySelector(".callback-chat__close");

    this.button.addEventListener("click", this.showForm);
    this.closeButton.addEventListener("click", this.hideForm);
    this.form.addEventListener("submit", this.onSubmit);
  }

  render() {
    this.container.classList.add("callback-chat");
    this.container.innerHTML = `
      <button class="callback-chat__button" type="button" aria-label="Обратная связь">&#9998;</button>
      <div class="callback-chat__popover">
        <form class="callback-chat__form">
          <div class="callback-chat__header">
            <span class="callback-chat__title">Напишите нам!</span>
            <button class="callback-chat__close" type="button" aria-label="Закрыть">&times;</button>
          </div>
          <textarea
            class="callback-chat__textarea"
            placeholder="Ваше сообщение"
            required
          ></textarea>
          <button class="callback-chat__submit" type="submit">Отправить</button>
        </form>
      </div>`;
  }

  showForm() {
    this.isFormVisible = true;
    this.container.classList.add("callback-chat_open");
    this.container.querySelector(".callback-chat__textarea").focus();
  }

  hideForm() {
    this.isFormVisible = false;
    this.container.classList.remove("callback-chat_open");
  }

  onSubmit(event) {
    event.preventDefault();
    this.form.reset();
    this.hideForm();
  }
}
