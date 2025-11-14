# Tailwind 4 workshop project


## Biome and prettier for linting and formatting

Using prettier for formatting and not [biome](https://biomejs.dev/linter/domains/#react) for both formatting and linting is only because bioms's [useSortedClasses](https://biomejs.dev/linter/rules/use-sorted-classes/) is currently unsafe, and since I'm using tailwind I want my classes to be [sorted on save](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)