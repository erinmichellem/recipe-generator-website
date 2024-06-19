document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');

    const apiKey = '666258ad761341dba881029c2cc63304';
    const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayRecipeDetails(data))
        .catch(error => console.error('Error fetching recipe details:', error));
});

function displayRecipeDetails(recipe) {
    const recipeDetailsContainer = document.getElementById('recipeDetails');
    const recipeElement = document.createElement('div');
    recipeElement.classList.add('recipe-details');
    recipeElement.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}">
        <p>${recipe.instructions}</p>
        <a href="${recipe.sourceUrl}" target="_blank">View full recipe on Spoonacular</a>
    `;

    recipeDetailsContainer.appendChild(recipeElement);
}