// ---------------------------------------------------------------------------
// Guide Chapter Tree – shared TypeScript interfaces
// ---------------------------------------------------------------------------

export interface ContentLevels {
  key: { en: string; zh: string };
  context?: { en: string; zh: string };
  deepDive?: { en: string; zh: string };
}

export interface GuideSite {
  id: string;
  name: { en: string; zh: string };
  tibetan?: string;
  elevation?: number;
  type: 'sacred' | 'supply' | 'accommodation' | 'landmark' | 'info';
  content: ContentLevels;
  sideTrip?: { duration: string; note: { en: string; zh: string } };
}

export interface StageSegment {
  id: string;
  from: { en: string; zh: string };
  to: { en: string; zh: string };
  distance: string;
  duration: string;
  elevationChange: string;
  terrain: { en: string; zh: string };
  trailNote?: { en: string; zh: string };
  sites: GuideSite[];
}

export interface ChapterSection {
  id: string;
  title: { en: string; zh: string };
  content: ContentLevels;
  subsections?: ChapterSection[];
  sites?: GuideSite[];
}

export interface GuideChapter {
  id: number;
  slug: string;
  title: { en: string; zh: string };
  type: 'stage' | 'general' | 'flat';
  stageData?: {
    distance: string;
    duration: string;
    elevationGain: string;
    startElevation: number;
    endElevation: number;
    highPoint?: number;
    timingTip: { en: string; zh: string };
    safetyAlert?: { en: string; zh: string };
    segments: StageSegment[];
  };
  sections?: ChapterSection[];
  flatContent?: { en: string; zh: string };
}
