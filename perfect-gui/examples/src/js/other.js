import getRandomColor from './getRandomColor';
import GUI from '../perfect-gui/index';

const container = '#container-4';

export default function other() {
    const gui_1 = new GUI({
        container,
        name: 'GUI 1 (drag me!)',
        width: 450,
        draggable: true,
    });
    gui_1.button('Custom width using the `width` option', () => {});

    const gui_2 = new GUI({
        container,
        name: 'GUI 2 (closed, scrollable)',
        closed: true,
    });

    let f1 = gui_2.folder({ name: 'folder', color: '#33329f' });
    for (let i = 0; i < 3; i ++) {
        f1.button('btn '+ i, () => {});
    }
    let f2 = gui_2.folder({ name: 'folder', color: '#9f3293' });
    for (let i = 0; i < 3; i ++) {
        f2.button('btn '+ i, () => {});
    }
    for (let i = 0; i < 10; i ++) {
        gui_2.button('btn '+ i, () => {});
    }

    const gui_3 = new GUI({
        container,
        position: 'bottom right',
        name: 'GUI 3 (custom color + opacity)',
        color: '#ff00ff',
        opacity: .5
    });
    gui_3.button('lorem', () => {});
}