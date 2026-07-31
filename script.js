const WHATSAPP_URL = "https://wa.me/5533998347871?text=Ol%C3%A1%2C%20vim%20pelo%20portf%C3%B3lio%20da%20Geus%20e%20quero%20saber%20mais.";
const SMS_URL = "sms:+5533998347871";

const copy = {
  pt: {
    skip: "Ir para os projetos", navProjects: "Projetos", navMethod: "Método", navContact: "Contato", headerContact: "Falar agora",
    heroEyebrow: "Portfólio digital · projetos no ar", heroTitle: "Sites premium para seu negócio parecer <em>maior</em> no primeiro clique.",
    heroLead: "Criamos experiências digitais bonitas, rápidas e estratégicas para marcas no Brasil, nos Estados Unidos e na América do Sul.", viewProjects: "Ver projetos",
    heroProof: "Projetos publicados no Brasil, EUA e América do Sul.", liveCount: "projetos publicados",
    projectsKicker: "Projetos selecionados", projectsTitle: "O trabalho fala primeiro.", projectsIntro: "Uma curadoria de sites reais, publicados e construídos para transformar atenção em confiança.",
    projectGeusMeta: "Agência · Presença digital", projectGeusDesc: "A própria vitrine da Geus: posicionamento e estrutura comercial para transformar atenção em conversa.",
    projectMaidMeta: "Cleaning Services · EUA", projectMaidDesc: "Confiança rápida, leitura simples e uma experiência desenhada para conversão local.",
    projectDnaMeta: "Cleaning Services · EUA", projectDnaDesc: "Aparência profissional, clareza de serviço e um caminho rápido para solicitar orçamento.",
    projectBrasilMeta: "Cleaning Services · Florida", projectBrasilDesc: "Estrutura comercial direta para apresentar serviços, reforçar credibilidade e gerar contatos.",
    projectJanainaMeta: "Personal Trainer · Brasil", projectJanainaDesc: "Visual forte, autoridade pessoal e uma chamada clara para transformar interesse em conversa.",
    projectMercoMeta: "Logística · América do Sul", projectMercoDesc: "Ecossistema corporativo para logística internacional, conectando clareza institucional e operação B2B.", viewLive: "Ver projeto",
    principlesKicker: "O que existe em comum", principlesTitle: "Uma boa impressão não pode esperar.", principlesLead: "Cada site foi pensado para causar uma boa impressão rápido: visual bonito, leitura simples, confiança e caminho claro para contato.",
    principle1: "Visual que posiciona", principle2: "Mensagem fácil de entender", principle3: "Mobile desde o início", principle4: "Contato sem atrito",
    methodTitle: "Bonito, sim. Estratégico também.", methodIntro: "Um processo enxuto para transformar o que o negócio precisa comunicar em uma experiência que as pessoas entendem e lembram.",
    method1Title: "Diagnóstico", method1Desc: "Entendemos oferta, público, mercado e o próximo passo que o visitante deve dar.", method2Title: "Design e presença", method2Desc: "Criamos direção visual, hierarquia e conteúdo para transmitir valor com clareza.", method3Title: "Funil e contato", method3Desc: "Organizamos a experiência para reduzir dúvidas e aproximar a conversa comercial.", method4Title: "Otimização", method4Desc: "Revisamos responsividade, velocidade e detalhes antes de colocar o projeto no ar.",
    stat1: "projetos publicados", stat2: "mercados atendidos", moreKicker: "Mais projetos no ar", moreTitle: "Outras entregas publicadas.",
    contactKicker: "Seu próximo site", contactTitle: "Quer que seu site passe essa mesma impressão?", contactLead: "Conte o que você vende. A Geus transforma isso em uma presença digital que inspira confiança.", viewAgain: "Ver projetos novamente", directContact: "Contato direto:", footerText: "Sites premium para negócios que querem transmitir confiança."
  },
  en: {
    skip: "Skip to projects", navProjects: "Projects", navMethod: "Method", navContact: "Contact", headerContact: "Talk to us",
    heroEyebrow: "Digital portfolio · live projects", heroTitle: "Premium websites that make your business look <em>stronger</em> from the first click.",
    heroLead: "We build beautiful, fast and strategic digital experiences for businesses in the US, Brazil and South America.", viewProjects: "View projects",
    heroProof: "Live projects across the US, Brazil and South America.", liveCount: "live projects",
    projectsKicker: "Selected projects", projectsTitle: "The work speaks first.", projectsIntro: "A selection of real, live websites built to turn attention into trust.",
    projectGeusMeta: "Agency · Digital presence", projectGeusDesc: "Geus' own showcase: positioning and commercial structure designed to turn attention into conversations.",
    projectMaidMeta: "Cleaning Services · US", projectMaidDesc: "Fast trust, simple reading and an experience designed for local conversion.",
    projectDnaMeta: "Cleaning Services · US", projectDnaDesc: "Professional appearance, clear services and a fast path to request an estimate.",
    projectBrasilMeta: "Cleaning Services · Florida", projectBrasilDesc: "A direct commercial structure to present services, build credibility and generate leads.",
    projectJanainaMeta: "Personal Trainer · Brazil", projectJanainaDesc: "Strong visuals, personal authority and a clear path from interest to conversation.",
    projectMercoMeta: "Logistics · South America", projectMercoDesc: "A corporate ecosystem for international logistics, connecting institutional clarity and B2B operations.", viewLive: "See live project",
    principlesKicker: "What they share", principlesTitle: "A strong impression cannot wait.", principlesLead: "Every website is designed to make a strong impression fast: beautiful visuals, simple reading, trust and a clear path to contact.",
    principle1: "Visuals that position", principle2: "A message that reads clearly", principle3: "Mobile from the start", principle4: "Frictionless contact",
    methodTitle: "Beautiful, yes. Strategic too.", methodIntro: "A focused process that turns what a business needs to communicate into an experience people understand and remember.",
    method1Title: "Discovery", method1Desc: "We understand the offer, audience, market and the next step each visitor should take.", method2Title: "Design and presence", method2Desc: "We create the visual direction, hierarchy and content needed to communicate value clearly.", method3Title: "Funnel and contact", method3Desc: "We shape the experience to reduce doubt and move people closer to a business conversation.", method4Title: "Optimization", method4Desc: "We review responsiveness, speed and details before the project goes live.",
    stat1: "live projects", stat2: "markets served", moreKicker: "More live work", moreTitle: "Other published projects.",
    contactKicker: "Your next website", contactTitle: "Want your website to make this kind of impression?", contactLead: "Tell us what you sell. Geus turns it into a digital presence that inspires trust.", viewAgain: "View projects again", directContact: "Direct contact:", footerText: "Premium websites for businesses that want to inspire trust."
  }
};

function inferMarket() {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language || ""];
  const language = languages.join("|").toLowerCase();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  if (language.includes("pt") || timezone.startsWith("America/Sao_Paulo") || timezone.startsWith("Brazil/")) return "br";
  return "international";
}

const market = inferMarket();
const savedLanguage = localStorage.getItem("geus-language");
let language = savedLanguage || (market === "br" ? "pt" : "en");

function updateContactLinks() {
  const isTextMarket = market !== "br" && language === "en";
  document.querySelectorAll(".contact-link").forEach((link) => {
    link.href = isTextMarket ? SMS_URL : WHATSAPP_URL;
    if (link.target) link.target = isTextMarket ? "_self" : "_blank";
  });
  document.querySelectorAll(".contact-label").forEach((label) => {
    label.textContent = isTextMarket ? "Text us" : (language === "en" ? "WhatsApp" : "Falar no WhatsApp");
  });
  document.querySelectorAll(".whatsapp-alt").forEach((link) => { link.href = WHATSAPP_URL; });
}

function setLanguage(nextLanguage, persist = true) {
  language = nextLanguage === "en" ? "en" : "pt";
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en-US";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[language][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  document.title = language === "pt" ? "Geus — Sites Premium e Portfólio Digital" : "Geus — Premium Websites & Digital Portfolio";
  document.querySelector('meta[name="description"]').content = language === "pt"
    ? "Portfólio da Geus com sites publicados no Brasil, Estados Unidos e América do Sul."
    : "Geus portfolio featuring live websites built for businesses in the US, Brazil and South America.";
  updateContactLinks();
  const localizedMenuButton = document.querySelector(".menu-button");
  if (localizedMenuButton) {
    const expanded = localizedMenuButton.getAttribute("aria-expanded") === "true";
    localizedMenuButton.setAttribute("aria-label", expanded ? (language === "pt" ? "Fechar menu" : "Close menu") : (language === "pt" ? "Abrir menu" : "Open menu"));
  }
  if (persist) localStorage.setItem("geus-language", language);
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", language === "pt" ? "Abrir menu" : "Open menu");
  mobileMenu.hidden = true;
  document.body.classList.remove("menu-open");
}
menuButton.addEventListener("click", () => {
  const shouldOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(shouldOpen));
  menuButton.setAttribute("aria-label", shouldOpen ? (language === "pt" ? "Fechar menu" : "Close menu") : (language === "pt" ? "Abrir menu" : "Open menu"));
  mobileMenu.hidden = !shouldOpen;
  document.body.classList.toggle("menu-open", shouldOpen);
});
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: "0px 0px -8%", threshold: .08 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const hero = document.querySelector(".hero");
document.body.classList.add("hero-visible");
const heroObserver = new IntersectionObserver(([entry]) => {
  document.body.classList.toggle("hero-visible", entry.isIntersecting);
}, { threshold: .08 });
heroObserver.observe(hero);

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(language, false);
