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

  makeFakeNumber(){
    return faker.random.number()
  }
}

export default makeFakeDummyData;
