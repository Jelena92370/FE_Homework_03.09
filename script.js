// Задача 1

const numbersDiv = document.querySelector('.numbers');

for (let i = 100; i >= 50; i -= 10) {
    const paragraphs = document.createElement('p');
    paragraphs.innerText = i;
    numbersDiv.append(paragraphs);
}

// Задача 2

const array = ["Овощи", "Фрукты", "Молочные продукты", "Крупы"];
const stringsContainer = document.querySelector('.strings_container');

for (let i = 0; i < array.length; i++) {
  
  const paragraph = document.createElement('p');
  paragraph.innerText = array[i];
  
  stringsContainer.append(paragraph);
}

// Задача 3
const usersData = [
    {first_name: 'Иван', last_name: 'Иванов', age: 55},
    {first_name: 'Сергей', last_name: 'Сергеев', age: 18},
    {first_name: 'Василий', last_name: 'Васильев', age: 15},
    {first_name: 'Тарас', last_name: 'Тарасов', age: 42},
  ];
  const usersContainer = document.querySelector('.users_container');
  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].age >= 18) {
        const userCard = document.createElement('div');
       
        const data = document.createElement('p');
  data.innerText = `Имя: ${usersData[i].first_name} ${usersData[i].last_name}, возраст: ${usersData[i].age} лет`;
    
       
    userCard.append(data);
        
    usersContainer.append(userCard);
  }
}


