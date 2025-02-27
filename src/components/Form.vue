<template>
  <div id="pampadilim">
    <form id="form" @submit.prevent="handleSubmit">
      <h2>Get started.</h2>
      <input
        type="text"
        v-model="studentId"
        placeholder="Student ID"
        :class="{ 'input-error': validationMessage }"
        v-validate-length
      />
      <p v-if="validationMessage" class="error-message">{{ validationMessage }}</p>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const studentId = ref('');
const validationMessage = ref('');

const handleSubmit = () => {
  if (!studentId.value) {
    validationMessage.value = 'Please enter the correct ID';
  } else if (studentId.value.length !== 12) {
    validationMessage.value = 'Student ID must be 6 digits';
  } else {
    validationMessage.value = '';
  }
};

const vValidateLength = {
  mounted(el) {
    el.addEventListener('input', () => {
      if (el.value.length > 6) {
        el.value = el.value.slice(0, 6);
      }
    });
  }
};


</script>

<style scoped>
#pampadilim {
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #00000080;
  backdrop-filter: blur(20px);
  z-index: 1000;
}
form {
  display: grid;
  gap: 1rem;
  width: 30rem;
  background: #FFF;
  padding: 1.6rem;
  border-radius: 1.6rem;
}
h2 {
  width: max-content;
  padding-left: 0.4rem;
  border-left: 0.2rem solid #3a4bd0;
  background: linear-gradient(to right, #3a4bd040, transparent);
  font-size: 2rem;
}
input {
  width: 100%;
  padding: 1rem;
  border: 0.2rem solid #AAA;
  border-radius: 1rem;
}
input:focus {
  border: 0.2rem solid #000;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.error-message {
  color: red;
}
button {
  width: max-content;
  cursor: pointer;
  padding: 1rem 2rem;
  border: none;
  color: #FFF;
  background: #3a4bd0;
  border-radius: 1rem;
}
</style>