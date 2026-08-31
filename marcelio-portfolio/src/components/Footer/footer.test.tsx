import { render, screen } from '@testing-library/react';

import { Footer } from '../Footer/footer.component';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('should render the footer', () => {
    const footer = document.querySelector('footer');

    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('footer');
  });

  it('should render the footer logo', () => {
    const logo = screen.getByRole('link', {
      name: /voltar ao início/i,
    });

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('href', '#inicio');
    expect(logo).toHaveTextContent('MC.');
  });

  it('should render the footer description', () => {
    expect(
      screen.getByText(
        /Profissional com experiência operação de retroesvadeiras, montagem, energia eólica e operações em campo/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render the footer navigation', () => {
    const navigation = screen.getByRole('navigation', {
      name: /navegação do rodapé/i,
    });

    expect(navigation).toBeInTheDocument();
    expect(navigation).toHaveClass(
      'footer-navigation',
    );
  });

  it('should render the navigation title', () => {
    expect(
      screen.getByText('NAVEGAÇÃO'),
    ).toBeInTheDocument();
  });

  it('should render the WhatsApp contact link', () => {
    const contactLink = screen.getByRole('link', {
      name: /entrar em contato/i,
    });

    expect(contactLink).toBeInTheDocument();

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

  it('should render the Início navigation link', () => {
    const link = screen.getByRole('link', {
      name: 'Início',
    });

    expect(link).toHaveAttribute('href', '#inicio');
  });

  it('should render the Sobre navigation link', () => {
    const link = screen.getByRole('link', {
      name: 'Sobre',
    });

    expect(link).toHaveAttribute('href', '#sobre');
  });

  it('should render the Experiência navigation link', () => {
    const link = screen.getByRole('link', {
      name: 'Experiência',
    });

    expect(link).toHaveAttribute(
      'href',
      '#experiencia',
    );
  });

  it('should render the Formação navigation link', () => {
    const link = screen.getByRole('link', {
      name: 'Formação',
    });

    expect(link).toHaveAttribute(
      'href',
      '#formacao',
    );
  });

  it('should render the Contato navigation link', () => {
    const link = screen.getByRole('link', {
      name: 'Contato',
    });

    expect(link).toHaveAttribute(
      'href',
      '#contato',
    );
  });

  it('should render the contact section', () => {
    const contactTitle = screen.getByText('CONTATO');

    expect(contactTitle).toBeInTheDocument();
    expect(contactTitle).toHaveClass(
      'footer-contact-title',
    );
  });

  it('should render the contact arrow as decorative', () => {
    const contactLink = screen.getByRole('link', {
      name: /entrar em contato/i,
    });

    const arrow = contactLink.querySelector('span');

    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveTextContent('↗');
    expect(arrow).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });

  it('should render the current year in the copyright', () => {
    const currentYear = new Date().getFullYear();

    expect(
      screen.getByText(
        new RegExp(`© ${currentYear} Marcélio Costa`),
      ),
    ).toBeInTheDocument();
  });

  it('should render the copyright text', () => {
    const currentYear = new Date().getFullYear();

    expect(
      screen.getByText(
        new RegExp(
          `© ${currentYear} Marcélio Costa\\. Todos os direitos reservados\\.`,
        ),
      ),
    ).toBeInTheDocument();
  });

  it('should render the location', () => {
    expect(
      screen.getByText('Ceará, Brasil'),
    ).toBeInTheDocument();
  });

  it('should render the footer bottom section', () => {
    const footerBottom = document.querySelector(
      '.footer-bottom',
    );

    expect(footerBottom).toBeInTheDocument();
  });
});