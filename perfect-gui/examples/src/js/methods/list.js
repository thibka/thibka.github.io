import GUI from '../../perfect-gui/index';

export default function list() {
    const element = document.querySelector('#container-list .element');

    const gui = new GUI({
        container: '#container-list',
        draggable: true
    });

    // Method 1, using a callback function
    gui.list({ name: 'List (value & callback)', values: ['red', 'pink', 'yellow', 'blue'], value: 1 }, selected_value => {
        element.style.backgroundColor = selected_value;
    });

    // Method 2, using object binding
    const values = ['red', 'pink', 'yellow', 'blue'];
    const color = { value: 2 };
    gui.list({ name: 'List (object binding)', values, obj: color, prop: 'value' }, () => {
        element.style.backgroundColor = values[color.value];
    });
}