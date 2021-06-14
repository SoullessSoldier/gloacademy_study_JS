УРОК №15

Особенности современного стандарта ES6 (ES2015, ECMA2015)
Интерполяция. Стрелочные функции

defineProperty, Геттеры, Сеттеры

Классы ES6

Полезные ссылки

DEFINEPROPERTY
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
ES6 КЛАССЫ
http://jsraccoon.ru/es6-classes
ПОЛЯ КЛАССОВ LEARNJS
https://learn.javascript.ru/private-protected-properties-methods#privatnoe-svoystvo-waterlimit
ПОЛЯ КЛАССОВ MDN
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Class_fields

ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ: 

Часть первая:

1) Привести наш проект в соответствии с новым стандартом.
2) Переделать наш проект под класс с помощью ключевого слова Class и Constuctor()
3) Переменные, существующие только с неизменяемым параметром, объявить через const.
4) Добавить папку с уроком на свой GitHub


Часть вторая:

На отдельной странице или на доске CodePen
Напишите расширения метода прототипа:

1) Два класса, First и Second, Second наследует от First .
2) В First есть метод hello - он печатает в консоль "Привет я метод родителя!".
3) Нужно написать в Second метод hello, чтоб он сначала вызывал метод hello из First, а потом сразу печатал в консоль "А я наследуемый метод!"
4) Проверить, чтобы все работало без ошибок в консоли 
5) Запушить задание в репозиторий на github или реализовать на доске CodePen и прикрепить ссылку







ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ: 


1) Для выполнения данного пункта необходимо посмотреть дополнительное видео!


Мы сделали 1 универсальный метод getExpInc на основе 2 предыдущих(getExpenses/getIncome), 
но у нас остались еще 2 пары методов, которые дублируют один и тот же код (addExpensesBlock/addIncomeBlock и getAddIncome/getAddExpenses).
Нужно создать 2 универсальных метода, которые будут принимать параметры, в зависимости от которых будут происходить нужные нам действия. 


2) Добавить папку с уроком на свой GitHub