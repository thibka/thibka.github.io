import GUI from '../../perfect-gui/index';

export default function list() {
    const element = document.querySelector('#container-list .element');

    const gui = new GUI({
        container: '#container-list',
        draggable: true,
    });

    // Approach 1, using a callback function
    gui.list({
        label: 'Simple mode',
        values: ['red', 'pink', 'yellow', 'blue'],
        value: 1,
    }).onChange((value) => {
        element.style.backgroundColor = value;
    });

    // Approach 2, using object binding with an array of strings
    const values = ['red', 'pink', 'yellow', 'blue'];
    const color = { value: 'yellow' };
    gui.list(color, 'value', {
        label: 'Binding mode (strings)',
        values,
    }).onChange((value, index) => {
        element.style.backgroundColor = value;
    });

    // Approach 3, using object binding with an array of objects
    // The "name" property is only used to control what's displayed in the option list
    // The intrinsec value of each item is the "value" property
    const color2 = { value: '#993333' };
    const objectValues = [
        { label: 'reddish', value: '#993333' },
        { label: 'pinkish', value: '#aa33aa' },
        { label: 'yellowish', value: '#999933' },
        { label: 'blueish', value: '#333399' },
    ];
    gui.list(color2, 'value', {
        label: 'Binding mode (objects)',
        values: objectValues,
    }).onChange((obj, index) => {
        element.style.backgroundColor = obj.value;
    });
}
