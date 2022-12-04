//import GUI from 'perfect-gui';
import GUI from './perfect-gui/index.replica';

let gui = new GUI({ name: 'test' });
gui.button('a butn', () => {});
gui.toggle({ name: 'test', value: true });

for (let i = 0; i < 100; i++) {
    gui.button('Button ' + i, () => {});
}