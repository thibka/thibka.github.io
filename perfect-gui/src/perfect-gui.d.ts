/**
 * perfect-gui ships as compiled JS without declarations, so we declare the
 * subset of its API this site uses. Mirrors node_modules/perfect-gui/src/index.ts.
 */
declare module 'perfect-gui' {
  export interface GUIOptions {
    label?: string;
    container?: HTMLElement | string;
    onUpdate?: () => void;
    color?: string;
    opacity?: number;
    position?: string;
    maxHeight?: number;
    width?: number;
    closed?: boolean;
    draggable?: boolean;
    autoRepositioning?: boolean;
  }

  export interface ButtonOptions {
    label?: string;
    tooltip?: string | boolean;
    color?: string;
    hoverColor?: string;
  }

  export interface ImageOptions {
    label?: string;
    tooltip?: string | boolean;
    selected?: boolean;
    selectionBorder?: boolean;
    width?: number | string;
    height?: number | string;
  }

  export interface SliderOptions {
    label?: string;
    tooltip?: string | boolean;
    min?: number;
    max?: number;
    step?: number;
  }

  export interface ToggleOptions {
    label?: string;
    tooltip?: string | boolean;
  }

  export interface ListOptions {
    label?: string;
    tooltip?: string | boolean;
  }

  export interface ColorOptions {
    label?: string;
    tooltip?: string | boolean;
  }

  interface AxisOptions {
    min?: number;
    max?: number;
    step?: number;
  }

  export interface Vector2Options {
    label?: string;
    tooltip?: string;
    min?: number;
    max?: number;
    step?: number;
    x?: AxisOptions;
    y?: AxisOptions;
  }

  export interface FolderOptions {
    label?: string;
    color?: string;
    closed?: boolean;
    maxHeight?: number;
  }

  export interface TabsOptions {
    tabs?: string[];
    active?: number;
    color?: string;
    maxHeight?: number;
  }

  export interface Tabs extends GUI {
    getTab(index: number): GUI | null;
    getActiveTab(): number;
    getTabElement(index: number): HTMLElement | null;
    setActiveTab(index: number): void;
  }

  export type ListValueItem = { label: string; value: string | number };
  export type ListValues = (string | number)[] | ListValueItem[];

  interface Clickable<C> {
    onClick(callback: C): this;
  }

  interface Changeable<C> {
    onChange(callback: C): this;
  }

  export default class GUI {
    constructor(options?: GUIOptions);

    button(options?: ButtonOptions): Clickable<() => void>;
    image(
      path: string,
      options?: ImageOptions,
    ): Clickable<(img: { path: string; text: string }) => void>;
    slider(obj: object, prop: string, options?: SliderOptions): Changeable<(value: number) => void>;
    toggle(
      obj: object,
      prop: string,
      options?: ToggleOptions,
    ): Changeable<(state: boolean) => void>;
    list(
      obj: object,
      prop: string,
      values: ListValues,
      options?: ListOptions,
    ): Changeable<(value: string | number | ListValueItem, index: number) => void>;
    color(obj: object, prop: string, options?: ColorOptions): Changeable<(color: string) => void>;
    vector2(
      obj: object,
      propX: string,
      propY: string,
      options?: Vector2Options,
    ): Changeable<(x: number, y: number) => void>;
    folder(options?: FolderOptions): GUI;
    tabs(options?: TabsOptions): Tabs;

    toggleClose(): void;
    kill(): void;
  }
}
