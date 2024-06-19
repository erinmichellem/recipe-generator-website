function searchRecipes() {
    console.log('Searching recipes...');
    const apiKey = '666258ad761341dba881029c2cc63304';
    const searchInput = document.getElementById('searchInput').value;

    if (!searchInput) {
        alert('Please enter ingredients');
        return;
    }

    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${searchInput}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayRecipes(data))
        .catch(error => console.error('Error fetching recipes:', error));
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    if (recipes.length === 0) {
        recipesContainer.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        const recipeLink = document.createElement('a');
        recipeLink.href = `recipe.html?id=${recipe.id}`;
        recipeLink.target = '_blank';  
        recipeLink.innerHTML = `<h3>${recipe.title}</h3><img src="${recipe.image}" alt="${recipe.title}">`;
        recipeElement.appendChild(recipeLink);
        recipesContainer.appendChild(recipeElement);
    });
}
