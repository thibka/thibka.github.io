import GUI from './perfect-gui/index';

window.position = {
    x: -.25,
    y: -.25,
};

const gui = new GUI({
    name: 'Panel 2',
    draggable: true
});

gui.vector2({
    name: 'Position',
    x: { obj: window.position, prop: 'x', min: -.5, max: .5 },
    y: { obj: window.position, prop: 'y', min: -.5, max: .5 }
})

const gui2 = new GUI({
    name: 'Panel 1',
    draggable: true
});

gui2.button('Button')

gui2.image({ 
    name: 'Image 1',
    path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.11.16---portrait-of-a-squirrel-in-an-officier-suit,-style-of-a-Rembrandt-painting.jpg'
});

gui2.image({ 
    name: 'Image 2',
    path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.13.55---1-blonde-haired-girl-with-her-orange-cat,-watching-the-whales-in-Tadoussac,-Canada.-In-the-style-of-an-oil-painting..jpg',
    selected: true
});

gui2.image({ 
    name: 'Image 3',
    path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.11.52---a-blonde-girl-riding-a-whale-in-the-style-of-hopper.jpg',
});

gui2.toggle({ name: 'Toggle', value: true });

gui2.color({ name: 'Color', value: '#66dd88' });

gui2.list({ name: 'List', values: ['Option 1', 'Option 2'] });

gui2.slider({ name: 'Slider', values: ['Option 1', 'Option 2'] });

const gui3 = new GUI({
    name: 'Panel A',
    draggable: true
});

const folder = gui3.folder({ name: 'Folder A', value: true });
folder.toggle({ name: 'Toggle', value: true });
folder.list({ name: 'List', values: ['Option 1', 'Option 2'] });
folder.button('Button')

const folder2 = gui3.folder({ name: 'Folder B', value: true, color: '#003333'});
folder2.button('Button')
folder2.color({ name: 'Color', value: '#dddd88' });
