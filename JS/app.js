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
    ],
    inputTask: "",
      }
      },
    methods: {
        removeTask: function(index){
            this.tasks.splice(index, 1)
        },
        addTask: function(){
            let newTask = this.inputTask
            this.tasks.push ({"text":newTask,"done":false})
            this.inputTask= ""
        }
    }
}).mount('#app')