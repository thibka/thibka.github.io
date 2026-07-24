import { useState, type MouseEvent } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import OptionsSection from './components/OptionsSection';
import MethodSection from './components/MethodSection';
import ParamTable from './components/ParamTable';
import CodeBlock from './components/CodeBlock';
import {
  buttonParams,
  buttonSnippet,
  sliderParams,
  sliderSnippet,
  toggleParams,
  toggleSnippet,
  listParams,
  listSnippet,
  imageParams,
  imageSnippet,
  colorParams,
  colorSnippet,
  vector2Params,
  vector2Snippet,
  folderParams,
  folderSnippet,
  tabsParams,
  tabsMethods,
  tabsSnippet,
  toggleCloseSnippet,
  killSnippet,
} from './data/snippets';
import {
  buttonDemo,
  sliderDemo,
  toggleDemo,
  listDemo,
  imageDemo,
  colorDemo,
  vector2Demo,
  folderDemo,
  tabsDemo,
  toggleCloseDemo,
  killDemo,
} from './data/demos';

// Must match the breakpoint at which .nav-toggle becomes visible (see index.css).
const MOBILE_NAV_QUERY = '(max-width: 900px)';
// Clears the fixed .nav-toggle button (16px top + 38px tall) plus a little breathing room.
const MOBILE_SCROLL_OFFSET = 70;

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);

  const handleSidebarNavigate = (event: MouseEvent<HTMLAnchorElement>) => {
    closeNav();

    if (!window.matchMedia(MOBILE_NAV_QUERY).matches) return;

    const href = event.currentTarget.getAttribute('href');
    const target = href && document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - MOBILE_SCROLL_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
    window.history.pushState(null, '', href);
  };

  return (
    <div className="layout">
      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={navOpen}
        onClick={() => setNavOpen((v) => !v)}
      >
        ☰
      </button>
      {navOpen && <div className="nav-backdrop" onClick={closeNav} />}

      <Sidebar open={navOpen} onNavigate={handleSidebarNavigate} />

      <main className="main">
        <Hero />

        <OptionsSection />

        <MethodSection
          id="method-button"
          label="Methods"
          signature=".button( options )"
          description={
            <>
              Creates a clickable button. Returns the button instance, allowing you to chain{' '}
              <code>.onClick(callback)</code>.
            </>
          }
          style={{ paddingBlock: '40px 8px' }}
        >
          <ParamTable params={buttonParams} />
          <CodeBlock code={buttonSnippet} demo={buttonDemo} />
        </MethodSection>

        <MethodSection
          id="method-slider"
          signature=".slider( object, property, options )"
          description="Binds a slider to a numeric property. Updating the slider changes the property, and assigning a new value to the property updates the slider."
          style={{ paddingBlock: '8px' }}
        >
          <ParamTable params={sliderParams} />
          <CodeBlock code={sliderSnippet} demo={sliderDemo} />
        </MethodSection>

        <MethodSection
          id="method-toggle"
          signature=".toggle( object, property, options )"
          description="Binds a checkbox-style toggle to a boolean property, keeping the property and the UI in sync in both directions."
          style={{ paddingBlock: '8px' }}
        >
          <ParamTable params={toggleParams} />
          <CodeBlock code={toggleSnippet} demo={toggleDemo} />
        </MethodSection>

        <MethodSection
          id="method-list"
          signature=".list( object, property, values, options )"
          description={
            <>
              Binds a dropdown list to a property. The <code>values</code> array accepts strings and
              numbers, or <code>{'{ label, value }'}</code> objects — the label is displayed in the
              dropdown, the value is assigned to the property.
            </>
          }
          style={{ paddingBlock: '8px' }}
        >
          <ParamTable params={listParams} />
          <CodeBlock code={listSnippet} demo={listDemo} demoHeight={120} />
        </MethodSection>

        <MethodSection
          id="method-image"
          signature=".image( path, options )"
          description={
            <>
              Acts like a button, but displays an image instead of text. Returns the instance,
              allowing you to chain <code>.onClick(callback)</code> — the callback receives the
              image's <code>path</code>.
            </>
          }
          style={{ paddingBlock: '8px' }}
        >
          <ParamTable params={imageParams} />
          <CodeBlock code={imageSnippet} demo={imageDemo} demoHeight={160} />
        </MethodSection>

        <MethodSection
          id="method-color"
          signature=".color( object, property, options )"
          description={
            <>
              Binds a color picker to a property holding a hexadecimal color string (for example{' '}
              <code>'#06ff89'</code>), keeping the property and the UI in sync in both directions.
            </>
          }
          style={{ paddingBlock: '8px' }}
        >
          <ParamTable params={colorParams} />
          <CodeBlock code={colorSnippet} demo={colorDemo} />
        </MethodSection>

        <MethodSection
          id="method-vector2"
          signature=".vector2( object, xProp, yProp, options )"
          description={
            <>
              Binds a 2D pad to two numeric properties of the same object. Moving the control
              updates both properties; the chained <code>.onChange(callback)</code> receives the
              updated <code>x</code> and <code>y</code> values.
            </>
          }
          style={{ paddingBlock: '8px' }}
        >
          <ParamTable params={vector2Params} />
          <CodeBlock code={vector2Snippet} demo={vector2Demo} demoHeight={330} />
        </MethodSection>

        <MethodSection
          id="method-folder"
          signature=".folder( options )"
          description="Creates a collapsible folder inside the panel. A folder is a full GUI instance — every method documented above works on it, and folders can be nested."
          style={{ paddingBlock: '8px' }}
        >
          <ParamTable params={folderParams} />
          <CodeBlock code={folderSnippet} demo={folderDemo} demoHeight={220} />
        </MethodSection>

        <MethodSection
          id="method-tabs"
          signature=".tabs( options )"
          description={
            <>
              Splits the panel into tabs. Each tab is a full GUI instance, retrieved with{' '}
              <code>.getTab(index)</code>.
            </>
          }
          style={{ paddingBlock: '8px' }}
        >
          <ParamTable params={tabsParams} />
          <ParamTable params={tabsMethods} headers={['Method', 'Returns', 'Description']} />
          <CodeBlock code={tabsSnippet} demo={tabsDemo} demoHeight={150} />
        </MethodSection>

        <MethodSection
          id="method-toggleclose"
          signature=".toggleClose()"
          description="Opens or closes the panel programmatically — the same action as clicking its header."
          style={{ paddingBlock: '8px' }}
        >
          <CodeBlock code={toggleCloseSnippet} demo={toggleCloseDemo} demoHeight={160} />
        </MethodSection>

        <MethodSection
          id="method-kill"
          signature=".kill()"
          description="Removes the panel and all of its controls from the DOM, detaching its internal listeners."
          style={{ paddingBlock: '8px 120px' }}
        >
          <CodeBlock code={killSnippet} demo={killDemo} demoHeight={160} />
        </MethodSection>
      </main>
    </div>
  );
}
