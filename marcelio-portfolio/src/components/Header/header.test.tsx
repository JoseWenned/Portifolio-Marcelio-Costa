import { fireEvent, render, screen } from '@testing-library/react';

import { Header } from '../Header/header.component';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should render the logo', () => {
    const logo = screen.getByRole('link', {
      name: /MARCÉLIO/i,
    });

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('href', '/');
  });

  it('should render the desktop navigation links', () => {
    const navigation = screen.getByRole('navigation', {
      name: 'Navegação principal',
    });

    const navigationLinks =
      navigation.querySelectorAll(
        'a[href="#sobre"], ' +
          'a[href="#experiencia"], ' +
          'a[href="#formacao"], ' +
          'a[href="#contato"]',
      );

    expect(navigationLinks).toHaveLength(4);

    expect(navigationLinks[0]).toHaveAttribute(
      'href',
      '#sobre',
    );

    expect(navigationLinks[1]).toHaveAttribute(
      'href',
      '#experiencia',
    );

    expect(navigationLinks[2]).toHaveAttribute(
      'href',
      '#formacao',
    );

    expect(navigationLinks[3]).toHaveAttribute(
      'href',
      '#contato',
    );
  });

  it('should render the menu button', () => {
    const menuButton = screen.getByRole('button', {
      name: 'Abrir menu',
    });

    expect(menuButton).toBeInTheDocument();

    expect(menuButton).toHaveAttribute(
      'aria-expanded',
      'false',
    );

    expect(menuButton).toHaveAttribute(
      'aria-controls',
      'mobile-navigation',
    );
  });

  it('should open the mobile navigation', () => {
    const menuButton = screen.getByRole('button', {
      name: 'Abrir menu',
    });

    fireEvent.click(menuButton);

    expect(
      screen.getByRole('button', {
        name: 'Fechar menu',
      }),
    ).toBeInTheDocument();

    expect(menuButton).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });

  it('should render the mobile navigation links when the menu is opened', () => {
    const menuButton = screen.getByRole('button', {
      name: 'Abrir menu',
    });

    fireEvent.click(menuButton);

    const mobileNavigation =
      document.querySelector('#mobile-navigation');

    expect(mobileNavigation).toBeInTheDocument();

    const mobileLinks =
      mobileNavigation?.querySelectorAll('a');

    expect(mobileLinks).toHaveLength(4);

    expect(mobileLinks?.[0]).toHaveAttribute(
      'href',
      '#sobre',
    );

    expect(mobileLinks?.[1]).toHaveAttribute(
      'href',
      '#experiencia',
    );

    expect(mobileLinks?.[2]).toHaveAttribute(
      'href',
      '#formacao',
    );

    expect(mobileLinks?.[3]).toHaveAttribute(
      'href',
      '#contato',
    );
  });

  it('should close the mobile navigation when clicking a navigation link', () => {
    const menuButton = screen.getByRole('button', {
      name: 'Abrir menu',
    });

    fireEvent.click(menuButton);

    expect(
      screen.getByRole('button', {
        name: 'Fechar menu',
      }),
    ).toBeInTheDocument();

    const mobileNavigation =
      document.querySelector('#mobile-navigation');

    expect(mobileNavigation).toBeInTheDocument();

    const mobileAboutLink =
      mobileNavigation?.querySelector(
        'a[href="#sobre"]',
      );

    expect(mobileAboutLink).toBeInTheDocument();

    fireEvent.click(mobileAboutLink!);

    expect(
      screen.getByRole('button', {
        name: 'Abrir menu',
      }),
    ).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('should toggle the menu when clicking the menu button', () => {
    const menuButton = screen.getByRole('button', {
      name: 'Abrir menu',
    });

    fireEvent.click(menuButton);

    const closeButton = screen.getByRole('button', {
      name: 'Fechar menu',
    });

    expect(closeButton).toHaveAttribute(
      'aria-expanded',
      'true',
    );

    fireEvent.click(closeButton);

    expect(
      screen.getByRole('button', {
        name: 'Abrir menu',
      }),
    ).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });
});