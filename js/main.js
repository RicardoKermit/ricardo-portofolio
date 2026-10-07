/* ================================================== */
/* TRANSLATIONS */
/* ================================================== */

const translations = {
    en: {
        pageTitle: "Ricardo Silva | Software Developer",

        metaDescription:
            "Portfolio of Ricardo Silva, Software Developer focused on backend development, automation, system integration and AI.",

        "brand.role": "Software Developer",

        "nav.ariaLabel": "Main navigation",
        "nav.work": "Work",
        "nav.experience": "Experience",
        "nav.about": "About",
        "nav.education": "Education",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        "hero.kicker": "01 / Profile",
        "hero.role": "Software Developer",

        "hero.description":
            "Building backend systems, workflow automation, enterprise integrations and AI-assisted business processes.",

        "hero.currently": "Currently",
        "hero.location": "Based in",
        "hero.work": "View Selected Work",
        "hero.contact": "Contact",
        "hero.focus": "Focus",

        "hero.focusValue":
            "Automation · Integration · Applied AI",

        "hero.imageAlt":
            "Portrait of Ricardo Silva",


        /* ================================================== */
        /* SELECTED WORK */
        /* ================================================== */

        "work.title": "Selected Work",

        "work.order.title":
            "Intelligent Order Processing",

        "work.order.p1":
            "End-to-end automation for processing customer orders received through emails and PDF documents.",

        "work.order.p2":
            "The workflow uses Galene AI to interpret natural language requests, identify customers, product references, quantities, prices and quotation numbers before validating and creating documents in PHC.",

        "work.order.p3":
            "The solution includes multi-source pricing logic using quotation and order history, invoicing data, catalogue prices and automated external supplier queries.",

        "work.order.p4":
            "It also includes ambiguity handling, fallback mechanisms, SQL transactional control, automatic HTML notifications and reusable workflows and sub-workflows.",


        "work.map.title":
            "Business Contact Map",

        "work.map.p1":
            "Geographic platform integrated with PHC for exploring and prioritizing approximately 23,000 business contacts.",

        "work.map.p2":
            "The application classifies contacts according to business rules such as availability, scheduled visits and recent commercial interactions.",

        "work.map.p3":
            "It includes internal APIs for company details, visit history, comments and geolocation correction, as well as a geocoding pipeline with address normalization, caching, validation and auditing.",

        "work.map.p4":
            "SQL queries were optimized to work with more than one million visit records using progressive data loading and separation between lightweight map data and complete company information.",


        "work.ai.title":
            "AI Learning Assistant",

        "work.ai.p1":
            "Master's dissertation project integrating Moodle with an AI-assisted learning system based on the Model Context Protocol and Retrieval-Augmented Generation.",

        "work.ai.p2":
            "The system uses educational materials as contextual knowledge and Google Gemini models to automatically generate learning content such as summaries, quizzes and flashcards.",


        /* ================================================== */
        /* EXPERIENCE */
        /* ================================================== */

        "experience.title": "Experience",

        "common.present": "Present",


        /* PRN */

        "experience.prn.role":
            "Junior Software Developer",

        "experience.prn.description":
            "Development of business process automation, ERP integration, internal applications and AI-assisted workflows using n8n, SQL Server, PHC, JavaScript, REST APIs and Galene AI.",

        "experience.prn.li1":
            "Development of an automated customer order processing system integrating email, PDF documents, AI, SQL Server and PHC.",

        "experience.prn.li2":
            "Development of a geographic commercial platform for approximately 23,000 business contacts.",

        "experience.prn.li3":
            "Design of modular workflow architectures and reusable sub-workflows for business processes and system integration.",

        "experience.prn.li4":
            "Analysis of PHC database behaviour, including triggers, stock operations, reservations and relationships between ERP documents.",


        /* MAGMA */

        "experience.magma.role":
            "Professional Internship",

        "experience.magma.p1":
            "Developed process automations with Google Apps Script, Google Sheets and scheduled triggers.",

        "experience.magma.p2":
            "Worked with digital forms using Alchemer and Google Forms, including conditional logic, validation and automatic response processing.",

        "experience.magma.p3":
            "Also contributed to low-code applications, data validation and reporting dashboards using Glide and Looker Studio.",


        /* IPP */

        "experience.ipp.role":
            "Research Fellow",

        "experience.ipp.company":
            "Polytechnic Institute of Porto",

        "experience.ipp.p1":
            "Worked on Moodle customization for Challenge-Based Learning and the creation and integration of interactive educational content.",

        "experience.ipp.p2":
            "Contributed to the adaptation of online courses related to Challenge-Based Learning and entrepreneurship.",


        /* IMDIGITAL */

        "experience.imdigital.role":
            "Backend Developer — Curricular Internship",

        "experience.imdigital.p1":
            "Worked as a backend developer on the digital transformation of a construction log platform using Odoo and Python.",

        "experience.imdigital.p2":
            "Developed CSV data import functionality, access permissions and PDF document generation for digital signature workflows.",


        /* MEDIASIS */

        "experience.mediasis.role":
            "ERP — Curricular Internship",

        "experience.mediasis.p1":
            "Worked with ERP GPAC support and configuration, including SQL queries for management reporting.",


        /* ================================================== */
        /* ABOUT */
        /* ================================================== */

        "about.title":
            "About",

        "about.p1":
            "I am a Software Developer based in Portugal focused on backend systems, process automation, enterprise integration and AI-assisted business workflows.",

        "about.p2":
            "My current work involves understanding existing business processes and systems, identifying their technical constraints and building solutions that connect automation, databases, APIs, ERP systems and AI.",

        "about.p3":
            "I also have experience in backend development, Retrieval-Augmented Generation, Model Context Protocol, microservices and web development.",

        "about.currentStack":
            "Current Stack",

        "about.alsoWorked":
            "Also Worked With",


        /* ================================================== */
        /* EDUCATION */
        /* ================================================== */

        "education.title":
            "Education & Research",

        "education.master.title":
            "Master's Degree in Computer Engineering",

        "education.master.school":
            "Polytechnic Institute of Porto — ESTG Felgueiras",

        "education.bachelor.title":
            "Bachelor's Degree in Computer Engineering",

        "education.bachelor.school":
            "Polytechnic Institute of Porto — ESTG Felgueiras",

        "education.professional.title":
            "Professional Course in Management and Programming of Computer Systems",

        "education.publication.label":
            "Publication",

        "education.publication.meta":
            "Co-author · International Journal of Technological Learning, Innovation and Development · 2026",

        "education.publication.description":
            "Research on the role of technology in Challenge-Based Learning, focusing on digital tools for collaboration, active learning and the scalability of educational practices.",

        "education.publication.link":
            "View Publication",


        /* ================================================== */
        /* OTHER PROJECTS */
        /* ================================================== */

        "projects.title":
            "Other Projects",


        "projects.electoral.title":
            "Microservices Digital Electoral Roll System",

        "projects.electoral.description":
            "System for the digitalization of electoral rolls using a microservices-based architecture.",


        "projects.construction.title":
            "Digital Construction Log",

        "projects.construction.description":
            "Continued development of a digital construction log prototype after the curricular internship. The project was presented at Aveiro Tech City 2023.",


        "projects.poap.title":
            "Web3 POAP Certificate Application",

        "projects.poap.period":
            "2022 — 2023 · Group Project",

        "projects.poap.description":
            "Web3 application for issuing Proof of Attendance Protocol certificates linked to blockchain-based digital assets.",


        "projects.android.title":
            "Student Life Management Android Application",

        "projects.android.period":
            "2022 — 2023 · Group Project",

        "projects.android.description":
            "Android application for managing school schedules, assessments, study sessions and communication between students. My main responsibility was the authentication system.",


        "projects.tickets.title":
            "Event Ticket Management Platform",

        "projects.tickets.period":
            "2021 · Group Project",

        "projects.tickets.description":
            "Web platform for managing cultural events, venues, capacity and ticket purchasing workflows.",


        "projects.hotel.title":
            "Hotel Management System",

        "projects.hotel.description":
            "Command-line application for managing hotel reservations and customers using structured programming.",


        "projects.upholstery.title":
            "Upholstery Product Management Software",

        "projects.upholstery.period":
            "2017 — 2018 · Professional Aptitude Project",

        "projects.upholstery.description":
            "Final Professional Aptitude Project focused on the development of software for managing upholstery products.",


        /* ================================================== */
        /* CONTACT */
        /* ================================================== */

        "contact.title":
            "Contact",

        "contact.message":
            "Interested in discussing software development, automation, system integration or applied AI?",

        "contact.email":
            "Email",


        /* ================================================== */
        /* FOOTER */
        /* ================================================== */

        "footer.copyright":
            "© 2026 Ricardo Silva. All rights reserved.",

        "footer.top":
            "Back to top"
    },


    pt: {
        pageTitle:
            "Ricardo Silva | Programador de Software",

        metaDescription:
            "Portefólio de Ricardo Silva, Programador de Software focado em desenvolvimento backend, automação, integração de sistemas e inteligência artificial.",

        "brand.role":
            "Programador de Software",

        "nav.ariaLabel":
            "Navegação principal",

        "nav.work":
            "Trabalho",

        "nav.experience":
            "Experiência",

        "nav.about":
            "Sobre",

        "nav.education":
            "Formação",

        "nav.projects":
            "Projetos",

        "nav.contact":
            "Contacto",


        /* ================================================== */
        /* HERO */
        /* ================================================== */

        "hero.kicker":
            "01 / Perfil",

        "hero.role":
            "Programador de Software",

        "hero.description":
            "Desenvolvimento de sistemas backend, automação de workflows, integrações empresariais e processos de negócio assistidos por inteligência artificial.",

        "hero.currently":
            "Atualmente",

        "hero.location":
            "Localização",

        "hero.work":
            "Ver Trabalho Selecionado",

        "hero.contact":
            "Contacto",

        "hero.focus":
            "Foco",

        "hero.focusValue":
            "Automação · Integração · IA Aplicada",

        "hero.imageAlt":
            "Retrato de Ricardo Silva",


        /* ================================================== */
        /* SELECTED WORK */
        /* ================================================== */

        "work.title":
            "Trabalho Selecionado",


        "work.order.title":
            "Processamento Inteligente de Encomendas",

        "work.order.p1":
            "Automação end-to-end para processar encomendas de clientes recebidas através de emails e documentos PDF.",

        "work.order.p2":
            "O workflow utiliza Galene AI para interpretar pedidos em linguagem natural, identificar clientes, referências de artigos, quantidades, preços e números de orçamento antes de validar e criar documentos no PHC.",

        "work.order.p3":
            "A solução inclui lógica de preços com múltiplas fontes, recorrendo ao histórico de orçamentos e encomendas, dados de faturação, preços de catálogo e consultas automáticas a fornecedores externos.",

        "work.order.p4":
            "Inclui também tratamento de ambiguidades, mecanismos de fallback, controlo transacional em SQL, notificações HTML automáticas e workflows e sub-workflows reutilizáveis.",


        "work.map.title":
            "Mapa de Contactos Comerciais",

        "work.map.p1":
            "Plataforma geográfica integrada com o PHC para explorar e priorizar aproximadamente 23 000 contactos empresariais.",

        "work.map.p2":
            "A aplicação classifica contactos de acordo com regras de negócio, como disponibilidade, visitas agendadas e interações comerciais recentes.",

        "work.map.p3":
            "Inclui APIs internas para detalhe de empresas, histórico de visitas, comentários e correção de geolocalização, bem como um pipeline de geocoding com normalização de moradas, cache, validação e auditoria.",

        "work.map.p4":
            "As queries SQL foram otimizadas para trabalhar com mais de um milhão de registos de visitas, recorrendo a carregamento progressivo e à separação entre dados leves para o mapa e informação completa da empresa.",


        "work.ai.title":
            "Assistente de Aprendizagem com IA",

        "work.ai.p1":
            "Projeto de dissertação de mestrado que integra o Moodle com um sistema de aprendizagem assistido por IA, baseado em Model Context Protocol e Retrieval-Augmented Generation.",

        "work.ai.p2":
            "O sistema utiliza materiais educativos como conhecimento contextual e modelos Google Gemini para gerar automaticamente conteúdos de aprendizagem, como resumos, quizzes e flashcards.",


        /* ================================================== */
        /* EXPERIENCE */
        /* ================================================== */

        "experience.title":
            "Experiência",

        "common.present":
            "Presente",


        /* PRN */

        "experience.prn.role":
            "Junior Software Developer",

        "experience.prn.description":
            "Desenvolvimento de automação de processos de negócio, integração com ERP, aplicações internas e workflows assistidos por IA, utilizando n8n, SQL Server, PHC, JavaScript, APIs REST e Galene AI.",

        "experience.prn.li1":
            "Desenvolvimento de um sistema automatizado de processamento de encomendas de clientes, integrando email, documentos PDF, IA, SQL Server e PHC.",

        "experience.prn.li2":
            "Desenvolvimento de uma plataforma geográfica comercial para aproximadamente 23 000 contactos empresariais.",

        "experience.prn.li3":
            "Desenho de arquiteturas modulares de workflows e sub-workflows reutilizáveis para processos de negócio e integração de sistemas.",

        "experience.prn.li4":
            "Análise do comportamento da base de dados do PHC, incluindo triggers, operações de stock, reservas e relações entre documentos do ERP.",


        /* MAGMA */

        "experience.magma.role":
            "Estágio Profissional",

        "experience.magma.p1":
            "Desenvolvimento de automações de processos com Google Apps Script, Google Sheets e triggers agendados.",

        "experience.magma.p2":
            "Trabalho com formulários digitais em Alchemer e Google Forms, incluindo lógica condicional, validação e processamento automático de respostas.",

        "experience.magma.p3":
            "Contribuição para aplicações low-code, validação de dados e dashboards de reporting com Glide e Looker Studio.",


        /* IPP */

        "experience.ipp.role":
            "Bolseiro de Investigação",

        "experience.ipp.company":
            "Instituto Politécnico do Porto",

        "experience.ipp.p1":
            "Trabalho na personalização do Moodle para Challenge-Based Learning e na criação e integração de conteúdos educativos interativos.",

        "experience.ipp.p2":
            "Contribuição para a adaptação de cursos online relacionados com Challenge-Based Learning e empreendedorismo.",


        /* IMDIGITAL */

        "experience.imdigital.role":
            "Backend Developer — Estágio Curricular",

        "experience.imdigital.p1":
            "Trabalho como backend developer na transformação digital de uma plataforma de livro de obra, utilizando Odoo e Python.",

        "experience.imdigital.p2":
            "Desenvolvimento de importação de dados CSV, permissões de acesso e geração de documentos PDF para fluxos de assinatura digital.",


        /* MEDIASIS */

        "experience.mediasis.role":
            "ERP — Estágio Curricular",

        "experience.mediasis.p1":
            "Trabalho com suporte e configuração do ERP GPAC, incluindo queries SQL para reporting de gestão.",


        /* ================================================== */
        /* ABOUT */
        /* ================================================== */

        "about.title":
            "Sobre",

        "about.p1":
            "Sou Programador de Software em Portugal, focado em sistemas backend, automação de processos, integração empresarial e workflows de negócio assistidos por inteligência artificial.",

        "about.p2":
            "O meu trabalho atual passa por compreender processos de negócio e sistemas existentes, identificar as suas limitações técnicas e desenvolver soluções que ligam automação, bases de dados, APIs, sistemas ERP e IA.",

        "about.p3":
            "Tenho também experiência em desenvolvimento backend, Retrieval-Augmented Generation, Model Context Protocol, microserviços e desenvolvimento web.",

        "about.currentStack":
            "Stack Atual",

        "about.alsoWorked":
            "Também Trabalhei Com",


        /* ================================================== */
        /* EDUCATION */
        /* ================================================== */

        "education.title":
            "Formação e Investigação",

        "education.master.title":
            "Mestrado em Engenharia Informática",

        "education.master.school":
            "Instituto Politécnico do Porto — ESTG Felgueiras",

        "education.bachelor.title":
            "Licenciatura em Engenharia Informática",

        "education.bachelor.school":
            "Instituto Politécnico do Porto — ESTG Felgueiras",

        "education.professional.title":
            "Curso Profissional de Técnico de Gestão e Programação de Sistemas Informáticos",

        "education.publication.label":
            "Publicação",

        "education.publication.meta":
            "Coautor · International Journal of Technological Learning, Innovation and Development · 2026",

        "education.publication.description":
            "Investigação sobre o papel da tecnologia no Challenge-Based Learning, com foco em ferramentas digitais para colaboração, aprendizagem ativa e escalabilidade de práticas educativas.",

        "education.publication.link":
            "Ver Publicação",


        /* ================================================== */
        /* OTHER PROJECTS */
        /* ================================================== */

        "projects.title":
            "Outros Projetos",


        "projects.electoral.title":
            "Sistema de Cadernos Eleitorais Digitais com Microserviços",

        "projects.electoral.description":
            "Sistema para desmaterialização de cadernos eleitorais utilizando uma arquitetura baseada em microserviços.",


        "projects.construction.title":
            "Livro de Obra Digital",

        "projects.construction.description":
            "Continuação do desenvolvimento de um protótipo de livro de obra digital após o estágio curricular. O projeto foi apresentado no Aveiro Tech City 2023.",


        "projects.poap.title":
            "Aplicação Web3 de Certificados POAP",

        "projects.poap.period":
            "2022 — 2023 · Projeto de Grupo",

        "projects.poap.description":
            "Aplicação Web3 para emissão de certificados Proof of Attendance Protocol associados a ativos digitais baseados em blockchain.",


        "projects.android.title":
            "Aplicação Android de Gestão da Vida Académica",

        "projects.android.period":
            "2022 — 2023 · Projeto de Grupo",

        "projects.android.description":
            "Aplicação Android para gestão de horários escolares, avaliações, sessões de estudo e comunicação entre estudantes. A minha principal responsabilidade foi o sistema de autenticação.",


        "projects.tickets.title":
            "Plataforma de Gestão de Bilhetes para Eventos",

        "projects.tickets.period":
            "2021 · Projeto de Grupo",

        "projects.tickets.description":
            "Plataforma web para gestão de eventos culturais, espaços, capacidade e fluxos de compra de bilhetes.",


        "projects.hotel.title":
            "Sistema de Gestão de Hotel",

        "projects.hotel.description":
            "Aplicação de linha de comandos para gestão de reservas e clientes de hotel utilizando programação estruturada.",


        "projects.upholstery.title":
            "Software de Gestão de Artigos para Estofos",

        "projects.upholstery.period":
            "2017 — 2018 · Prova de Aptidão Profissional",

        "projects.upholstery.description":
            "Projeto final da Prova de Aptidão Profissional focado no desenvolvimento de software para gestão de artigos para estofos.",


        /* ================================================== */
        /* CONTACT */
        /* ================================================== */

        "contact.title":
            "Contacto",

        "contact.message":
            "Interessado em falar sobre desenvolvimento de software, automação, integração de sistemas ou inteligência artificial aplicada?",

        "contact.email":
            "Email",


        /* ================================================== */
        /* FOOTER */
        /* ================================================== */

        "footer.copyright":
            "© 2026 Ricardo Silva. Todos os direitos reservados.",

        "footer.top":
            "Voltar ao topo"
    }
};


/* ================================================== */
/* LANGUAGE */
/* ================================================== */

function setLanguage(language) {
    const selectedTranslations = translations[language];

    if (!selectedTranslations) {
        return;
    }


    /* ================================================== */
    /* 1. TEXT CONTENT */
    /* ================================================== */

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;

        const translation = selectedTranslations[key];

        if (translation !== undefined) {
            element.textContent = translation;
        } else {
            console.warn(
                `Missing translation: ${language}.${key}`
            );
        }
    });


    /* ================================================== */
    /* 2. IMAGE ALT */
    /* ================================================== */

    document
        .querySelectorAll("[data-i18n-alt]")
        .forEach((element) => {
            const key = element.dataset.i18nAlt;

            const translation = selectedTranslations[key];

            if (translation !== undefined) {
                element.alt = translation;
            }
        });


    /* ================================================== */
    /* 3. ARIA LABELS */
    /* ================================================== */

    document
        .querySelectorAll("[data-i18n-aria-label]")
        .forEach((element) => {
            const key = element.dataset.i18nAriaLabel;

            const translation = selectedTranslations[key];

            if (translation !== undefined) {
                element.setAttribute(
                    "aria-label",
                    translation
                );
            }
        });


    /* ================================================== */
    /* 4. PAGE TITLE */
    /* ================================================== */

    document.title = selectedTranslations.pageTitle;


    /* ================================================== */
    /* 5. META DESCRIPTION */
    /* ================================================== */

    const metaDescription =
        document.querySelector("#meta-description");

    if (metaDescription) {
        metaDescription.setAttribute(
            "content",
            selectedTranslations.metaDescription
        );
    }


    /* ================================================== */
    /* 6. HTML LANGUAGE */
    /* ================================================== */

    document.documentElement.lang =
        language === "pt"
            ? "pt-PT"
            : "en";


    /* ================================================== */
    /* 7. ACTIVE BUTTON */
    /* ================================================== */

    document
        .querySelectorAll("[data-lang]")
        .forEach((button) => {
            const isActive =
                button.dataset.lang === language;

            button.classList.toggle(
                "active",
                isActive
            );

            button.setAttribute(
                "aria-pressed",
                isActive
            );
        });


    /* ================================================== */
    /* 8. SAVE PREFERENCE */
    /* ================================================== */

    localStorage.setItem(
        "portfolio-language",
        language
    );
}


/* ================================================== */
/* EVENTS */
/* ================================================== */

document
    .querySelectorAll("[data-lang]")
    .forEach((button) => {
        button.addEventListener(
            "click",
            () => {
                setLanguage(
                    button.dataset.lang
                );
            }
        );
    });


/* ================================================== */
/* INITIAL LANGUAGE */
/* ================================================== */

const savedLanguage =
    localStorage.getItem(
        "portfolio-language"
    );

setLanguage(
    savedLanguage || "en"
);