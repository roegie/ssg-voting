<template>
    <main>
      <h1>President</h1>
      <section id="candidates">
        <a class="card">
            <img src="/src/assets/president.jpg">
            <div class="info">
                <h2 id="name">Jabek Alahani</h2>
            </div>
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
      grid-template-columns: repeat(2, 1fr);
      gap: 1.6rem;
      margin-top: 4rem;
    }
    .card {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        overflow: hidden;
        border-radius: 1.6rem;
        background: #00000016;
    }
    #candidates img {
      object-fit: cover;
      width: 100%;
      aspect-ratio: 3/4;
      background: #00000016;
    }
    #candidates button {
      cursor: pointer;
      padding: 1rem 2rem;
      border: none;
      color: #FFF;
      background: #3a4bd0;
      font-size: 3.6rem;
    }
    .info {
        padding: 1.6rem;
    }
    #name {
        font-size: 3rem;
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