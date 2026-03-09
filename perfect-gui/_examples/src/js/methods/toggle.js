import GUI from '../../perfect-gui/index';

export default function toggle() {
    const element = document.querySelector('#container-toggle .element');

    const gui = new GUI({
        container: '#container-toggle',
        draggable: true,
    });

    // Method 1, using a callback function
    gui.toggle({ label: 'Toggle', value: true }).onChange((val) => {
        if (val) element.classList.remove('round');
        else element.classList.add('round');
    });

    // Method 2, using object binding
    const isRound = { state: true };
    gui.toggle(isRound, 'state', { label: 'Toggle (object binding)' }).onChange(
        () => {
            if (isRound.state) element.classList.remove('round');
            else element.classList.add('round');
        },
    );
}
