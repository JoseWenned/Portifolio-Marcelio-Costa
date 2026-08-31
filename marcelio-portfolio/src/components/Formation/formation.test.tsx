import { render, screen } from '@testing-library/react';

import { Formation } from '../Formation/formation.component';

describe('Formation', () => {
  beforeEach(() => {
    render(<Formation />);
  });

  it('should render the formation section', () => {
    const section = document.querySelector('#formacao');

    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute(
      'aria-labelledby',
      'formation-title',
    );
  });

  it('should render the section eyebrow', () => {
    expect(
      screen.getByText('FORMAÇÃO E CERTIFICAÇÕES'),
    ).toBeInTheDocument();
  });

  it('should render the main title', () => {
    const title = document.querySelector('#formation-title');

    expect(title).toBeInTheDocument();
    expect(title?.tagName).toBe('H2');

    expect(title).toHaveTextContent(
      'Conhecimento que fortalece a experiência',
    );
  });

  it('should render the section description', () => {
    expect(
      screen.getByText(
        /Formação técnica e certificações que complementam a experiência profissional construída ao longo da trajetória em campo/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render all formation items', () => {
    const items = document.querySelectorAll(
      '.formation-item',
    );

    expect(items).toHaveLength(6);
  });

  it('should render the backhoe operator certification', () => {
    expect(
      screen.getByText('Operador de Retroescavadeira'),
    ).toBeInTheDocument();

    const institutions =
      screen.getAllByText('PIOMAP Brasil');

    expect(institutions).toHaveLength(2);
  });

  it('should render the wheel loader operator certification', () => {
    expect(
      screen.getByText('Operador de Pá Carregadeira'),
    ).toBeInTheDocument();
  });

  it('should render the technical education', () => {
    expect(
      screen.getByText('Técnico em Mecânica'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Conselho Federal dos Técnicos Industriais',
      ),
    ).toBeInTheDocument();
  });

  it('should render the BTT specialization', () => {
    expect(
      screen.getByText('BTT'),
    ).toBeInTheDocument();

    expect(
      screen.getAllByText('Formação profissional'),
    ).toHaveLength(2);
  });

  it('should render the BST specialization', () => {
    expect(
      screen.getByText('BST'),
    ).toBeInTheDocument();
  });

  it('should render the high school education', () => {
    expect(
      screen.getByText('Ensino Médio'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'E.E. Governador Manoel de Castro Filho',
      ),
    ).toBeInTheDocument();
  });

  it('should render all formation years', () => {
    expect(
      screen.getAllByText('2026'),
    ).toHaveLength(2);

    expect(
      screen.getAllByText('2023'),
    ).toHaveLength(3);

    expect(
      screen.getByText('2016'),
    ).toBeInTheDocument();
  });

  it('should render the correct formation types', () => {
    expect(
      screen.getAllByText('Certificação'),
    ).toHaveLength(2);

    expect(
      screen.getByText('Formação Técnica'),
    ).toBeInTheDocument();

    expect(
      screen.getAllByText('Especialização'),
    ).toHaveLength(2);

    expect(
      screen.getByText('Formação'),
    ).toBeInTheDocument();
  });

  it('should render the formation timeline dots', () => {
    const dots = document.querySelectorAll(
      '.formation-dot',
    );

    expect(dots).toHaveLength(6);
  });
});