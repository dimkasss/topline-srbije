import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";
import HeatingSystems1 from "../assets/sys-otopl-1.jpg";
import HeatingSystems2 from "../assets/sys-otopl-2.jpg";
import HeatingSystems3 from "../assets/sys-otopl-3.jpg";
import HeatingSystems4 from "../assets/sys-otopl-4.jpg";
import HeatingSystems5 from "../assets/sys-otopl-5.jpg";
import Image from "../components/Image";
import { useTranslation } from "react-i18next";

const HeatingPage = () => {
  const { t } = useTranslation();

  return ( 
    <PageWrapper>
      <Section doubledHeader>
        {t('системы отопления')}
      </Section>
      <Section>
        <p>
          {t('отопление-1')}
        </p>
        <p>
          {t('отопление-2')}
        </p>
      </Section>
      <Section header>
        {t('отопление-3')}
      </Section>
      <Section>
        <p>
          {t('отопление-4')}
        </p>
        <p>
          {t('отопление-5')}
        </p>
        <p>
          {t('отопление-6')}
        </p>
      </Section>
      <Section header>
        {t('отопление-7')}
      </Section>
      <Section>
        <p>
          {t('отопление-8')}
        </p>
        <p>
        {t('отопление-9')}
        </p>
      </Section>
      <Section smaller>
        {t('отопление-10')}
      </Section>
      <Section>
        <p>
          {t('отопление-11')}
        </p>
        <p>
          {t('отопление-12')}
        </p>
        <ul className="list">
          <li>{t('отопление-13')}</li>
          <li>{t('отопление-14')}</li>
          <li>{t('отопление-15')}</li>
          <li>{t('отопление-16')}</li>
        </ul>

        {t('отопление-17')}
        <Image width="700px" img={HeatingSystems1} alt="Газовое отопление"/>
      </Section>

      <Section smaller>
        {t('отопление-18')}
      </Section>
      <Section>
        <p>
          {t('отопление-19')}
        </p>
        <ul className="list">
          <li>{t('отопление-20')}</li>
          <li>{t('отопление-21')}</li>
          <li>{t('отопление-22')}</li>
          <li>{t('отопление-23')}</li>
        </ul>
        {t('отопление-24')}
        <Image width="700px" img={HeatingSystems2} alt="Твердотопливный котёл"/>
      </Section>
      <Section smaller>
        {t('отопление-25')}
      </Section>
      <Section>
        {t('отопление-26')}
        <ul className="list">
            <li>{t('отопление-27')}</li>
            <li>{t('отопление-28')}</li>
          </ul>
        {t('отопление-29')}
        <p>
          {t('отопление-30')}
        </p>
        <Image width="700px" img={HeatingSystems3} alt="Электрический котёл"/>
      </Section>
      <Section smaller>
        {t('отопление-31')}
      </Section>
      <Section>
        <p>
          {t('отопление-32')}
        </p>
        <p>
          {t('отопление-33')}
        </p>
        <p>
          {t('отопление-34')}
        </p>
        {t('отопление-35')}
        <ul className="list">
          <li>{t('отопление-36')}</li>
          <li>{t('отопление-37')}</li>
          <li>{t('отопление-38')}</li>
          <li>{t('отопление-39')}</li>
          <li>{t('отопление-40')}</li>
          <li>{t('отопление-41')}</li>
          <li>{t('отопление-42')}</li>
          <li>{t('отопление-43')}</li>
          <li>{t('отопление-44')}</li>
        </ul>
        <p>
          {t('отопление-45')}
        </p>
        <Image width="700px" img={HeatingSystems4} alt="Воздушное отопление"/>
      </Section>
      <Section smaller>
        {t('отопление-46')}
      </Section>
      <Section>
        <p>
          {t('отопление-47')}
        </p>
        <p>
          {t('отопление-48')}
        </p>
        <p>
          {t('отопление-49')}
        </p>
        {t('отопление-50')}
        <ul className="list">
          <li>{t('отопление-51')}</li>
          <li>{t('отопление-52')}</li>
          <li>{t('отопление-53')}</li>
          <li>{t('отопление-54')}</li>
          <li>{t('отопление-55')}</li>
          <li>{t('отопление-56')}</li>
          <li>{t('отопление-57')}</li>
          <li>{t('отопление-58')}</li>
          <li>{t('отопление-59')}</li>
          <li>{t('отопление-60')}</li>
          <li>{t('отопление-61')}</li>
        </ul>
        {t('отопление-62')}
        <Image width="700px" img={HeatingSystems5} alt="Инфракрасный обогрев"/>
      </Section>
      <Section header>
        {t('отопление-63')}
      </Section>
      <Section>
        <p>
          {t('отопление-64')}
        </p>
      </Section>
      
    </PageWrapper>
    
   );
}
 
export default HeatingPage;