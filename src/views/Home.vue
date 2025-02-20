<template>
  <main>
    <h1>Your <span>{{ typedText }}</span>.</h1>
    <p id="desc">Welcomee! This platform gives you the power to cast your vote, share your insights, and influence
      decisions with ease. Powered by cutting-edge technology, AISAT ensures every vote is counted and your voice is
      heard. Join us in shaping the future—your opinion matters!</p>
    <a id="signUp" href="#" @click.prevent="showForm">CAST VOTE</a>

    <section id="candidates">
      <label>candidates</label>
      <div id="candImages">
        <img :src="images[currentImageIndex]" alt="Candidate">
      </div>
      <div id="slideshow-controls">
        <button @click="prevImage"><</button>
        <button @click="nextImage">></button>
      </div>
    </section>

    <Form v-if="showFormRef" />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Form from '../components/Form.vue';

const typedText = ref('');
const showFormRef = ref(false);

const phrases = ['vote', 'decision', 'choice', 'rights', 'responsibility', 'voice', 'influence'];

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

const showForm = () => {
  showFormRef.value = true;
};


const images = ref([
  '/src/assets/layag.jpg',
  '/src/assets/tayog.jpg',
  '/src/assets/nigga.jpg'
]);
const currentImageIndex = ref(0);

const startSlideshow = () => {
  setInterval(() => {
    nextImage();
  }, 5000);
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.value.length) % images.value.length;
};

onMounted(() => {
  typeText();
  startSlideshow();
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 14rem 4rem 0;
  animation: upSyndrome 1.6s;
}

h1 {
  width: max-content;
  color: #000000;
  padding-left: 2rem;
  border-left: 0.6rem solid #3a4bd0;
  background: linear-gradient(to right, #3a4bd040, transparent);
  font: 8.6rem "Instrument Serif", serif;
}

span {
  color: inherit;
  font: inherit;
}

#desc {
  width: 80%;
  color: #404040;
  padding: 1rem 0 0;
  font: 2rem Arial, sans-serif;
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
  margin-top: 4rem;
}

#candidates label {
  text-transform: uppercase;
  font: 10rem "Instrument Serif", serif;
}

#candImages {
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  gap: 1.6rem;
  margin-top: -4rem;
}

#candImages img {
  object-fit: cover;
  width: 100%;
  height: 50rem;
  background: #00000016;
  border-radius: 1.6rem;
  aspect-ratio: 16/9;
}

#slideshow-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

#slideshow-controls button {
  display: block;
  width: max-content;
  cursor: pointer;
  margin-top: 1rem;
  padding: 1rem 2.5rem;
  color: #FFFFFF;
  background: #3a4bd0;
  border: none;
  border-radius: 1rem;
  font-weight: 600;
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