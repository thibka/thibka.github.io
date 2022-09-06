import './styles/main.scss';
import Ajaxio from 'ajaxio'
import anime from 'animejs'
import home from './js/home'
import page2 from './js/page2'
 
var transition = document.getElementById('transition');

var firstLoad = true;

Ajaxio.init({
    //root: '/ajaxio/public/',
    root: '/',
    containerSelector: "#ajax",
    languagesUrl: ['fr', 'it'],
    homeId: 'home',
    onFirstLoad: (pageId) => {
        Ajaxio.changePage(pageId, true);        
    }
});

Ajaxio.pageScripts['home'] = home;
Ajaxio.pageScripts['page2'] = page2;

Ajaxio.beforePageChange.add((changePage, previousPageId, nextPageId) => {
    anime({
        targets: transition,
        translateX: '0%',
        duration: 500,
        easing: 'easeInOutQuad',
        complete: changePage
    })
});

Ajaxio.afterPageChange.add((nextPageId, previousPageId) => {
    if (firstLoad) {
        firstLoad = false;
    } else {
        anime({
            targets: transition,
            translateX: '100%',
            duration: 500,
            easing: 'easeInOutQuad',
            complete: ()=> {
                transition.style.transform ='translateX(-100%)'
            }
        })
    }
});

window.Ajaxio = Ajaxio;