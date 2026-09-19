# Contributing to Garlic

No AI contributions will be accepted.

For me, writing code is an art, and AI has no business in the art world.

Like writing poetry. There is a syntax, line length and overall aesthetic that
serves a purpose.

If you are a developer, then contributions are welcome :)

Please read [DEVELOPMENT.md](./docs/DEVELOPMENT.md) to setup your environment
and understand the project structure.

## Commits

If you are not familiar with `Conventional Commits`, take a look at:
https://www.conventionalcommits.org/en/v1.0.0/#summary

This repository follows a similar convention, but with some changes:

```sh
<emoji><type>(<scope>)[<target>]: <description>

[optional body]

[optional footer(s)]
```

And of course, the structure can adapt to your specific case. The emoji is just
a nice visual cue to have.

Examples:

```sh
# Marks a new feature on the NutritionFacts component
git commit -m "🧩 feat(components)[NutritionFacts]: allow passing total servings and add new headers"

# Marks a change made to more than one doc
git commit -m "📄 docs: removed whitespaces"
```

Emojis:

- `feat`: 🧩
- `fix`: 🔧
- `docs`: 📄
- `conf`: ⚙️
- `style`: 🎨
- `refactor`: 🔄
