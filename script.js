const form = document.getElementById('questionForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    let answers = [];

    for (const pair of formData.entries()) {
        answers.push(pair[0] + '=' + pair[1]);
    }

    const urlParams = answers.join('&');
    const currentURL = window.location.href.split('?')[0];
    const newURL = currentURL + '?' + urlParams;

    window.location.href = newURL;
});
 