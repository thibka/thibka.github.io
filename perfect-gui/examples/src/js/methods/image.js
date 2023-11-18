import GUI from '../../perfect-gui/index';

export default function image() {
    const element = document.querySelector('#container-image .element');
    element.style.backgroundImage = `url(https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.13.55---1-blonde-haired-girl-with-her-orange-cat,-watching-the-whales-in-Tadoussac,-Canada.-In-the-style-of-an-oil-painting..jpg)`;

    const gui = new GUI({
        container: '#container-image',
        draggable: true
    });

    gui.image({ name: 'Image 1',
        path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.11.16---portrait-of-a-squirrel-in-an-officier-suit,-style-of-a-Rembrandt-painting.jpg'},
        evt => {
            element.style.backgroundImage = `url( ${evt.path} )`;
        }
    );

    gui.image({ 
            name: 'Image 2',
            path: 'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.13.55---1-blonde-haired-girl-with-her-orange-cat,-watching-the-whales-in-Tadoussac,-Canada.-In-the-style-of-an-oil-painting..jpg',
            selected: true
        },
        evt => {
            element.style.backgroundImage = `url( ${evt.path} )`;
        }
    );
}