import GUI from '../../../perfect-gui/src/index';

/**
 * Playground rig — not part of the docs UI. A scratch page for exercising the
 * library by hand: spin up panels with arbitrary constructor options, bolt on
 * any control type, and watch every callback (onChange / onClick / onUpdate)
 * stream into the log. Nothing here is wired into the build; run `vite` and
 * open /perfect-gui/dist/playground.html (the dev server's configured base).
 */

// ------------------------------------------------------------------
// DOM handles
// ------------------------------------------------------------------

const $ = <T extends HTMLElement>(id: string): T => {
  const el = document.getElementById(id);
  if (!el) throw new Error(`#${id} not found`);
  return el as T;
};

const stage = $<HTMLElement>('stage');
const logEl = $<HTMLElement>('log');
const panelListEl = $<HTMLElement>('panel-list');

// ------------------------------------------------------------------
// Log
// ------------------------------------------------------------------

const fmt = (v: unknown): string => {
  if (typeof v === 'number') return String(Math.round(v * 1000) / 1000);
  if (typeof v === 'string') return `"${v}"`;
  return JSON.stringify(v);
};

const log = (name: string, event: string, detail = ''): void => {
  const row = document.createElement('div');
  row.className = 'entry';
  const time = new Date().toLocaleTimeString([], { hour12: false });
  row.innerHTML = `${time}  <b>${name}</b> · ${event}${
    detail ? ` → <span class="val">${detail}</span>` : ''
  }`;
  logEl.append(row);
  logEl.scrollTop = logEl.scrollHeight;
};

// ------------------------------------------------------------------
// Panel registry
// ------------------------------------------------------------------

interface Panel {
  id: number;
  name: string;
  gui: GUI;
  state: Record<string, unknown>;
  /** running counter for unique property names */
  n: number;
}

const panels: Panel[] = [];
let activeId: number | null = null;
let seq = 0;

const active = (): Panel | null =>
  panels.find((p) => p.id === activeId) ?? null;

const renderPanelList = (): void => {
  panelListEl.innerHTML = '';
  for (const p of panels) {
    const row = document.createElement('div');
    row.className = 'panel-row' + (p.id === activeId ? ' active' : '');
    row.textContent = `#${p.id} ${p.name}`;
    row.addEventListener('click', () => {
      activeId = p.id;
      renderPanelList();
    });
    panelListEl.append(row);
  }
};

// ------------------------------------------------------------------
// Create panel
// ------------------------------------------------------------------

const numOrUndef = (id: string): number | undefined => {
  const raw = $<HTMLInputElement>(id).value.trim();
  return raw === '' ? undefined : Number(raw);
};

const strOrUndef = (id: string): string | undefined => {
  const raw = $<HTMLInputElement>(id).value.trim();
  return raw === '' ? undefined : raw;
};

const checked = (id: string): boolean => $<HTMLInputElement>(id).checked;

$('btn-create').addEventListener('click', () => {
  seq += 1;
  const id = seq;
  const name = strOrUndef('opt-label') ?? `Panel ${id}`;

  const gui = new GUI({
    label: name,
    position: $<HTMLSelectElement>('opt-position').value,
    width: numOrUndef('opt-width'),
    maxHeight: numOrUndef('opt-maxheight'),
    color: strOrUndef('opt-color'),
    opacity: numOrUndef('opt-opacity'),
    draggable: checked('opt-draggable'),
    closed: checked('opt-closed'),
    autoRepositioning: checked('opt-autorepo'),
    container: checked('opt-instage') ? stage : undefined,
    onUpdate: checked('opt-onupdate')
      ? () => log(name, 'onUpdate')
      : undefined,
  });

  const panel: Panel = { id, name, gui, state: {}, n: 0 };
  panels.push(panel);
  activeId = id;
  renderPanelList();
  log(name, 'created', `#${id}`);
});

// ------------------------------------------------------------------
// Kill / toggle
// ------------------------------------------------------------------

$('btn-kill').addEventListener('click', () => {
  const p = active();
  if (!p) return;
  p.gui.kill();
  panels.splice(panels.indexOf(p), 1);
  activeId = panels.length ? panels[panels.length - 1].id : null;
  renderPanelList();
  log(p.name, 'killed');
});

$('btn-killall').addEventListener('click', () => {
  for (const p of panels) p.gui.kill();
  panels.length = 0;
  activeId = null;
  renderPanelList();
  log('all', 'killed');
});

$('btn-toggle').addEventListener('click', () => {
  const p = active();
  if (!p) return;
  p.gui.toggleClose();
  log(p.name, 'toggleClose()');
});

// ------------------------------------------------------------------
// Add controls
// ------------------------------------------------------------------

const HDR_IMAGES = ['./img/hdr1.jpg', './img/hdr2.jpg', './img/hdr3.jpg'];

/** shared options pulled from the two inputs above the control buttons */
const commonOpts = (): { tooltip?: string; readonly?: boolean } => {
  const tooltip = strOrUndef('ctl-tooltip');
  const readonly = checked('ctl-readonly');
  return {
    ...(tooltip ? { tooltip } : {}),
    ...(readonly ? { readonly } : {}),
  };
};

const addControl = (target: GUI, panel: Panel, kind: string): void => {
  const { state } = panel;
  const k = (base: string): string => {
    panel.n += 1;
    return `${base}${panel.n}`;
  };
  const co = commonOpts();

  switch (kind) {
    case 'button': {
      const label = k('button');
      target
        .button({ label, tooltip: co.tooltip })
        .onClick(() => log(panel.name, `${label}.onClick`));
      break;
    }
    case 'slider': {
      const prop = k('slider');
      state[prop] = 0.5;
      target
        .slider(state, prop, { label: prop, min: 0, max: 1, step: 0.01, ...co })
        .onChange((value) => log(panel.name, `${prop}.onChange`, fmt(value)));
      break;
    }
    case 'number': {
      const prop = k('number');
      state[prop] = 10;
      target
        .number(state, prop, { label: prop, min: 0, max: 100, step: 1, ...co })
        .onChange((value) => log(panel.name, `${prop}.onChange`, fmt(value)));
      break;
    }
    case 'text': {
      const prop = k('text');
      state[prop] = 'hello';
      target
        .text(state, prop, { label: prop, placeholder: 'type…', ...co })
        .onChange((value) => log(panel.name, `${prop}.onChange`, fmt(value)));
      break;
    }
    case 'toggle': {
      const prop = k('toggle');
      state[prop] = true;
      target
        .toggle(state, prop, { label: prop, ...co })
        .onChange((value) => log(panel.name, `${prop}.onChange`, fmt(value)));
      break;
    }
    case 'list': {
      const prop = k('list');
      state[prop] = 'Medium';
      target
        .list(state, prop, ['Low', 'Medium', 'High'], {
          label: prop,
          tooltip: co.tooltip,
        })
        .onChange((value, index) =>
          log(panel.name, `${prop}.onChange`, `${fmt(value)} @ ${index}`),
        );
      break;
    }
    case 'color': {
      const prop = k('color');
      state[prop] = '#06ff89';
      target
        .color(state, prop, { label: prop, ...co })
        .onChange((value) => log(panel.name, `${prop}.onChange`, fmt(value)));
      break;
    }
    case 'image': {
      const label = k('image');
      const path = HDR_IMAGES[panel.n % HDR_IMAGES.length];
      target
        .image(path, { label, height: 56, selectionBorder: true })
        .onClick((img) => log(panel.name, `${label}.onClick`, fmt(img.path)));
      break;
    }
    case 'angle': {
      const prop = k('angle');
      state[prop] = 45;
      target
        .angle(state, prop, { label: prop, ...co })
        .onChange((value) => log(panel.name, `${prop}.onChange`, fmt(value)));
      break;
    }
    case 'angle-rad': {
      const prop = k('angleRad');
      state[prop] = Math.PI / 4;
      target
        .angle(state, prop, { label: prop, unit: 'rad', ...co })
        .onChange((value) => log(panel.name, `${prop}.onChange`, fmt(value)));
      break;
    }
    case 'vector2': {
      const px = k('vec');
      const py = k('vec');
      state[px] = 0.2;
      state[py] = -0.4;
      target
        .vector2(state, px, py, { label: `${px}/${py}`, min: -1, max: 1, ...co })
        .onChange((x, y) =>
          log(panel.name, `${px}/${py}.onChange`, `${fmt(x)}, ${fmt(y)}`),
        );
      break;
    }
    case 'folder': {
      const folder = target.folder({ label: k('folder'), closed: false });
      addControl(folder, panel, 'slider');
      addControl(folder, panel, 'toggle');
      addControl(folder, panel, 'button');
      break;
    }
    case 'tabs': {
      const tabs = target.tabs({ tabs: ['One', 'Two'], active: 0 });
      const t0 = tabs.getTab?.(0);
      const t1 = tabs.getTab?.(1);
      if (t0) {
        addControl(t0, panel, 'slider');
        addControl(t0, panel, 'button');
      }
      if (t1) {
        addControl(t1, panel, 'color');
        addControl(t1, panel, 'list');
      }
      break;
    }
    case 'sink': {
      for (const type of [
        'button',
        'slider',
        'number',
        'text',
        'toggle',
        'list',
        'color',
        'image',
        'angle',
        'angle-rad',
        'vector2',
        'folder',
        'tabs',
      ]) {
        addControl(target, panel, type);
      }
      break;
    }
    default:
      break;
  }
};

document.querySelectorAll<HTMLButtonElement>('button[data-add]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const p = active();
    if (!p) {
      log('—', 'no active panel');
      return;
    }
    const kind = btn.dataset.add ?? '';
    addControl(p.gui, p, kind);
    log(p.name, 'added', kind);
  });
});

renderPanelList();
