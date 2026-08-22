import GUI from '../../../perfect-gui/src/index';

/**
 * Screenshot rig — not part of the docs UI. Instantiates two panels that between
 * them exercise every control type and a representative spread of options, so a
 * single crop of #stage gives an up-to-date hero image for the package README.
 */

const stage = document.getElementById('stage');
if (!stage) throw new Error('#stage not found');

const HDR_IMAGES = ['./img/hdr1.jpg', './img/hdr2.jpg', './img/hdr3.jpg'];

// ------------------------------------------------------------------
// Panel 1 — core controls
// ------------------------------------------------------------------

const settings = {
  opacity: 0.75,
  wireframe: false,
  preset: 'Neon',
  color: '#06ff89',
  x: 0.3,
  y: -0.2,
  angle: 45,
  angle2: Math.PI,
  glow: 0.6,
  autoRotate: true,
};

const main = new GUI({
  label: 'Perfect GUI',
  container: stage,
  position: 'top left',
  width: 300,
  draggable: true,
  autoRepositioning: true,
  closed: false,
});

main.button({ label: 'Randomize', tooltip: 'Shuffle every value', hoverColor: '#bada55' }).onClick(() => {});

main
  .slider(settings, 'opacity', {
    label: 'Opacity',
    min: 0,
    max: 1,
    step: 0.01,
    tooltip: 'Panel opacity',
  })
  .onChange(() => {});

main.toggle(settings, 'wireframe', { label: 'Wireframe', tooltip: 'Render as wireframe' }).onChange(() => {});

main.list(settings, 'preset', ['Default', 'Neon', 'Sunset', 'Mono'], { label: 'Preset' }).onChange(() => {});

main.color(settings, 'color', { label: 'Accent color' }).onChange(() => {});

HDR_IMAGES.forEach((path, i) => {
  main.image(path, {
    label: `HDR${i + 1}`,
    selected: i === 0,
    selectionBorder: true,
    height: 56,
  });
});

main.angle(settings, 'angle', { label: 'Degrees' }).onChange(() => {});
main.angle(settings, 'angle2', { label: 'Radians', unit: 'rad' }).onChange(() => {});

main
  .vector2(settings, 'x', 'y', { label: 'Position', min: -1, max: 1 })
  .onChange(() => {});

// ------------------------------------------------------------------
// Panel 2 — tabs
// ------------------------------------------------------------------

const camera = {
  fov: 50,
  positionX: 0,
  rotationZ: 0,
  bgColor: '#161616',
  quality: 'High',
  bloom: true,
  bloomStrength: 0.8,
  showGrid: false,
  debugMode: 'Wireframe',
};

const tabsPanel = new GUI({
  label: 'Camera',
  container: stage,
  position: 'top right',
  width: 280,
  draggable: true,
  autoRepositioning: true,
});

const tabs = tabsPanel.tabs({ tabs: ['General', 'Advanced'], active: 0 });
const general = tabs.getTab?.(0);
const advanced = tabs.getTab?.(1);

if (general) {
  general.slider(camera, 'fov', { label: 'FOV', min: 20, max: 100, step: 1 }).onChange(() => {});
  general
    .slider(camera, 'positionX', { label: 'Position X', min: -3, max: 3, step: 0.1 })
    .onChange(() => {});
  general.button({ label: 'Reset camera' }).onClick(() => {});
}

if (advanced) {
  advanced.angle(camera, 'rotationZ', { label: 'Rotation Z' }).onChange(() => {});
  advanced.color(camera, 'bgColor', { label: 'Background' }).onChange(() => {});
  advanced.list(camera, 'quality', ['Low', 'Medium', 'High'], { label: 'Render quality' }).onChange(() => {});
}

const folder = tabsPanel.folder({ label: 'Advanced', closed: false });
folder.slider(settings, 'glow', { label: 'Glow', min: 0, max: 1, step: 0.01 }).onChange(() => {});
folder.toggle(settings, 'autoRotate', { label: 'Auto-rotate' }).onChange(() => {});

const postFolder = tabsPanel.folder({ label: 'Post-processing', color: '#002222', closed: false });
postFolder.toggle(camera, 'bloom', { label: 'Bloom' }).onChange(() => {});
postFolder
  .slider(camera, 'bloomStrength', { label: 'Strength', min: 0, max: 2, step: 0.01 })
  .onChange(() => {});
postFolder.button({ label: 'Apply preset', color: '#00e0e0', hoverColor: '#5cffff' }).onClick(() => {});

const debugFolder = tabsPanel.folder({ label: 'Debug', color: '#002200', closed: false });
debugFolder.toggle(camera, 'showGrid', { label: 'Show grid' }).onChange(() => {});
debugFolder
  .list(camera, 'debugMode', ['Wireframe', 'Normals', 'Depth'], { label: 'Mode' })
  .onChange(() => {});
debugFolder.button({ label: 'Log state', color: '#4ade4a', hoverColor: '#8bff8b' }).onClick(() => {});
