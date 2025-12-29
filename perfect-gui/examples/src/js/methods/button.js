import GUI from '../../perfect-gui/index';
import getRandomColor from '../getRandomColor';

export default function button() {
    const element = document.querySelector('#container-button .element');

    const gui = new GUI({
        container: '#container-button',
        draggable: true
    });

    gui.button('Button 1', () => {
        element.style.backgroundColor = getRandomColor();
    });

    gui.button({label: 'Button 2', color: '#bb3333', hoverColor: '#cc3333'}, () => {
        element.style.backgroundColor = getRandomColor();
    });
}