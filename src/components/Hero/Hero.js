import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hello, my name is Oladapo Omoworare and I am a frontend developer with a passion for creating visually appealing and user-friendly websites. With 2 years of experience in the field, I have honed my skills in HTML, CSS, JavaScript and React to bring my clients' ideas to life. My goal is to always deliver high-quality and responsive websites that meet the needs of both the user and the client. Whether it's a simple brochure website or a complex e-commerce platform, I am committed to creating a seamless and enjoyable experience for everyone who visits.</SectionText>
        <Button onClick={() => window.location = '#projects'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;