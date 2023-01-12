
# Speechify - A Web Application that turns your texts to speech.

## Table of contents

- [Overview](#overview)
  - [Screenshot](./assets/screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
### _Tsks...a web application that is used to keep track of daily tasks in life_. 


### Screenshot
![BBB629D5-7BE3-4186-A65C-EF2ABEDB4965_1_201_a](https://user-images.githubusercontent.com/93778975/212029820-b11b69d7-e75e-4710-bf34-46dd1500da6c.jpeg)
![458DFAF5-7AFD-48F4-B6AB-52B256D6CE56_1_201_a](https://user-images.githubusercontent.com/93778975/212029827-09ddd666-7a6e-4ead-9453-88fce6aad00d.jpeg)

### Links

- Solution URL: (https://github.com/Wizzy-05/text-to-speech)
- Live Site URL: (https://speechify.vercel.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React js](https://beta.reactjs.org/) - JS library
- [Sass](https://sass-lang.com) - CSS Preprocessor 
- Speech Synthesis

### Some Nice Stuffs

```JS
     const handlePlay = () => {
    const text = textArea.current.value;
    let utterance;

    if (speechSynthesis.current.paused && speechSynthesis.current.speaking) {
      return speechSynthesis.current.resume();
    }
    if (selectedVoice) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.rate = speedRef.current.value || 1;
      console.log(msg.rate);
      msg.voice = window.speechSynthesis
        .getVoices()
        .find((voice) => voice.name === selectedVoice);
      window.speechSynthesis.speak(msg);
    } else {
      utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speedRef.current.value || 1;
      console.log(utterance.rate);
      speechSynthesis.current.speak(utterance);
    }

    setDisabledTextArea("disabled");
  };
```
```scss
    #section-one {
      @include utils.flex-display($direction: column, $justify: unset);
      gap: 5px;
      h1 {
        font-size: 2rem;
        color: utils.$text-primary;
        text-align: center;
      }

      h4 {
        text-align: center;
        font-size: 12px;
        color: #17172dad;
      }
    }
```
```JSX
     <aside ref={sideBar}>
        <h3>Don't Like current Voice? </h3>
        {voices.map((voice) => (
          <span
            key={uuidv4()}
            onClick={(e) => {
              handleChangeVoice(voice, e);
            }}
          >
            {voice.name}
          </span>
        ))}
      </aside>
```



### Continued development

- Css Grid
- Sass functions
- React js
- Sass
- Node js
- Express js


### Useful resources

- [Open AI's Chat GPT](https://chat.openai.com/auth/login).

## Author
- Github - [@Wizzy-05](https://github.com/Wizzy-05)
- Twitter - [@ahuzi_wisdom](https://twitter.com/ahuzi_wisdom)


## Acknowledgments
My Laptop I guess😅



