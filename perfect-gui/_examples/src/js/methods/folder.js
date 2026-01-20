import getRandomColor from '../getRandomColor';
import GUI from '../../perfect-gui/index';

export default function folder() {
    const element = document.querySelector('#container-folder .element');

    const gui = new GUI({
        label: 'Folders',
        container: '#container-folder',
        onUpdate: () => console.log('ok')
    });

    let folder_1 = gui.folder({ label: 'Folder 1' });

    folder_1.button('Button', () => {
        let color = getRandomColor();
        element.style.backgroundColor = color;
    });

    folder_1.slider({ label: 'Slider', value: 1, step: .1 }, value => {
        element.style.transform = `scale(${value})`;
    });

    let folder_2 = gui.folder({ label: 'Folder 2', color: '#993333' });

    folder_2.button('Button', () => {
        element.style.backgroundColor = getRandomColor();
    });

    let folder_3 = gui.folder({ label: 'Folder 3', closed: true });

    folder_3.button('Button', () => {
        element.style.backgroundColor = getRandomColor();
    });
}