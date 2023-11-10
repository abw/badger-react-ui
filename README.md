# Badger React UI

This is a collection of React UI components using the
[Badger CSS](https://abw.github.io/badger-css/) styles.

## Documentation Website

See the website for documentation and demonstrations.

https://abw.github.io/badger-react-ui/

## Getting Started

Add the `@abw/badger-react-ui` module to your project using your favourite
package manager.

```bash
## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui
```

You can then import the CSS file into your site or application.
You'll also need to import the Badger CSS stylesheet.

For example, to import it into a React app running under Vite, Next.js,
etc., you can import the stylesheets directly into your application.

```js
import '@abw/badger-css/styles/badger.min.css';
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';
```

If you're using SASS / SCSS then you can import the main SCSS source file
into your stylesheet.

```scss
@import '@abw/badger-css/styles/badger.scss';
@import '@abw/badger-react-ui/styles/badger-react-ui.scss';
```

## Notes for Maintainers

Check out the repository.

```bash
$ git clone https://github.com/abw/badger-react-ui.git
$ cd badger-react-ui
```

Install the dependencies.

```bash
$ pnpm install
```

To run the development server.

```bash
$ pnpm dev
```

To build for production.

```bash
$ pnpm build
```

To build the documentation.

```bash
$ pnpm build:docs
```

To preview the documentation.

```bash
$ pnpm preview
```

Check source code for formatting errors.

```bash
$ pnpm lint
```

# Author

Andy Wardley