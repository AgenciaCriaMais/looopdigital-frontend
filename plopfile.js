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
    //    Cria a pasta e subpastas + arquivos default (page/hook/service/store)
    //    e index.ts para cada subpasta, injetando exports
    // ---------------------
    plop.setGenerator('createFeature', {
        description: 'Cria uma nova feature em src/features/ com subpastas padrão e arquivos iniciais',
        prompts: [
            {
                type: 'input',
                name: 'featureName',
                message: 'Nome da feature (ex.: auth, product):',
            },
        ],
        actions: [
            // 3.1) Criar a pasta de components com .gitkeep
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/components/.gitkeep',
                templateFile: 'plop-templates/empty.hbs',
                skipIfExists: true
            },
            // 3.2) Criar a pasta de pages e um arquivo default ({{pascalCase featureName}}Page.tsx)
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/pages/{{pascalCase featureName}}Page.tsx',
                templateFile: 'plop-templates/page/default.hbs',
                skipIfExists: true
            },
            // 3.2.1) index.ts de pages com marcador
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/pages/index.ts',
                templateFile: 'plop-templates/page/index.ts.hbs',
                skipIfExists: true
            },
            // 3.2.2) append no index de pages exportando a page default
            {
                type: 'append',
                path: 'src/features/{{kebabCase featureName}}/pages/index.ts',
                pattern: /\/\* PLOP_INJECT_EXPORTS \*\//,
                template: "export { default as {{pascalCase featureName}}Page } from './{{pascalCase featureName}}Page';\n"
            },

            // 3.3) Criar a pasta hooks e um arquivo default (use{{pascalCase featureName}}.ts)
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/hooks/use{{pascalCase featureName}}.ts',
                templateFile: 'plop-templates/hook/default.hbs',
                skipIfExists: true
            },
            // 3.3.1) index.ts de hooks com marcador
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/hooks/index.ts',
                templateFile: 'plop-templates/hook/index.ts.hbs',
                skipIfExists: true
            },
            // 3.3.2) append no index de hooks exportando o hook default
            {
                type: 'append',
                path: 'src/features/{{kebabCase featureName}}/hooks/index.ts',
                pattern: /\/\* PLOP_INJECT_EXPORTS \*\//,
                template: "export { default as use{{pascalCase featureName}} } from './use{{pascalCase featureName}}';\n"
            },

            // 3.4) Criar a pasta services e um arquivo default ({{camelCase featureName}}Service.ts)
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/services/{{camelCase featureName}}Service.ts',
                templateFile: 'plop-templates/service/default.hbs',
                skipIfExists: true
            },
            // 3.4.1) index.ts de services com marcador
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/services/index.ts',
                templateFile: 'plop-templates/service/index.ts.hbs',
                skipIfExists: true
            },
            // 3.4.2) append no index de services exportando o service default
            {
                type: 'append',
                path: 'src/features/{{kebabCase featureName}}/services/index.ts',
                pattern: /\/\* PLOP_INJECT_EXPORTS \*\//,
                template: "export { default as {{camelCase featureName}}Service } from './{{camelCase featureName}}Service';\n"
            },

            // 3.5) Criar a pasta store e um arquivo default ({{camelCase featureName}}Slice.ts)
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/store/{{camelCase featureName}}Slice.ts',
                templateFile: 'plop-templates/store/default.hbs',
                skipIfExists: true
            },
            // 3.5.1) index.ts de store com marcador
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/store/index.ts',
                templateFile: 'plop-templates/store/index.ts.hbs',
                skipIfExists: true
            },
            // 3.5.2) append no index de store exportando o slice default
            {
                type: 'append',
                path: 'src/features/{{kebabCase featureName}}/store/index.ts',
                pattern: /\/\* PLOP_INJECT_EXPORTS \*\//,
                template: "export { default as {{camelCase featureName}}Slice } from './{{camelCase featureName}}Slice';\n"
            },

            // 3.6) index.ts principal da feature
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/index.ts',
                templateFile: 'plop-templates/featureIndex.ts.hbs',
                skipIfExists: true
            }
        ],
    });

    // ---------------------
    // 4. Gerador: Feature Component
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
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'plop-templates/component/component.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
                templateFile: 'plop-templates/component/component.test.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'plop-templates/component/component.stories.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
                templateFile: 'plop-templates/component/component.module.css.hbs'
            },
            {
                type: 'add',
                path: 'src/features/{{kebabCase featureName}}/components/index.ts',
                template: '/* PLOP_INJECT_EXPORTS */\n',
                skipIfExists: true
            },
            {
                type: 'append',
                path: 'src/features/{{kebabCase featureName}}/components/index.ts',
                pattern: /\/\* PLOP_INJECT_EXPORTS \*\//,
                template: "export { default as {{pascalCase name}} } from './{{pascalCase name}}/{{pascalCase name}}';\n"
            }
        ]
    });
};