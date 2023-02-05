//import editorjs
import EditorJS from '@editorjs/editorjs';
//const Header = require('@editorjs/header');
//const Quote = require('@editorjs/quote');
//const List = require('@editorjs/list');
//import Embed from "@editorjs/embed";

const editor = new EditorJS({
  holder: "editorjs",
  autofocus: false,
  /*
  tools: {
    header: {
      class: Header,
      inlineToolbar: true,
      shortcut: "CMD+SHIFT+H",
    },
    
        list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L',
            config: {
              defaultStyle: 'unordered'
            }
          },
          embed: {
            class: Embed,
            inlineToolbar: true,
            config: {
                services: {
                    youtube: true,
                    coub: true,
                    codepen: true,
                    codeSandbox: true,
                    instagram: true,
                    twitter: true,
                    facebook: true,
                }
            }
          }
    
  },
  */
});

//onclick save button consolelog clicked!
document.getElementById("save-btn").addEventListener("click", function () {
  console.log("clicked!");
  editor.save().then((outputData) => {
    console.log(outputData);
  });
});
