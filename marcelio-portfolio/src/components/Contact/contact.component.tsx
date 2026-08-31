'use client';

import { motion } from 'framer-motion';

import {
  fadeUp,
  scaleIn,
  staggerContainer,
} from '@/animations/variants';

import './contact.style.scss';

export function Contact() {
  return (
    <section
      className="contact"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <motion.div
          className="contact-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <motion.span
            className="contact-eyebrow"
            variants={fadeUp}
          >
            ENTRE EM CONTATO
          </motion.span>

          <motion.h2
            id="contact-title"
            className="contact-title"
            variants={fadeUp}
          >
            Vamos conversar sobre o{' '}
            <span className="contact-title-highlight">
              próximo projeto?
            </span>
          </motion.h2>

          <motion.div
            className="contact-actions"
            variants={scaleIn}
          >
            <motion.a
              href="https://wa.me/+5588993123024"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
                ease: 'easeOut',
              }}
            >
              <span className="contact-button-text">
                Entrar em contato
              </span>

              <motion.span
                className="contact-button-arrow"
                aria-hidden="true"
                whileHover={{
                  x: 5,
                  y: -5,
                }}
                transition={{
                  duration: 0.2,
                  ease: 'easeOut',
                }}
              >
                ↗
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}