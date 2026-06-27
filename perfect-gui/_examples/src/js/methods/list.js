import GUI from '../../perfect-gui/index';

export default function list() {
    const element = document.querySelector('#container-list .element');

    const settings = { color: 'white' };

    const gui = new GUI({
        container: '#container-list',
        draggable: true,
    });

    gui.list(settings, 'color', ['red', 'white', 'yellow', 'blue'], {
        label: 'String array',
    }).onChange((value) => {
        element.style.backgroundColor = value;
    });

    // Using an array of objects
    // The "label" property is only used to control what's displayed in the option list
    // The underlying value of each item is the "value" property
    const settings2 = { color: '#993333' };

    gui.list(
        settings2,
        'color',
        [
            { label: 'reddish', value: '#993333' },
            { label: 'pinkish', value: '#aa33aa' },
            { label: 'yellowish', value: '#999933' },
            { label: 'blueish', value: '#333399' },
        ],
        {
            label: 'Object array',
        },
    ).onChange((obj, index) => {
        element.style.backgroundColor = obj.value;
    });
}
