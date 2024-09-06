const $taskAnswers = document.querySelectorAll('.none')

const Main = {

    init: function() {
        
        this.casheSelector()
        this.bindEvent()     
    },

    casheSelector: function() {      
       
        this.$checkButtons = document.querySelectorAll('.check')
        this.$Tasks = document.querySelectorAll('.task')
    },

    bindEvent: function() {
        
        const self = this
        this.$checkButtons.forEach(function(button) {
            button.onclick = self.Events.checkButton_click
        })

        this.$Tasks.forEach(function(task) {
            task.onclick = self.Events.checkTask_click
        })

        


    },

    Events: {
        
        checkButton_click: function(e) { 
            const done = e.target
            const isDone = done.classList.contains('show')
            const doneNone = e.target.nextSibling.parentElement.parentElement.children[1]
            const doneAnwerr = doneNone.classList.contains('answer')
            

            if(isDone && doneAnwerr) {
                
                done.classList.remove('show')
                done.classList.add('check')
                done.innerText = '+'
                doneNone.classList.remove('answer')
                doneNone.classList.add('none')
            } else{
                done.classList.add('show')
                done.classList.remove('check')
                done.innerText = '-'
                doneNone.classList.remove('none')
                doneNone.classList.add('answer')
            }

        },

        checkTask_click: function(e) {
            const done = e.target.nextSibling.nextSibling
            const isDone = done.classList.contains('show')
            const doneNone = e.target.nextSibling.parentElement.parentElement.children[1]
            const doneAnwerr = doneNone.classList.contains('answer')

            

            if(isDone) {
                done.classList.remove('show')
                done.classList.add('check')
                done.innerText = '+'
                doneNone.classList.remove('answer')
                doneNone.classList.add('none')
            } else{
                done.classList.add('show')
                done.classList.remove('check')
                done.innerText = '-'
                doneNone.classList.remove('none')
                doneNone.classList.add('answer')
            }

            
        },

        
    }
}

Main.init()