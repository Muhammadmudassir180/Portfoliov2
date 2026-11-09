// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// React Router 7 needs TextEncoder, which CRA's older jsdom doesn't provide
import { TextEncoder, TextDecoder } from 'util';
Object.assign(global, { TextEncoder, TextDecoder });

// Lenis ships only an ES module, which CRA's Jest can't load; tests don't need real smooth scrolling
jest.mock('lenis', () => class { scrollTo() {} destroy() {} }, { virtual: true });
