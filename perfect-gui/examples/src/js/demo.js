// <div id="container-0" class="container" style="height: 800px; border-radius: 0;"></div>

import GUI from '../perfect-gui/index';

export default function() 
{
    const element = document.querySelector('#container-0 .element');
    const note = document.querySelector('#container-0 .note');

    const gui = new GUI({
        draggable: true,
        container: '#container-0',
        label: 'Control panel'
    });

    gui.button("Randomize color", () => {
        element.style.backgroundColor = get_random_color();
    });
    gui.slider({label: 'Intensity', min: .1, max: 2, value: .75, step: .01 }, (value) => {
        element.style.transform = `scale(${value})`;
    });
    gui.slider({label: 'Scale', min: 0, max: 50, value: 25, step: 25 }, (value) => {
        element.style.borderRadius = `${value}%`;
    });

    let folder1 = gui.folder({label: 'Texture'});

    folder1.image(
        'The officer',
        require('../img/DALL·E-2022-11-13-20.11.16---portrait-of-a-squirrel-in-an-officier-suit,-style-of-a-Rembrandt-painting.jpg'),
        () => {}
    );
    folder1.image(
        'Weird dream',
        require('../img/DALL·E-2022-11-13-20.11.52---a-blonde-girl-riding-a-whale-in-the-style-of-hopper.jpg'),
        () => {}
    );
    folder1.image(
        'Friends',
        require('../img/DALL·E-2022-11-13-20.13.55---1-blonde-haired-girl-with-her-orange-cat,-watching-the-whales-in-Tadoussac,-Canada.-In-the-style-of-an-oil-painting..jpg'),
        () => {}
    );

    let folder2 = gui.folder({label: 'Normals', closed: true});
    folder2.button("Random element color", () => {});

    gui.toggle("Rim light", true, (state) => {});

    gui.toggle("Direct light", false, (state) => {});

    gui.list('Preset', ['Atomic', 'pink', 'yellow', 'blue'], function(item) {});


    let position = { x: 2, y: 1};
    const gui2 = new GUI({
        draggable: true,
        container: '#container-0',
        label: 'Position panel'
    });
    gui2.vector2('Position', {
        x: {min: -10, max: 10, object: position, prop: 'x'},
        y: {min: -10, max: 10, object: position, prop: 'y'},
    }, () => {});
    gui2.color('Color', '#ffd170', () => {});
}