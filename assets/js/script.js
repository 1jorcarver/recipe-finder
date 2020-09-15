var recBtn = document.getElementById("recBtn");
var ingBtn = document.getElementById("ingBtn");
var recVal = document.getElementById("recipe-val");
var nutVal = document.getElementById("nutrition-val");
var recName = document.getElementsByClassName("rec-name");
var recDisplay = document.getElementById("rec-display");
var nutCol = document.getElementById("nutrition-col");
var nutTxtDisplay = document.getElementById("displayNut");
// var histDisplay = document.getElementByClassName("history-area");
var recArray = [];
var historyArea = document.getElementById("history-area");
var calNumber = document.getElementById("cal-number");


//get Nutrition Function
var getNutrition = function () {

    var recQuery = recVal.value;
    

    var apiNutUrl = "https://api.edamam.com/api/nutrition-data?app_id=d80bea91&app_key=d0bd7a7983c9186ffd5e98b3cc987be7&ingr=" + recQuery;

    // make a get request to url
    fetch(apiNutUrl).then(function (response) {

        response.json().then(function (data) {
            // this will show the API data to navigate
            
            //display the search item
            var recQuery = recVal.value;
            nutTxtDisplay.textContent = recQuery;

            //Display the Calories of the search input
            var calCount = data.calories;
            calNumber.textContent = calCount;

            nutCol.appendChild(calNumber);
        })
    })
    var localStorageNut = function () {
        localStorage.setItem(JSON.stringify(NutQuery))
    }
}
//get Recipe Functionality
var getRecipe = function () {
    // This will be the API call and the function
    var recQuery = recVal.value;
    recArray.push(recQuery)
    
    var apiRecUrl = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + recQuery + "&apiKey=9811871b69254065b5ce62c69e6f0531&number=6";

    fetch(apiRecUrl).then(function (response) {
        response.json().then(function (data) {
            

            recDisplay.innerHTML = '';

            for (var i = 0; i < data.length; i++) {

                //image container
                var recImgURL = data[i].image;
                var img = document.createElement("img");
                img.className = "card-header fg-white"
                img.style.width = "150px"
                img.setAttribute("src", recImgURL)

                //div for the card
                var name = data[i].title;
                var recTile = document.createElement('div');
                recTile.className = "card card-img";
                recTile.textContent = name;

                recTile.appendChild(img);
                recDisplay.appendChild(recTile);
            }
            recipeSearch();
            createHistory();
        })
    })

}

// store recipe search
var recipeSearch = function () {
    localStorage.setItem("user-input", JSON.stringify(recArray));
    
    

}

var createHistory = function () {
    
    //creating the btn
    var histBtn = document.createElement('button');
    //giving btn text
    histBtn.textContent = recVal.value; 
    //giving btn value
    histBtn.value = recVal.value;


    histBtn.addEventListener("click",getRecipe);
    historyArea.prepend(histBtn);
   
    
    
};


recBtn.addEventListener("click", getNutrition)
recBtn.addEventListener("click", getRecipe)

//test 4