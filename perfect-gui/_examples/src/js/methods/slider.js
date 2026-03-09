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

    gui.slider({ label: 'Slider 1', value: 1 }).onChange((value) => {
        element.style.opacity = value;
    });

    gui.slider(position, 'x', {
        label: 'Slider 2 (object binding)',
        min: -30,
        max: 30,
    }).onChange(() => {
        element.style.transform = `translateX(${position.x}px)`;
    });
}
