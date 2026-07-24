import type { CSSProperties, ReactNode } from 'react';

interface MethodSectionProps {
  id: string;
  /** Shown above the heading — only the first method in the group carries it. */
  label?: string;
  signature: string;
  description: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
}

export default function MethodSection({
  id,
  label,
  signature,
  description,
  children,
  style,
}: MethodSectionProps) {
  return (
    <section id={id} className={`section${label ? ' section--divided' : ''}`} style={style}>
      {label && <div className="section__label">{label}</div>}
      <h2 className="method__signature">{signature}</h2>
      <p className="method__desc">{description}</p>
      {children}
    </section>
  );
}
