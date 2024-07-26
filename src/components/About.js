import React, { useState } from 'react';

// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

// imports dos icons
const htmlIcon       = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg';
const cssIcon        = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg';
const jsIcon         = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg';
const nodeIcon       = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg';
const reactIcon      = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg';
const tsIcon         = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg';
const phpIcon        = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg';
const yiiIcon        = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yii/yii-plain-wordmark.svg';
const postgresqlIcon = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg';
const redisIcon      = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain.svg';
const dockerIcon     = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg';
const prismaIcon     = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg';
const gitIcon        = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg';
const githubIcon     = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';
const sqlserverIcon  = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg';

const technologies = [
  { 
      id: 'html', 
      name: 'HTML', 
      description: 'Linguagem de marcação usada para estruturar o conteúdo na web. Define a estrutura básica das páginas da web, utilizando tags para elementos como títulos, parágrafos e imagens.', 
      icon: htmlIcon 
  },

  { 
      id: 'css', 
      name: 'CSS', 
      description: 'Folhas de estilo usadas para controlar a apresentação visual de páginas HTML. Permite estilizar elementos da web com cores, layouts, fontes e outras propriedades visuais.', 
      icon: cssIcon 
  },

  { 
      id: 'javascript', 
      name: 'Javascript', 
      description: 'Linguagem de programação usada para criar interatividade em páginas web. Permite manipular o DOM, fazer requisições assíncronas e adicionar comportamentos dinâmicos aos sites.', 
      icon: jsIcon 
  },

  { 
      id: 'typescript', 
      name: 'Typescript', 
      description: 'Superset de JavaScript que adiciona tipagem estática opcional. Ajuda a detectar erros no tempo de desenvolvimento, tornando o código mais robusto e fácil de manter.', 
      icon: tsIcon 
  },

  { 
      id: 'nodejs', 
      name: 'NodeJS', 
      description: 'Ambiente de execução JavaScript no lado do servidor. Permite construir aplicações escaláveis e de alta performance com JavaScript fora do navegador.', 
      icon: nodeIcon 
  },

  { 
      id: 'reactjs', 
      name: 'ReactJS', 
      description: 'Biblioteca JavaScript para construir interfaces de usuário. Facilita a criação de componentes reutilizáveis e a gestão do estado em aplicações web interativas.', 
      icon: reactIcon 
  },

  { 
      id: 'php', 
      name: 'PHP', 
      description: 'Linguagem de script de propósito geral voltada para o desenvolvimento web. Executada no servidor, é amplamente usada para construir sites dinâmicos e aplicações web.', 
      icon: phpIcon 
  },

  { 
      id: 'yii', 
      name: 'Yii', 
      description: 'Framework PHP de alta performance para desenvolvimento web. Segue o padrão MVC, facilitando a criação de aplicações web robustas e seguras com rapidez.', icon: yiiIcon 
  },

  { 
      id: 'postgresql', 
      name: 'PostgreSQL', 
      description: 'Sistema de gerenciamento de banco de dados relacional avançado. Conhecido por sua robustez, extensibilidade e conformidade com SQL.', 
      icon: postgresqlIcon 
  },

  { 
      id: 'redis', 
      name: 'Redis', 
      description: 'Armazenamento de estrutura de dados em memória, usado como banco de dados, cache e broker de mensagens. Oferece alta performance e suporte a estruturas de dados complexas.', 
      icon: redisIcon 

  },

  { 
      id: 'docker', 
      name: 'Docker', 
      description: 'Plataforma para criar, gerenciar e executar contêineres. Facilita o desenvolvimento, a entrega e a execução de aplicações de forma consistente em diferentes ambientes.', 
      icon: dockerIcon 
  },

  { 
      id: 'git', 
      name: 'Git', 
      description: 'Sistema de controle de versão distribuído. Permite gerenciar o histórico de mudanças do código, facilitando a colaboração e o desenvolvimento em equipe.', 
      icon: gitIcon 
  },

  { 
      id: 'github', 
      name: 'Github', 
      description: 'Plataforma de hospedagem de código-fonte com controle de versão usando Git. Facilita a colaboração, revisão de código e gerenciamento de projetos open-source.', 
      icon: githubIcon 
  },

  { 
      id: 'prisma', 
      name: 'Prisma', 
      description: 'ORM (Object-Relational Mapping) para Node.js e TypeScript. Simplifica o acesso ao banco de dados com uma API intuitiva e tipada.', 
      icon: prismaIcon 
  },

  { 
      id: 'sqlserver', 
      name: 'Microsoft SQL Server', 
      description: 'Sistema de gerenciamento de banco de dados relacional desenvolvido pela Microsoft. Oferece uma gama de ferramentas e serviços para armazenamento, consulta e gerenciamento de dados.', 
      icon: sqlserverIcon 
  },

];

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div className="tech-stack">
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className={`tech-item ${selectedTech === tech.id ? 'active' : ''}`}
            onClick={() => setSelectedTech(tech.id)}
          >
            <img src={tech.icon} alt={tech.name} />
          </div>
        ))}
      </div>
      {selectedTech && (
        <div className="tech-description">
          <h3><strong>{technologies.find((tech) => tech.id === selectedTech).name}</strong></h3>
          <p>{technologies.find((tech) => tech.id === selectedTech).description}</p>
        </div>
      )}
    </div>
  );
};


const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* coluna esquerda: sobre */}
          <motion.div 
            variants={ fadeIn('right', 0.3) }
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            
            <h2 className='h2 text-accent'>
              Sobre mim
            </h2>
            <h3 className='h3 mb-4'>
              Sou um Desenvolvedor Web FullStack construindo e gerenciando aplicações web diariamente.  
            </h3>
            <p className='mb-6'>
              Minha primeira experiência com programação foi no Insituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul, onde me formei técnico em Automação Industrial.
              Passei pelo curso de Engenharia de Controle e Automação na UFRGS, mas atualmente faço Ciência da Computação também na UFRGS. 
              
            </p>
          </motion.div>

          {/* coluna direita: stacks */}
          <motion.div 
            variants={ fadeIn('left', 0.5) }
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>
              Tecnologias e Ferramentas
            </h2>
            <p>Clique na tecnologia para ver mais detalhes*</p>

            {/* seção de tecnologias */}
            <TechStack />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
