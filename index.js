const goals = [8, 1, 1, 3, 2, -1, 5];

//1.Самый результативный матч по количеству голов. Если самых результативных матчей несколько, то выведите первый из них.
let numberOfGoals = goals.reduce((a, b) => Math.max(a, b), -Infinity);
let numbers = goals.indexOf(numberOfGoals);
alert(`Самый результативный матч был под номером ${numbers + 1}.
В нем было забито ${numberOfGoals} гол(ов).`);

//2. Найти все самые не результативные игры (без учета автоматичесих поражений).
numberOfGoals = goals.reduce((a, b) => b !== -1 ? Math.min(a, b) : a, Infinity);
numbers = [...goals.entries()].filter(i => i[1] === numberOfGoals).map(i => i[0]);
alert(`Самые не результативные матчи были под номерами ${numbers.map(i => i + 1)}.
В каждом из них было забито по ${numberOfGoals} мячу(а).`);

//3 Общее количество голов за сезон (без учета автопоражений).
numberOfGoals = goals.reduce((a, b) => b !== -1 ? a + b : a);
alert(`Общее количество голов за сезон равно ${numberOfGoals}.`);

//4. Были ли автоматические поражения.
goals.some(i => i === -1)
    ? alert("Были автоматические поражения: да.")
    : alert("Были автоматические поражения: нет.");

//5 Среднее количество голов за матч (без учета автопоражений).
numberOfGoals = (goals.reduce((a, b) => b !== -1 ? a + b : a)
    / (goals.length - goals.filter(i => i === -1).length)).toFixed(2);
alert(`Среднее количество голов за матч равно ${numberOfGoals}.`);

//6 Отсортируйте голы в порядке возрастания (буз учета автопоражений). Массив goals не должен быть изменен.
alert(goals.slice().sort((a, b) => a - b).filter(i => i !== -1));