import GUI from '../../perfect-gui/index';

export default function list() {
    const element = document.querySelector('#container-list .element');

    const gui = new GUI({
        container: '#container-list',
        draggable: true
    });

    // Approach 1, using a callback function
    gui.list({ name: 'Value & callback', values: ['red', 'pink', 'yellow', 'blue'], value: 0 }, selected_value => {
        element.style.backgroundColor = selected_value;
    });

    // Approach 2, using object binding with an array of strings
    const values = ['red', 'pink', 'yellow', 'blue'];
    const color = { value: 0 };
    gui.list({ name: 'Object binding (strings)', values, obj: color, prop: 'value' }, 
        (value, index) => {
            element.style.backgroundColor = value;
        }
    );

    // Approach 3, using object binding with an array of objects
    // The "name" property is only used to control what's displayed in the option list
    // The intrinsec value of each item is the "value" property
    const color2 = { value: '#993333' };
    const objectValues = [
        {name: 'reddish', value: '#993333'}, 
        {name: 'pinkish', value: '#aa33aa'}, 
        {name: 'yellowish', value: '#999933'}, 
        {name: 'blueish', value: '#333399'}
    ];
    gui.list({ name: 'Object binding (objects)', values: objectValues, obj: color2, prop: 'value' }, 
        (obj, index) => {
            element.style.backgroundColor = obj.value;
        }
    );
}