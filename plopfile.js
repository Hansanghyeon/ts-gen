import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function (plop) {
  plop.setGenerator('react-query (get)', {
    description: 'Create a new API function',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your API function name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `{{kebabCase name}}/index.ts`,
        templateFile: `${__dirname}/react-query-template/get/index.hbs`,
      },
      ...['api', 'dto', 'query', 'type'].map(file => ({
        type: 'add',
        path: `{{kebabCase name}}/{{kebabCase name}}.${file}.ts`,
        templateFile: `${__dirname}/react-query-template/get/${file}.hbs`,
      }))
    ],
  });

  plop.setGenerator('react-query (post)', {
    description: 'Create a new API function',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your API function name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `{{kebabCase name}}/index.ts`,
        templateFile: `${__dirname}/react-query-template/post/index.hbs`,
      },
      ...['api', 'dto', 'rdo', 'query', 'type'].map(file => ({
        type: 'add',
        path: `{{kebabCase name}}/{{kebabCase name}}.${file}.ts`,
        templateFile: `${__dirname}/react-query-template/post/${file}.hbs`,
      }))
    ],
  });

  plop.setGenerator('react-query (patch)', {
    description: 'Create a new API function',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your API function name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `{{kebabCase name}}/index.ts`,
        templateFile: `${__dirname}/react-query-template/patch/index.hbs`,
      },
      ...['api', 'dto', 'rdo', 'query', 'type'].map(file => ({
        type: 'add',
        path: `{{kebabCase name}}/{{kebabCase name}}.${file}.ts`,
        templateFile: `${__dirname}/react-query-template/patch/${file}.hbs`,
      }))
    ],
  });
  

  plop.setGenerator('react-query (CRUD)', {
    description: 'Create a new API function',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your API function name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `{{kebabCase name}}/index.ts`,
        templateFile: `${__dirname}/react-query-template/crud/index.hbs`,
      },
      ...['api', 'dto', 'rdo', 'query', 'type'].map(file => ({
        type: 'add',
        path: `{{kebabCase name}}/{{kebabCase name}}.${file}.ts`,
        templateFile: `${__dirname}/react-query-template/crud/${file}.hbs`,
      }))
    ],
  });
}
