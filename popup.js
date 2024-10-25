document.getElementById('searchButton').addEventListener('click', () => {
    const topic = document.getElementById('searchInput').value;
    const summaryDiv = document.getElementById('summary');

    if (topic) {
        summaryDiv.innerHTML = 'Fetching summary...';

        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`)
            .then(response => response.json())
            .then(data => {
                if (data.extract) {
                    summaryDiv.innerHTML = `<h2>${data.title}</h2><p>${data.extract}</p>`;
                } else {
                    summaryDiv.innerHTML = 'No summary available for this topic.';
                }
            })
            .catch(error => {
                summaryDiv.innerHTML = 'Error fetching data.';
                console.error(error);
            });
    } else {
        summaryDiv.innerHTML = 'Please enter a topic!';
    }
});
