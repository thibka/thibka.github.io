// <div id="container-0" class="container" style="height: 800px; border-radius: 0;"></div>

import GUI from '../perfect-gui/index';

export default function () {
    const element = document.querySelector('#container-0 .element');
    const note = document.querySelector('#container-0 .note');

    const gui = new GUI({
        draggable: true,
        container: '#container-0',
        label: 'Control panel',
    });

    gui.button({ label: 'Randomize color' }).onClick(() => {
        element.style.backgroundColor = get_random_color();
    });
    gui.slider({
        label: 'Intensity',
        min: 0.1,
        max: 2,
        value: 0.75,
        step: 0.01,
    }).onChange((value) => {
        element.style.transform = `scale(${value})`;
    });
    gui.slider({
        label: 'Scale',
        min: 0,
        max: 50,
        value: 25,
        step: 25,
    }).onChange((value) => {
        element.style.borderRadius = `${value}%`;
    });

    let folder1 = gui.folder({ label: 'Texture' });

    folder1
        .image({
            label: 'The officer',
            path: require('../img/DALL·E-2022-11-13-20.11.16---portrait-of-a-squirrel-in-an-officier-suit,-style-of-a-Rembrandt-painting.jpg'),
        })
        .onClick(() => {});
    folder1
        .image({
            label: 'Weird dream',
            path: require('../img/DALL·E-2022-11-13-20.11.52---a-blonde-girl-riding-a-whale-in-the-style-of-hopper.jpg'),
        })
        .onClick(() => {});
    folder1
        .image({
            label: 'Friends',
            path: require('../img/DALL·E-2022-11-13-20.13.55---1-blonde-haired-girl-with-her-orange-cat,-watching-the-whales-in-Tadoussac,-Canada.-In-the-style-of-an-oil-painting..jpg'),
        })
        .onClick(() => {});

    let folder2 = gui.folder({ label: 'Normals', closed: true });
    folder2.button({ label: 'Random element color' }).onClick(() => {});

    gui.toggle({ label: 'Rim light', value: true }).onChange((state) => {});

    gui.toggle({ label: 'Direct light', value: false }).onChange((state) => {});

    gui.list({
        label: 'Preset',
        values: ['Atomic', 'pink', 'yellow', 'blue'],
    }).onChange(function (item) {});

    let position = { x: 2, y: 1 };
    const gui2 = new GUI({
        draggable: true,
        container: '#container-0',
        label: 'Position panel',
    });
    gui2.vector2(position, 'x', 'y', {
        label: 'Position',
        min: -10,
        max: 10,
    }).onChange(() => {});
    gui2.color({ label: 'Color', value: '#ffd170' }).onChange(() => {});
}
