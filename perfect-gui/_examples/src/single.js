import GUI from './perfect-gui/index';

const position = {
    x: -5,
    y: 0,
};

const gui = new GUI({
    label: 'Single',
    draggable: true,
});

gui.vector2(position, 'x', 'y', {
    label: 'Position',
    min: -10,
    max: 10,
}).onChange((x, y) => {
    console.log(x, y);
});

const gui2 = new GUI({
    label: 'Single',
    draggable: true,
});

gui2.vector2(position, 'x', 'y', {
    label: 'Position',
    min: -10,
    max: 10,
}).onChange((x, y) => {
    console.log(x, y);
});
