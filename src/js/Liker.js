import heartImage from "../img/heart.svg";

const TRAJECTORIES_COUNT = 4;

export default class Liker {
  constructor(container) {
    this.container = container;
    this.button = this.container.querySelector(".liker__button");

    this.onLike = this.onLike.bind(this);
  }

  init() {
    this.button.addEventListener("click", this.onLike);
  }

  onLike() {
    const heart = document.createElement("img");
    heart.src = heartImage;
    heart.alt = "";
    heart.classList.add("liker__heart");

    // Траектория полёта выбирается случайно из четырёх возможных.
    const trajectory = Math.floor(Math.random() * TRAJECTORIES_COUNT) + 1;
    heart.classList.add(`liker__heart_trajectory-${trajectory}`);

    // Элемент удаляется из DOM по событию animationend, а не по таймеру.
    heart.addEventListener("animationend", () => heart.remove(), {
      once: true,
    });

    this.container.appendChild(heart);
  }
}
