class Controls {
  constructor() {
    this.forward = false;
    this.reverse = false;
    this.right = false;
    this.left = false;

    this.#addKeyboardListeners();
  }

  #addKeyboardListeners() {
    document.onkeydown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          return (this.left = true);

        case "ArrowRight":
          return (this.right = true);

        case "ArrowUp":
          return (this.forward = true);

        case "ArrowDown":
          return (this.reverse = true);
      }
    };
  }
}


// Stopped 14:35