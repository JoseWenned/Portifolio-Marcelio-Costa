import { render, screen } from '@testing-library/react';

import { Skills } from '../Skills/skills.component';

describe('Skills', () => {
  beforeEach(() => {
    render(<Skills />);
  });

  it('should render the skills section', () => {
    const section = document.querySelector('#habilidades');

    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute(
      'aria-labelledby',
      'skills-title',
    );
  });

  it('should render the section eyebrow', () => {
    expect(
      screen.getByText('HABILIDADES'),
    ).toBeInTheDocument();
  });

  it('should render the main title', () => {
    const title = document.querySelector('#skills-title');

    expect(title).toBeInTheDocument();
    expect(title?.tagName).toBe('H2');

    expect(title).toHaveTextContent(
      'Experiência que se transforma em resultado',
    );
  });

  it('should render the section description', () => {
    expect(
      screen.getByText(
        /Competências desenvolvidas ao longo da trajetória profissional em diferentes ambientes de trabalho e operações de campo/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render all skill cards', () => {
    const cards = document.querySelectorAll(
      '.skills-card',
    );

    expect(cards).toHaveLength(6);
  });

  it('should render all skill numbers', () => {
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
    expect(screen.getByText('05')).toBeInTheDocument();
    expect(screen.getByText('06')).toBeInTheDocument();
  });

  it('should render the structure assembly skill', () => {
    expect(
      screen.getByText('Montagem de Estruturas'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Experiência na montagem e instalação de estruturas em ambientes operacionais e de campo/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render the wind energy skill', () => {
    expect(
      screen.getByText('Energia Eólica'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Vivência profissional no setor de energia eólica/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render the field work skill', () => {
    expect(
      screen.getByText('Trabalho em Campo'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Experiência em atividades realizadas em campo/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render the operational activities skill', () => {
    expect(
      screen.getByText('Atividades Operacionais'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Atuação em diferentes funções operacionais/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render the teamwork skill', () => {
    expect(
      screen.getByText('Trabalho em Equipe'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Experiência trabalhando em equipes/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render the commitment skill', () => {
    expect(
      screen.getByText('Comprometimento'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Compromisso com as atividades, organização do trabalho/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render an arrow for each skill card', () => {
    const arrows = document.querySelectorAll(
      '.skills-arrow',
    );

    expect(arrows).toHaveLength(6);
  });
});