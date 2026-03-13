import GUI from './perfect-gui/index';

const gui = new GUI({ title: 'Test Onglets' });

gui.button({ label: 'Test Button' });

const f = gui.folder({ label: 'Test Folder' });

// Test des onglets simples
const tabs = f.tabs({
    tabs: ['Controls', 'Settings', 'Info', 'Lorem'],
    active: 1
});

// Ajouter des éléments dans le premier onglet
const tab1 = tabs.getTab(0);

const tf = tab1.folder({ label: 'Test Folder' });

tf.button({ label: 'Button 1' });
tf.slider({ label: 'test', value: 0.5, min: 0, max: 1 });

// Ajouter des éléments dans le deuxième onglet
const tab2 = tabs.getTab(1);
tab2.toggle({ label: 'Enable Feature', value: true });
tab2.color({ label: 'Color', value: '#ff0000' });

// Ajouter des éléments dans le troisième onglet
const tab3 = tabs.getTab(2);
tab3.button({ label: 'Information', value: 'Test successful!' });

// Test des méthodes d'onglets
console.log('Active tab:', tabs.getActiveTab());
console.log('Tab 0 element:', tabs.getTabElement(0));

// Test de changement d'onglet programmatically
/* setTimeout(() => {
    console.log('Switching to tab 1...');
    tabs.setActiveTab(1);
}, 3000); */

gui.slider({ label: 'test', value: 0.5, min: 0, max: 1 });

gui.button({ label: 'Test Button' });