var recBtn = document.getElementById("recBtn");
var ingBtn = document.getElementById("ingBtn");
var recVal = document.getElementById("recipe-val");
var nutVal = document.getElementById("nutrition-val");

var getNutrition = function () {

    var nutritionQuery = nutVal.value;
    console.log(nutritionQuery)
    
    var apiNutUrl = "https://api.edamam.com/api/nutrition-data?app_id=d80bea91&app_key=d0bd7a7983c9186ffd5e98b3cc987be7&ingr=" + nutritionQuery ;

    // make a get request to url
    fetch(apiNutUrl).then(function (response) {
        response.json().then(function (data) {
            // this will show the API data to navigate
            console.log(data)
        
        })
    })
}
var getRecipe = function (recInfo) {
    // This will be the API call and the function
    var recQuery = recVal.value;
    console.log(recQuery)

    var apiRecUrl = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + recQuery + "&apiKey=864baeb4ba3d40d7812ccefee0b6d23c&number=6";
    
    fetch(apiRecUrl).then(function (response) {
        response.json().then(function (data) {
            // this will show the API data to navigate
            console.log(data)
        
        })
    })
    
}


ingBtn.addEventListener("click", getNutrition)
recBtn.addEventListener("click", getRecipe)


//test


