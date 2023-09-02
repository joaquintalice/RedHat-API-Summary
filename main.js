document.addEventListener('DOMContentLoaded', main)

const dataContainer = document.getElementById('data-container');
const loader = document.querySelector('.loading-container');

const url = 'https://api.thecatapi.com/v1/images/search?limit=20';
const options = {
    method: 'GET',
    headers: {
        'x-api-key': 'live_P9Rsz8LVNzIEFuEJdYR1EznO44ZKKHNxshXpwOCWc4QQUF88e75ME8qorIfsaQcB'
    }
};

function main() {
    getData()
}

async function getData() {
    try {

        const response = await fetch(url, options);

        if (!response.ok) throw new Error(`Error fetching data. Status code: ${response.status}`)

        const data = await response.json();

        showData(data)

        return data

    } catch (error) {
        throw new Error(error)
    }
}

function showData(dataArray) {
    let template = ``;

    for (let cat of dataArray) {

        template += `
        <div class="col-12 col-sm-6 col-md-4 col-xl-3 my-5">
            <div class="">
                <img class="img-fluid" src="${cat.url}" width='${cat.width}' height='${cat.height}' alt="Random cat image">
            </div>
        </div>
                    `
    }

    dataContainer.innerHTML = template;
    loader.style.display = 'none';

}



