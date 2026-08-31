import { render, screen } from '@testing-library/react';

import { Contact } from '../Contact/contact.component';

describe('Contact', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it('should render the contact section', () => {
    const section = document.querySelector('#contato');

    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute(
      'aria-labelledby',
      'contact-title',
    );
  });

  it('should render the contact eyebrow', () => {
    expect(
      screen.getByText('ENTRE EM CONTATO'),
    ).toBeInTheDocument();
  });

  it('should render the main title', () => {
    const title = screen.getByRole('heading', {
      level: 2,
      name: /vamos conversar sobre o próximo projeto\?/i,
    });

    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute(
      'id',
      'contact-title',
    );
  });

  it('should render the title highlight', () => {
    expect(
      screen.getByText('próximo projeto?'),
    ).toBeInTheDocument();
  });

  it('should render the contact button', () => {
    const button = screen.getByRole('link', {
      name: /entrar em contato/i,
    });

    expect(button).toBeInTheDocument();
  });

  it('should have the correct WhatsApp link', () => {
    const contactLink = screen.getByRole('link', {
      name: /entrar em contato/i,
    });

    expect(contactLink).toHaveAttribute(
      'href',
      'https://wa.me/+5588993123024',
    );

    expect(contactLink).toHaveAttribute(
      'target',
      '_blank',
    );

    expect(contactLink).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    );
  });

  it('should render the contact button text', () => {
    expect(
      screen.getByText('Entrar em contato'),
    ).toBeInTheDocument();
  });

  it('should render the contact button arrow', () => {
    const arrow = document.querySelector(
      '.contact-button-arrow',
    );

    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveTextContent('↗');
    expect(arrow).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });

  it('should render the contact content container', () => {
    const content = document.querySelector(
      '.contact-content',
    );

    expect(content).toBeInTheDocument();
  });

  it('should render the contact actions container', () => {
    const actions = document.querySelector(
      '.contact-actions',
    );

    expect(actions).toBeInTheDocument();
  });
});