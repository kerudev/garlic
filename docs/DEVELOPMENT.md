# Guide for developers

This guide will guide you on how Garlic works and how to develop locally.

## Environment

The minimum supported Node version is `20`, but older versions may work too.

The package manager used is `bun >= 1.2.5` (again, you can work with older
versions). It is a faster alternative to npm.

Installation commands: https://github.com/oven-sh/bun#install

## Dependencies

Install dependencies with:

```sh
bun install
```

This installs the dependencies inside `package.json` and also looks into
`bun.lock` so you install the same versions as anyone else.

`package.json` and `bun.lock` are updated automatically with the `add` and
`update` commands:

```sh
bun add [name]      # Installs dependency and writes its metadata
bun update [name]   # Updates dependency and its metadata too
```

To update every dependency:

```sh
bun update          # Updates every dependency and their metadata
```

## Project structure

The code lives inside `packages`, where you will find 2 directories:

- `types`: holds all the public type definitions.
- `ui`: contains the `components` and `hooks`.
