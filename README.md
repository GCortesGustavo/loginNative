# 🚗 CarWasher 8a - Login con Persistencia en React Native

Este proyecto es una aplicación mobile creada con **React Native** usando **Expo Router**, que incluye un sistema de autenticación local con **Zustand** y persistencia en **AsyncStorage**.

El propósito es permitir que, una vez que el usuario haya iniciado sesión, su estado se mantenga incluso al cerrar y reabrir la aplicación.

---

## 📦 Dependencias instaladas

Las siguientes dependencias han sido utilizadas para implementar el sistema de login y persistencia:

```bash
npm install react-native-safe-area-context
npm install formik yup
npm install zustand
npm install @react-native-async-storage/async-storage
npm install @react-native-picker/picker

```

## Estructura de carpetas

```
.
├── app/
│   ├── _layout.tsx              # Control de navegación según autenticación
│   ├── login.tsx                # Pantalla de Login y Registro
│   └── (tabs)/                  # Navegación principal para usuarios autenticados
│
├── store/
│   └── auth.ts                  # Store global con Zustand y persistencia
│
├── styles/
│   └── stylesLogin.ts           # Estilos del formulario de login/registro
│
├── assets/
│   └── images/
│       └── logo-carwash.jpeg    # Logo de la app
│
└── README.md                    # Documentación del proyecto
```

## Explicación de archivos principales

### store/auth.ts

- Define un store con Zustand.

- Propiedades:

isAuthenticated: booleano que indica si el usuario está logueado.

hasHydrated: indica si el store ya fue cargado desde AsyncStorage.

- Métodos:

login(): establece el estado como autenticado.

logout(): cierra la sesión.

- Usa zustand/middleware/persist para guardar el estado en AsyncStorage.


### app/_layout.tsx

- Actúa como guard de navegación.

- Evalúa si el usuario está logueado (isAuthenticated) y redirige en consecuencia:

Si no está logueado, lo lleva a /login.

Si ya está logueado, lo lleva a /(tabs).

- Espera que hasHydrated esté en true antes de ejecutar la lógica.

### app/login.tsx

- Pantalla con lógica para login y registro (UI y funcionalidad).

- Utiliza valores hardcodeados:

Email: test@carwash.com

Password: 123456

- Llama a login() del store y redirige a la pantalla principal.

## Lógica de Autenticación

- Login:
Si el usuario ingresa el email y password correctos, se guarda su estado en el store y se persiste automáticamente.

- Persistencia:
Al cerrar y volver a abrir la app, zustand rehidrata automáticamente el estado desde AsyncStorage.
Si el usuario estaba autenticado, se redirige directamente a la vista principal (/(tabs)).

- Logout :
Para cerrar sesión completamente 
