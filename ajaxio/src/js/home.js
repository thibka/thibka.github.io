import Ajaxio from 'ajaxio'

export default function home() {
    document.getElementById('link').addEventListener('click', ()=>{
        Ajaxio.changePage('page2')
    })

    // Attention : un event de ce type restera actif si la page est quittée
    // et se cumulera si la page home est rechargée
    window.addEventListener('click', ()=>{
        console.log('test');
    });
}