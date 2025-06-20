angular.module('AppCurriculo').service('curriculoService',function(){
    var service = {
        dadosGerais,
        conhecimentos,
        experiencias,
        certificados
    };

    return service;

    function dadosGerais (){
        return {
            nome: 'Rafael de Oliveira Luna',
            cargoAtual: 'Product Owner | EAÍ?! Content Experience',
            endereco: 'Taboão da Serra - SP',
            email: 'rafael_luna_2025@outlook.com.br',
            telefone: '(11) 94894-4004',
            github: 'https://github.com/rafaelluuna'
        };
    }

    function conhecimentos (){
        return [
            {
                title: 'Frameworks',
                content: '.NET, Angular, AngularJS, Django, Flask, bootstrap'
            },
            {
                title: 'Linguagens',
                content: 'C#, JavaScript, HTML, SQL, PHP, Python, VBA (para autmação e tratamento de dados)'
            },
            {
                title: 'Tecnologias',
                content: 'AWS (EC2, buckets e RDS), IIS (básico), NGINX (básico), Gunicorn, Apache (básico), Git e GitHub'
            },
            {
                title: 'Conhecimentos e habilidades',
                content: 'Metodologias ágeis, banco de dados relacional, Programação orientada a objetos, frameworks MVC, normas de commit, inglês intermediário'
            }
        ];
    }

    function experiencias (){
        return {
            profissional: [
                {
                    id: 0,
                    title: 'Product Owner | EAÍ?! Content Experience | 2021 - atual',
                    description: 'Como product Owner, tenho a oportunidade de acompanhar todo o processo de desenvolvimento na prática. Desde o planejamento até ao deploy em produção.',
                    details: [
                        {
                            id: 0,
                            title: 'Experiências neste cargo:',
                            contentUrl: 'app/curriculo/experiencias/EAI_experiencias.html'
                        }
                    ]
                },
            ],
            
            academico: [
                {
                    id: 1,
                    title: 'Faculdade de Análise e Desenvolvimento de Sistemas | uniFECAF | 2024 - 2026',
                    description: `Através dos materias da grade curricular e das experiências com outros alunos e professores, pude desenvolver minha habilidade técnica e trabalhar com as mais diversas tecnologias.`,
                    details: [
                        {
                            id: 0,
                            title: 'Projetos e atividades realizados no curso:',
                            contentUrl: 'app/curriculo/experiencias/FECAF_projetos.html'
                        },
                        {
                            id: 1,
                            title: 'Algumas das certificações adquiridas neste curso envolvem:',
                            contentUrl: 'app/curriculo/experiencias/FECAF_certificados.html'
                        }
                    ]
                },
                
            ],
            
            pessoal: [
                {
                    id: 2,
                    title: 'Sistema MVC em php feito do zero',
                    description: 'Meu primeiro desenvolvimento web onde escrevi um framework MVC do absoluto zero utilizando PHP.',
                    details: [
                        {
                            id: 0,
                            title: 'Mais informações sobre o projeto',
                            contentUrl: 'app/curriculo/experiencias/PESSOAL_MVCPHP.html'
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Bot automatizado para jogos online',
                    description: 'Bot desenvolvido em python para automatizar a rotina de um jogo online. Ele utiliza de técnicas básicas de machine learning utilizando bibliotecas como Keras e Numpy',
                    details: [
                        {
                            id: 0,
                            title: 'Mais informações sobre o projeto',
                            contentUrl: 'app/curriculo/experiencias/PESSOAL_BotBlaze.html'
                        }
                    ]
                }
                
            ]
            
        };
    }

    function certificados (){
        return {
            fecaf: [
                {
                    name: 'Agile Methods',
                    progress: 100
                },
                {
                    name: 'Database Modeling & SQL',
                    progress: 100
                },
                {
                    name: 'Cyber Security',
                    progress: 90
                },
                {
                    name: 'Computer Network',
                    progress: 90
                },
                {
                    name: 'Server and Data Center Administration',
                    progress: 90
                },
                {
                    name: 'Data Structure Strategy and Implementation',
                    progress: 0
                },
                {
                    name: 'Software Engineering',
                    progress: 0
                },
                {
                    name: 'UX/UI Design & Design Thinking',
                    progress: 0
                },
                {
                    name: 'Machine Learning & CHATBOT',
                    progress: 0
                },
                {
                    name: 'Web Programming for Back End',
                    progress: 0
                },
                {
                    name: 'Web Programming for Front End',
                    progress: 0
                },
                {
                    name: 'Design Web',
                    progress: 0
                },
                {
                    name: 'Disruptive Architectures: IOT, Big Data e IA',
                    progress: 0
                },
                {
                    name: 'Quality Assurance',
                    progress: 0
                }   
            ]
        };
    }
})