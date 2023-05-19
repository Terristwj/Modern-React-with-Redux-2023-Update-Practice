/**
 * Interface of Modal
 * @summary - Required for empty constructor
 */
interface iModal {
  title: string;
  text: string;
}

class Modal {
  private _title: string;
  private _text: string;

  constructor(obj?: iModal) {
    this._title = obj?.title ?? "";
    this._text = obj?.text ?? "";
  }

  get getTitle() {
    return this._title;
  }

  get getText() {
    return this._text;
  }

  /**
   * Retreive modals from 'Database'
   * @returns - Array of Modals
   */
  getModals(): Modal[] {
    return this.makeModals();
  }

  // Database
  makeModals(): Modal[] {
    return [
      new Modal({ title: "Open Modal", text: "Idk how I did this" }),
      new Modal({ title: "What is this?", text: "A random modal" }),
      new Modal({
        title: "Why...",
        text: "Why did I decide to learn an entire 38hr course on React w/ Typescript within 1 week ...",
      }),
      new Modal({ title: "Best game", text: "Zelda: Tears of the Kingdom" }),
    ];
  }
}

export default Modal;
