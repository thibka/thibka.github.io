import type { GuiOption } from '../types';

export const guiOptions: GuiOption[] = [
  { name: 'label', type: 'string', desc: 'Label displayed at the top of the panel.' },
  { name: 'draggable', type: 'boolean', desc: 'Whether the panel can be moved manually. Default `false`.' },
  { name: 'container', type: 'string|el', desc: 'Parent element of the panel. Default `document.body`.' },
  { name: 'position', type: 'string', desc: 'Corner of the screen: top/bottom left/right.' },
  { name: 'closed', type: 'boolean', desc: 'Whether the panel starts collapsed. Default `false`.' },
  { name: 'width', type: 'number', desc: 'Width of the panel in pixels. Default `290`.' },
  { name: 'maxHeight', type: 'number', desc: 'Max height before the panel scrolls.' },
  { name: 'color', type: 'string', desc: 'Custom background color of the panel.' },
  { name: 'opacity', type: 'number', desc: 'Default transparency; hover for full opacity.' },
  { name: 'onUpdate', type: 'function', desc: 'Called every time the GUI is updated.' },
];
