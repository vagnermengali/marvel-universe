##

<h1 align="center">
  Marvel-Universe
</h1>

<p align = "center">
Este é um aplicação que tem a finalidade de facilitar o acesso a todos o heróis
</p>

<p align="center">
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#aplicação">Aplicação</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#docker">Docker</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## **Instalação**

A seguir esta o passo-a-passo de instalação e execução em ambiente de desenvolvimento<br/>

A url base da api é http://localhost:3000

<p>1. Clone o repositório:</p>

```
git clone https://gitlab.com/vagnermengali/desafio-junior
```

<p>2. Adentre na pasta raiz do projeto:</p>
  
```
cd backend
```
<p>3. Instale as dependências do projeto:</p>

```
yarn ou yarn install
```

<p>4. Crie seu schema:</p>

```
yarn prisma generate
```

<p>7. Aplique suas migrações:</p>
  
```
yarn prisma migrate dev
```
<p>8. Ative o server:</p>

```
yarn start:dev
```

<p align ='center'><a href="#--marvel-universe" >Voltar ao início</a></p>

---

## **Aplicação**

Depois que api ja estiver iniciada em sua máquina, prossiga com o passo-a-passo de usabilidade da aplicação<br/>

A url base da interface é http://localhost:3001

<p>1. Clone o repositório:</p>

```
git clone https://gitlab.com/vagnermengali/desafio-junior
```

<p>2. Adentre na pasta raiz do projeto:</p>
  
```
cd frontend
```
<p>3. Crie sua node module:</p>
  
```
yarn ou yarn install   
```
<p>4. Ative o server:</p>

```
yarn dev
```

<p align ='center'><a href="#--marvel-universe" >Voltar ao início</a></p>

---

## **Docker**

A seguir esta o passo-a-passo de instalação e execução do container<br/>

<p>1. Clone o repositório:</p>

```
docker-compose up --build
```

<p align ='center'><a href="#--marvel-universe" >Voltar ao início</a></p>

---

## **Endpoints**

<h2 align ='center'> Usuário </h2>

Nessa rotas o usuário pode acessar sem o token apenas POST/users para executar o CRUD de usuário :

##

`GET /users - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.

```

`GET /users - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "username": "UserCrud UserCrud",
    "email": "user@gmail.com",
    "created_at": "2023-02-13T14:30:59.868Z",
    "updated_at": "2023-02-13T14:30:59.868Z"
  },
  {
    "username": "CrudUser1 CrudUse1r",
    "email": "cru1d@gmail.com",
    "created_at": "2023-02-13T13:08:00.947Z",
    "updated_at": "2023-02-13T14:33:49.762Z"
  },
]
```

##

`GET /users/profile - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

`GET /users/profile - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": "ce76b542-5e0f-41c1-851c-5f04072e3910",
  "username": "CrudUser1 CrudUse1r",
  "email": "cru1d@gmail.com",
  "created_at": "2023-02-13T13:08:00.947Z",
  "updated_at": "2023-02-13T14:33:49.762Z"
}
```

##

`POST /users - FORMATO DA REQUISIÇÃO`

```json
{
  "first_name": "CrudUser1",
  "last_name": "CrudUse1r",
  "email": "cru1d@gmail.com",
  "password": ".Crud123"
}
```

`POST /users- FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": "ce76b542-5e0f-41c1-851c-5f04072e3910",
  "username": "CrudUser1 CrudUse1r",
  "email": "cru1d@gmail.com",
  "created_at": "2023-02-13T13:08:00.947Z",
  "updated_at": "2023-02-13T14:33:49.762Z"
}
```

##

`PATCH /users/update - FORMATO DA REQUISIÇÃO`

```json
{
  "first_name": "UserCrud",
  "Last_name": "UserCrud",
  "email": "user@gmail.com",
  "password": ".User123"
}
```

`PATCH /users/update/ - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": "ce76b542-5e0f-41c1-851c-5f04072e3910",
  "username": "UserCrud Mengali",
  "email": "user@gmail.com",
  "created_at": "2023-02-14T11:28:48.873Z",
  "updated_at": "2023-02-16T22:42:39.347Z"
}
```

##

`DELETE /users - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

`DELETE /users - FORMATO DA RESPOSTA - STATUS 204`

```
Não a corpo de retorno.
```

##

<h2 align ='center'> Login </h2>

Nessa rota o usuário pode acessar sem o token para efetuar o login :

##

`POST /login - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "user@gmail.com",
  "password": ".User123"
}
```

`POST /login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMGZkMzMwM2ItNTI4NC00NTU3LTg0M2MtZGE5MjA3MWQwYjU5IiwiZmlyc3RfbmFtZSI6IlZhZ25lciIsImxhc3RfbmFtZSI6Ik1lbmdhbGkiLCJlbWFpbCI6InVzZXIxMjNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkb3pvcFVRLnFlWGlOTVJLd3BnL2FLT3pUUVFGUkxFalBaU2w2L0hXSnZYTnhjMmUwVXliaE8iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0xNlQyMjo0Mzo1Ni4wNzhaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMTZUMjI6NDM6NTYuMDc4WiJ9LCJpYXQiOjE2NzY1ODc0NDIsImV4cCI6MTY3NjY3Mzg0Miwic3ViIjoiMGZkMzMwM2ItNTI4NC00NTU3LTg0M2MtZGE5MjA3MWQwYjU5In0.CzWuSJ4ke6cBA8_2ED9pvehFTpcqU_k_UeJb0EaItY4"
}
```

##

<p align ='center'><a href="#--marvel-universe" >Voltar ao início</a></p>

---

<p align ='center'> Copyright <a href="https://github.com/vagnermengali">Vagner Mengali</a> 2023 </p>