# `classify-react`
`classify-react` is a utility library designed to simplify the handling of multi Elements/Components in React Component. It offers a streamlined way to assign class names to different parts of a componente based on props, reducing the boilerplate and improving readability.

## Installation

Using npm
```bash
npm install classify-react
```

Using yarn
```bash
yarn add classify-react
```

Using pnpm
```bash
pnpm add classify-react
```

## Usage

`classify-react` allows you to easily manage class names for you component's elements in a more concise and readable manner. Here's how you can use it:
```tsx
import { buildClassNames } from 'classify-react';

interface Props {
  className?: string | { root?: string, input?: string }
}

function Component({ className }: Props) {
  const getClassName = buildClassNames(className);

  return (
    <div className={getClassName('root')}>
      <input className={getClassName('input')} />
    </div>
  );
}
```

### Default Key

When passing a string directly to the `className` prop, you might want it to be applied to a specific part of your component by default (e.g., the root element). `classify-react` supports this through a `defaultKey` parameter in the `buildClassNames` function, allowing you to specify which key should be used for string class names:
```ts
const getClassName = buildClassNames(className, 'root');
```

In this example, if `className` is a string, it will be applied to the `'root'` element of the component.

## Features

- **Simplified Class Name Management**: Easily manage multiple class names and conditional class assignments within your React Components.
- **Reduces Boilerplate**: Avoid repetitive code for handling conditional class names.
- **Enhanced Readability**: Makes it clearer which class names are applied to different parts of your component.
- **Default Key Support**: Specify a default key for string class names, simplifying the common case of a single class name applied to the component root.

## Contributing

You're welcome to contribute to `classify-react` and help me improve it. Please check out the [CONTRIBUTING.md](https://github.com/felipstein/classify-react/blob/master/CONTRIBUTING.md) for more information.
