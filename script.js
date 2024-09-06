document.getElementById('jokeBtn').addEventListener('click', getJoke);

function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            const joke = ${data.setup} - ${data.punchline};
            document.getElementById('joke').textContent = joke;
        })
        .catch(error => {
            document.getElementById('joke').textContent = 'Oops! Something went wrong.';
            console.error('Error fetching joke:', error);
        });
}