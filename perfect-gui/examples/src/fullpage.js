//import GUI from 'perfect-gui';
import GUI from './perfect-gui/index';

let gui = new GUI({ name: 'test',  });
let data = { x: 0.5, y: 0.5 };
let data2 = { x: 0.5, y: 0.5 };

let f = gui.folder({ name: 'folder' });
for (let i = 0; i < 10; i++) {
    f.button('Button ' + i, () => {});
}


let f2 = f.folder({ name: 'subfolder'});
for (let i = 0; i < 10; i++) {
    f2.button('Button ' + i, () => {});
}
f2.vector2({name: 'vector2', 
    x: { obj: data, prop: 'x', min: -30, max: 30},
    y: { obj: data, prop: 'y', min: -30, max: 30},
}, () => {});

let f3 = f2.folder({ name: 'subfolder' });
//for (let i = 0; i < 10; i++) {
    /* f3.button('Button ', () => {});
    
    f3.toggle({ name: 'toggle', value: true}, () => {});
    f3.slider({ name: 'slider', value: 0.5, min: 0, max: 1}, () => {});
    f3.list({name: 'list', values:['jhop', 'jlkj']}, () => {}); */
    f3.color({name: 'color', value:'#ff0000'}, () => {});
    f3.vector2({name: 'vector2', 
        x: { obj: data2, prop: 'x', min: 0, max: 1},
        y: { obj: data2, prop: 'y', min: 0, max: 1},
    }, () => {});
    f3.folder({name: 'okok'});
//}
