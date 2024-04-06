// id's = [result, button, a, b]

// querySelectors for dynamic content

const form = document.querySelector('#form'); // need button element to attach listener for submit events
const result = document.querySelector('#result'); // selecting result <p> element to update with addition results

// addition function
const addition = (a, b) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number'){
        throw new Error('Input must be a number')
    }
    return a + b;
}

// set event listener to fire on button submit, call addition(), then update html with results
form.addEventListener('submit', (e) => {
    e.preventDefault(); // stops page refresh on submit, better UX

    // grab input values, convert to int
    let a = Number(document.querySelector('#a').value);
    let b = Number(document.querySelector('#b').value);

    const result = addition(a, b);

    const h3 = document.querySelector('#result');

    h3.innerHTML = result
});

module.exports = {addition}