# React Zustand Shared State Example

A modern React app demonstrating clean, global state management using [Zustand](https://zustand-demo.pmnd.rs/) and  UI with [Tailwind CSS v4](https://tailwindcss.com/docs/theme).

## Features

- **Global State with Zustand:**
  - Manage a number, a string, and an array in a single, minimal store.
  - All components access and update shared state via a simple hook.
- **Three Isolated Updater Components:**
  - **Number Updater:** Change a global number value.
  - **String Updater:** Change a global string value.
  - **Array Updater:** Add or remove items from a global array.
  - Each form uses [react-hook-form](https://react-hook-form.com/) for robust, declarative input handling.
- **Live Results Panel:**
  - See the current state of all values in a sleek summary card.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the dev server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Project Structure

```
src/
  components/
    ArrayUpdater.tsx      # Array form
    NumberUpdater.tsx     # Number form
    Results.tsx           # Results summary
    StringUpdater.tsx     # String form
  store/
    useStore.ts           # Zustand global store
  App.tsx                 # Main layout
  index.css               # Tailwind v4 setup & theme 
```

## Why Zustand?

- **Minimal API:** Just a hook, no boilerplate.
- **Performance:** Only components that use state re-render.
- **Simplicity:** No context providers or reducers needed.

## Credits

- [Tailwind CSS v4](https://tailwindcss.com)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [react-hook-form](https://react-hook-form.com/)