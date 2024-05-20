### 1. Install Tailwind CSS to the Vite project

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure your template paths
#### Add the paths to all of your template files in your `tailwind.config.js` file

```sh
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Add the Tailwind directives to your CSS
#### Add the `@tailwind` directives for each of Tailwind's layers to your `./src/index.css` file.

```sh
@tailwind base;
@tailwind components;
@tailwind utilities;
```


##### That's it. You good to go :)