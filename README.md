# authentication-react
react-redux SPA with drag and drop integration
test assignment for taking Web-developer position at [astarta](http://www.astartaholding.com/) company.

## Table of Contents
1. [Requirements](#requirements)
2. [Installation](#how-to-install)
3. [Running the Project](#running-the-project)
4. [boilerplate](#boilerplate)
5. [Task](#task)

## Requirements
* node `^5.0.0`
* yarn `^0.23.0` or npm `^3.0.0`

## How to Install

### Note

Note that for correct working you have to launch [nodeJS API](https://github.com/pustovitDmytro/authentication-api)

Before installing you need to download repo to your local machine:
```sh
$ git clone https://github.com/pustovitDmytro/authentication-react app
$ cd app
```
This will create your own project based on [`react-boilerplate`](https://github.com/pustovitDmytro/react).

After that, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/), but `npm install` will also suffice.

  ```sh
  $ yarn install
  ```
## Running the Project

Now you have different variants how to launch new app:
1. The simplest variant: use `webpack-dev-server`
  ```sh
  $ yarn start:dev-server
  ```
  after that open [localhost:5000](http://localhost:5000).
  
  In case you need specify own port you can do it in `webpack/devserver.js`:
  ```javascript
  devServer: {
        compress: true,
        port: 5000,
        hot: true,
        https: false
      }
  ```
2. static http-server
```sh
$ yarn start
```
the app should run in your default browser.

Anyway, you can open it via [localhost:7000](http://localhost:7000).

To change default port you have to look into `package.json`:
```javascript
    "start": "npm run build && npm run start:http-server",
    "start:http-server": "http-server build -p 7000 -o",
```
3. Assembling without launching server:
```sh
$ yarn build
```
or in development mode:
```sh
$ yarn assemble
```
with watch:
```sh
$ yarn start:watch
```
4. Of course you can mix these variants

## Task 

Разработать веб-приложение, состоящее из серверной части (NodeJs, Express) и клиентского приложения (React, Router)

Приложение использует аутентификацию (ввод логина, без пароля) и поддерживает сессии. Список допустимых имен пользователей задается в файле config.js и считывается при старте сервера.

Если пользователь незалогинен, то он перенаправляется на окно ввода логина. После аутентификации отображается страница, состоящая из 3-х частей - верхний заголовок, боковой слайдер и главное окно.

На слайдере отображается меню (вертикальный список ссылок), при клике на меню в главном окне отображается текст типа "Это компонент для пункта меню 1", выбранный пункт меню визуально выделяется.

Видимость пунктов меню для пользователей разная и задана в файле config.js.

На заголовке должна быть кнопка, переключающая видимость слайдера и поле с логином пользователя.

Желательно использование какой-нибудь UI-библиотеки 
