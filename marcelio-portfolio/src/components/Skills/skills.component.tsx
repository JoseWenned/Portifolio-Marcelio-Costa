'use client';

import { motion } from 'framer-motion';

import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
} from '@/animations/variants';

import './skills.style.scss';

const skills = [
  {
    number: '01',
    title: 'Montagem de Estruturas',
    description:
      'Experiência na montagem e instalação de estruturas em ambientes operacionais e de campo.',
  },
  {
    number: '02',
    title: 'Energia Eólica',
    description:
      'Vivência profissional no setor de energia eólica, participando de atividades técnicas e operacionais.',
  },
  {
    number: '03',
    title: 'Trabalho em Campo',
    description:
      'Experiência em atividades realizadas em campo, seguindo procedimentos, orientações técnicas e normas de segurança.',
  },
  {
    number: '04',
    title: 'Atividades Operacionais',
    description:
      'Atuação em diferentes funções operacionais, auxiliando na execução e organização das atividades de campo.',
  },
  {
    number: '05',
    title: 'Trabalho em Equipe',
    description:
      'Experiência trabalhando em equipes durante operações de montagem e execução de atividades em campo.',
  },
  {
    number: '06',
    title: 'Comprometimento',
    description:
      'Compromisso com as atividades, organização do trabalho e cumprimento das responsabilidades profissionais.',
  },
];

export function Skills() {
  return (
    <section
      className="skills"
      id="habilidades"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <motion.header
          className="skills-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <span className="skills-eyebrow">
            HABILIDADES
          </span>

          <h2
            id="skills-title"
            className="skills-title"
          >
            Experiência que se transforma{' '}
            <span className="skills-title-highlight">
              em resultado
            </span>
          </h2>

          <p className="skills-description">
            Competências desenvolvidas ao longo da trajetória
            profissional em diferentes ambientes de trabalho e
            operações de campo.
          </p>
        </motion.header>

        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          {skills.map((skill, index) => (
            <motion.article
              className="skills-card"
              key={skill.number}
              variants={index % 2 === 0 ? fadeLeft : fadeRight}
            >
              <span className="skills-number">
                {skill.number}
              </span>

              <div className="skills-content">
                <h3 className="skills-card-title">
                  {skill.title}
                </h3>

                <p className="skills-card-description">
                  {skill.description}
                </p>
              </div>

              <motion.span
                className="skills-arrow"
                aria-hidden="true"
                whileHover={{
                  x: 4,
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
                  ease: 'easeOut',
                }}
              >
                ↗
              </motion.span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}