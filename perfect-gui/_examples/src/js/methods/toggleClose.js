import GUI from '../../perfect-gui/index';

export default function toggleClose() {
    const gui_1 = new GUI({
        container: '#container-toggleclose',
    });

    gui_1.button({ label: 'gui_2.toggleClose();' }).onClick(() => {
        gui_2.toggleClose();
    });

    const gui_2 = new GUI({
        container: '#container-toggleclose',
    });

    gui_2.button({ label: 'gui_1.toggleClose();' }).onClick(() => {
        gui_1.toggleClose();
    });
}
