function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "SOBRE")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTATO"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "daniel", /*#__PURE__*/

    React.createElement("strong", null, "Watanabe")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Programador"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "que adora desafios"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " aprender.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "entre em contato")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Quem é esse cara?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Meu nome é Daniel Takeshi."), /*#__PURE__*/
    React.createElement("p", null, "Eu sou um programador e engenheiro brasileiro, atualmente moro em Curitiba - PR."), /*#__PURE__*/

    React.createElement("p", null, "Como hobby eu gosto de fazer trilhas, viajar, jogar futebol, ler no Kindle e encontrar com amigos e família."), /*#__PURE__*/

    React.createElement("p", null, "Eu adoro resolver desafios e aprender com eles. Durante a minha experiência na área de tecnologias industriais, tive a oportunidade de aplicá-las para criar soluções para as empresas e seus clientes, sendo necessário aprender novos conhecimentos constantemente. Que variavam de processamento de imagem à comunicação em protocolos e meios físicos distintos.")), /*#__PURE__*/
    

    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Qual é a formação acadêmica?"), /*#__PURE__*/

    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("p", null, "Graduado em Engenharia Elétrica pela Universidade Federal do Paraná (UFPR) em 2015."), /*#__PURE__*/

    React.createElement("p", null, "Pós graduação em Automação Industrial pela Universidade Tecnológica do Paraná em 2019."), /*#__PURE__*/

    React.createElement("p", null, "Inglês Fluente (Escola ClassMate), Francês básico (Aliança Francesa), Japonês básico (Escola Bunkyou) e Espanhol Básico (Centro de Línguas e Interculturalidade da UFPR - CELIN UFPR).")), /*#__PURE__*/



    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "O que ele faz?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Sou um programador."), /*#__PURE__*/
    React.createElement("p", null, "Desenvolvimento de sistemas embarcados com C++, Python ou Lua. Com projetos como Sistemas de Visão 2D e 3D, leitor RFID, comunicação com protocolos industriais, nuvem de pontos de scanner de segurança para AGVs, etc."), /*#__PURE__*/




    React.createElement("p", null, "No desenvolvimento web foram utilizados templates do Themeforest e Codepen para o Front-end (CSS e HTML5) e para o Backend PHP (Laravel) e JS. Realizando o gerenciamento do website pelo CPanel, Resolvedor DNS (Cloudflare), e-mails e domínio. Já utilizei CMS Wordpress, Shopify e Wix."), /*#__PURE__*/

    React.createElement("p", null, "Conhecimento básico como administrador de sistemas de Windows Server 2016, Windows 10 LTSB, Ubuntu e CPanel Linux."), /*#__PURE__*/

    React.createElement("p", null, "Para automação das tarefas diárias, já programei em VBA, Powershell, Microsoft Power Apps, AutoIT e batch file."), /*#__PURE__*/

    React.createElement("p", null, "Outros conhecimentos: programação em Ladder e STL (CLP), tradução de projetos Open Source no Transifex, tradução do regex101.com, conhecimento sobre os softwares Matlab, Photoshop, Adobe Fireworks, GIMP, Inkscape e After Effects, programação de protótipos no Arduino e Raspberry PI, escrever TCC na norma ABNT em LaTeX.")), /*#__PURE__*/





    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Também um engenheiro."), /*#__PURE__*/
    React.createElement("p", null, "Trabalhei com tecnologias novas e projetos industriais, creio que a experiência de projetos na engenharia não é diferente da programação. Por exemplo, ao construir uma fábrica nova você inicia pelas utilidades (energia, água, insumos) e depois o processo utiliza o produto das utilidades. Na programação o mesmo ocorre, ao fazer um website é necessário primeiro definir as utilidades (email, mapa, APIs, banco de dados) para depois programar as funcionalidades."), /*#__PURE__*/

    React.createElement("p", null, "Na manutenção também é análogo, em que devemos realizá-la com cautela e de maneira organizada, comunicando entre todos os setores, pois a fábrica não pode parar. O mesmo ocorre na manutenção de aplicativos ou sistemas operando."), /*#__PURE__*/


    React.createElement("p", null, "A experiência de programação de sistemas embarcados forneceu uma visão boa da otimização, pois em muitas aplicações o tempo de processamento deve ser menor do que 50 ms e o custo do processador baixo. O contato direto com clientes e vendedores me ensinou a me comunicar melhor."))))));


};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    laravel: 'fab fa-laravel',
    php: 'fab fa-php',
    node: 'fab fa-node',
    markdown: 'fa-brands fa-markdown',
    linux: 'fa-brands fa-linux',
    python: 'fa-brands fa-python',
    html: 'fa-brands fa-html5' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';
  const linktxt = props.linktxt;
  const repotxt = props.repotxt;

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, linktxt, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, repotxt, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));




};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Meus Projetos"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Aqui está uma lista de ", /*#__PURE__*/
    React.createElement("u", null, "parte"), " dos projetos que trabalhei, muitos não possuem acesso ao código fonte por questões de confidencialidade.")), /*#__PURE__*/




    /*
      HeeVo e Pegameds
    */

    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Marketplace",
      img: 'img/Pegameds.jpg',
      tech: "php laravel js html css",
      linktxt: "Website",
      link: "https://pegameds.com.br",
      repotxt: "Heevo",
      repo: "https://heevo.life" }, /*#__PURE__*/

    React.createElement("small", null, "PHP, Laravel, JS, HTML5 e CSS."), /*#__PURE__*/
    React.createElement("p", null, "Desenvolvimento full-stack de marketplace de farmácias, com visão computacional, algoritmos de pesquisa, geolocalização, AdminLTE e integração com meio de pagamento.")), /*#__PURE__*/


    /*
      Slicer de Frango
    */

      React.createElement(Project, {
        title: "Slicer 3D",
        img: 'img/slicer.jpg',
        tech: "js css html",
        linktxt: "Source",
        link: "https://github.com/danieltak/3DSlicer",
        repotxt: "Application Page",
        repo: "https://www.sick.com/br/en/industries/food-and-beverage/food-process/meat-and-cheese-slicer/optimization-of-the-cutting-process-using-3d-vision/c/p514222" }, /*#__PURE__*/
  
      React.createElement("small", null, "Lua, TS, JS, HTML5 e CSS."), /*#__PURE__*/
      React.createElement("p", null, "Desenvolvimento de um slicer 3D de carnes, para obter o volume e local de corte a fim de otimizar o corte de frangos, criando um subproduto de tiras de frango. Programa feito em Lua, CSS e HTML no AppStudio da SICK Ag.")), /*#__PURE__*/
  

    /*
      Web Crawler Bulario
    */

      React.createElement(Project, {
        title: "Web Crawler Bulário",
        img: 'img/web-crawler.png',
        tech: "python linux",
        linktxt: "Selenium",
        link: "https://www.selenium.dev/",
        repotxt: "Bulário - Anvisa",
        repo: "https://consultas.anvisa.gov.br/#/bulario/" }, /*#__PURE__*/
  
      React.createElement("small", null, "Python, Linux e Selenium."), /*#__PURE__*/
      React.createElement("p", null, "Criação de um Web crawler (spider) com o Python Selenium no SO Ubuntu para o download de bulas no bulário da Anvisa.")), /*#__PURE__*/

    /*
      LMS SICK Example
    */

      React.createElement(Project, {
        title: "2D LiDAR LMS Telegram Example",
        img: 'img/PCLVisualizer.png',
        tech: "python",
        linktxt: "Source",
        link: "https://github.com/danieltak/py-LMS-sick-telegram-example",
        repotxt: "Telegram Listing",
        repo: "https://cdn.sick.com/media/docs/7/27/927/technical_information_telegram_listing_ranging_sensors_lms1xx_lms5xx_tim2xx_tim5xx_tim7xx_lms1000_mrs1000_mrs6000_nav310_ld_oem15xx_ld_lrs36xx_lms4000_en_im0045927.pdf" }, /*#__PURE__*/
  
      React.createElement("small", null, "Python."), /*#__PURE__*/
      React.createElement("p", null, "Desenvolvimento de um programa de exemplo de Telegrams do sensor 2D LiDAR LMSxxx da Sick Ag para obter nuvens de pontos com a biblioteca PCL. Os dados são recebidos em HEX por comunicação Ethernet TCP/IP em coordenadas polares.")), /*#__PURE__*/


    /*
      RFU RFID
    */

      React.createElement(Project, {
        title: "RFID RFU63x Telegram Example",
        img: 'img/RFID_logo.jpg',
        tech: "python",
        linktxt: "Source",
        link: "https://github.com/danieltak/py-rfu-telegram-sick",
        repotxt: "Produto",
        repo: "https://www.sick.com/br/pt/solucoes-de-identificacao/rfid/rfu63x/rfu630-13100/p/p258283" }, /*#__PURE__*/
  
      React.createElement("small", null, "Python."), /*#__PURE__*/
      React.createElement("p", null, "Desenvolvimento de um programa de exemplo de Telegrams para o leitura/escrita de Tags RFID do modelo RFU63x da Sick Ag pelo protocolo de comunicação Ethernet TCP/IP.")), /*#__PURE__*/


    /*
      Ogame
    */

    React.createElement(Project, {
      title: "Ogame Galaxy Tool.",
      img: 'img/Ogame.jpg',
      tech: "php js css",
      linktxt: "Website",
      link: "http://www.galaxytool.eu/",
      repotxt: "Source",
      repo: "https://github.com/supermopf/galaxytool" }, /*#__PURE__*/

    React.createElement("small", null, "PHP, JS e CSS."), /*#__PURE__*/
    React.createElement("p", null, "Implementação de ferramenta auxiliar para o jogo Ogame.")),


    /*
      Awesome LMS Point Cloud
    */

      React.createElement(Project, {
        title: "Awesome LiDAR Point Cloud",
        img: 'img/Registration_outdoor.png',
        tech: "markdown",
        linktxt: "Source",
        link: "https://github.com/danieltak/awesome-sick-lms-point-cloud",
        repotxt: "Produto",
        repo: "https://www.sick.com/br/en/detection-and-ranging-solutions/2d-lidar-sensors/c/g91900" }, /*#__PURE__*/
  
      React.createElement("small", null, "Markdown."), /*#__PURE__*/
      React.createElement("p", null, "Criação de lista Awesome do Github a partir de estudos sobre os sensores 2D LiDAR da SICK Ag para a criação de nuvens de pontos.")), /*#__PURE__*/


    /*
      Projetos Engenharia
    */
    
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Projetos Engenharia"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", {className: "flexcards-wrapper"},

    React.createElement('input', { className: 'radio', type: 'radio', id: 'card-1', name:'card', defaultChecked: true }),
    React.createElement("label", {className: "content", htmlFor: 'card-1'},
    React.createElement("span", { className: "icon" }, /*#__PURE__*/
    React.createElement('i', {className:'fa-solid fa-truck'})),
    React.createElement("h3", {className: "card-title"}, 
    React.createElement("span", { className: "subtitle" }, 'Projeto, instalação e configuração'), /*#__PURE__*/
    'Leitor de códigos 1D e 2D em distribuidor logístico')),
  
    React.createElement('input', { className: 'radio', type: 'radio', id: 'card-2', name:'card'}),
    React.createElement("label", {className: "content", htmlFor: 'card-2'},
    React.createElement("span", { className: "icon" }, /*#__PURE__*/
    React.createElement('i', {className:'fa-solid fa-burst'})),
    React.createElement("h3", {className: "card-title"}, 
    React.createElement("span", { className: "subtitle" }, 'Projeto, instalação e configuração'), /*#__PURE__*/
    'Anti-colisão de Portainers com sensor Radar')),

    React.createElement('input', { className: 'radio', type: 'radio', id: 'card-3', name:'card'}),
    React.createElement("label", {className: "content", htmlFor: 'card-3'},
    React.createElement("span", { className: "icon" }, /*#__PURE__*/
    React.createElement('i', {className:'fa-solid fa-check'})),
    React.createElement("h3", {className: "card-title"}, 
    React.createElement("span", { className: "subtitle" }, 'Projeto, instalação e programação'), /*#__PURE__*/
    'Leitura e validação de código único na indústria farmacêutica')),

    React.createElement('input', { className: 'radio', type: 'radio', id: 'card-4', name:'card'}),
    React.createElement("label", {className: "content", htmlFor: 'card-4'},
    React.createElement("span", { className: "icon" }, /*#__PURE__*/
    React.createElement('i', {className:'fas fa-sun'})),
    React.createElement("h3", {className: "card-title"}, 
    React.createElement("span", { className: "subtitle" }, 'Programação'), /*#__PURE__*/
    'Máquina de Fenação (Haying)')),

    React.createElement('input', { className: 'radio', type: 'radio', id: 'card-5', name:'card' }),
    React.createElement("label", {className: "content", htmlFor: 'card-5'},
    React.createElement("span", { className: "icon" }, /*#__PURE__*/
    React.createElement('i', {className:'fa-solid fa-bolt'})),
    React.createElement("h3", {className: "card-title"}, 
    React.createElement("span", { className: "subtitle" }, 'Projeto e montagem'), /*#__PURE__*/
    'Painéis elétricos de automação e emergência')),

    React.createElement('input', { className: 'radio', type: 'radio', id: 'card-6', name:'card'}),
    React.createElement("label", {className: "content", htmlFor: 'card-6'},
    React.createElement("span", { className: "icon" }, /*#__PURE__*/
    React.createElement('i', {className:'fa-solid fa-atom'})),
    React.createElement("h3", {className: "card-title"}, 
    React.createElement("span", { className: "subtitle" }, 'Projeto e Programação'), /*#__PURE__*/
    'Sistema SDCD 800xA da ABB para Automação de Processos')),
  
  
    )))));


};




/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "web", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "yagoestevez", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Yago Est\xE9vez."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://twitter.com/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://codepen.io/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-codepen" }))));



};


/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {

    return /*#__PURE__*/(
      
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/

      React.createElement(Footer, null))

      );
      

  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));