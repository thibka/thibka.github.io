import { Fragment } from 'react';
import type { MethodParam } from '../types';
import { renderDesc } from './renderDesc';

interface ParamTableProps {
  params: MethodParam[];
  /** Column headings — override for non-parameter tables (e.g. instance methods). */
  headers?: [string, string, string];
}

export default function ParamTable({
  params,
  headers = ['Parameter', 'Type', 'Description'],
}: ParamTableProps) {
  return (
    <div className="param-table">
      {headers.map((header) => (
        <div key={header} className="param-table__head">
          {header}
        </div>
      ))}

      {params.map((param) => (
        <Fragment key={param.name}>
          <div className="param-table__cell param-table__cell--name">{param.name}</div>
          <div className="param-table__cell">{param.type}</div>
          <div className="param-table__cell">{renderDesc(param.desc)}</div>
        </Fragment>
      ))}
    </div>
  );
}
