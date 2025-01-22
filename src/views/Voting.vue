<template>
    <main>
      <h1>President</h1>
      <section id="candidates">
        <a class="card">
            <img src="/src/assets/president.jpg">
            <h2>Vote</h2>
            <h3 class="name">Junek Bonyok</h3>
        </a>
        <a class="card">
            <img src="/src/assets/vice-president.jpg">
            <h2>Vote</h2>
            <h3 class="name">Shanty Dela Cruz Lay</h3>
        </a>
      </section>
    </main>
</template>
  
<script setup></script>

<style scoped>
    main {
      padding: 14rem 4rem 0;
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
    #candidates {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.6rem;
      margin-top: 4rem;
    }
    .card {
        display: grid;
        position: relative;
        cursor: pointer;
    }
    .card:hover {
        transform: translateY(-6px);
    }
    .card:hover > img {
        filter: brightness(80%);
    }
    .card:hover > h2, .card:hover > .name {
        opacity: 1;
    }
    .card img {
      object-fit: cover;
      width: 100%;
      aspect-ratio: 3/4;
      background: #00000016;
      border-radius: 1.6rem;
    }
    .card h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        opacity: 0;
        color: #FFF;
        padding: 0.6rem 1.2rem;
        backdrop-filter: blur(20px);
        border-radius: 10rem;
        font: 600 2rem "Albert Sans";
        transform: translate(-50%, -50%);
    }
    .name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 99%;
        margin-top: 0.6rem;
        font: 500 2.6rem "Albert Sans", sans-serif;
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