import GUI from '../perfect-gui/index';

export default function vectors() {
    const position = {
        x: 0,
        y: 0,
    };

    const element = document.querySelector('#container-vectors .element');

    const gui = new GUI({
        label: 'Vectors',
        container: '#container-vectors',
    });

    gui.vector2(position, 'x', 'y', {
        label: 'Position',
        min: -50,
        max: 50,
    });

    function loop() {
        element.style.transform = `translate(${position.x}px, ${-position.y}px)`;
        requestAnimationFrame(loop);
    }

    loop();
}
