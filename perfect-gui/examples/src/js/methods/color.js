import GUI from '../../perfect-gui/index';

export default function color() {
    const element = document.querySelector('#container-color .element');

    const gui = new GUI({
        container: '#container-color'
    });

    gui.color({ label: 'Color (value & callback)', value: '#06ff89' }, color => {
        element.style.backgroundColor = color;
    });

    const color = { value: '#06ff89' };
    gui.color({ label: 'Color (object binding)', obj: color, prop: 'value' }, () => {
        element.style.backgroundColor = color.value;
    });
}