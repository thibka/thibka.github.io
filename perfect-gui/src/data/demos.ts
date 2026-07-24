// import GUI from 'perfect-gui';
import GUI from '../../../../perfect-gui/src/index';

/**
 * Live demo setups for the method sections. Each one instantiates a real
 * perfect-gui panel inside the stage element and returns a teardown. The
 * panels mirror the code snippet next to them; their controls act on
 * nothing — except toggleClose/kill, which demonstrate themselves.
 */
export type DemoSetup = (container: HTMLElement) => () => void;

const HDR_IMAGES = ['/img/hdr1.jpg', '/img/hdr2.jpg', '/img/hdr3.jpg'];

const SPEED_OPTIONS = [
  { label: 'Slow', value: 0.5 },
  { label: 'Normal', value: 1 },
  { label: 'Fast', value: 2 },
];

export const buttonDemo: DemoSetup = (container) => {
  const gui = new GUI({ container });

  gui.button({ label: 'Click me' }).onClick(() => {
    alert('Button clicked');
  });

  return () => gui.kill();
};

export const sliderDemo: DemoSetup = (container) => {
  const position = { x: 0 };
  const gui = new GUI({ container });

  gui.slider(position, 'x', { label: 'Slider', min: -30, max: 30 });

  return () => gui.kill();
};

export const toggleDemo: DemoSetup = (container) => {
  const settings = { isRound: false };
  const gui = new GUI({ container });

  gui.toggle(settings, 'value', { label: 'Toggle' });

  return () => gui.kill();
};

export const listDemo: DemoSetup = (container) => {
  const settings = { quality: 'Medium', speed: 1 };
  const gui = new GUI({ container });

  gui.list(settings, 'quality', ['Low', 'Medium', 'High'], {
    label: 'String array',
  }).onChange((value) => {
    alert('Quality set to ' + value);
  });

  gui.list(settings, 'speed', SPEED_OPTIONS, { label: 'Object array' });

  return () => gui.kill();
};

export const imageDemo: DemoSetup = (container) => {
  const gui = new GUI({ container });

  HDR_IMAGES.forEach((path, i) => {
    gui.image(path, { label: `Image ${i + 1}`, selected: i === 1 });
  });

  return () => gui.kill();
};

export const colorDemo: DemoSetup = (container) => {
  const settings = { color: '#06ff89' };
  const gui = new GUI({ container });

  gui.color(settings, 'color', { label: 'Color' });

  return () => gui.kill();
};

export const vector2Demo: DemoSetup = (container) => {
  const settings = { x: 0, y: 0 };
  const gui = new GUI({ container });

  gui.vector2(settings, 'x', 'y', { label: 'Position', min: -50, max: 50 })
  .onChange((x, y) => {
    console.log(`Position: ${x}px, ${y}px`);
  });

  return () => gui.kill();
};

export const folderDemo: DemoSetup = (container) => {
  const settings = { value: 1 };
  const gui = new GUI({ container, label: 'Folders' });

  const f1 = gui.folder({ label: 'Folder 1' });
  f1.slider(settings, 'value');

  const f2 = gui.folder({ label: 'Folder 2', color: '#1c935c' });
  f2.button({ label: 'Button' });

  const f3 = gui.folder({ label: 'Folder 3', closed: true });
  f3.button({ label: 'Button' });

  return () => gui.kill();
};

export const tabsDemo: DemoSetup = (container) => {
  const settings = { value: 0.5, color: '#1c935c' };
  const gui = new GUI({ container, label: 'Tabs' });

  const tabs = gui.tabs({ tabs: ['Controls', 'Options'] });

  const controls = tabs.getTab?.(0);
  controls?.button({ label: 'Action' });
  controls?.slider(settings, 'value');

  const options = tabs.getTab?.(1);
  options?.color(settings, 'color');

  return () => gui.kill();
};

export const toggleCloseDemo: DemoSetup = (container) => {
  const gui1 = new GUI({ container });
  const gui2 = new GUI({ container, position: 'bottom right' });

  gui1.button({ label: 'gui2.toggleClose();' }).onClick(() => {
    gui2.toggleClose();
  });

  gui2.button({ label: 'gui1.toggleClose();' }).onClick(() => {
    gui1.toggleClose();
  });

  return () => {
    gui1.kill();
    gui2.kill();
  };
};

export const killDemo: DemoSetup = (container) => {
  const gui = new GUI({ container, label: 'GUI 1' });
  const created: GUI[] = [];

  gui.button({ label: 'Create GUI panel' }).onClick(() => {
    if (created.length < 5) {
      created.push(
        new GUI({
          container,
          label: 'Created GUI',
          position: 'bottom right',
          width: 150,
          color: 'red',
        }),
      );
    }
  });

  gui.button({ label: 'Kill GUI panel' }).onClick(() => {
    const doomed = created.pop();
    if (doomed) doomed.kill();
  });

  return () => {
    gui.kill();
    created.forEach((g) => g.kill());
  };
};
