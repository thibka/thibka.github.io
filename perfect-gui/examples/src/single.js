import GUI from './perfect-gui/index';

window.position = {
    x: 0,
    y: 0,
};

const gui = new GUI({
    label: 'Single',
});

const fa = gui.folder({ label: 'folder' });

fa.button({
    label: 'Button',
},() => {
        console.log('ok');
    })
fa.vector2({
    label: 'Position',
    x: { obj: window.position, prop: 'x', min: -.01, max: .01 },
    y: { obj: window.position, prop: 'y', min: -.01, max: .01 }
})