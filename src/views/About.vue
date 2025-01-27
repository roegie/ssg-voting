<template>
  <main>
      <h1>About</h1>
      <p id="desc">This application is developed by three students with the help of a professor. It aims to provide a seamless voting experience.</p>
      <p>This project is part of a larger initiative to modernize voting systems and ensure secure, transparent, and efficient elections. By leveraging the latest technologies, we aim to create a user-friendly platform that can be easily adopted by various institutions. Our goal is to enhance the overall voting process, making it more accessible and reliable for everyone involved.</p>
  </main>
</template>

<script setup>
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
  #desc {
     width: 80%;
    color: #404040;
    padding: 1rem 0 0;
    font: 3rem Arial, sans-serif;
    width:50%;
    overflow: hidden;
    display: inline-block;
    white-space: normal;
    font-weight:600;
  }
  main p:nth-of-type(2) {
    width: 80%;
    color: #404040;
    padding: 1rem 0 0;
    font: 1.5rem Arial, sans-serif;
    width:50%;
    overflow: hidden;
    display: inline-block;
    white-space: normal;
    
  }
</style>