<template>
    <main>
      <h1>Your <span>{{ typedText }}</span>.</h1>
      <p id="desc">Welcome! This platform gives you the power to cast your vote, share your insights, and influence decisions with ease. Powered by cutting-edge technology, AISAT ensures every vote is counted and your voice is heard. Join us in shaping the future—your opinion matters!</p>
      <a id="signUp" href="">CAST VOTE</a>
      <p>dsadsad</p>
      <section id="candidates">
        <label>candidates</label>
        <div id="candImages">
          <img src="/src/assets/layag.jpg" alt="Candidate">
          <img src="/src/assets/tayog.jpg" alt="Candidate">
          <img src="/src/assets/nigga.jpg" alt="Candidate">
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const typedText = ref('');
  const phrases = ['vote', 'decision', 'choice', 'rights', 'responsibility', 'voice', 'influence'];5
  
  let currentPhraseIndex = 0;
  let currentText = '';
  let isDeleting = false;
  let charIndex = 0;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 1500;
  
  const typeText = () => {
    const phrase = phrases[currentPhraseIndex];
  
    if (isDeleting) {
      currentText = phrase.substring(0, charIndex--);
    } else {
      currentText = phrase.substring(0, charIndex++);
    }
  
    typedText.value = currentText;
  
    if (!isDeleting && charIndex === phrase.length) {
      setTimeout(() => {
        isDeleting = true;
      }, pauseDuration);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
  
    setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
  };
  
  onMounted(() => {
    typeText();
  });
  </script>
  
  <style scoped>
  main {
    padding: 18rem 4rem 0;
    animation: upSyndrome 1.6s;
  }
  h1 {
    width: max-content;
    color: #000000;
    padding-left: 2rem;
    border-left: 0.6rem solid #3a4bd0;
    background: linear-gradient(to right, #3a4bd040, transparent);
    font: 8.6rem Lora, serif;
  }
  span {
    color: inherit;
    font: inherit;
  }
  #desc {
    width: 80%;
    padding: 1rem 0 0;
    font: 2rem Lora, serif;
    overflow: hidden;
    display: inline-block;
    white-space: normal;
  }
  #signUp {
    display: block;
    width: max-content;
    margin-top: 1rem;
    padding: 1.6rem 3.2rem;
    color: #FFFFFF;
    background: #3a4bd0;
    border-radius: 1rem;
    font-weight: 600;
  }
  section {
    margin-top: 6rem;
  }
  #candidates label {
    text-transform: uppercase;
    font: 500 2rem Lora, serif;
  }
  #candImages {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
    margin-top: 2rem;
  }
  #candImages img {
    object-fit: cover;
    width: 100%;
    aspect-ratio: 16/9;
    background: #00000016;
    border-radius: 1.6rem;
  }
  @keyframes upSyndrome {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes downSyndrome {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  </style>
  
