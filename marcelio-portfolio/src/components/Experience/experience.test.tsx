import { render, screen } from '@testing-library/react';

import { Experience } from '../Experience/experience.component';

describe('Experience', () => {
  beforeEach(() => {
    render(<Experience />);
  });

  it('should render the experience section', () => {
    const section = document.querySelector('#experiencia');

    expect(section).toBeInTheDocument();
  });

  it('should render the section title', () => {
    expect(
      screen.getByRole('heading', {
        name: /uma trajetória construída em campo/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render the section eyebrow', () => {
    expect(
      screen.getByText('EXPERIÊNCIA PROFISSIONAL'),
    ).toBeInTheDocument();
  });

  it('should render the section description', () => {
    expect(
      screen.getByText(
        /experiência profissional construída ao longo dos anos/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render all professional experiences', () => {
    expect(
      screen.getByText('Montador PL III'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Montador', { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Montador de Estruturas'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Montador de Energia Eólica Jr II'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Auxiliar Eletricista'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Ajudante Prático'),
    ).toBeInTheDocument();
  });

  it('should render the correct number of experience items', () => {
    const experienceItems = document.querySelectorAll(
      '.experience__item',
    );

    expect(experienceItems).toHaveLength(6);
  });

  it('should render the experience periods', () => {
    expect(
      screen.getByText('01/10/2024 – 30/04/2025'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('20/02/2024 – 30/09/2024'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('03/11/2023 – 31/01/2024'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('22/08/2019 – 15/05/2023'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('22/08/2019 – 30/04/2021'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('12/03/2018 – 10/01/2019'),
    ).toBeInTheDocument();
  });

  it('should render the companies', () => {
    expect(
      screen.getByText('Experiência profissional'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'CET Brazil Equipamentos de Energia Elétrica e Tecnologia LTDA',
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText('B&Q Energia LTDA'),
    ).toBeInTheDocument();

    expect(
      screen.getAllByText(
        'Flex Wind - Instalação e Manutenção de Sistemas de Energia Eólica LTDA',
      ),
    ).toHaveLength(2);

    expect(
      screen.getByText(
        'Prodiel Novamper Energias Renováveis LTDA',
      ),
    ).toBeInTheDocument();
  });

  it('should render the experience descriptions', () => {
    expect(
      screen.getByText(
        /atuação profissional como montador pl iii/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /atividades relacionadas à montagem de estruturas/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /experiência no setor de energia eólica/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /atuação como auxiliar eletricista/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /atividades de apoio operacional no setor de energias renováveis/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render the experience markers in the correct order', () => {
    const markers = document.querySelectorAll(
      '.experience__marker span',
    );

    expect(markers).toHaveLength(6);

    expect(markers[0]).toHaveTextContent('01');
    expect(markers[1]).toHaveTextContent('02');
    expect(markers[2]).toHaveTextContent('03');
    expect(markers[3]).toHaveTextContent('04');
    expect(markers[4]).toHaveTextContent('05');
    expect(markers[5]).toHaveTextContent('06');
  });
});