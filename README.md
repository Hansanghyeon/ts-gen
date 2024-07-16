## oms-gen

vscode의 template generator를 cli로 만들고 template를 공용관리할 수 있는 도구

## getting started

코드를 만들고자하는 폴더로간다

```sh
root@hyeon:~/src/api# npx @hyeon/react-gen
```

```bash
$ plop
? [PLOP] Please choose a generator. react-query (get) - Create a new API function
? What is your API function name
💬  test-gen
? What is your API endpoint? (ex: https://localhost:3000/login)
💬  https://localhost:3000/login
✔  ++ /login/index.ts
✔  ++ /login/login.api.ts
✔  ++ /login/login.dto.ts
✔  ++ /login/login.query.ts
✔  ++ /login/login.type.ts
Done in 11.10s.
```
