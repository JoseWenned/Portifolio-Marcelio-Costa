import '@testing-library/jest-dom';

class IntersectionObserverMock {
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds: number[] = [];

  constructor() {}

  observe() {}

  unobserve() {}

  disconnect() {}

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});