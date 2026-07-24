import { guiOptions } from '../data/options';
import { renderDesc } from './renderDesc';

export default function OptionsSection() {
  return (
    <section
      id="options"
      className="section section--divided"
      style={{ paddingBlock: '40px 96px' }}
    >
      <div className="section__label">Options</div>
      <h2 className="section__title">Configure the panel</h2>
      <p className="section__lede">
        Every option is passed to the <code>GUI</code> constructor at instantiation time.
      </p>

      <div className="options-grid">
        {guiOptions.map((opt) => (
          <div key={opt.name} className="option">
            <div className="option__head">
              <span className="option__name">{opt.name}</span>
              <span className="option__type">{opt.type}</span>
            </div>
            <p className="option__desc">{renderDesc(opt.desc)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
