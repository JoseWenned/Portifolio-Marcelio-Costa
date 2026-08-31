import { render, screen } from '@testing-library/react';

import { Hero } from '../Hero/hero.component';

describe('Hero', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it('should render the hero section', () => {
    const heroTitle = screen.getByRole('heading', {
      name: /operador de retroescavadeira/i,
    });

    expect(heroTitle).toBeInTheDocument();
  });

  it('should render the professional description', () => {
    expect(
      screen.getByText(
        /profissional com experiência em montagem de estruturas e atuação no setor de energia/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render the primary contact link', () => {
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

  it('should render the experience link', () => {
    const experienceLink = screen.getByRole('link', {
      name: /ver experiência/i,
    });

    expect(experienceLink).toBeInTheDocument();
    expect(experienceLink).toHaveAttribute(
      'href',
      '#experiencia',
    );
  });

  it('should render the about scroll link', () => {
    const scrollLink =
      document.querySelector('a[href="#sobre"]');

    expect(scrollLink).toBeInTheDocument();
    expect(scrollLink).toHaveAttribute(
      'aria-label',
      'Ir para seção sobre',
    );
  });

  it('should render the visual content', () => {
    expect(
      screen.getByText('MARCÉLIO COSTA RIBEIRO'),
    ).toBeInTheDocument();

    expect(
      screen.getByAltText('Marcélio Costa Ribeiro')
    ).toBeInTheDocument();

    expect(
      screen.getByText('OPERAÇÃO'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('PRECISÃO'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('EXPERIÊNCIA'),
    ).toBeInTheDocument();
  });

  it('should render the curriculum download link', () => {
    const curriculumLink = screen.getByRole('link', {
      name: /baixar currículo/i,
    });

    expect(curriculumLink).toBeInTheDocument();

    expect(curriculumLink).toHaveAttribute(
      'href',
      '/docs/curriculo.pdf',
    );

    expect(curriculumLink).toHaveAttribute(
      'download',
      'curriculo.pdf',
    );
  });
});