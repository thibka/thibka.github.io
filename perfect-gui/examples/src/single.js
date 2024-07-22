import GUI from './perfect-gui/index';

window.position = {
    x: 0,
};

const gui = new GUI({
    name: 'Single',
});

/* gui.slider({ name: 'Slider (simple callback)', value: 1 }, 
    value => {
        element.style.opacity = value;
    }
); */

gui.slider({ name: 'Simple', value: .5, min: 0, max: 1 },
    (val) => {
        console.log('callback value:', val);
    }
);

gui.slider({ name: 'Object binding', obj: window.position, prop: 'x', min: 0, max: 1, step: .1 },
    () => {
        //console.log('>:',position.x);
    }
);