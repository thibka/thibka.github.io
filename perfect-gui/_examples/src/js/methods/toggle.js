import GUI from '../../perfect-gui/index';

export default function toggle() {
    const element = document.querySelector('#container-toggle .element');

    const settings = { isRound: false };

    const gui = new GUI({
        container: '#container-toggle',
        draggable: true,
    });

    gui.toggle(settings, 'isRound', { label: 'Rounded corners' }).onChange(
        (value) => {
            element.classList.toggle('round', value);
        },
    );
}
