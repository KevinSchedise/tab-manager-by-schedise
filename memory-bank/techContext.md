# Tech Context: Tab Manager by Schedise

**Date:** [Insert Current Date]

**1. Core Technologies (Website):** - **Runtime:** Node.js (for development environment, build process) - **Package Manager:** npm - **Frontend Framework:** React (v18+) - **Language:** TypeScript (v5+) - **Build Tool:** Vite - **Styling:** - Tailwind CSS (v3+) - shadcn/ui - PostCSS (via Vite) - **Routing:** `react-router-dom` (v6+) - **UI Components:** shadcn/ui (built on Radix UI) - **Icons:** `lucide-react`

**2. Development Setup (Website):** - **Prerequisites:** Node.js and npm installed. - **Installation:** `npm install` - **Development Server:** `npm run dev` (starts Vite dev server with HMR) - **Building:** `npm run build` (creates production build in `dist/` directory) - **Linting/Formatting:** ESLint and Prettier (configurations likely in `.eslintrc.cjs`, `.prettierrc`)

**3. Technical Constraints (Website):** - Primarily a static marketing website; dynamic server-side functionality is minimal unless user accounts/payments are added later. - Performance is important for user experience and SEO. - Must be responsive across various screen sizes (desktop, tablet, mobile).

**4. Dependencies (Website - Key):** - `react`, `react-dom` - `react-router-dom` - `tailwindcss` - `@radix-ui/*` (via shadcn/ui) - `lucide-react` - `typescript` - `@types/react`, `@types/react-dom` - `vite` - `@vitejs/plugin-react` - `eslint`, `prettier` (dev dependencies)

**5. Core Technologies (Extension - _Planned_):** - **Platform:** Google Chrome Browser Extension (Manifest V3) - **Languages:** TypeScript, JavaScript, HTML, CSS - **Frameworks (UI):** Likely React/TS/Tailwind (for popup/options page) - **APIs:** - `chrome.tabs` API (Essential for managing tabs) - `chrome.tabGroups` API (Essential for grouping) - `chrome.storage` API (`local`, potentially `sync`) - `chrome.runtime` API (Messaging, lifecycle) - `chrome.windows` API - `chrome.commands` API (Keyboard shortcuts)

**6. Development Setup (Extension - _Planned_):** - Separate build process likely needed for extension components (popup, background, options). - Loading the extension in Chrome developer mode (`chrome://extensions/`). - Debugging tools within Chrome DevTools for extensions.

**7. Technical Constraints (Extension):** - Manifest V3 requirements (service worker instead of persistent background page, stricter API usage). - Permissions must be carefully requested and justified. - `chrome.storage.sync` has storage limitations; backend needed for larger-scale sync. - Performance limitations to avoid impacting browser responsiveness.
