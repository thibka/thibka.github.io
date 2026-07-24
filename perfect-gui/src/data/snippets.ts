import type { MethodParam } from '../types';

export const buttonParams: MethodParam[] = [
  { name: 'label', type: 'string', desc: 'Text displayed inside the button.' },
  { name: 'color', type: 'string', desc: 'Accent color of the button.' },
  { name: 'hoverColor', type: 'string', desc: 'Accent color when the button is hovered. Defaults to `color` if provided.' },
  { name: 'tooltip', type: 'string|bool', desc: 'Shown on hover. `true` reuses the label.' },
];

export const buttonSnippet = `import GUI from 'perfect-gui';

const gui = new GUI();

gui.button({
    label: 'Button',
}).onClick(() => {
    alert('Button clicked');
});`;

export const sliderParams: MethodParam[] = [
  { name: 'label', type: 'string', desc: 'Displayed label. Defaults to the property name.' },
  { name: 'min', type: 'number', desc: 'Default is 0.' },
  { name: 'max', type: 'number', desc: 'Default is 1.' },
  { name: 'step', type: 'number', desc: 'Increment of the value. Default gives 100 steps between min and max.' },
  { name: 'tooltip', type: 'string|bool', desc: 'Shown on hover. `true` reuses the label.' },
];

export const sliderSnippet = `const position = { x: 0 };

gui.slider(position, 'x', {
    label: 'Slider',
    min: -30,
    max: 30,
}).onChange((value) => {
    el.style.transform = \`translateX(\${value}px)\`;
});`;

export const toggleParams: MethodParam[] = [
  { name: 'label', type: 'string', desc: 'Displayed label. Defaults to the property name.' },
  { name: 'tooltip', type: 'string|bool', desc: 'Shown on hover. `true` reuses the label.' },
];

export const toggleSnippet = `const settings = { value: false };

gui.toggle(settings, 'value', {
    label: 'Toggle',
}).onChange((value) => {
    el.classList.toggle('round', value);
});`;

export const listParams: MethodParam[] = [
  { name: 'label', type: 'string', desc: 'Displayed label. Defaults to the property name.' },
  { name: 'tooltip', type: 'string|bool', desc: 'Shown on hover. `true` reuses the label.' },
];

export const listSnippet = `const settings = { 
    quality: 'Medium', speed: 1 
};

// Array of strings
gui.list(settings, 'quality', 
    [ 'Low', 'Medium', 'High' ], 
    { label: 'String array' }
).onChange((value) => {
    alert('Quality set to ' + value);
});

// Array of { label, value } objects: 
// - the label is displayed in the dropdown, 
// - the value is assigned to the property
gui.list(settings, 'speed', [
    { label: 'Slow', value: 0.5 },
    { label: 'Normal', value: 1 },
    { label: 'Fast', value: 2 },
], {
    label: 'Object array',
}).onChange((item) => {
    el.style.animationDuration = \`\${1 / item.value}s\`;
});`;

export const imageParams: MethodParam[] = [
  { name: 'label', type: 'string', desc: 'Displayed label. Defaults to the image file name.' },
  { name: 'selected', type: 'boolean', desc: 'Initial selected state. Default is false.' },
  { name: 'selectionBorder', type: 'boolean', desc: 'Shows a border around the selected image. Default is true.' },
  { name: 'width', type: 'number|string', desc: "Width in pixels, or any CSS unit as a string ('50%', '5vw'). Default is 33.333%." },
  { name: 'height', type: 'number', desc: 'Height in pixels. Default is 90.' },
  { name: 'tooltip', type: 'string|bool', desc: 'Shown on hover. `true` reuses the label.' },
];

export const imageSnippet = `gui.image('./img1.jpg', { 
  label: 'Img 1',
}).onClick(changeBackground);

gui.image('./img2.jpg', { 
  label: 'Img 2', 
  selected: true,
}).onClick(changeBackground);

gui.image('./img3.jpg', { 
  label: 'Img 3',
}).onClick(changeBackground);

function changeBackground(img) {
    el.style.backgroundImage = \`url(\${img.path})\`;
}`;

export const colorParams: MethodParam[] = [
  { name: 'label', type: 'string', desc: 'Displayed label. Defaults to the property name.' },
  { name: 'tooltip', type: 'string|bool', desc: 'Shown on hover. `true` reuses the label.' },
];

export const colorSnippet = `const settings = { color: '#06ff89' };

gui.color(settings, 'color', {
    label: 'Color',
}).onChange((value) => {
    el.style.backgroundColor = value;
});`;

export const vector2Params: MethodParam[] = [
  { name: 'label', type: 'string', desc: 'Displayed label. Defaults to "xProp / yProp".' },
  { name: 'min', type: 'number', desc: 'Minimum value applied to both axes.' },
  { name: 'max', type: 'number', desc: 'Maximum value applied to both axes.' },
  { name: 'step', type: 'number', desc: 'Increment used for both axes.' },
  { name: 'x', type: 'object', desc: 'Overrides for the X axis: min, max, step.' },
  { name: 'y', type: 'object', desc: 'Overrides for the Y axis: min, max, step.' },
  { name: 'tooltip', type: 'string|bool', desc: 'Shown on hover. `true` reuses the label.' },
];

export const vector2Snippet = `const settings = { x: 0, y: 0 };

gui.vector2(settings, 'x', 'y', {
    label: 'Position',
    min: -50,
    max: 50,
}).onChange((x, y) => {
    console.log(\`Position: \${x}px, \${y}px\`);
});`;

export const folderParams: MethodParam[] = [
  { name: 'label', type: 'string', desc: 'Label displayed in the folder header.' },
  { name: 'closed', type: 'boolean', desc: 'Folder is collapsed by default. Default is false.' },
  { name: 'color', type: 'string', desc: 'Custom background color of the folder.' },
  { name: 'maxHeight', type: 'number', desc: 'Max height before the folder scrolls.' },
];

export const folderSnippet = `const settings = { value: 1 };

const f1 = gui.folder({ 
  label: 'Folder 1' 
});
f1.slider( settings, 'value' );

const f2 = gui.folder({ 
  label: 'Folder 2', color: '#1c935c' 
});
f2.button({ label: 'Button' });

const f3 = gui.folder({ 
  label: 'Folder 3', closed: true 
});
f3.button({ label: 'Button' });`;

export const tabsParams: MethodParam[] = [
  { name: 'tabs', type: 'array', desc: 'Required. Labels of the tabs.' },
  { name: 'active', type: 'number', desc: 'Index of the initially active tab. Default is 0.' },
  { name: 'color', type: 'string', desc: 'Custom background color of the tabs container.' },
  { name: 'maxHeight', type: 'number', desc: 'Max height before the content scrolls.' },
];

export const tabsMethods: MethodParam[] = [
  { name: '.getTab(i)', type: 'GUI', desc: 'GUI instance of the tab at the given index — attach controls to it.' },
  { name: '.getActiveTab()', type: 'number', desc: 'Index of the currently active tab.' },
  { name: '.getTabElement(i)', type: 'element', desc: 'DOM element of the tab button at the given index.' },
  { name: '.setActiveTab(i)', type: 'void', desc: 'Activates the tab at the given index.' },
];

export const tabsSnippet = `const settings = { 
    value: 0.5, 
    color: '#1c935c' 
};

const tabs = gui.tabs({
    tabs: ['Controls', 'Options'],
});

const controls = tabs.getTab(0);
controls.button({ label: 'Action' });
controls.slider(settings, 'value');

const options = tabs.getTab(1);
options.color(settings, 'color');
`;

export const toggleCloseSnippet = `const gui1 = new GUI();
const gui2 = new GUI({ 
    position: 'bottom right' 
});

gui1.button({ label: 'gui2.toggleClose();' })
    .onClick(() => {
        gui2.toggleClose();
    });

gui2.button({ label: 'gui1.toggleClose();' })
    .onClick(() => {
        gui1.toggleClose();
    });`;

export const killSnippet = `const created = [];

gui.button({ label: 'Create GUI panel' })
    .onClick(() => {
        created.push(new GUI({
            label: 'Created GUI',
            position: 'bottom right',
        }));
    });

gui.button({ label: 'Kill GUI panel' })
    .onClick(() => {
        // Removes the panel and its controls from the DOM
        created.pop()?.kill();
    });`;
