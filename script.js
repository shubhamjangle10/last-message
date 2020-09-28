(function(){
    
const btn = document.getElementById('btn');
const form = document.getElementById('message-form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const message = document.getElementById('message');
    const feedback = document.querySelector('.feedback');
    const lastMsg = document.querySelector('.message-content');

    if(message.value === ''){
        feedback.classList.add('show');
        setTimeout(function(){
            feedback.classList.remove('show')
        },2000)
    }else{
        lastMsg.textContent = message.value;
        message.value = ''
        
    }

})





    
})()