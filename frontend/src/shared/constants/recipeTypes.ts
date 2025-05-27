export const BREADS = {
  SAVORY: 'savory',
  SWEET: 'sweet',
  ROLLS: 'rolls',
  FAVES: 'faves',
} as const

export const CAKES = {
  ROUND: 'round',
  SQUARE: 'square',
  LOAFS: 'loafs',
  FAVES: 'faves',
} as const

export const COOKIES = {
  FAVES: 'faves',
} as const

export const DESSERTS = {
  ICE_CREAM: 'ice_cream',
  PIES: 'pies',
  FAVES: 'faves',
} as const

export const SAVORY = {
  BREAKFAST: 'breakfast',
  DINNER: 'dinner',
  APPS: 'appetizers',
  FAVES: 'faves',
} as const

export const RECIPE_TYPES = {
  ALL: 'all',
  BREADS: 'breads',
  CAKES: 'cakes',
  COOKIES: 'cookies',
  DESSERTS: 'desserts',
  SAVORY: 'savory',
} as const

export type RecipeType = typeof RECIPE_TYPES[keyof typeof RECIPE_TYPES]