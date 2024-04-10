import { buildClassNames } from './buildClassNames';

type Props = {
  className?:
    | string
    | {
        root?: string;
        label?: string;
        icon?: string;
        input?: string;
        errorSpan?: string;
      };
};

test('should return a function getClassName', () => {
  const props: Props = {
    className: {},
  };

  const getClassName = buildClassNames(props.className);

  expect(getClassName).toBeDefined();
  expect(typeof getClassName).toBe('function');
});

test('should not throw an error if className is null or undefined and return undefined too from getClassName("root") function', () => {
  expect(() => buildClassNames(undefined)).not.toThrow(TypeError);

  expect(() => buildClassNames(null)).not.toThrow(TypeError);

  const getClassName = buildClassNames(undefined);
  expect(getClassName('root')).toBeUndefined();
});

test('should throw an error if className is not an string, object, null or undefined', () => {
  const props: Props = {
    // @ts-expect-error
    className: 100,
  };

  expect(() => buildClassNames(props.className)).toThrow(TypeError);
});

test('should return "bg-red-500" from getClassName("icon") function', () => {
  const props: Props = {
    className: {
      input: 'text-blue-500',
      icon: 'bg-red-500',
    },
  };

  const getClassName = buildClassNames(props.className);

  expect(getClassName('icon')).toBe('bg-red-500');
});

test('should return "text-primary" from getClassName("root") function', () => {
  const props: Props = {
    className: {
      input: 'text-red-500',
      root: 'text-primary',
    },
  };

  const getClassName = buildClassNames(props.className);

  expect(getClassName('root')).toBe('text-primary');
});

test('should return "bg-foreground" from getClassName("root") function because he is the default', () => {
  const props: Props = {
    className: 'bg-foreground',
  };

  const getClassName = buildClassNames(props.className, 'root');

  expect(getClassName('root')).toBe('bg-foreground');
});

test('should return undefined from getClassName("label") function', () => {
  const props: Props = {
    className: 'bg-foreground',
  };

  const getClassName = buildClassNames(props.className);

  expect(getClassName('label')).toBeUndefined();
});

test('should return undefined from getClassName("root") function', () => {
  const props: Props = {};

  const getClassName = buildClassNames(props.className);

  expect(getClassName('root')).toBeUndefined();
});
