import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to LironnickPagseguro.web.ts
// and on native platforms to LironnickPagseguro.ts
import LironnickPagseguroModule from './LironnickPagseguroModule';
import LironnickPagseguroView from './LironnickPagseguroView';
import { ChangeEventPayload, LironnickPagseguroViewProps } from './LironnickPagseguro.types';

// Get the native constant value.
export const PI = LironnickPagseguroModule.PI;

export function hello(): string {
  return LironnickPagseguroModule.hello();
}

export async function setValueAsync(value: string) {
  return await LironnickPagseguroModule.setValueAsync(value);
}

const emitter = new EventEmitter(LironnickPagseguroModule ?? NativeModulesProxy.LironnickPagseguro);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { LironnickPagseguroView, LironnickPagseguroViewProps, ChangeEventPayload };
