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