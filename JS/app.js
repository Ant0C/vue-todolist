const { createApp } = Vue



  createApp({
    data() {
      return {
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
      },
    methods: {
        removeTask: function(index){
            this.tasks.splice(index, 1)
        }
    }
}).mount('#app')