import { render } from '@testing-library/react';

import { ScrollToTop } from '../ScrollToTop/scrollToTop';

describe('ScrollToTop', () => {
  const scrollToMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    Object.defineProperty(window.history, 'scrollRestoration', {
      writable: true,
      configurable: true,
      value: 'auto',
    });

    Object.defineProperty(window, 'scrollTo', {
      writable: true,
      configurable: true,
      value: scrollToMock,
    });
  });

  it('should render nothing', () => {
    const { container } = render(<ScrollToTop />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should set scroll restoration to manual', () => {
    render(<ScrollToTop />);

    expect(window.history.scrollRestoration).toBe(
      'manual',
    );
  });

  it('should scroll to the top of the page', () => {
    render(<ScrollToTop />);

    expect(scrollToMock).toHaveBeenCalledTimes(1);

    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  });
});