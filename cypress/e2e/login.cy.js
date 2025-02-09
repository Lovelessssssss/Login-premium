describe('Тестирование аворизации', function () {
    it('верный логин и пароль', function () {
      cy.visit('https://login.qa.studio/');//вход на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверка цвета
      cy.get('#mail').type('german@dolnikov.ru');//ввод логина
      cy.get('#pass').type('iLoveqastudio1');//ввод пароля
      cy.get('#loginButton').click();//ввод
      cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверяем текст
      cy.get('#messageHeader').should('be.visible');//текст видно
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');//крестик видно

    })
  
  

  it('верный логин и не верный пароль', function () {
    cy.visit('https://login.qa.studio/');//вход на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверка цвета
    cy.get('#mail').type('german@dolnikov.ru');//ввод логина
    cy.get('#pass').type('iLoveqastudio7');//ввод пароль-не верный
    cy.get('#loginButton').click();//ввод
    cy.get('#messageHeader').contains('Такого логина или пароля нет');// проверяем текст
    cy.get('#messageHeader').should('be.visible');//текст видно
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//крестик видно

  })

  it('верный логин нет @', function () {
    cy.visit('https://login.qa.studio/');//вход на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверка цвета
    cy.get('#mail').type('germandolnikov.ru');//ввод логин без @
    cy.get('#pass').type('iLoveqastudio1');//ввод пароль
    cy.get('#loginButton').click();//ввод
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// проверяем текст
    cy.get('#messageHeader').should('be.visible');//текст видно
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//крестик видно

  })

  it('востановить пароль', function () {
    cy.visit('https://login.qa.studio/');//вход на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверка цвета
    cy.get('#forgotEmailButton').click();//забыл пароль
    cy.get('#mailForgot').type('Radiogara1@yandex.ru');//ввод логина
    cy.get('#restoreEmailButton').click();//отправить код
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// проверяем текст
    cy.get('#messageHeader').should('be.visible');//текст видно
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//крестик видно

  })
  it('не верный логин ', function () {
    cy.visit('https://login.qa.studio/');//вход на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверка цвета
    cy.get('#mail').type('ger@dolnikov.ru');//ввод логин-не верный
    cy.get('#pass').type('iLoveqastudio1');//ввод пароль
    cy.get('#loginButton').click();//ввод
    cy.get('#messageHeader').contains('Такого логина или пароля нет');// проверяем текст
    cy.get('#messageHeader').should('be.visible');//текст видно
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//крестик видно

})
it('приведение к строчным буквам в логине', function () {
  cy.visit('https://login.qa.studio/');//вход на сайт
  cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверка цвета
  cy.get('#mail').type('GerMan@Dolnikov.ru');//ввод логина
  cy.get('#pass').type('iLoveqastudio1');//ввод пароля
  cy.get('#loginButton').click();//ввод
  cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверяем текст
  cy.get('#messageHeader').should('be.visible');//текст видно
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');//крестик видно

})
})





//Напиши проверку на приведение к строчным буквам в логине:
//а) Ввести логин GerMan@Dolnikov.ru
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить, что авторизация успешна (текст именно «Авторизация прошла успешно» и наличие кнопки крестик)
//Важно: Разработчик допустил баг в этом месте и не реализовал пункт #2 из требований.
//Тест должен упасть — и это ок (то есть мы этим тестом поймали баг, который допустил разработчик)