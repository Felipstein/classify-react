export function buildClassNames(
  propClassName: string | Record<string | number, string> | undefined | null,
  newDefaultKey?: string,
) {
  if (
    typeof propClassName !== 'string' &&
    typeof propClassName !== 'object' &&
    propClassName !== null
  ) {
    throw new TypeError(
      'className must be a string, object, undefined or null',
    );
  }

  function getClassName(classNameKey: string) {
    return classNameKey;
  }

  return getClassName;
}
