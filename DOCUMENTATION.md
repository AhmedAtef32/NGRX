# Angular NgRx Application Documentation

## Table of Contents
- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [State Management](#state-management)
- [Installation & Setup](#installation--setup)
- [Development Guide](#development-guide)
- [Architecture](#architecture)
- [API Reference](#api-reference)

---

## Overview

This is an Angular 22 application demonstrating state management using **NgRx** (Reactive State for Angular). The application includes two main features:
1. **Counter** - A simple counter with increment, decrement, and reset functionality
2. **Mini E-Commerce** - A product catalog with shopping cart capabilities

The application showcases modern Angular patterns including:
- Standalone components
- Lazy loading routes
- Signal-based reactivity
- Server-Side Rendering (SSR)
- NgRx state management with Effects
- TypeScript 6.0

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Angular | 22.1.0 | Frontend framework |
| NgRx Store | 22.0.1 | State management |
| NgRx Effects | 22.0.1 | Side effects management |
| TypeScript | 6.0.2 | Type-safe development |
| Tailwind CSS | 4.1.12 | Styling framework |
| RxJS | 7.8.0 | Reactive programming |
| Express | 5.1.0 | SSR server |
| Vitest | 4.0.8 | Unit testing |

---

## Project Structure

```
src/
├── app/
│   ├── Core/                      # Core application components
│   │   ├── layouts/
│   │   │   └── navbar/           # Navigation component
│   │   └── StoreModels/          # Global store interfaces
│   │       └── IStore.ts         # Root state interface
│   │
│   ├── Features/                  # Feature modules
│   │   ├── Pages/
│   │   │   ├── counter/          # Counter page
│   │   │   └── mini-ecommerce/   # E-commerce pages
│   │   │       └── components/
│   │   │           ├── products/ # Product list
│   │   │           └── cart/     # Shopping cart
│   │   ├── Services/             # Application services
│   │   │   └── mini-ecommerce/
│   │   └── interfaces/           # TypeScript interfaces
│   │       └── mini_ecommers/
│   │           └── IProduct.ts
│   │
│   ├── States/                    # NgRx state management
│   │   ├── Counter/
│   │   │   ├── Counter.Action.ts    # Counter actions
│   │   │   └── Counter.reducer.ts   # Counter reducer
│   │   └── Mini_E_Commerce/
│   │       ├── products/
│   │       │   ├── products.Action.ts  # Product actions
│   │       │   ├── Product.Reducer.ts  # Product reducer
│   │       │   └── Product.Effects.ts  # Product effects
│   │       └── cart/
│   │           ├── Cart.Action.ts      # Cart actions
│   │           └── Cart.Reducer.ts     # Cart reducer
│   │
│   ├── app.ts                     # Root component
│   ├── app.routes.ts              # Application routes
│   └── app.config.ts              # App configuration
│
├── main.ts                        # Application bootstrap
├── styles.css                     # Global styles
└── index.html                     # HTML entry point
```

---

## Features

### 1. Counter Feature

A simple counter application demonstrating basic NgRx state management.

**Capabilities:**
- Increment counter by 1
- Decrement counter by 1
- Reset counter to 0

**Route:** `/counter`

**Components:**
- `Counter` - Main counter component

**State Management:**
- **Actions:** `Increment`, `Decrement`, `Reset`
- **State:** `{ count: number }`
- **Reducer:** `counterReducer`

### 2. Mini E-Commerce Feature

A product catalog with shopping cart functionality demonstrating NgRx Effects and complex state management.

**Capabilities:**
- View product catalog (fetched from external API)
- Add products to cart
- Remove products from cart
- Increment/decrement product quantity
- Persistent cart using localStorage
- View cart with total price

**Routes:**
- `/mini-ecommerce` - E-commerce layout
- `/mini-ecommerce/products` - Product listing
- `/mini-ecommerce/cart` - Shopping cart

**Components:**
- `MiniECommerce` - E-commerce layout
- `Products` - Product catalog
- `Cart` - Shopping cart

**State Management:**
- **Product State:**
  - Actions: `LoadProducts`, `LoadProductsSuccess`, `LoadProductsFailure`
  - State: `{ products: IProduct[], error: string | null }`
  - Effects: API calls to fetch products
  
- **Cart State:**
  - Actions: `loadCart`, `getCartLength`, `addToCart`, `removeItemFromProduct`, `removeAllProducts`
  - State: `{ cart: IProduct[], cartLength: number }`
  - Persistence: localStorage

---

## State Management

### Global Store Interface

```typescript
interface IStore {
  counter: ICounterState;
  Products: IProductState;
  Cart: ICartState;
}
```

### Counter State

**File:** [src/app/States/Counter/Counter.reducer.ts](src/app/States/Counter/Counter.reducer.ts)

```typescript
interface ICounterState {
  count: number;
}
```

**Actions:**
- `[Counter Component] Increment` - Increases count by 1
- `[Counter Component] Decrement` - Decreases count by 1
- `[Counter Component] Reset` - Resets count to 0

### Product State

**File:** [src/app/States/Mini_E_Commerce/products/Product.Reducer.ts](src/app/States/Mini_E_Commerce/products/Product.Reducer.ts)

```typescript
interface IProductState {
  products: IProduct[];
  error: string | null;
}
```

**Actions:**
- `[Products] LoadProducts` - Triggers product fetch
- `[Products] LoadProductsSuccess` - Stores fetched products
- `[Products] LoadProductsFailure` - Stores error message

**Effects:**
- `ProductEffects` - Handles API calls to fetch products

### Cart State

**File:** [src/app/States/Mini_E_Commerce/cart/Cart.Reducer.ts](src/app/States/Mini_E_Commerce/cart/Cart.Reducer.ts)

```typescript
interface ICartState {
  cart: IProduct[];
  cartLength: number;
}
```

**Actions:**
- `loadCart` - Loads cart from localStorage
- `getCartLength` - Updates cart length
- `addToCart` - Adds product to cart (or increments quantity)
- `removeItemFromProduct` - Decrements quantity (or removes if quantity = 1)
- `removeAllProducts` - Clears entire cart

**Persistence:**
- Cart data is persisted in browser localStorage
- Key: `'cart'`
- Format: JSON stringified array of products

### Product Interface

**File:** [src/app/Features/interfaces/mini_ecommers/IProduct.ts](src/app/Features/interfaces/mini_ecommers/IProduct.ts)

```typescript
interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  cartNumber: number;  // Quantity in cart
}
```

---

## Installation & Setup

### Prerequisites

- Node.js (v20+)
- npm 12.0.2 or higher

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NGRX
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Run tests**
   ```bash
   npm test
   ```

6. **Start SSR server**
   ```bash
   npm run serve:ssr:NGRX
   ```

---

## Development Guide

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on port 4200 |
| `npm run build` | Build production bundle |
| `npm run watch` | Build with watch mode |
| `npm test` | Run Vitest unit tests |
| `npm run serve:ssr:NGRX` | Start SSR server |

### Creating New Components

```bash
ng generate component component-name
```

### Adding New Features

1. **Create feature components** in `src/app/Features/Pages/`
2. **Define state interfaces** in `src/app/Core/StoreModels/`
3. **Create actions** in `src/app/States/<feature>/<feature>.Action.ts`
4. **Create reducer** in `src/app/States/<feature>/<feature>.Reducer.ts`
5. **Create effects** (if needed) in `src/app/States/<feature>/<feature>.Effects.ts`
6. **Register in store** in `src/app/app.config.ts`
7. **Add routes** in `src/app/app.routes.ts`

### NgRx Development Pattern

**1. Define Actions:**
```typescript
export const MyAction = createAction('[Feature] Action Name', props<{ data: any }>());
```

**2. Create Reducer:**
```typescript
export const myReducer = createReducer(
  initialState,
  on(MyAction, (state, { data }) => ({ ...state, data }))
);
```

**3. Create Effects (for async operations):**
```typescript
@Injectable()
export class MyEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MyActions.load),
      switchMap(() => this.service.getData().pipe(
        map(data => MyActions.loadSuccess({ data })),
        catchError(error => of(MyActions.loadFailure({ error })))
      ))
    )
  );
}
```

**4. Register in Config:**
```typescript
provideStore({ myFeature: myReducer }),
provideEffects([MyEffects])
```

**5. Use in Components:**
```typescript
export class MyComponent {
  store = inject(Store<IStore>);
  data$ = this.store.select(state => state.myFeature.data);
  
  loadData() {
    this.store.dispatch(MyActions.load());
  }
}
```

---

## Architecture

### Design Patterns

**1. Feature-Based Structure**
- Code organized by features (Counter, Mini E-Commerce)
- Each feature has its own components, services, and state

**2. Standalone Components**
- All components use Angular's standalone API
- No NgModule required

**3. Lazy Loading**
- Routes use `loadComponent` for code splitting
- Reduces initial bundle size

**4. Reactive State Management**
- Unidirectional data flow
- Immutable state updates
- Predictable state changes

**5. Service Layer**
- Services handle API calls and business logic
- Effects manage side effects

### Data Flow

```
Component
   ↓ dispatch(action)
Action
   ↓
Effect (if async)
   ↓ calls Service
Service (API)
   ↓ returns data
Effect
   ↓ dispatch(successAction)
Action
   ↓
Reducer
   ↓ updates state
Store
   ↓ select
Component (via Observable)
```

### Component Communication

**Parent → Child:** Input properties
**Child → Parent:** Output events
**Unrelated Components:** NgRx Store (shared state)

---

## API Reference

### Counter Component

**Location:** [src/app/Features/Pages/counter/counter.ts](src/app/Features/Pages/counter/counter.ts)

**Methods:**
- `increment()` - Dispatches increment action
- `Decrement()` - Dispatches decrement action
- `reset()` - Dispatches reset action

**Observables:**
- `counter$: Observable<number>` - Current counter value

### Store Selectors

**Counter:**
```typescript
this.store.select(store => store.counter.count)
```

**Products:**
```typescript
this.store.select(store => store.Products.products)
this.store.select(store => store.Products.error)
```

**Cart:**
```typescript
this.store.select(store => store.Cart.cart)
this.store.select(store => store.Cart.cartLength)
```

---

## Best Practices

### NgRx Guidelines

1. **Action Naming Convention**
   - Use format: `[Source] Event`
   - Example: `[Counter Component] Increment`

2. **Immutability**
   - Always return new state objects
   - Use spread operator: `{ ...state, newProp }`

3. **Single Responsibility**
   - One action per user interaction
   - Reducers only update state (no side effects)

4. **Effects for Side Effects**
   - API calls in Effects, not Reducers
   - Dispatch success/failure actions

5. **Selectors**
   - Use selectors for computed state
   - Memoize expensive computations

### Code Style

- TypeScript strict mode enabled
- Prettier configured for formatting
- Use signals for local component state
- Use Observables for store data

---

## Testing

The application uses **Vitest** for unit testing.

**Test Files:**
- `*.spec.ts` - Component and service tests

**Running Tests:**
```bash
npm test
```

**Test Structure:**
- Component tests verify rendering and user interactions
- Reducer tests verify state transformations
- Effect tests verify side effect handling
- Service tests verify API calls

---

## Server-Side Rendering (SSR)

The application supports SSR using Angular Universal.

**Configuration:**
- [src/app/app.config.server.ts](src/app/app.config.server.ts) - Server config
- [src/server.ts](src/server.ts) - Express server
- [src/main.server.ts](src/main.server.ts) - Server bootstrap

**Running SSR:**
```bash
npm run build
npm run serve:ssr:NGRX
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Contributing

1. Create feature branch
2. Make changes
3. Write/update tests
4. Run tests: `npm test`
5. Build: `npm run build`
6. Submit pull request

---

## Troubleshooting

### Common Issues

**Issue: Port 4200 already in use**
```bash
# Kill process on port 4200
npx kill-port 4200
```

**Issue: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: Build errors**
```bash
# Clear Angular cache
rm -rf .angular
npm run build
```

---

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [NgRx Documentation](https://ngrx.io)
- [RxJS Documentation](https://rxjs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

---

## License

This project is private and not licensed for public use.

---

## Changelog

### Version 0.0.0
- Initial project setup
- Counter feature implementation
- Mini E-Commerce feature implementation
- NgRx state management setup
- SSR configuration
- Tailwind CSS integration

---

**Last Updated:** 2025
**Maintained By:** Ahmed Atef
