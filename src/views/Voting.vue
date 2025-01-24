<template>
  <main>
    <h1>President</h1>
    <section id="candidates">
      <a class="card">
        <img src="/src/assets/president.jpg">
        <h2>Vote</h2>
        <h3 class="name">Candidate Name 1</h3>
        <p class="partylist">Partylist 1</p>
      </a>
      <a class="card" href="#vp">
        <img src="/src/assets/president.jpg">
        <h2>Vote</h2>
        <h3 class="name">Candidate Name 2</h3>
        <p class="partylist">Partylist 2</p>
      </a>
    </section>
    <h1>Vice President</h1>
    <section id="vp">
      <a class="card">
        <img src="/src/assets/vice-president.jpg">
        <h2>Vote</h2>
        <h3 class="name">Candidate Name 1</h3>
        <p class="partylist">Partylist 1</p>
      </a>
      <a class="card">
        <img src="/src/assets/vice-president.jpg">
        <h2>Vote</h2>
        <h3 class="name">Candidate Name 2</h3>
        <p class="partylist">Partylist 2</p>
      </a>
    </section>
    <h1>Secretary</h1>
    <section id="vp">
      <a class="card">
        <img src="/src/assets/secretary.jpg">
        <h2>Vote</h2>
        <h3 class="name">Candidate Name 1</h3>
        <p class="partylist">Partylist 1</p>
      </a>
      <a class="card">
        <img src="/src/assets/secretary.jpg">
        <h2>Vote</h2>
        <h3 class="name">Candidate Name 2</h3>
        <p class="partylist">Partylist 2</p>
      </a>
    </section>
  </main>
</template>

<script setup></script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10rem 4rem 2rem;
  animation: upSyndrome 1.6s;
}

h1 {
  width: max-content;
  color: #000000;
  margin-top: 4rem;
  padding-left: 2rem;
  border-left: 0.6rem solid #3a4bd0;
  background: linear-gradient(to right, #3a4bd040, transparent);
  font: 8.6rem "Instrument Serif", serif;
}

section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  max-width: 600px;
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

.card:hover>img {
  filter: brightness(70%);
}

.card:hover>h2,
.card:hover>.name {
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
  padding: 1rem 2rem;
  backdrop-filter: blur(20px);
  border-radius: 1.6rem;
  transform: translate(-50%, -50%);
  font-size: 4rem;
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