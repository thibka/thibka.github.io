import GUI from '../../perfect-gui/index';

export default function color() {
    const element = document.querySelector('#container-color .element');

    const settings = {
        color: '#ffffff',
    };

    const gui = new GUI({
        container: '#container-color',
    });

    gui.color(settings, 'color', { label: 'Color' }).onChange((value) => {
        element.style.backgroundColor = value;
    });
}
