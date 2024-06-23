import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function (plop) {
  plop.setHelper('varUrl', function (text) {
    // 기본 API 경로 제거
    let modified_content = text
    .replace(/https:\/\/c3api.imstage.me\/admin\/v1/g, '')
    .replace(/https:\/\/api.oms.imstage.me\/admin\/v1/g, '');

    // {orderCode}와 같은 패턴을 ${orderCode}로 바꾼다.
    let final_content = modified_content.replace(/{([^}]*)}/g, '${$1}');

    return final_content
  })

  // ====================================== plop.setGenerator ======================================
  const prompts = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your API function name\n💬 ',
    },
    {
      type: 'input',
      name: 'endpoint',
      message: 'What is your API endpoint? (ex: http://example.com/api or /auth/login)\n💬 ',
    },
  ]

  const methods = ['get', 'post', 'patch', 'CRUD']
  methods.forEach(method => {
    // get에서는 rdo를 제거
    const file = method === 'get' ? ['api', 'dto', 'query', 'type'] : ['api', 'dto', 'rdo', 'query', 'type'];
    plop.setGenerator(`react-query (${method})`, {
      prompts,
      actions: [
        {
          type: 'add',
          path: `{{kebabCase name}}/index.ts`,
          templateFile: `${__dirname}/templates/react-query/${method}/index.hbs`,
        },
        ...file.map(file => ({
          type: 'add',
          path: `{{kebabCase name}}/{{kebabCase name}}.${file}.ts`,
          templateFile: `${__dirname}/templates/react-query/${method}/${file}.hbs`,
        }))
      ],
    });
  })
}
