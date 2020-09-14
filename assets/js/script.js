var recBtn = document.getElementById("recBtn");
var ingBtn = document.getElementById("ingBtn");
var recVal = document.getElementById("recipe-val");
var nutVal = document.getElementById("nutrition-val");
var recName = document.getElementsByClassName("rec-name");
var recDisplay = document.getElementById("rec-display");
//get Nutrition Function
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
//get Recipe Functionality
var getRecipe = function () {
    // This will be the API call and the function
    var recQuery = recVal.value;
    

    var apiRecUrl = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + recQuery + "&apiKey=864baeb4ba3d40d7812ccefee0b6d23c&number=6";
    
    fetch(apiRecUrl).then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          
      for(var i = 0; i <data.length; i++){
        
        recDisplay.innerHTML = '';
        var yay = yay;
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
        
            
            


            
            // for (var i = 0; i < data.length; i++){
            //     var name = data[i].title;
            //     recName.textContent = name;
            //     recName.appendChild(name);
            //     // console.log(data[i].title);
            //     // console.log(data[i].missedIngredients[0].image);
            // }
        
        })
    })
    
}


ingBtn.addEventListener("click", getNutrition)
recBtn.addEventListener("click", getRecipe)


//test 2


