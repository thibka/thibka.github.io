import getRandomColor from './getRandomColor';
import GUI from '../perfect-gui/index';

const container = '#container-5';

export default function other() {
    const guis = [];

    let gui_1 = new GUI({
        container,
        label: 'GUI 1',
    });

    gui_1.button({ label: 'Create GUI panel' }).onClick(() => {
        guis[guis.length] = new GUI({
            container,
            label: 'Created GUI',
            position: 'bottom left',
            width: 150,
            color: 'red',
        });
    });

    gui_1.button({ label: 'Kill GUI panel' }).onClick(() => {
        const index = guis.length - 1;
        if (index >= 0) {
            // Removes html elements
            guis[index].kill();

            // Frees up memory
            guis[index] = null;

            // Removes null value from array
            guis.splice(index, 1);
        }
    });
}
