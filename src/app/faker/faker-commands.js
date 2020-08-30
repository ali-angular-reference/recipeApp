var faker = require('faker');

class makeFakeDummyData{
  makeFakeDishName(){
    return faker.commerce.productName();
  }

  makeFakeAdjective(){
    return faker.commerce.productAdjective();
  }

  makeFakeNoun(){
    return faker.commerce.productName();
  }

  makeFakeIngredient(){
    return faker.food.ingredient()
  }
}

export default makeFakeDummyData;
