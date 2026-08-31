import { render, screen } from '@testing-library/react';

import { About } from '../About/about.component';

describe('About', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('should render the about section', () => {
    const section = document.querySelector('#sobre');

    expect(section).toBeInTheDocument();

    expect(section).toHaveAttribute(
      'aria-labelledby',
      'about-title',
    );
  });

  it('should render the section eyebrow', () => {
    expect(
      screen.getByText('Perfil profissional'),
    ).toBeInTheDocument();
  });

  it('should render the main title', () => {
    const title = screen.getByRole('heading', {
      level: 2,
    });

    expect(title).toBeInTheDocument();

    expect(title).toHaveAttribute(
      'id',
      'about-title',
    );

    expect(title).toHaveTextContent(
      'Experiência, técnica e evolução profissional.',
    );
  });

  it('should render the professional descriptions', () => {
    expect(
      screen.getByText(
        /Marcélio Costa Ribeiro é profissional com trajetória construída/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Sua formação como Técnico em Mecânica complementa sua experiência prática/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Em 2026, ampliou sua qualificação profissional/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render the technical education card', () => {
    expect(
      screen.getByText('Técnico em Mecânica'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Formação técnica concluída em 2023.',
      ),
    ).toBeInTheDocument();
  });

  it('should render the backhoe certification card', () => {
    expect(
      screen.getByText('Retroescavadeira'),
    ).toBeInTheDocument();
  });

  it('should render the wheel loader certification card', () => {
    expect(
      screen.getByText('Pá Carregadeira'),
    ).toBeInTheDocument();
  });

  it('should render both 2026 certification descriptions', () => {
    const certifications = screen.getAllByText(
      'Curso certificado em 2026.',
    );

    expect(certifications).toHaveLength(2);
  });

  it('should render all qualification card numbers', () => {
    expect(
      screen.getByText('01'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('02'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('03'),
    ).toBeInTheDocument();
  });

  it('should render the professional identification', () => {
    expect(
      screen.getByText('MARCÉLIO COSTA RIBEIRO'),
    ).toBeInTheDocument();
  });

  it('should render the professional keywords', () => {
    expect(
      screen.getByText(
        'TÉCNICA / EXPERIÊNCIA / QUALIFICAÇÃO',
      ),
    ).toBeInTheDocument();
  });
});