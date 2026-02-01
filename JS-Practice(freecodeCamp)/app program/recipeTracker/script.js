let recipes = []

const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    ratings: [4, 5, 4, 5],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: "",
    averageRating: null,
}

const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    ratings: [4, 5, 5, 5],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: '',
    averageRating: null
}

const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};


let recipe1Name =  recipe1.name
let recipe2Name = recipe2.name
let recipe3Name = recipe3.name

let recipe1CookingTime =  recipe1.cookingTime
let recipe2CookingTime = recipe2.cookingTime
let recipe3CookingTime = recipe3.cookingTime

console.log(recipe1Name)
console.log(recipe2Name)
console.log(recipe3Name)
console.log(recipe1CookingTime)
console.log(recipe2CookingTime)
console.log(recipe3CookingTime)

recipes.push(recipe1, recipe2, recipe3)

function getAverageRating(ratings) {
    const total = ratings[0] + ratings[1] + ratings[2] + ratings[3];
    return total / ratings.length;
}

function getTotalIngredients(ingredients) {
    return ingredients.length
}

function getDifficultyLevel(cookingTime) {
    if (cookingTime <= 30) {
        return "easy"
     } 
    
     else if (cookingTime <= 60) {
        return "medium"
     } 
     
     else {
        return "hard"
     }
}

const recipe1AverageRating = getAverageRating(recipe1.ratings)
const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients)
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime)
console.log(recipe1AverageRating)
console.log(recipe1TotalIngredients)
console.log(recipe1DifficultyLevel)
recipe1.averageRating = getAverageRating(recipe1.ratings)
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients)
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime)

const recipe2AverageRating = getAverageRating(recipe2.ratings)
const recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients)
const recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime)
console.log(recipe2AverageRating)
console.log(recipe2TotalIngredients)
console.log(recipe2DifficultyLevel)
recipe2.averageRating = getAverageRating(recipe2.ratings)
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients)
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime)

const recipe3AverageRating = getAverageRating(recipe3.ratings)
const recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients)
const recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime)
console.log(recipe3AverageRating)
console.log(recipe3TotalIngredients)
console.log(recipe3DifficultyLevel)
recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients)
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime)

console.log(recipes)