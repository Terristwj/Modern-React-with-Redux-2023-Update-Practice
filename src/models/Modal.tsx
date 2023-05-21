/**
 * Interface of Modal
 * @summary - Required for empty constructor
 */
interface iModal {
  title: string;
  text: string;
  closeText: string;
}

class Modal {
  private _title: string;
  private _text: string;
  private _closeText: string;

  constructor(obj?: iModal) {
    this._title = obj?.title ?? "";
    this._text = obj?.text ?? "";
    this._closeText = obj?.closeText ?? "";
  }

  get getTitle() {
    return this._title;
  }

  get getText() {
    return this._text;
  }

  get getCloseText() {
    return this._closeText;
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
      new Modal({
        title: "Open Modal",
        text: "Idk how I did this",
        closeText: "Okay.",
      }),
      new Modal({
        title: "What is this?",
        text: "A random modal",
        closeText: "Such wow",
      }),
      new Modal({
        title: "Why...",
        text: "Is the Earth a turtle?",
        closeText: "Accept",
      }),
      new Modal({
        title: "Best game",
        text: "Zelda: Tears of the Kingdom",
        closeText: "I agree",
      }),
    ];
  }
}

export default Modal;
