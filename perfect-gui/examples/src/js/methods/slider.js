import GUI from '../../perfect-gui/index';
export default function slider() {
    const element = document.querySelector('#container-slider .element');
    const position = {
        x: 0,
    };

    const gui = new GUI({
        container: '#container-slider',
        draggable: true
    });

    gui.slider({ label: 'Slider 1 (callback)', value: 1 }, 
        value => {
            element.style.opacity = value;
        }
    );

    gui.slider({ label: 'Slider 2 (object binding)', obj: position, prop: 'x', min: -30, max: 30 },
        () => {
            element.style.transform = `translateX(${position.x}px)`;
        }
    );
}