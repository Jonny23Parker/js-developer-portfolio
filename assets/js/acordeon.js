
const acordeonTrigger = document.querySelectorAll('.acordeon .trigger')

acordeonTrigger.forEach((trigger) =>) {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigegr.parentElement
        const isOpen = acordeon.classList.contains('open')
        
        if(isOpen){
            acordeon.classList.remove('open')
        }else{
            acordeon.classList.add('open')

        }
}