import GUI from '../../perfect-gui/index';
export default function slider() {
    const element = document.querySelector('#container-slider .element');
    const position = {
        x: 0,
    };

    const gui = new GUI({
        container: '#container-slider',
        draggable: true,
    });

    gui.slider(position, 'x', {
        label: 'Slider',
        min: -30,
        max: 30,
    }).onChange((value) => {
        element.style.transform = `translateX(${value}px)`;
    });
}
