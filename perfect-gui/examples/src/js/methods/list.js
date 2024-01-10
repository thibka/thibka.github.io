import GUI from '../../perfect-gui/index';

export default function list() {
    const element = document.querySelector('#container-list .element');

    const gui = new GUI({
        container: '#container-list',
        draggable: true
    });

    // Approach 1, using a callback function
    gui.list({ name: 'List (value & callback)', values: ['red', 'pink', 'yellow', 'blue'], value: 1 }, selected_value => {
        element.style.backgroundColor = selected_value;
    });

    // Approach 2, using object binding
    const values = ['red', 'pink', 'yellow', 'blue'];
    const color = { value: 2 };
    gui.list({ name: 'List (object binding)', values, obj: color, prop: 'value' }, 
        (value, index) => {
            element.style.backgroundColor = value;
        }
    );
}