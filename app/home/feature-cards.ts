export type FeatureCardTheme = 'prusa' | 'orca';

export type FeatureCard = {
  title: string;
  description: string;
  theme?: FeatureCardTheme;
  className?: string;
};

export const featureCardThemeClasses: Record<FeatureCardTheme, string> = {
  prusa: 'bg-linear-to-b/srgb from-white to-[#fff4eb]',
  orca: 'bg-linear-to-b/srgb from-white to-[#ebf8ff]'
};

export const featureCards: FeatureCard[] = [
  {
    title: '3D and CAD File Formats',
    description:
      'Accepts direct 3D, CAD, and ZIP inputs including STL, OBJ, 3MF, STEP, IGS, and ZIP archives.'
  },
  {
    title: 'Dual Engine Routing',
    description:
      'Routes jobs through dedicated endpoints for both PrusaSlicer and OrcaSlicer, so integrations can choose the best engine per workflow.'
  },
  {
    title: 'Auto Orientation',
    description:
      'Applies Python-based orientation optimization before slicing to improve print stability, reduce height, and lower overall production time.'
  },
  {
    title: 'Parametric Slice Invocation',
    description:
      'Call /prusa/slice or /orca/slice with layer height, infill, material, scaling, target dimensions, rotation, and profile overrides to drive precise slicing behavior.'
  },
  {
    title: 'Pricing Matrix Engine',
    description:
      'Calculates cost from slicer output, technology, and material using a persisted pricing map for consistent, production-ready estimation.'
  },
  {
    title: 'Admin Pricing Operations',
    description:
      'Supports secure create, update, and delete pricing operations for FDM and SLA materials via API-key-protected admin endpoints.'
  },
  {
    title: 'Queue and Rate Protection',
    description:
      'CPU-heavy jobs are handled by bounded FIFO queue logic with IP rate limiting to keep service quality stable under load.'
  },
  {
    title: 'Validation and Safety Layer',
    description:
      'Enforces upload limits, ZIP safety checks, build-volume validation, and processing timeouts with clear error codes for reliable client-side handling.'
  }
];

export function resolveFeatureCardTheme(index: number, explicitTheme?: FeatureCardTheme): FeatureCardTheme {
  if (explicitTheme) {
    return explicitTheme;
  }

  return index % 2 === 0 ? 'prusa' : 'orca';
}