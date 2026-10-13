# State Management Map

## Pola State Management
1. **Server State & Action Lifecycle**: React 19 Actions (`useActionState`, `useOptimistic`, `useTransition`).
2. **Local Component State**: Primitive state (`useState`, `useReducer`) untuk leaf interactive state.
3. **URL State**: Search parameters (`useSearchParams` / nuqs) untuk filter data, pagination, dan tab active state.
4. **Transient & Telemetry State**: Polling berkala yang dilindungi `AbortController` untuk mencegah memory leak.
