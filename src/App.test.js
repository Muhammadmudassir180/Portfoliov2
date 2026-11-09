import { render, screen, within } from '@testing-library/react';
import App from './App';

// Real browsers' scrollTo can return a value; returning it from an effect crashes React, so the stub does too
beforeAll(() => { window.scrollTo = () => 1; });

test('home renders the name and every nav page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'Muhammad Mudassir' })).toBeInTheDocument();
  for (const page of ['Experience', 'Education', 'Projects', 'About', 'Contact', 'Resume']) {
    expect(within(screen.getByRole('navigation', { name: 'Main' })).getByRole('link', { name: page })).toBeInTheDocument();
  }
});

test('every link is a real, well-formed URL', () => {
  const { container } = render(<App />);
  const hrefs = [...container.querySelectorAll('a[href]')].map((a) => a.getAttribute('href'));
  expect(hrefs.length).toBeGreaterThan(10);
  for (const href of hrefs) {
    expect(href).toMatch(/^(\/|https:\/\/|mailto:|tel:)/);
    expect(href).not.toMatch(/["\s]|project\d\.com|\/username\//);
  }
});

test('cards start hidden and reveal when they scroll into view', () => {
  const observed = [];
  let onIntersect;
  window.IntersectionObserver = class {
    constructor(cb) { onIntersect = cb; }
    observe(el) { observed.push(el); }
    unobserve() {}
    disconnect() {}
  };
  window.matchMedia = () => ({ matches: false });
  try {
    render(<App />);
    const card = observed.find((el) => el.classList.contains('glass'));
    expect(card).toHaveClass('reveal');
    expect(card).not.toHaveClass('in');
    onIntersect([{ isIntersecting: true, target: card }]);
    expect(card).toHaveClass('in');
  } finally {
    delete window.IntersectionObserver;
    delete window.matchMedia;
  }
});
