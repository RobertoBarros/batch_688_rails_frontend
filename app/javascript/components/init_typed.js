import Typed from 'typed.js';

const initTyped = () => {

  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Learn to code"],
    typeSpeed: 50,
    loop: true
  });


}

export {initTyped}