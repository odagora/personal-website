import { FooterCopyright, FooterWrapper } from '@/components';
import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <FooterWrapper>
    <FooterCopyright author={AppConfig.author} />
  </FooterWrapper>
);

export { Footer };
