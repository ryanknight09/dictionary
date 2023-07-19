import { Phonetics } from './apiProvider';

export function getFirstNonEmptyAudio(
  objects: Phonetics[]
): string | undefined {
  for (const obj of objects) {
    if (obj.audio !== '') {
      return obj.audio;
    }
  }

  return undefined;
}
