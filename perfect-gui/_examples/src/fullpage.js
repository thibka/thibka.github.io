import GUI from './perfect-gui/index';

let gui = new GUI({ label: 'test', closed: true, onUpdate: () => console.log('ok') });
let data = { x: 0.5, y: 0.5 };
let data2 = { x: 0.5, y: 0.5 };

gui.slider({obj: data, prop: 'x', label: 'foobar'})
gui.slider({obj: data, prop: 'x', label: 'foobar'})
gui.slider({obj: data, prop: 'x', label: 'foobar'})
gui.slider({obj: data, prop: 'x', label: 'foobar'})
gui.slider({obj: data2, prop: 'x', min: 0, max: 1000, label: 'data2'})

let f = gui.folder({ label: 'folder' });
for (let i = 0; i < 10; i++) {
    f.button('Button ' + i, () => {});
}

f.slider({label: 'Test'}, () => {});
f.slider({label: 'Test'}, () => {});

let f2 = gui.folder({ label: 'folder'});
for (let i = 0; i < 20; i++) {
    f2.button('Button ' + i, () => {});
}
f2.vector2({label: 'vector2', 
    x: { obj: data, prop: 'x', min: -30, max: 30},
    y: { obj: data, prop: 'y', min: -30, max: 30},
}, () => {});

let f3 = f2.folder({ label: 'subfolder' });
//for (let i = 0; i < 10; i++) {
    /* f3.button('Button ', () => {});
    
    f3.toggle({ label: 'toggle', value: true}, () => {});
    f3.slider({ label: 'slider', value: 0.5, min: 0, max: 1}, () => {});
    f3.list({label: 'list', values:['jhop', 'jlkj']}, () => {}); */
    f3.color({label: 'color', value:'#ff0000'}, () => {});
    f3.vector2({label: 'vector2', 
        x: { obj: data2, prop: 'x', min: 0, max: 1},
        y: { obj: data2, prop: 'y', min: 0, max: 1},
    }, () => {});
    const f4 = f3.folder({label: 'okok'});
//}

f4.slider({label: 'Test'}, () => {});