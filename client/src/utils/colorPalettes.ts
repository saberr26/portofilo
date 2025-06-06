
export interface ColorPalette {
  name: string;
  primary: string;
  secondary: string;
  tertiary: string;
  surface: string;
  surfaceVariant: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  onSurface: string;
  onSurfaceVariant: string;
}

export const colorPalettes: ColorPalette[] = [
  {
    name: 'Purple Dream',
    primary: '#d0bcff',
    secondary: '#ccc2dc',
    tertiary: '#efb8c8',
    surface: '#121212',
    surfaceVariant: '#1e1e1e',
    surfaceContainer: '#2d2d2d',
    surfaceContainerHigh: '#383838',
    onSurface: '#e6e1e5',
    onSurfaceVariant: '#cac4d0',
  },
  {
    name: 'Ocean Blue',
    primary: '#a8c8ec',
    secondary: '#bdc7dc',
    tertiary: '#d8c2d8',
    surface: '#0f1419',
    surfaceVariant: '#1a1f25',
    surfaceContainer: '#252b32',
    surfaceContainerHigh: '#30373e',
    onSurface: '#e2e8f0',
    onSurfaceVariant: '#c1c9d2',
  },
  {
    name: 'Forest Green',
    primary: '#a6d4a6',
    secondary: '#c2d4c2',
    tertiary: '#d4c2a6',
    surface: '#0d1b0d',
    surfaceVariant: '#182118',
    surfaceContainer: '#233323',
    surfaceContainerHigh: '#2e3f2e',
    onSurface: '#e1f0e1',
    onSurfaceVariant: '#c4d4c4',
  },
  {
    name: 'Sunset Orange',
    primary: '#ffb4a6',
    secondary: '#e6c2a6',
    tertiary: '#d4a6c2',
    surface: '#1a0f0d',
    surfaceVariant: '#251a18',
    surfaceContainer: '#332523',
    surfaceContainerHigh: '#3f302e',
    onSurface: '#f0e1e1',
    onSurfaceVariant: '#d4c4c1',
  },
  {
    name: 'Cyber Pink',
    primary: '#ff80cb',
    secondary: '#e6a6d4',
    tertiary: '#d4a6ff',
    surface: '#1a0d1a',
    surfaceVariant: '#251825',
    surfaceContainer: '#332333',
    surfaceContainerHigh: '#3f2e3f',
    onSurface: '#f0e1f0',
    onSurfaceVariant: '#d4c1d4',
  }
];

export const getRandomPalette = (): ColorPalette => {
  return colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
};

export const applyPalette = (palette: ColorPalette) => {
  const root = document.documentElement;
  root.style.setProperty('--color-primary-material', palette.primary);
  root.style.setProperty('--color-secondary-material', palette.secondary);
  root.style.setProperty('--color-tertiary-material', palette.tertiary);
  root.style.setProperty('--color-surface', palette.surface);
  root.style.setProperty('--color-surface-variant', palette.surfaceVariant);
  root.style.setProperty('--color-surface-container', palette.surfaceContainer);
  root.style.setProperty('--color-surface-container-high', palette.surfaceContainerHigh);
  root.style.setProperty('--color-on-surface', palette.onSurface);
  root.style.setProperty('--color-on-surface-variant', palette.onSurfaceVariant);
};
