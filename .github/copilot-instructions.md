# Copilot Instructions for AI Agents

## Project Overview
- This is a React app bootstrapped with Create React App. The main entry point is `src/index.js`, which renders the `App` component from `src/App.js`.
- The project uses both JavaScript and TypeScript (see `src/components/tasklist.tsx`).
- Styling is handled via CSS files in `src/`.

## Key Components & Structure
- Main UI logic is in `src/App.js`.
- Additional components are placed in `src/components/`, e.g., `tasklist.tsx` (a functional component using React hooks for state management).
- All components use function-based React patterns and hooks (`useState`).
- Example pattern: `tasklist.tsx` manages a list of items with add/remove logic, using `useState` for both the list and input value.

## Developer Workflows
- **Start development server:** `npm start` (runs on http://localhost:3000)
- **Run tests:** `npm test` (uses React Testing Library)
- **Build for production:** `npm run build` (outputs to `build/`)
- **Eject config:** `npm run eject` (irreversible, exposes config files)

## Conventions & Patterns
- Use function components and React hooks for all new UI logic.
- Place reusable components in `src/components/`.
- Use TypeScript for new components if type safety is required, otherwise default to JavaScript.
- Keys for dynamic lists should be unique strings (see `Date.now().toString()` usage in `tasklist.tsx`).
- CSS modules are not used; global CSS files are imported directly.

## Integration Points
- No custom backend or API integration is present; all logic is client-side.
- External dependencies are managed via `package.json` (React, React DOM, React Scripts, Testing Library).
- No Redux, MobX, or other state management libraries are used; rely on React hooks.

## Testing
- Tests are run with React Testing Library (see dependencies in `package.json`).
- No custom test files are present yet; follow standard CRA test patterns for new tests.

## Example: Adding a New Component
1. Create a new file in `src/components/`, e.g., `newComponent.tsx`.
2. Use function component and hooks:
   ```tsx
   import React, { useState } from 'react';
   export default function NewComponent() {
     const [value, setValue] = useState('');
     // ...
   }
   ```
3. Import and use in `App.js`.

## References
- See `README.md` for standard CRA commands and links to documentation.
- See `src/components/tasklist.tsx` for stateful list management example.

---

If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.