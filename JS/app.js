const { createApp } = Vue



  createApp({
    data() {
      return {
        message: 'Hello Vue!',

        tasks: [
    {
        text: "fare la spesa",
        done: false 
    },
    {
        text: "prendere il carrello",
        done: true 
    },
    {
        text: "comprare la pasta",
        done: false 
    },
    {
        text: "comprare la frutta",
        done: true 
    }
]
      }
    }
}).mount('#app')