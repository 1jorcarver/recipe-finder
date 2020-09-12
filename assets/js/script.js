var getNutrition = function (nutInfo) {
    console.log(nutInfo);
    var apiNutUrl = "https://api.edamam.com/api/nutrition-data?app_id=d80bea91&app_key=d0bd7a7983c9186ffd5e98b3cc987be7&ingr=";

    fetch(apiNutUrl).then(function(response)) {
        response.json().then(function(data))
    }
}

