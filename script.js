const dice = document.querySelector('#dice-btn');
const adviceNumber = document.querySelector('#advice-number');
const adviceText = document.querySelector('#advice-text');


dice.addEventListener('click', async() => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
            adviceNumber.textContent = `Advice #${data.slip.id}`;
            adviceText.textContent = `${data.slip.advice}`;
            console.log(data);

    } catch (err) {
        console.log('Error fetching advice', err)
        adviceText.textContent = 'Unable to fetch advice. Please try again'
    }
    
})