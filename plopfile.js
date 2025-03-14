const path = require('path');

module.exports = function (plop) {
    // ---------------------
    // 1. Helpers
    // ---------------------
    plop.setHelper('dataBr', () => {
        return new Date().toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    });

    // ---------------------
    // 2. Gerador: Component (Global)
    //    Gera um componente em `src/components/`
    // ---------------------
    plop.setGenerator('component', {
        description: 'Gerar novo componente React com TS + teste + story (GLOBAL)',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Nome do componente:',
            },
            {
                type: 'input',
                name: 'author',
                message: 'Autor do componente:',
                default: 'Jean Paul | jeanpaulwebb@gmail.com',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Descrição do componente:',
                default: 'Descrição do componente',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'plop-templates/component/component.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
                templateFile: 'plop-templates/component/component.test.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'plop-templates/component/component.stories.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
                templateFile: 'plop-templates/component/component.module.css.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/index.ts',
                templateFile: 'plop-templates/component/index.ts.hbs'
            }
        ]
    });

    // ---------------------
    // 3. Gerador: Create Feature
    //    Cria a pasta e subpastas: components/, pages/, hooks/, services/, store/, + index.ts
    // ---------------------
    plop.setGenerator('createFeature', {
        description: 'Cria uma nova feature em src/features/ com subpastas padrão',
        prompts: [
            {
                type: 'input',
                name: 'featureName',
                message: 'Nome da feature (ex.: auth, product):',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/components/.gitkeep',
                templateFile: 'plop-templates/empty.hbs',
                skipIfExists: true
            },
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/pages/.gitkeep',
                templateFile: 'plop-templates/empty.hbs',
                skipIfExists: true
            },
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/hooks/.gitkeep',
                templateFile: 'plop-templates/empty.hbs',
                skipIfExists: true
            },
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/services/.gitkeep',
                templateFile: 'plop-templates/empty.hbs',
                skipIfExists: true
            },
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/store/.gitkeep',
                templateFile: 'plop-templates/empty.hbs',
                skipIfExists: true
            },
            {
                // Cria o index.ts base para a feature utilizando o template featureIndex.ts.hbs
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/index.ts',
                templateFile: 'plop-templates/featureIndex.ts.hbs',
                skipIfExists: true
            }
        ],
    });

    // ---------------------
    // 4. Gerador: Feature Component
    //    Cria um componente React TS (teste, story, css) em
    //    src/features/<feature>/components/<ComponentName>/,
    //    e atualiza o index.ts com a exportação correta.
    // ---------------------
    plop.setGenerator('feature-component', {
        description: 'Cria um componente React TS (teste, story, css) em src/features/<feature>/components/<ComponentName>/',
        prompts: [
            {
                type: 'input',
                name: 'featureName',
                message: 'Nome da feature (ex.: auth):',
            },
            {
                // Usamos "name" para reutilizar os templates que usam {{pascalCase name}}
                type: 'input',
                name: 'name',
                message: 'Nome do componente (ex.: LoginForm):',
            },
            {
                type: 'input',
                name: 'author',
                message: 'Autor do componente:',
                default: 'Jean Paul | jeanpaulwebb@gmail.com',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Descrição do componente:',
                default: 'Descrição do componente da feature',
            },
        ],
        actions: [
            // Cria o arquivo principal (.tsx) dentro da pasta do componente
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'plop-templates/component/component.tsx.hbs'
            },
            // Cria o arquivo de teste (.test.tsx)
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
                templateFile: 'plop-templates/component/component.test.tsx.hbs'
            },
            // Cria o arquivo de story (.stories.tsx)
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'plop-templates/component/component.stories.tsx.hbs'
            },
            // Cria o arquivo de CSS Module (.module.css)
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
                templateFile: 'plop-templates/component/component.module.css.hbs'
            },
            // Cria o index.ts na pasta de components se não existir, com um marcador para injeção
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/components/index.ts',
                template: '/* PLOP_INJECT_EXPORTS */\n',
                skipIfExists: true
            },
            // Append: Adiciona a exportação do novo componente no index.ts, apontando para sua pasta
            {
                type: 'append',
                path: 'src/features/{{kebabCase featureName}}/components/index.ts',
                pattern: /\/\* PLOP_INJECT_EXPORTS \*\//,
                template: "export { default as {{pascalCase name}} } from './{{pascalCase name}}/{{pascalCase name}}';\n"
            }
        ]
    });
};