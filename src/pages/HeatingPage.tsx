import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";
import HeatingSystems1 from "../assets/sys-otopl-1.jpg";
import HeatingSystems2 from "../assets/sys-otopl-2.jpg";
import HeatingSystems3 from "../assets/sys-otopl-3.jpg";
import HeatingSystems4 from "../assets/sys-otopl-4.jpg";
import HeatingSystems5 from "../assets/sys-otopl-5.jpg";
import HeatingSystems6 from "../assets/sys-otopl-6.jpg";
import HeatingSystems7 from "../assets/sys-otopl-7.jpeg";
import HeatingSystems8_ru from "../assets/sys-otopl-8-ru.png";
import HeatingSystems8_rs from "../assets/sys-otopl-8-rs.png";
import HeatingSystems9 from "../assets/sys-otopl-9.png";
import Image from "../components/Image";
import { useTranslation } from "react-i18next";

const HeatingPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <PageWrapper>
      <Section doubledHeader>{t("системы отопления")}</Section>
      <Section>
        <p>{t("отопление-1")}</p>
        <p>{t("отопление-2")}</p>
      </Section>
      <Section header>{t("отопление-3")}</Section>
      <Section>
        <p>{t("отопление-4")}</p>
        <p>{t("отопление-5")}</p>
        <p>{t("отопление-6")}</p>
        <p>{t("отопление-6-1")}</p>
        <p>{t("отопление-6-2")}</p>
      </Section>
      <Section header>{t("отопление-6-3")}</Section>
      <Image img={HeatingSystems6} width="700px" alt="Радиаторное отопление" />
      <Section>
        <p>{t("отопление-6-4")}</p>
        <ul className="list">
          <li>{t("отопление-6-5")}</li>
          <li>{t("отопление-6-6")}</li>
          <li>{t("отопление-6-7")}</li>
          <li>{t("отопление-6-8")}</li>
          <li>{t("отопление-6-9")}</li>
          <li>{t("отопление-6-10")}</li>
          <li>{t("отопление-6-11")}</li>
        </ul>
        <Image
          img={HeatingSystems7}
          width="700px"
          alt="Радиаторное отопление"
        />
        <br />
        <p>{t("отопление-6-12")}</p>
        <ul className="list">
          <li>{t("отопление-6-13")}</li>
          <li>{t("отопление-6-14")}</li>
          <li>{t("отопление-6-15")}</li>
          <li>{t("отопление-6-16")}</li>
          <li>{t("отопление-6-17")}</li>
          <li>{t("отопление-6-18")}</li>
          <li>{t("отопление-6-19")}</li>
          <li>{t("отопление-6-20")}</li>
        </ul>
      </Section>

      <Image
        img={i18n.language == "ru" ? HeatingSystems8_ru : HeatingSystems8_rs}
        width="700px"
        alt="Теплообмен в комнате"
      />

      <Section>
        <p>{t("отопление-6-21")}</p>
      </Section>

      <Image img={HeatingSystems9} width="700px" alt="Теплый пол" />

      <Section header>{t("отопление-6-22")}</Section>

      <Section>
        <p>{t("отопление-6-23")}</p>
        <p>{t("отопление-6-24")}</p>
        <p>{t("отопление-6-25")}</p>
        <p>{t("отопление-6-26")}</p>
        <p>{t("отопление-6-27")}</p>
        <p>{t("отопление-6-28")}</p>
        <p>{t("отопление-6-29")}</p>
        <p>{t("отопление-6-30")}</p>
        <p>{t("отопление-6-31")}</p>
        <p>{t("отопление-6-32")}</p>
        <p>{t("отопление-6-33")}</p>
      </Section>

      <Section>
        <table className="table">
          <caption>{t("отопление-6-34")}</caption>
          <thead>
            <tr>
              <th className="w-1/3 text-center">{t("отопление-6-35")}</th>
              <th className="w-2/3 text-center">{t("отопление-6-36")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>+26 °C</td>
              <td>{t("отопление-6-37")}</td>
            </tr>
            <tr>
              <td>+27 °C</td>
              <td>{t("отопление-6-38")}</td>
            </tr>
            <tr>
              <td>+29 °C</td>
              <td>{t("отопление-6-39")}</td>
            </tr>
            <tr>
              <td>+33 °C</td>
              <td>{t("отопление-6-40")}</td>
            </tr>
            <tr>
              <td>+35 °C</td>
              <td>{t("отопление-6-41")}</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section>
        <p className="font-bold">{t("отопление-6-42")}</p>
        <p>{t("отопление-6-43")}</p>
        <p>{t("отопление-6-44")}</p>
        <p className="font-bold">{t("отопление-6-45")}</p>
        <p>{t("отопление-6-46")}</p>
        <p>{t("отопление-6-47")}</p>
        <p className="font-bold">{t("отопление-6-48")}</p>
      </Section>

      <Section header>{t("отопление-7")}</Section>
      <Section>
        <p>{t("отопление-8")}</p>
        <p>{t("отопление-9")}</p>
      </Section>
      <Section smaller>{t("отопление-10")}</Section>
      <Section>
        <p>{t("отопление-11")}</p>
        <p>{t("отопление-12")}</p>
        <ul className="list">
          <li>{t("отопление-13")}</li>
          <li>{t("отопление-14")}</li>
          <li>{t("отопление-15")}</li>
          <li>{t("отопление-16")}</li>
        </ul>

        {t("отопление-17")}
        <Image width="700px" img={HeatingSystems1} alt="Газовое отопление" />
      </Section>

      <Section smaller>{t("отопление-18")}</Section>
      <Section>
        <p>{t("отопление-19")}</p>
        <ul className="list">
          <li>{t("отопление-20")}</li>
          <li>{t("отопление-21")}</li>
          <li>{t("отопление-22")}</li>
          <li>{t("отопление-23")}</li>
        </ul>
        <p>{t("отопление-24")}</p>
        <p>{t("отопление-24-1")}</p>
        <Image
          width="700px"
          img={HeatingSystems2}
          alt="Твердотопливный котёл"
        />
      </Section>
      <Section smaller>{t("отопление-25")}</Section>
      <Section>
        {t("отопление-26")}
        <ul className="list">
          <li>{t("отопление-27")}</li>
          <li>{t("отопление-28")}</li>
        </ul>
        {t("отопление-29")}
        <p>{t("отопление-30")}</p>
        <Image width="700px" img={HeatingSystems3} alt="Электрический котёл" />
      </Section>
      <Section smaller>{t("отопление-31")}</Section>
      <Section>
        <p>{t("отопление-32")}</p>
        <p>{t("отопление-33")}</p>
        <p>{t("отопление-34")}</p>
        {t("отопление-35")}
        <ul className="list">
          <li>{t("отопление-36")}</li>
          <li>{t("отопление-37")}</li>
          <li>{t("отопление-38")}</li>
          <li>{t("отопление-39")}</li>
          <li>{t("отопление-40")}</li>
          <li>{t("отопление-41")}</li>
          <li>{t("отопление-42")}</li>
          <li>{t("отопление-43")}</li>
          <li>{t("отопление-44")}</li>
        </ul>
        <p>{t("отопление-45")}</p>
        <Image width="700px" img={HeatingSystems4} alt="Воздушное отопление" />
      </Section>
      <Section smaller>{t("отопление-46")}</Section>
      <Section>
        <p>{t("отопление-47")}</p>
        <p>{t("отопление-48")}</p>
        <p>{t("отопление-49")}</p>
        {t("отопление-50")}
        <ul className="list">
          <li>{t("отопление-51")}</li>
          <li>{t("отопление-52")}</li>
          <li>{t("отопление-53")}</li>
          <li>{t("отопление-54")}</li>
          <li>{t("отопление-55")}</li>
          <li>{t("отопление-56")}</li>
          <li>{t("отопление-57")}</li>
          <li>{t("отопление-58")}</li>
          <li>{t("отопление-59")}</li>
          <li>{t("отопление-60")}</li>
          <li>{t("отопление-61")}</li>
        </ul>
        {t("отопление-62")}
        <Image width="700px" img={HeatingSystems5} alt="Инфракрасный обогрев" />
      </Section>
      <Section header>{t("отопление-63")}</Section>
      <Section>
        <p>{t("отопление-64")}</p>
      </Section>
    </PageWrapper>
  );
};

export default HeatingPage;
