import GUI from '../../perfect-gui/index';

export default function vector2() {
    const position = {
        x: 0,
        y: 0,
    };

    const element = document.querySelector('#container-vector2 .element');

    const gui = new GUI({
        container: '#container-vector2',
    });

    gui.vector2(position, 'x', 'y', {
        label: 'Position',
        min: -50,
        max: 50,
    }).onChange((x, y) => {
        element.style.transform = `translate(${x}px, ${-y}px)`;
    });
}
