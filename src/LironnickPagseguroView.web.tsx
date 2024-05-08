import * as React from 'react';

import { LironnickPagseguroViewProps } from './LironnickPagseguro.types';

export default function LironnickPagseguroView(props: LironnickPagseguroViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
