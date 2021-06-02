import Ajaxio from 'ajaxio'

export default function page2() {
    document.getElementById('link').addEventListener('click', ()=>{        
        Ajaxio.changePage('home')
    })
}