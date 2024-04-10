export function buildClassNames(
  propClassName: string | Record<string | number, string> | undefined | null,
  defaultKey?: string,
) {
  if (isInvalidClassName(propClassName)) {
    throw new TypeError(
      'className must be a string, object, undefined or null',
    );
  }

  function getDefaultKey() {
    if (defaultKey) {
      return defaultKey;
    }

    if (!propClassName || typeof propClassName !== 'object') {
      return undefined;
    }

    return Object.keys(propClassName)[0];
  }

  function getClassName(classNameKey: string) {
    if (typeof propClassName === 'string' && classNameKey === getDefaultKey()) {
      return propClassName;
    }

    return typeof propClassName === 'object'
      ? propClassName?.[classNameKey] ?? undefined
      : undefined;
  }

  return getClassName;
}

function isInvalidClassName(className: unknown) {
  return (
    typeof className !== 'string' &&
    typeof className !== 'object' &&
    className !== null &&
    className !== undefined
  );
}
