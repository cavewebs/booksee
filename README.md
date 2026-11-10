# Booksee

A React Native app for booking local salon and beauty services. Customers search providers, book hair, nails, beard, and makeup work, and pay from a mock checkout. Providers list services, set availability, and track bookings and earnings.

The app is an Expo client. Auth, bookings, cards, and bank details are mocked in the UI. There is no Booksee backend in this repo. The HTTP client still talks to the Ignite demo rss2json feed used by the leftover podcast screens.

Owner: Timchosen Uzua. Licensed under MIT.

## Stack

- Expo SDK 50, React Native 0.73, React 18, TypeScript 5.3
- React Navigation 6 (native stack and bottom tabs)
- MobX State Tree for auth, onboarding, and walkthrough state
- Gluestack UI (`@gluestack-ui/themed`) plus custom components in `app/components`
- apisauce for HTTP
- i18n-js (en, ar, fr, ko). Most Booksee screens use hardcoded English strings
- Expo Application Services (`eas.json`) for iOS and Android builds
- Jest (`jest-expo`) and Maestro flows in `.maestro/`
- Scaffolded from [Ignite](https://github.com/infinitered/ignite) 9.6.3 (MIT)

User types in `AuthenticationStore`:

- `su` - service user (customer)
- `sp` - service provider

The live navigator is `app/navigators/AppNavigator.tsx`. After the splash walkthrough, unauthenticated users hit login and signup. Authenticated users land on `ServiceUserNavigator` or `ServiceProviderNavigator`.

## Requirements

- Node.js 18 or newer (`package.json` engines)
- Yarn 1.x (this repo has `yarn.lock`)
- For a device or simulator: Expo Go, or a native build via EAS / `expo prebuild`

`android/` and `ios/` are gitignored. Generate them with `yarn prebuild:clean` when you need native projects.

## Local setup

```sh
git clone https://github.com/cavewebs/booksee.git
cd booksee
cp .env.example .env
yarn
```

`.env.example` lists every environment variable the app code reads. Expo inlines `EXPO_PUBLIC_*` when Metro bundles.

| Variable | Read in | Purpose |
| --- | --- | --- |
| `EXPO_PUBLIC_API_URL` | `app/config/config.dev.ts`, `app/config/config.prod.ts` | Base URL for `app/services/api/api.ts` |

Dev falls back to `https://api.rss2json.com/v1/` (Ignite podcast demo). Production falls back to `https://api.example.com/`.

The maps screen (`app/screens/ServiceUser/MapSearchScreen.tsx`) renders `react-native-maps` with no API key in JavaScript. A Google Maps key belongs in native config after `expo prebuild`, not in this JS bundle.

## Run locally

Install dependencies, then:

```sh
yarn compile          # TypeScript check (`tsc --noEmit`)
yarn test             # Jest
yarn start            # Expo / Metro bundler
```

`yarn compile` is configured to pass on this WIP UI. `tsconfig.json` turns off unused-local and implicit-any checks, and some Booksee screens still start with `// @ts-nocheck` for leftover Gluestack and navigation typing. Tighten those as screens get wired to a real API.

Platform shortcuts: `yarn ios`, `yarn android`, `yarn web`.

`yarn lint` runs ESLint with `--fix` and Prettier over `App.tsx`, `app`, and `test`. It currently reports hundreds of preexisting issues (inline styles, unused vars, import order). That is not a merge gate yet.

Sign-in is mocked. `SigninScreen` and `SignupScreen` call `setAuthToken(String(Date.now()))` and do not hit a server. The sign-in form prefills a reserved UK drama number (`07700900000`) so the phone validator in `AuthenticationStore` can pass; type any matching UK mobile if you clear it.

Native binaries:

```sh
yarn build:ios:sim
yarn build:android:sim
```

Those call EAS local builds (`eas.json` profiles `development`, `development:device`, `preview`, `production`).

Maestro: `yarn test:maestro` runs `.maestro/FavoritePodcast.yaml` (Ignite podcast demo). `.maestro/Login.yaml` still asserts Ignite "Sign In" copy, not Booksee login.

## Project structure

```
app/
  app.tsx                 Root component, fonts, store rehydration
  components/             Shared UI, Gluestack wrappers, service-user widgets
  components/serviceUser/DummyData/   Fixture lists for home, bookings, profile
  config/                 persistNavigation, catchErrors, API_URL
  DummyData/              Extra booking fixtures
  i18n/                   Ignite translation files
  models/                 MST stores (auth, onboarding, walkthrough, episodes)
  navigators/             App stack, customer tabs, provider tabs, leftover Demo navigator
  screens/                Auth, splash, customer, provider, leftover Ignite demo
  services/api/           apisauce client (`getEpisodes` only)
  styles/                 Shared screen container styles
  theme/                  Colors, spacing, typography
  utils/                  Storage, crash reporting stub, dates
assets/icons              App icons (plus `demo/` from Ignite)
assets/images             Booksee art (plus Ignite demo podcast art)
ignite/templates          Ignite generators
plugins/                  Expo config plugins (splash, Flipper)
test/                     Jest setup and i18n test
```

Entry: `App.tsx` -> `app/app.tsx` -> `AppNavigator`.

## Leftover Ignite demo

Booksee screens sit next to unused Infinite Red demo code. It is still compiled:

- Screens: `WelcomeScreen`, `LoginScreen`, `DemoCommunityScreen`, `DemoDebugScreen`, `DemoPodcastListScreen`, `DemoShowroomScreen/`
- Navigator: `app/navigators/DemoNavigator.tsx` (not mounted from `AppNavigator`)
- Models: `Episode`, `EpisodeStore` (wired on `RootStore`)
- API: `Api.getEpisodes()` against rss2json + React Native Radio
- Copy: `app/i18n/*.ts` demo strings
- Assets: `assets/icons/demo/`, `assets/images/demo/`, plus duplicate Ignite logos under `assets/images/`
- Maestro: `.maestro/FavoritePodcast.yaml`, `.maestro/Login.yaml`
- Comments marked `@demo remove-block` / `@demo remove-file`

`LoginScreen` still prefills Ignite demo credentials (`ignite@infinite.red`). That screen is not on the Booksee stack.

Home, search, bookings, cards, and earnings read TypeScript fixtures, not the API. Names and photos in `DummyData` and `assets/images` (for example `Adeola.png`, `Dami.png`, `racheal.png`, `anita-joseph.png`) are UI stand-ins. Confirm they are licensed for public use before a public release.

## Third-party licences

This repo is MIT. Ignite 9.6.3 is MIT. Direct dependencies in `package.json` are MIT or Apache-2.0 compatible as published on npm. No GPL, AGPL, or SSPL packages showed up in that list.

`react-native-datepicker` is unmaintained. `react-native-drawer-layout` is pinned to `4.0.0-alpha.1` (Ignite demo drawer). Neither blocks MIT, but both are stale.

## Contributing

The GitHub repo is private until the owner opens it. When it is public:

1. Open an issue before a large change.
2. Branch from `migrate` (current default).
3. Keep Booksee behaviour working: splash -> user type -> mock auth -> customer or provider tabs.
4. Do not commit `.env`, keystores, `google-services.json`, `GoogleService-Info.plist`, or real customer data.
5. Run `yarn compile` and `yarn test` before you push.
6. Pull requests should say what you changed and how you ran it.

## License

MIT. See [LICENSE](LICENSE). Copyright 2026 Timchosen Uzua.
