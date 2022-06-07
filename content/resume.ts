import { ResumeInfoType } from "components/resume";
import { ResumeFilters } from "components/resume/resume-filter";

const ResumeInfo: ResumeInfoType = {
    [ResumeFilters.education.toLowerCase()]: [
        {
            title: "Degree in Marketing and Advertising",
            location:
                "ISCET, Instituto Superior de Ciências Empresariais e do Turismo",
            duration: { start: "2019" },
            grade: "Current grade: 16",
        },
        {
            title: "Healthcare Assistant - Professional Course",
            location: "Escola Profissional de Valongo",
            duration: { start: "2015", end: "2018" },
            grade: "Final grade: 17",
        },
    ],
    [ResumeFilters.experience.toLowerCase()]: [
        {
            title: "Marketing Assistant - Internship",
            location: "Up We Go- Agência de Marketing Digital",
            duration: { start: "Fevereiro 2022", end: "Maio 2022" },
            description: `
            Management of Social Networks like Facebook, LinkedIn and Instagram (Swonkie and Meta Business Suite)
            Content Writing (Blog Posts, Websites, Posts For Social Networks, Magazines, Ebooks, Brochures, Formal Documents For Clients)
            Competition Analysis 
            Benchmarking
            Usability Tests (Mobile & Desktop)
            Implementation Of Content On The Website (WordPress)
            Newsletters functionality tests
        `,
        },
        {
            title: "Dental Assistant",
            location: "O Meu Sorriso Clínicas",
            duration: { start: "Agosto 2018", end: "Agosto 2019" },
            description: `
            Appointment booking
            Stock management of dental materials
            Cleaning of spaces
            Sterilization of materials
            Face-to-face and telephone customer service
            Assisting dentists in dental treatments and surgeries
            `
        },
        {
            title: "Healthcare Assistant - Internship",
            location: "Trofa Saúde - Hospital Privado de Alfena",
            duration: { start: "Abril 2018", end: "Junho 2018" },
            description: `
            Assistant in the health area in many specialties:
            Obstetrics/gynecology, ophthalmology, otolaryngology, speech therapy, occupational therapy, child psychology, child and adolescent psychiatry, medical oncology, examination rooms and polysomnography rooms.
            Functions such as cleaning spaces, managing stocks, scheduling appointments, accompanying the patient to the correct room, prepare the medical office for the next day (documents, clothing and materials), supporting doctors and ticket printing and resolution in the computer system.
        `,
        },
        {
            title: "Healthcare Assitant - Internship",
            location: "Lar São Lourenço, Ermesinde, Técnica Auxiliar de Saúde",
            duration: { start: "Maio 2017", end: "Junho 2017" },
            description: `
            Assist patients in their hygiene care
            Positioning patients correctly
            Preparation of snacks for patients according to their diet
            Helping patients in the feeding process
            Hygienization of spaces
            Creation of activities to work with patients during the day
            `
        },
    ],
};

export default ResumeInfo;