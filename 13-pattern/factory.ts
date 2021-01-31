/**
 * 출처: https://vallista.kr/2020/05/05/TypeScript-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4-%ED%8C%A9%ED%86%A0%EB%A6%AC-%ED%8C%A8%ED%84%B4/
 */

enum InputType {
  DEFAULT = 0,
  ANIMATED,
  UNSHAPED,
}

class Input {
  public static InputFactory(type: InputType): Input {
    switch (type) {
      default:
        return new Input();
      case InputType.ANIMATED:
        return new AnimatedInput();
      case InputType.UNSHAPED:
        return new UnShapedInput();
    }
  }

  render() {
    return `<input />`;
  }
}

class AnimatedInput extends Input {
  render() {
    return `<input class="animated-input" />`;
  }
}

class UnShapedInput extends Input {
  render() {
    return `<input class="unshaped-input" />`;
  }
}

enum ButtonType {
  DEFAULT = 0,
  IMAGE,
  TEXT,
}

interface IButton {
  text: string;
  src?: string;
}

class Button {
  text: string;

  public static ButtonFactory(
    type: ButtonType,
    text: string,
    src?: string
  ): Button {
    switch (type) {
      default:
        return new Button(text);
      case ButtonType.IMAGE:
        return new ImageButton(text, src!);
      case ButtonType.TEXT:
        return new TextButton(text);
    }
  }

  constructor(text: string) {
    this.text = text;
  }

  render() {
    return `<button>${this.text}</button>`;
  }
}

class ImageButton extends Button {
  src?: string;

  constructor(text: string, src: string) {
    super(text);
    this.src = src;
  }

  render() {
    return `<button class="none">
            ${this.text}
            <img src="${this.src} alt="button-img"/>
        </button>`;
  }
}

class TextButton extends Button {
  constructor(text: string) {
    super(text);
  }

  render() {
    return `
            <button class="none">
                ${this.text}
            </button>
        `;
  }
}

interface IFormFactory {
  createInput(): Input;
  createButton(): Button;

  render(): string;
}

class NormalForm implements IFormFactory {
  createInput(): Input {
    return Input.InputFactory(InputType.DEFAULT);
  }

  createButton(): Button {
    return Button.ButtonFactory(ButtonType.DEFAULT, 'normal');
  }

  render() {
    return `
            <div>
                ${this.createInput().render()}
                ${this.createButton().render()}
            </div>
        `;
  }
}

class AnimatedImageForm implements IFormFactory {
  createInput(): AnimatedInput {
    return Input.InputFactory(InputType.ANIMATED);
  }

  createButton(): ImageButton {
    return Button.ButtonFactory(ButtonType.IMAGE, 'image', 'hihi');
  }

  render() {
    return `
            <div>
                ${this.createInput().render()}
                ${this.createButton().render()}
            </div>
        `;
  }
}

class UnShapedTextForm implements IFormFactory {
  createInput(): UnShapedInput {
    return Input.InputFactory(InputType.UNSHAPED);
  }

  createButton(): TextButton {
    return Button.ButtonFactory(ButtonType.TEXT, 'text');
  }

  render() {
    return `
            <div>
                ${this.createInput().render()}
                ${this.createButton().render()}
            </div>
        `;
  }
}

enum FormType {
  ONE = 0,
  TWO,
  THREE,
}

class Form {
  public static FormFactory(type: FormType) {
    let factory: IFormFactory | null = null;

    switch (type) {
      case FormType.ONE:
        factory = new NormalForm();

        break;
      case FormType.TWO:
        factory = new AnimatedImageForm();

        break;
      case FormType.THREE:
        factory = new UnShapedTextForm();

        break;
    }

    return factory.render();
  }
}

console.log(Form.FormFactory(FormType.ONE));
console.log(Form.FormFactory(FormType.TWO));
console.log(Form.FormFactory(FormType.THREE));
