# Tailwind 4 workshop project

Based on this [course](https://stevekinney.com/courses/tailwind) (RELLY GOOD, so I encorage you to buy it) and [vite svelte app](https://github.com/stevekinney/tailwind-skatepark#), but I decided not to use svelte, I'm using react instead

This is a react vite app where I added [storybook](https://storybook.js.org/docs#install-storybook)

## Biome and prettier for linting and formatting

Using prettier for formatting and not [biome](https://biomejs.dev/linter/domains/#react) for both formatting and linting, only because bioms's [useSortedClasses](https://biomejs.dev/linter/rules/use-sorted-classes/) is currently unsafe, and since I'm using tailwind I want my classes to be [sorted on save](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

## Cool theme generators (not free, but there is free tier)

I'm going to use it for generating colors for my theme:

<https://designrift.vercel.app/editor>

<https://uicolors.app/> 

Both are cool because you can export all colors ac css custom properties that are tailwind 4 ready

# Cool tools

- [flexbox playground](https://tailwind-workshop.vercel.app/playgrounds/flex?boxes=3&height=600&width=w-20)
- [grid playground](https://tailwind-workshop.vercel.app/playgrounds/grid?boxes=3&height=600&width=w-20)
- [tailwind play](https://play.tailwindcss.com/)

# Dark/Light mode for storybook (kind of) 

(**Use chrome dev tools to switch dark or light mode, I needed to do this because I'm using dark mode on my os**)

We are not using tailwind `@theme`

Defined in preview file, in decoratos

It is class based. `dark` class is added/removed from the preview element (elemnt where stories are nested) (elemnt with class `.sb-show-main`)

Besides class adds `bg-slate-950` to background and `text-wite`

In real world example we would define this in global css

```css
@custom-variant dark (&:where(.dark, .dark *));
/* or */
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
/* or*/
@custom-variant dark (&:where([data-mode="dark"], [data-mode="dark"] *));
```

in css `*` means descendants or descendant selector, if you forgot

There is a lot about this. See [theme customization lesson](https://stevekinney.com/courses/tailwind/theme-customization) where there is powerfull section about **Building a Complete Design System**

# Color generators and other tools

<https://cva.style/docs>

<https://www.npmjs.com/package/tailwind-merge>

<https://designrift.vercel.app/>

## More about transitions and animation with tailwind

<https://stevekinney.com/courses/tailwind/tailwind-transition>

There is a lot of cool animations on official docs: <https://tailwindcss.com/docs/animation>

## @starting-style

very cool

<https://stevekinney.com/courses/tailwind/starting-style>