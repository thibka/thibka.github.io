import GUI from './perfect-gui/index';

let gui = new GUI({
    label: 'test',
    closed: true,
    onUpdate: () => console.log('ok'),
});
let data = { x: 0.5, y: 0.5 };
let data2 = { x: 0.5, y: 0.5 };

gui.slider(data, 'x', { label: 'foobar' });
gui.slider(data, 'x', { label: 'foobar' });
gui.slider(data, 'x', { label: 'foobar' });
gui.slider(data, 'x', { label: 'foobar' });
gui.slider(data2, 'x', { min: 0, max: 1000, label: 'data2' });

let f = gui.folder({ label: 'folder' });
for (let i = 0; i < 10; i++) {
    f.button({ label: 'Button ' + i }).onClick(() => {});
}

f.slider({ label: 'Test' }).onChange(() => {});
f.slider({ label: 'Test' }).onChange(() => {});

let f2 = gui.folder({ label: 'folder' });
for (let i = 0; i < 20; i++) {
    f2.button({ label: 'Button ' + i }).onClick(() => {});
}
f2.vector2(data, 'x', 'y', {
    label: 'vector2',
    min: -30,
    max: 30,
}).onChange(() => {});

let f3 = f2.folder({ label: 'subfolder' });
//for (let i = 0; i < 10; i++) {
/* f3.button({ label: 'Button ' }).onClick(() => {});
    
    f3.toggle({ label: 'toggle', value: true}).onChange(() => {});
    f3.slider({ label: 'slider', value: 0.5, min: 0, max: 1}).onChange(() => {});
    f3.list({label: 'list', values:['jhop', 'jlkj']}).onChange(() => {}); */
f3.color({ label: 'color', value: '#ff0000' }).onChange(() => {});
f3.vector2(data2, 'x', 'y', {
    label: 'vector2',
    min: 0,
    max: 1,
}).onChange(() => {});
const f4 = f3.folder({ label: 'okok' });
//}

f4.slider({ label: 'Test' }).onChange(() => {});
