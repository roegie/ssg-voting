<template>
    <main>
      <h1>Cast your vote.</h1>
      <Form v-if="showFormRef" />
    </main>
</template>
  
<script setup></script>
  
  <style scoped>
    main {
      padding: 12rem 4rem 0;
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