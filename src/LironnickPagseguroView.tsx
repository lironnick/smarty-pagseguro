import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { LironnickPagseguroViewProps } from './LironnickPagseguro.types';

const NativeView: React.ComponentType<LironnickPagseguroViewProps> =
  requireNativeViewManager('LironnickPagseguro');

export default function LironnickPagseguroView(props: LironnickPagseguroViewProps) {
  return <NativeView {...props} />;
}
