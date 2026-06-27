import getRandomColor from '../getRandomColor';
import GUI from '../../perfect-gui/index';

export default function folder() {
    const element = document.querySelector('#container-folder .element');

    const gui = new GUI({
        label: 'Folders',
        container: '#container-folder',
    });

    const settings = { value: 1 };

    const f1 = gui.folder({ label: 'Folder 1' });

    f1.button({ label: 'Button' }).onClick(() => {
        let color = getRandomColor();
        element.style.backgroundColor = color;
    });

    f1.slider(settings, 'value', { label: 'Slider', step: 0.1 }).onChange(
        (value) => {
            element.style.transform = `scale(${value})`;
        },
    );

    const f2 = gui.folder({ label: 'Folder 2', color: '#993333' });

    f2.button({ label: 'Button' }).onClick(() => {
        element.style.backgroundColor = getRandomColor();
    });

    const f3 = gui.folder({ label: 'Folder 3', closed: true });

    f3.button({ label: 'Button' }).onClick(() => {
        element.style.backgroundColor = getRandomColor();
    });
}
