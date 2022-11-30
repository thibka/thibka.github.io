import GUI from '../../../../src/index';
import getRandomColor from '../getRandomColor';

export default function toggleClose() {
    const gui_1 = new GUI({
        container: '#container-toggleclose',
    });

    gui_1.button('gui_2.toggleClose();', () => {
        gui_2.toggleClose();
    });

    const gui_2 = new GUI({
        container: '#container-toggleclose',
    });

    gui_2.button('gui_1.toggleClose();', () => {
        gui_1.toggleClose();
    });
}