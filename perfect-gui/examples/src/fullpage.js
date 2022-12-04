//import GUI from 'perfect-gui';
import GUI from './perfect-gui/index.replica';

let gui = new GUI({ name: 'test',  });

let f = gui.folder({ name: 'folder', maxHeight: 500 });
for (let i = 0; i < 100; i++) {
    f.button('Button ' + i, () => {});
}

let f2 = gui.folder({ name: 'folder2', maxHeight: 500 });
for (let i = 0; i < 100; i++) {
    f2.button('Button ' + i, () => {});
}

let f3 = gui.folder({ name: 'folder2', maxHeight: 500 });
for (let i = 0; i < 100; i++) {
    f3.button('Button ' + i, () => {});
}