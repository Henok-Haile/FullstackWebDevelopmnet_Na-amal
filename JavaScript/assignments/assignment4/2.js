const getYears = function () {
    // Get the start and end years from user input
    const startYear = document.getElementById('startYear').value;
    const endYear = document.getElementById('endYear').value;

    // Ensure both values are entered and valid
    if (startYear === '' || endYear === '') {
        document.getElementById('result').innerHTML = '<p>Please enter both start and end years.</p>';
        return;
    }

    if (startYear > endYear) {
        document.getElementById('result').innerHTML = '<p>Start year must be less than or equal to end year.</p>';
        return;
    }

    let resultHTML = '<p>Years when 1st January is a <span class="highlight">Sunday</span>:</p>';
    resultHTML += '<ul>';
    for (let year = startYear; year <= endYear; year++) {
        const date = new Date(year, 0, 1);
        if (date.getDay() === 0) {
            resultHTML += `<li>1st January ${year} is a Sunday</li>`;
        }
    }
    resultHTML += '</ul>';
    
    // Display the result in the 'result' div
    document.getElementById('result').innerHTML = resultHTML;
};