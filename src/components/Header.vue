<template>
    <header>
      <a id="logo" href="#">AISAT</a>
      <nav>
        <a id="navLink" href="">HOME</a>
        <a id="navLink" href="">CONTACTS</a>
        <a id="navLink" href="">FAQ</a>
        <a id="navLink" href="">ABOUT</a>
      </nav>
    </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 2rem;
    left: 2rem;
    right: 2rem;
    padding: 1rem 2rem;
    background: #00000016;
    border-radius: 1.6rem;
    backdrop-filter: blur(60px);
    animation: downSyndrome 1.6s;
  }
  #logo {
    user-select: none;
    color: #3a4bd0;
    text-shadow: 0 0 0.6rem yellow;
    font: 800 5rem serif;
  }
  nav {
    display: flex;
    gap: 1.6rem;
  }
  #navLink {
    font: 500 2rem Lora, serif;
  }
  #navLink:hover {
    color: #3a4bd0;
    text-shadow: 0 0 1rem #3a4bd0;
  }
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