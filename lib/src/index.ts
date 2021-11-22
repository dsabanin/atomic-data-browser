/**
 * # @tomic/lib Documentation
 *
 * Core typescript library for handling JSON-AD parsing, storing Atomic Data,
 * signing Commits, and more.
 *
 * [github repository](https://github.com/joepio/atomic-data-browser)
 *
 * ## Features
 *
 * - Fetching Atomic Data
 * - Parsing JSON-AD
 * - Storing Atomic Data
 * - Data Validation
 * - Creating and signing {@link Commit}
 *
 * ## Usage
 *
 * You'll probably want to start by initializing a {@link Store}. Use methods
 * from the Store to load Resources. Use the {@link Resource} class to access,
 * edit and validate the data in a Resource. Use `Resource.save()` to save and
 * send edits to resources as Commits, or use the {@link Commit} class if you
 * need more control.
 *
 * ## Usage with react
 *
 * See `@tomic/react`, which provides various hooks for easy data usage.
 *
 * @module
 */

export * from './agent';
export * from './client';
export * from './commit';
export * from './error';
export * from './datatypes';
export * from './parse';
export * from './resource';
export * from './store';
export * from './value';
export * from './urls';
export * from './truncate';