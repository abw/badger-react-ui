export const arraysDiffer= <T=unknown>(oldValues: T[], newValues: T[]) =>
  oldValues.length !== newValues.length ||
  oldValues.findIndex(
    (oldValue, n) => oldValue !== newValues[n]
  ) >= 0
    ? true
    : false

