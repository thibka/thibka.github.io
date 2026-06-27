import GUI from '../../perfect-gui/index';

export default function button() {
    const gui = new GUI({
        container: '#container-tabs',
        draggable: true,
        label: 'Tabs',
        enableFeature: true,
    });

    const settings = { color: '#ff0000', value: 0.5 };

    const tabs = gui.tabs({
        tabs: ['Controls', 'Settings'],
        active: 1,
    });

    const tab1 = tabs.getTab(0);
    tab1.button({ label: 'Action Button' });
    tab1.slider(settings, 'value', { label: 'Value', min: 0, max: 1 });

    const tab2 = tabs.getTab(1);
    tab2.toggle(settings, 'enableFeature', { label: 'Enable Feature' });
    tab2.color(settings, 'color');
}
