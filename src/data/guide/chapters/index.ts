import type { GuideChapter } from '../types';
export type { GuideChapter };

export { chapter8 } from './ch08-stage1';
export { chapter9 } from './ch09-stage2';
export { chapter10 } from './ch10-stage3';

// Re-import for the aggregated array
import { chapter8 } from './ch08-stage1';
import { chapter9 } from './ch09-stage2';
import { chapter10 } from './ch10-stage3';

export const guideChapters: GuideChapter[] = [chapter8, chapter9, chapter10];
