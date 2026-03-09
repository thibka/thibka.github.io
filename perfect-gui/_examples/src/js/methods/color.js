import GUI from '../../perfect-gui/index';

export default function color() {
    const element = document.querySelector('#container-color .element');

    const gui = new GUI({
        container: '#container-color',
    });

    gui.color({ label: 'Color (simple mode)', value: '#06ff89' }).onChange(
        (color) => {
            element.style.backgroundColor = color;
        },
    );

    const color = { value: '#06ff89' };
    gui.color(color, 'value', { label: 'Color (binding mode)' }).onChange(
        () => {
            element.style.backgroundColor = color.value;
        },
    );
}
