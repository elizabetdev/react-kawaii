import { Box, Container } from '@radix-ui/themes';
import NextLink from 'next/link';
import React from 'react';
import { FaBluesky, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { TbWorldWww } from 'react-icons/tb';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container size="4">
        <div className="footer__box">
          <span className="footer__text">
            Created by{' '}
            <NextLink href="https://elizabet.dev/" target="_blank" className="footer__text-link">
              elizabet.dev
            </NextLink>{' '}
          </span>
          <div className="footer__separator"></div>
          <ul className="footer__icon-list">
            <li>
              <NextLink href="https://x.com/elizabet_dev" target="_blank" className="footer__icon-link">
                <FaXTwitter />
              </NextLink>
            </li>
            <li>
              <NextLink href="https://bsky.app/profile/elizabet.dev" target="_blank" className="footer__icon-link">
                <FaBluesky />
              </NextLink>
            </li>
            <li>
              <NextLink href="https://www.instagram.com/elizabetdev" target="_blank" className="footer__icon-link">
                <FaInstagram />
              </NextLink>
            </li>
            <li>
              {' '}
              <NextLink href="https://elizabet.dev/" target="_blank" className="footer__icon-link">
                <TbWorldWww />
              </NextLink>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
