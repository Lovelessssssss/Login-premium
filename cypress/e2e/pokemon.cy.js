
describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('USER_LOGIN');                   // вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
         cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
         cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
         cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке

     });
 });
 describe('Покупка премиум', function () {                                // название набора тестов
    it('e2e тест на покупку премиум', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('USER_LOGIN');                   // вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
         cy.get('[href="/premium"] > .history-info').click({ force: true }); // клик по премиум
         cy.get('.auth__input').type('30'); // вводим кол-во дней 
         cy.get('.auth__form > .button_to_down > .profile__button').click({ force: true });// клик ввод
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');   // вводим дату   
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');// вводим cvv
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME'); //вводим имя
         cy.get('.pay-btn').click();  // клик оплатить
         cy.get('#cardnumber').type('56456'); // вводим код из смс
         cy.get('.payment__submit-button').click(); // клик ввод
         cy.contains('Покупка прошла успешно').should('be.visible'); // видимость надписи
         
        });
    });
       