'use client';

import { motion } from 'framer-motion';

import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
} from '@/animations/variants';

import './experience.style.scss';

const experiences = [
  {
    period: '01/10/2024 – 30/04/2025',
    company: 'Experiência profissional',
    role: 'Montador PL III',
    description:
      'Atuação profissional como Montador PL III em atividades de montagem e operação em ambiente de campo.',
  },
  {
    period: '20/02/2024 – 30/09/2024',
    company:
      'CET Brazil Equipamentos de Energia Elétrica e Tecnologia LTDA',
    role: 'Montador',
    description:
      'Atuação profissional como montador em atividades relacionadas à montagem de estruturas e operações em campo.',
  },
  {
    period: '03/11/2023 – 31/01/2024',
    company: 'B&Q Energia LTDA',
    role: 'Montador de Estruturas',
    description:
      'Atuação na montagem de estruturas e execução de atividades operacionais em campo.',
  },
  {
    period: '22/08/2019 – 15/05/2023',
    company:
      'Flex Wind - Instalação e Manutenção de Sistemas de Energia Eólica LTDA',
    role: 'Montador de Energia Eólica Jr II',
    description:
      'Experiência no setor de energia eólica, atuando em montagem de estruturas e atividades técnicas em campo.',
  },
  {
    period: '22/08/2019 – 30/04/2021',
    company:
      'Flex Wind - Instalação e Manutenção de Sistemas de Energia Eólica LTDA',
    role: 'Auxiliar Eletricista',
    description:
      'Atuação como auxiliar eletricista em atividades técnicas e operacionais relacionadas ao setor de energia.',
  },
  {
    period: '12/03/2018 – 10/01/2019',
    company:
      'Prodiel Novamper Energias Renováveis LTDA',
    role: 'Ajudante Prático',
    description:
      'Atuação em atividades de apoio operacional no setor de energias renováveis.',
  },
];

export function Experience() {
  return (
    <section
      className="experience"
      id="experiencia"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <motion.header
          className="experience__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <span className="experience__eyebrow">
            EXPERIÊNCIA PROFISSIONAL
          </span>

          <h2
            id="experience-title"
            className="experience__title"
          >
            Uma trajetória construída{' '}
            <span>em campo</span>
          </h2>

          <p className="experience__description">
            Experiência profissional construída ao longo dos anos
            em montagem de estruturas, energia eólica e atividades
            operacionais em campo.
          </p>
        </motion.header>

        <motion.div
          className="experience__timeline"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          {experiences.map((experience, index) => (
            <motion.article
              className="experience__item"
              key={`${experience.company}-${experience.role}-${index}`}
              variants={fadeUp}
            >
              <motion.div
                className="experience__marker"
                variants={fadeLeft}
              >
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.div>

              <div className="experience__content">
                <motion.span
                  className="experience__period"
                  variants={fadeLeft}
                >
                  {experience.period}
                </motion.span>

                <motion.div
                  className="experience__card"
                  variants={fadeRight}
                >
                  <span className="experience__company">
                    {experience.company}
                  </span>

                  <h3 className="experience__role">
                    {experience.role}
                  </h3>

                  <p className="experience__descriptionCard">
                    {experience.description}
                  </p>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}