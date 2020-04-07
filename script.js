const code = [ "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5",
"Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
"Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO",
"KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock",
"KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL",
"Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV",
"KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight",
"ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft",
"ArrowDown", "ArrowRight", "ControlRight" ];  

/*RUS*/

const RUS_low = [ "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
"Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
"\\", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э",
"Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲",
"Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ]; 

const RUS_upp = [ "Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
"Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ",
"\\", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э",
"Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "▲",
"Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ]; 

const RUS_shift = [ "Ё", "!", "&quot;", "№", ";", "%", ":", "?", "*", "(", ")", "_",
"+", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х",
"Ъ", "/", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж",
"Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲",
"Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ]; 

const RUS_shift_low= [ "ё", "!", "&quot;", "№", ";", "%", ":", "?", "*", "(", ")",
"_", "+", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з",
"х", "ъ", "/", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д",
"ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",",
"▲", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ];

/*ENG*/

const ENG_low = [ "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-",
"=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[",
"]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";",
"'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲",
"Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ];

const ENG_upp = [ "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
"Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]",
"\\", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'",
"Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "▲",
"Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ];

const ENG_shift = [ "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",
"Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}",
"|", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":",
"&quot;", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?",
"▲", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ]; 

const ENG_shift_low = [ "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
"+", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{",
"}", "|", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":",
"&quot;", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?",
"▲", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ]; 


const main = `<main>
  <div class="wrapper">
  <textarea class="input" name="story" id="input" cols="30" rows="10" autofocus> </textarea>
  <p>ОС Windows.</p>
  <p>Переключение языка: Ctrl Left + Alt Left</p>
  </div>
  </main>`
let caps_lock = false;

/*create elements */

function keyboardDo() {
    document.querySelector('body').innerHTML = main;
    let wrapper = document.querySelector(".wrapper");
    let textarea = document.querySelector(".input");
    let keyboard = document.createElement("div");
    keyboard.classList.add("keyboard");
    wrapper.insertBefore(keyboard, textarea.nextSibling);

    ENG_low.forEach((value, index) => {
        let button = document.createElement("div");
        button.classList.add("button");
        button.classList.add(`${code[index]}`);
        if (value == "Backspace" || value == "Tab" || value == "Del") {
          button.classList.add(`${value.toLowerCase()}`);
          keyboard.appendChild(button);
        } else if (value == "CapsLock" || index == 44) {
          button.classList.add("left-btn");
          keyboard.appendChild(button);
        } else if (value == "Enter" || index == 54) {
          button.classList.add("right-btn");
          button.value = value;
          keyboard.appendChild(button);
        } else if (value == " ") {
          button.classList.add("space");
          keyboard.appendChild(button);
        } else keyboard.appendChild(button);
      });
}

keyboardDo();

let addEl = document.querySelectorAll(".button");

render(RUS_low, ENG_low);

/*value for keyboard*/

function render_key(language) {
  language.forEach((key, i) => {
    addEl[i].innerHTML = key;
  });
}

function render_key_upper(language) {
  language.forEach((key, i) => {
    if (key.length == 1) {
      addEl[i].innerHTML = key.toUpperCase();
    } else addEl[i].innerHTML = key
  });
}

/*load html*/

function render(rus, eng) {
  let local = localStorage.getItem("lang");
  local == "rus" ? render_key(rus) : render_key(eng);
}

/* the mouse*/

document.querySelector(".keyboard").addEventListener("mousedown", event => {
  let clas = event.target.classList[1];
  key_down_click(clas);
});

document.querySelector(".keyboard").addEventListener("mouseup", event => {
  let clas = event.target.classList[1];
  switch (clas) {
    case "ShiftLeft":
      event.target.classList.remove("active");
      render(RUS_low, ENG_low);
      break;
    case "CapsLock":
      break;
    default:
      event.target.classList.remove("active");
  }
});

function key_down_click(code) {
  let button = document.querySelector(`.${code}`);
  let text = document.querySelector("#input").value;
  let textarea = document.querySelector("#input");
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;

  /*write*/

  function writeLetters(letter, cursorPosition) {
    button.classList.add("active");
    if (start != end) {
        textarea.value = textarea.value.slice(0, start) + letter + text.slice(end, textarea.value.length);
        textarea.selectionStart = textarea.selectionEnd = cursorPosition;
      } else {
        textarea.value = textarea.value.slice(0, start) + letter + textarea.value.slice(start, textarea.value.length);
        textarea.selectionStart = textarea.selectionEnd = cursorPosition;
      }
  }

  function changeLanguage() {
    button.classList.add("active");
      let local = localStorage.getItem("lang");
      if ((event.code == "AltLeft" && event.ctrlKey) || (event.code == "ControlLeft" && event.altKey)) {
        if (local == "rus") {
          if (!caps_lock) {
            render_key(ENG_low);
          } else {
            render_key(ENG_upp);
          }
          localStorage.setItem("lang", "eng");
        } else {
          if (!caps_lock) {
            render_key(RUS_low);
          } else {
            render_key(RUS_upp);
          }
          localStorage.setItem("lang", "rus");
        }
      }
  }
  
  switch (code) {
    case "Backspace":
      button.classList.add("active");
      if (start != end) {
        
        textarea.selectionStart = textarea.selectionEnd = start;
      } else {
          if (start != 0) {
            textarea.value = textarea.value.slice(0, start - 1) + textarea.value.slice(start, textarea.value.length);
            textarea.selectionStart = textarea.selectionEnd = start - 1;
          }
      }
      break;
    case "Tab":
      writeLetters('    ', start + 4);
      break;
    case "Delete":
      button.classList.add("active");
      if (start != end) {
        textarea.selectionStart = textarea.selectionEnd = start;
      } else {
        textarea.value = textarea.value.slice(0, start) + textarea.value.slice(start + 1, text.length);
        textarea.selectionStart = textarea.selectionEnd = start;
      }
      break;
    case "CapsLock":
      if (!caps_lock) {
        button.classList.add("active");
        render(RUS_upp, ENG_upp);
        caps_lock = true;
      } else {
        button.classList.remove("active");
        render(RUS_low, ENG_low);
        caps_lock = false;
      }
      break;
    case "Enter":
      writeLetters('\n', start + 1)
      break;
    case "ShiftLeft":
      button.classList.add("active");
      if (caps_lock) {
        render(RUS_shift_low, ENG_shift_low);
      } else render(RUS_shift, ENG_shift);
      break;
    case "ShiftRight":
      button.classList.add("active");
      break;
    case "ControlLeft":
      changeLanguage();
      break;
    case "ControlRight":
      button.classList.add("active");
      break;
    case "MetaLeft":
      button.classList.add("active");
      break;
    case "AltLeft":
      changeLanguage();
      break;
    case "AltRight":
        button.classList.add("active");
        break;
    default:
        writeLetters(button.textContent, start + 1);
  }
}

document.addEventListener("keypress", event => {
  event.preventDefault();
});

document.addEventListener("keydown", event => {
  event.preventDefault();
  if (document.querySelector(`.${event.code}`) != null) {
    key_down_click(event.code); 
  }
});

document.addEventListener("keyup", event => {
    event.preventDefault();
    if (document.querySelector(`.${event.code}`) != null) {
  let button = document.querySelector(`.${event.code}`);
  switch (event.code) {
    case "ShiftLeft":
      button.classList.remove("active");
      if (caps_lock) {
        render(RUS_upp, ENG_upp);
      } else render(RUS_low, ENG_low);
      break;
    case "CapsLock":
      break;
    default:
      button.classList.remove("active");
  }
}
});
