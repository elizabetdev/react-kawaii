import { Box, Container } from '@radix-ui/themes';
import NextLink from 'next/link';
import React from 'react';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { TbWorldWww } from 'react-icons/tb';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container size="4">
        <Box py="4" mt="auto">
          <p>
            Created by{' '}
            <NextLink href="https://elizabet.dev/" target="_blank">
              Elizabet.dev
            </NextLink>{' '}
            |{' '}
            <NextLink href="https://x.com/elizabet_dev" target="_blank">
              <FaXTwitter />
            </NextLink>{' '}
            <NextLink href="https://www.instagram.com/elizabetdev" target="_blank">
              <FaInstagram />
            </NextLink>{' '}
            <NextLink href="https://elizabet.dev/" target="_blank">
              <TbWorldWww />
            </NextLink>
          </p>
        </Box>
      </Container>
    </footer>
  );
};
