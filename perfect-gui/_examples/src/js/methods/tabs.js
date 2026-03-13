import GUI from '../../perfect-gui/index';

export default function button() {
    const gui = new GUI({
        container: '#container-tabs',
        draggable: true,
        label: 'Tabs'
    });

    const tabs = gui.tabs({
        tabs: ['Controls', 'Settings'],
        active: 1
    });

    const tab1 = tabs.getTab(0);
    tab1.button({ label: 'Action Button' });
    tab1.slider({ label: 'Value', value: 0.5, min: 0, max: 1 });

    const tab2 = tabs.getTab(1);
    tab2.toggle({ label: 'Enable Feature', value: true });
    tab2.color({ label: 'Color', value: '#ff0000' });
}
