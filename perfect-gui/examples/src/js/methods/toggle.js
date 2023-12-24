import GUI from '../../perfect-gui/index';

export default function toggle() {
    const element = document.querySelector('#container-toggle .element');

    const isRound = { state: true };

    const gui = new GUI({
        container: '#container-toggle',
        draggable: true
    });

    // Method 1, using a callback function
    gui.toggle({ name: 'Toggle (simple callback)', value: true }, val => {
        if ( val ) element.classList.remove('round');
        else element.classList.add('round');
    });

    // Method 2, using object binding
    gui.toggle({ name: 'Toggle (object binding)', obj: isRound, prop: 'state' }, () => {
        if ( isRound.state ) element.classList.remove('round');
        else element.classList.add('round');
    });
}