

// import React, { useEffect } from "react";
// import SimpleKeyboard from "react-simple-keyboard";
// import "./Keyboard.css";

// const FilterKeyboard = () => {
//     let keyboard;
//   useEffect(() => {
//      keyboard = new SimpleKeyboard({
//       onChange: (input) => onChange(input),
//       onKeyPress: (button) => onKeyPress(button),
//       theme: "hg-theme-default hg-theme-ios",
//       layout: {
//         default: [
//           "q w e r t y u i o p",
//           "a s d f g h j k l @",
//           "{shift} z x c v b n m . {bksp}",
//           "{alt} {downkeyboard} {downkeyboard} {space} - _ {search}",
//         ],
//         shift: [
//           "Q W E R T Y U I O P {bksp}",
//           "A S D F G H J K L {enter}",
//           "{shiftactivated} Z X C V B N M , . {shiftactivated}",
//           "{alt} {smileys} {space}{altright} {downkeyboard}",
//         ],
//         alt: [
//           "1 2 3 4 5 6 7 8 9 0 {bksp}",
//           `@ # $ & * ( ) ' " {enter}`,
//           "{shift} % - + = / ; : ! ? {shift}",
//           "{default} {smileys} {space} {back} {downkeyboard}",
//         ],
//         smileys: [
//           "😀 😊 😅 😂 🙂 😉 😍 😛 😠 😎 {bksp}",
//           `😏 😬 😭 😓 😱 😪 😬 😴 😯 {enter}`,
//           "😐 😇 🤣 😘 😚 😆 😡 😥 😓 🙄 {shift}",
//           "{default} {smileys} {space} {altright} {downkeyboard}",
//         ],
//       },
//       display: {
//         "{alt}": ".?123",
//         "{smileys}": "\uD83D\uDE03",
//         "{shift}": "⇧",
//         "{shiftactivated}": "⇧",
//         "{enter}": "return",
//         "{bksp}": "⌫",
//         "{altright}": ".?123",
//         "{downkeyboard}": "🞃",
//         "{space}": " ",
//         "{default}": "ABC",
//         "{back}": "⇦",
//         "{search}": "{search}",
//       },
//     });

//     // Mount the keyboard to the specified DOM element
//     keyboard.mount(".simple-keyboard");

//     const inputElement = document.querySelector(".input");
//     inputElement.addEventListener("input", (event) => {
//       keyboard.setInput(event.target.value);
//     });

//     return () => {
//       keyboard.destroy();
//       inputElement.removeEventListener("input", (event) => {
//         keyboard.setInput(event.target.value);
//       });
//     };
//   }, []); // Empty dependency array ensures that this effect runs only once

//   const onChange = (input) => {
//     // Handle input change
//   };

//   const onKeyPress = (button) => {
//     // Handle key press
//     if (button.includes("{") && button.includes("}")) {
//       handleLayoutChange(button);
//     }
//   };

//   const handleLayoutChange = (button) => {
//     // Handle layout change
//     let currentLayout = keyboard.options.layoutName;
//     let layoutName;

//     // ...

//     if (layoutName) {
//       keyboard.setOptions({
//         layoutName: layoutName,
//       });
//     }
//   };

//   return (
//     <div className="keyboard-container">
//       {/* Div with text content */}
//       <div className="text-content">
//         <p>Your text content goes here.</p>
//       </div>

//       {/* Div to display the keyboard */}
//       <div className="keyboard">
//         {/* Display the keyboard */}
//         <div className="simple-keyboard"></div>
//         {/* Input field associated with the keyboard */}
//         <input className="input" type="text" />
//       </div>
//     </div>
//   );
// };

// export default FilterKeyboard;

// import React, { useEffect, useRef } from "react";
// import SimpleKeyboard from "react-simple-keyboard";
// import "./Keyboard.css";

// const FilterKeyboard = () => {
//   const keyboardRef = useRef(null);

//   useEffect(() => {
//     console.log("useEffect is running");
//     const keyboardInstance = new SimpleKeyboard({
//       onChange: (input) => onChange(input),
//       onKeyPress: (button) => onKeyPress(button),
//       theme: "hg-theme-default hg-theme-ios",
//       layout: {
//         default: [
//           "q w e r t y u i o p",
//           "a s d f g h j k l @",
//           "{shift} z x c v b n m . {bksp}",
//           "{alt} {downkeyboard} {downkeyboard} {space} - _ {search}",
//         ],
//         shift: [
//           "Q W E R T Y U I O P {bksp}",
//           "A S D F G H J K L {enter}",
//           "{shiftactivated} Z X C V B N M , . {shiftactivated}",
//           "{alt} {smileys} {space}{altright} {downkeyboard}",
//         ],
//         alt: [
//           "1 2 3 4 5 6 7 8 9 0 {bksp}",
//           `@ # $ & * ( ) ' " {enter}`,
//           "{shift} % - + = / ; : ! ? {shift}",
//           "{default} {smileys} {space} {back} {downkeyboard}",
//         ],
//         smileys: [
//           "😀 😊 😅 😂 🙂 😉 😍 😛 😠 😎 {bksp}",
//           `😏 😬 😭 😓 😱 😪 😬 😴 😯 {enter}`,
//           "😐 😇 🤣 😘 😚 😆 😡 😥 😓 🙄 {shift}",
//           "{default} {smileys} {space} {altright} {downkeyboard}",
//         ],
//       },
//       display: {
//         "{alt}": ".?123",
//         "{smileys}": "\uD83D\uDE03",
//         "{shift}": "⇧",
//         "{shiftactivated}": "⇧",
//         "{enter}": "return",
//         "{bksp}": "⌫",
//         "{altright}": ".?123",
//         "{downkeyboard}": "🞃",
//         "{space}": " ",
//         "{default}": "ABC",
//         "{back}": "⇦",
//         "{search}": "{search}",
//       },
//     });

//     // Store the keyboard instance in the ref
//     keyboardRef.current = keyboardInstance;

//     // Mount the keyboard to the specified DOM element
//     keyboardInstance.mount(".simple-keyboard");

//     const inputElement = document.querySelector(".input");
//     inputElement.addEventListener("input", (event) => {
//       keyboardInstance.setInput(event.target.value);
//     });

//     return () => {
//       keyboardInstance.destroy();
//       inputElement.removeEventListener("input", (event) => {
//         keyboardInstance.setInput(event.target.value);
//       });
//     };
    
//   }, []); // Empty dependency array ensures that this effect runs only once

//   const onChange = (input) => {
//     // Handle input change
//   };

//   const onKeyPress = (button) => {
//     // Handle key press
//     if (button.includes("{") && button.includes("}")) {
//       handleLayoutChange(button);
//     }
//   };

//   const handleLayoutChange = (button) => {
//     // Handle layout change
//     let currentLayout = keyboardRef.current.options.layoutName;
//     let layoutName;

//     // ...

//     if (layoutName) {
//       keyboardRef.current.setOptions({
//         layoutName: layoutName,
//       });
//     }
//   };

//   return (
//     <div className="keyboard-container">
//       {/* Div with text content */}
//       <div className="text-content">
//         <p>Your text content goes here.</p>
//       </div>

//       {/* Div to display the keyboard */}
//       <div className="keyboard">
//         {/* Display the keyboard */}
//         <div className="simple-keyboard"></div>
//         {/* Input field associated with the keyboard */}
//         <input className="input" type="text" />
//       </div>
//     </div>
//   );
// };

// export default FilterKeyboard;
import React, { Component, useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import search from "../Home/Images/search.svg";

function Keyboard1() {
    const keyboardRef = useRef(null);
  const [input , setInput] = useState('')
  const onChange = (input) => {
    console.log("Input changed", input);
    setInput(input)
  }

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  }
  const customLayout = {
    default: [
      'q w e r t y u i o p',
      'a s d f g h j k l @',
      '{shift} z x c v b n m . {bksp}',
      '{alt} {downkeyboard} {downkeyboard} {space} - _ {search}',
    ],
    shift: [
      'Q W E R T Y U I O P {bksp}',
      'A S D F G H J K L {enter}',
      '{shiftactivated} Z X C V B N M , . {shiftactivated}',
      '{space} {enter}',
    ],
  };
  const display = {
    "{alt}": ".?123",
    "{smileys}": "\uD83D\uDE03",
    "{shift}": "⇧",
    "{shiftactivated}": "⇧",
    "{enter}": "return",
    "{bksp}": "⌫",
    "{altright}": ".?123",
    "{downkeyboard}": "🞃",
    "{space}": " ",
    "{default}": "ABC",
    "{back}": "⇦",
    "{search}": "{content}",
  };
  const buttonTheme = [
    {
      class: "hg-theme-default hg-theme-ios",
      buttons: "{search}",
      style: {
        // Add your custom styles
      },
      content: "<img src='../Home/Images/search.svg' alt='search' />", // Replace text with image
    },
    {
      class: "hg-theme-default hg-theme-ios",
      buttons: ".?123",
      style: {
        // Add your custom styles
      },
      content: "<img src='/path/to/your/other-image.png' alt='.?123' />", // Replace text with another image
    },
    // Add more custom button styles as needed
  ];
    return (
      <>
       <div>
        <input
          value={input}
          placeholder={"Tap on the virtual keyboard to start"}
          onChange={onChange}
        />
        <Keyboard
          keyboardRef={(r) => (keyboardRef.current = r)}
          // layoutName={layoutName}
          onChange={onChange}
          onKeyPress={onKeyPress}
          layout={customLayout}
          display={display}
          buttonTheme={buttonTheme}
        />
      </div>
      </>
    );
}
export default Keyboard1;