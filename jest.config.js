// jest.config.js

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

// Agrega cualquier configuración personalizada que se pase a Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  
  // Patrones para recolectar la cobertura de las carpetas especificadas
  collectCoverageFrom: [
    // Asegura la detección de archivos en la raíz del proyecto
    '<rootDir>/**/*.{js,jsx,ts,tsx}',
    
    // EXCLUSIONES ESPECÍFICAS
    // Excluye las carpetas que no son de la aplicación
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    
    // Excluye los archivos de configuración
    '!**/jest.config.js',
    '!**/_tests_/**',
    
    // Excluye explícitamente los archivos de Next.js que no son componentes de la app
    '!**/next-env.d.tsx',
    '!**/next.config.tsx',
    '!**/layout.tsx',
    '!**/.tsx',
    '!**/app/interfaces/**',
    '!**/app/types/**',
    '!**/next-env.d.ts',
    '!**/next.config.ts',
  ],
};

module.exports = createJestConfig(customJestConfig);
