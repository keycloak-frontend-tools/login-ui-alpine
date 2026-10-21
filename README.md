# Keycloak Login UI Alpine

An Alpine.js based login theme for Keycloak.

## Overview

This theme uses Alpine.js for reactive UI components, extending the `login-ui-base` theme. With `embeddedTemplates=true`, all HTML templates are server-rendered from `pages/*.html` files.

## Prerequisites

- Node.js 18+
- npm
- Maven 3.8+
- The `login-ui-base` theme must be deployed to Keycloak before this theme

## Building

### Development (watch mode)

```bash
npm install
npm run dev
```

### Production

```bash
# Using npm directly
npm install
npm run build

# Or using Maven (includes npm build)
mvn clean package
```

## Project Structure

```
├── pom.xml                     # Maven build configuration
├── package.json                # npm/wireit build configuration
├── src/
│   ├── main.js                 # Entry point - Alpine initialization
│   ├── pages/                  # Page component logic (JS)
│   └── components/             # Shared component logic (JS)
└── src/main/resources/
    ├── META-INF/
    │   └── keycloak-themes.json
    └── theme/keycloak-alpine/login/
        ├── theme.properties
        ├── pages/              # HTML templates (server-rendered)
        └── resources/
            ├── css/styles.css
            └── js/main.js      # Built output
```

## Deployment

Copy the built JAR to Keycloak's `providers/` directory:
```bash
cp target/keycloak-login-ui-alpine-*.jar $KEYCLOAK_HOME/providers/
```

Then restart Keycloak or run:
```bash
$KEYCLOAK_HOME/bin/kc.sh build
```

## Usage

Set the login theme to `keycloak-alpine` in Keycloak admin console or via realm configuration.

## Dependencies

- **login-ui-base**: Parent theme providing the base FreeMarker templates and context serialization
- **Alpine.js**: Reactive JavaScript framework
