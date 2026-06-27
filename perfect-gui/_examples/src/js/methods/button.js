import GUI from '../../perfect-gui/index';
import getRandomColor from '../getRandomColor';

export default function button() {
    const element = document.querySelector('#container-button .element');

    const gui = new GUI({
        container: '#container-button',
        draggable: true,
    });

    gui.button({
        label: 'Button',
        color: '#6eb76e',
        hoverColor: '#589c58',
    }).onClick(() => {
        element.style.backgroundColor = getRandomColor();
    });
}
