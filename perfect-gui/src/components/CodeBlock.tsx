import { useEffect, useRef, type CSSProperties } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import type { DemoSetup } from '../data/demos';

interface CodeBlockProps {
  code: string;
  language?: string;
  /** Extra bottom margin, in px, when the block ends a section. */
  marginBottom?: number;
  /** Live demo panel mounted inside the block, over its right side. */
  demo?: DemoSetup;
  /** Room the demo needs, in px — the block won't shrink below it. */
  demoHeight?: number;
}

export default function CodeBlock({
  code,
  language = 'javascript',
  marginBottom = 96,
  demo,
  demoHeight = 80,
}: CodeBlockProps) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!demo || !stage) return;
    return demo(stage);
  }, [demo]);

  const html = Prism.highlight(code.trim(), Prism.languages[language], language);
  const codeEl = <code dangerouslySetInnerHTML={{ __html: html }} />;

  if (!demo) {
    return (
      <pre className="code" style={marginBottom ? { marginBottom } : undefined}>
        {codeEl}
      </pre>
    );
  }

  return (
    <div
      className="code-demo"
      style={{ marginBottom, '--demo-h': `${demoHeight}px` } as CSSProperties}
    >
      <div ref={stageRef} className="code-demo__stage" />
      <pre className="code code--demo">{codeEl}</pre>
    </div>
  );
}
