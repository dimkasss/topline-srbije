import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";
import TeplovoyNasos from "../assets/teplovoy-nasos.jpg";
import TeplovoyNasos2 from "../assets/teplovoy-nasos2.jpg";
import TeplovoyNasos3 from "../assets/teplovoy-nasos-3.jpg";
import TeplovoyNasos4 from "../assets/teplovoy-nasos-4.jpg";
import Image from "../components/Image";
import { useTranslation } from "react-i18next";

const HeatPumpsPage = () => {
  const { t } = useTranslation();

  return ( 
    <PageWrapper>
      <Section doubledHeader>
      {t('тепловой насос')}
      </Section>
      <Section smaller>
        {t('тепл-нас-1')}
      </Section>
      <Section>
        <p>
          {t('тепл-нас-2')}
        </p>
      </Section>
      <Section header>
        {t('тепл-нас-3')}
      </Section>
      <Section>
        <p>
          {t('тепл-нас-4')}
        </p>
        <p>
          {t('тепл-нас-5')}  
        </p>
        <p>
          {t('тепл-нас-6')}
        </p>
      </Section>
      <Section header>
        {t('тепл-нас-7')}
      </Section>
      <Section>
        <p>
          {t('тепл-нас-8')}
        </p>
        <ul className="list">
          <li>{t('тепл-нас-9')}</li>
          <li>{t('тепл-нас-10')}</li>
        </ul>
        <Image width="700px" img={TeplovoyNasos} alt="Устройство системы отопления с насосом"/>
      </Section>
      
      <Section header>
        {t('тепл-нас-11')}
      </Section>
      <Section>
        <p>
          {t('тепл-нас-12')}
        </p>
      </Section>
      <Section header>
        {t('тепл-нас-13')}
      </Section>
      <Section>
        <p>
          {t('тепл-нас-14')}
        </p>
      </Section>
      <Section header>
        {t('тепл-нас-15')}
      </Section>
      <Section>
        <p>
          {t('тепл-нас-16')}
        </p>
        <Image width="700px" img={TeplovoyNasos2} alt="ВТН для холодного климата"/>
      </Section>
      <Section header>
        {t('тепл-нас-17')}
      </Section>
      <Image width="700px" img={TeplovoyNasos3} alt="Устройство системы отопления с насосом"/>
      <Section>
        {t('тепл-нас-18')}
      </Section>
      <Section header>
        {t('тепл-нас-19')} 
      </Section>
      <Section>
        <p>
          {t('тепл-нас-20')}
        </p>
      </Section>
      <Section header>
        {t('тепл-нас-21')}
      </Section>
      <Section>
        <p>
          {t('тепл-нас-22')}
        </p>
        <p>
          {t('тепл-нас-23')}
        </p>
      </Section>
      <Section header>
        {t('тепл-нас-24')}
      </Section>
      <Section>
        <p>
          {t('тепл-нас-25')}
        </p>
        <p>
          {t('тепл-нас-26')}
        </p>
      </Section>
      <Section header>
        {t('тепл-нас-27')}
      </Section>
      <Image width="700px" img={TeplovoyNasos4} alt="Устройство системы отопления с насосом"/>
    </PageWrapper>
   );
}
 
export default HeatPumpsPage;