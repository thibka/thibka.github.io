import GUI from '../../perfect-gui/index';
import getRandomColor from '../getRandomColor';

export default function basics() {
    const params = {
        x: 0,
        y: 0,
        scale: 1,
    };

    const element = document.querySelector('#container-1 .element');

    const gui = new GUI({
        label: 'Basics',
        container: '#container-1'
    });

    gui.button('Button', () => {
        element.style.backgroundColor = getRandomColor();
        element.style.backgroundImage = 'none';
    });

    gui.slider({ label: 'Slider 1 (callback)', value: 1 }, 
        value => {
            element.style.opacity = value;
        }
    );

    gui.slider({ label: 'Slider 2 (binding)', obj: params, prop: 'scale', min: .5, max: 2, step: .01 },
        () => {
            console.log('direct callback slider');
            element.style.scale = `${params.scale}`;
        }
    );

    gui.toggle({ label: 'Toggle', value: true }, state => {
        if ( state ) element.classList.remove('round');
        else element.classList.add('round');
    });

    gui.list({ label: 'List', values: ['red', 'pink', 'yellow', 'blue'] }, option => {
        element.style.backgroundImage = 'none';
        element.style.backgroundColor = option;
    });

    gui.image({ label: 'Image 1',
        path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.11.16---portrait-of-a-squirrel-in-an-officier-suit,-style-of-a-Rembrandt-painting.jpg'},
        evt => {
            element.style.backgroundImage = `url(${evt.path})`;
        }
    );

    gui.image({ label: 'Image 2',
        path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.11.52---a-blonde-girl-riding-a-whale-in-the-style-of-hopper.jpg'},
        evt => {
            element.style.backgroundImage = `url(${evt.path})`;
        }
        );
        
    gui.image({ label: 'Image 3',
        path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.13.55---1-blonde-haired-girl-with-her-orange-cat,-watching-the-whales-in-Tadoussac,-Canada.-In-the-style-of-an-oil-painting..jpg'},
        evt => {
            element.style.backgroundImage = `url(${evt.path})`;
        }
    );

    gui.color({ label: 'Color', value: '#06ff89'}, color => {
        element.style.backgroundImage = 'none';
        element.style.backgroundColor = color;
    });

    const folder = gui.folder({ label: 'Folder', closed: true });
    folder.vector2({ label: 'Position',
        x: { obj: params, prop: 'x', min: -50, max: 50 },
        y: { obj: params, prop: 'y', min: -50, max: 50 },
    }, (x, y) => {
        element.style.translate = `${x}px ${-y}px`;
    });
}