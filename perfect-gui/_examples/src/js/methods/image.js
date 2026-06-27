import GUI from '../../perfect-gui/index';

export default function image() {
    const element = document.querySelector('#container-image .element');
    element.style.backgroundImage = `url(https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.13.55---1-blonde-haired-girl-with-her-orange-cat,-watching-the-whales-in-Tadoussac,-Canada.-In-the-style-of-an-oil-painting..jpg)`;

    const gui = new GUI({
        container: '#container-image',
        draggable: true,
    });

    gui.image(
        'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.11.16---portrait-of-a-squirrel-in-an-officier-suit,-style-of-a-Rembrandt-painting.jpg',
        {
            label: 'Image 1',
        },
    ).onClick(changeBackground);

    gui.image(
        'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.13.55---1-blonde-haired-girl-with-her-orange-cat,-watching-the-whales-in-Tadoussac,-Canada.-In-the-style-of-an-oil-painting..jpg',
        {
            label: 'Image 2',
            selected: true,
        },
    ).onClick(changeBackground);

    gui.image(
        'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2022-11-13-20.11.52---a-blonde-girl-riding-a-whale-in-the-style-of-hopper.jpg',
        {
            label: 'Image 3',
        },
    ).onClick(changeBackground);

    gui.image(
        'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2023-11-25-16.00.40---An-oil-painting-of-a-short-haired-orange-and-white-alley-cat.jpg',
        {
            label: 'Image 4',
        },
    ).onClick(changeBackground);

    gui.image(
        'https://raw.githubusercontent.com/thibka/thibka.github.io/master/perfect-gui/_data/img/DALL·E-2023-11-25-16.05.33---An-image-in-the-style-of-a-1900s-painter,-depicting-a-blonde-girl-riding-a-whale.jpg',
        {
            label: 'Image 5',
        },
    ).onClick(changeBackground);

    function changeBackground(evt) {
        element.style.backgroundImage = `url( ${evt.path} )`;
    }
}
