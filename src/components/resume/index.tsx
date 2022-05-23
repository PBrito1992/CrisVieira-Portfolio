import ContextBox from "components/common/context-box";
import SectionTitle from "components/common/section-title";
import SectionTitleHighlighted from "components/common/section-title-highlighted";
import { FC, useState } from "react";
import ResumeFilter, {
  ResumeFilters,
  ResumeFiltersType,
} from "./resume-filter";
import ResumeList from "./resume-list";
import ResumeListItem, { ResumeListItemType } from "./resume-list-item";

type ResumeInfoType = {
  [filter: string]: ResumeListItemType[];
};
const ResumeInfo: ResumeInfoType = {
  [ResumeFilters.education.toLowerCase()]: [
    {
      title: "Licenciatura em Marketing e Publicidade",
      location:
        "ISCET, Instituto Superior de Ciências Empresariais e do Turismo",
      duration: { start: "2019" },
      grade: "Current grade: 16",
    },
    {
      title: "Técnica Auxiliar de Saúde- Curso Profissional de Nível 4",
      location: "Escola Profissional de Valongo",
      duration: { start: "2015", end: "2018" },
      grade: "Final grade: 17",
    },
  ],
  [ResumeFilters.experience.toLowerCase()]: [
    {
      title: "Assistente de Marketing - Estagiária",
      location: "Up We Go- Agência de Marketing Digital",
      duration: { start: "Fevereiro 2022", end: "Maio 2022" },
      description: `
      Gestão de Redes Sociais (Swonkie, Etus e Meta Business Suite)
      Content Writing (Blog Posts com SEO integrado, Websites, Redes
      Sociais, Ebooks, Revistas, Apresentações formais para clientes)
      Análise de Concorrência
      Benchmarking
      Testes de Usabilidade
      Testes de Funcionalidade a newsletters
      `,
    },
    {
      title: "Assistente de Medicina Dentária",
      location: "O Meu Sorriso Clínicas",
      duration: { start: "Agosto 2018", end: "Agosto 2019" },
    },
    {
      title: "Técnica Auxiliar de Saúde - Estagiária",
      location: "Trofa Saúde - Hospital Privado de Alfena",
      duration: { start: "Abril 2018", end: "Junho 2018" },
      description: `
      Assistente na área de saúde nas diversas especialidades:
Ginecologia/obstetrícia, oftalmologia, otorrinolaringologia, terapia da
fala, terapia ocupacional, psicologia infantil, psiquiatria da infância e
da adolescência, oncologia médica, salas de exames e salas de
polissonografia.
      `,
    },
    {
      title: "Técnica Auxiliar de Saúde - Estagiária",
      location: "Lar São Lourenço, Ermesinde, Técnica Auxiliar de Saúde",
      duration: { start: "Maio 2017", end: "Junho 2017" },
    },
  ],
};

const Resume: FC = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<ResumeFiltersType>("education");

  console.log(ResumeInfo);
  const resumeInfo = ResumeInfo[selectedFilter];
  console.log(resumeInfo);
  return (
    <div
      id="resume"
      className="mx-auto h-auto min-h-screen w-full border-b-2 border-gray-900 py-10 px-5 lg:w-5/6 lg:px-0 lg:py-28"
    >
      <SectionTitle className="text-pink-700">
        Education & Experience
      </SectionTitle>
      <SectionTitleHighlighted className="mt-3 text-gray-300">
        My Resume
      </SectionTitleHighlighted>
      <div className="mt-10">
        <ResumeFilter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        {resumeInfo && resumeInfo.length > 0 && (
          <ResumeList>
            {resumeInfo?.map((item, index) => (
              <ResumeListItem key={`${item.title}${index}`} {...item} />
            ))}
          </ResumeList>
        )}
      </div>
    </div>
  );
};

export default Resume;
