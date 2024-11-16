var inp_data = [
    {
        "title": "Professionally Designed Analog Clock",
        "src": "https://display-analog-clock.netlify.app",
        "thumbnail": "./pictures/Analog_Clock.png"
    },
    {
        "title": "Ballon Game - JavaScript ES6 Cocept Based Project",
        "src": "https://play-balloon-popping-game.netlify.app",
        "thumbnail": "./pictures/baloon_game.png"
    },
    {
        "title": "KeyStroke Enabled Calculator",
        "src": "https://keystroke-calculator.netlify.app",
        "thumbnail": "./pictures/calculator.png"
    },
    {
        "title": "ToDo List Maker JavaScript-Project",
        "src": "https://calender-to-do-list-app.netlify.app",
        "thumbnail": "./pictures/calender_to_list.png"
    },
    {
        "title": "React-Project : TMDB-API-Data populated Website  ",
        "src": "https://cine-flicks101.netlify.app",
        "thumbnail": "./pictures/cine-flix-101.png"
    },
    {
        "title": "ReactJS Project : Crypto Live Data DashBoard",
        "src": "https://coingecko-api-search-task-surendra.netlify.app",
        "thumbnail": "./pictures/Crypto_api.png"
    },
    {   "title":"HTML/CSS/JS used static Web Page - 1",
        "src":"https://surendra-task1-1607.netlify.app" ,
        "thumbnail": "./pictures/static_page_1.png"
    },
    {
        "title": "HTML/CSS/JS used static Web Page - 2",
        "src": "https://surendra-task5-24-07-wednesday.netlify.app",
        "thumbnail": "./pictures/static_page_2.png"
    },
    {
        "title": "HTML/CSS/JS used static Web Page - 3",
        "src": "#",
        "thumbnail": "./pictures/static_page_3.png"
    }
];


const PopulateData = (data) => {
    const iframeContainer = document.getElementById('iframe-container');

    // Loop through the data and create anchor elements with image previews
    data.forEach(project => {
        const iframeBox = document.createElement('div');
        iframeBox.classList.add('iframe-box');

        // Create anchor tag to link to the project
        const anchor = document.createElement('a');
        anchor.href = project.src;
        anchor.target = "_blank";  // Open in a new tab

        // Create image for project preview (using thumbnail)
        const previewImage = document.createElement('img');
        previewImage.src = project.thumbnail; // Using the local file path for the thumbnail
        previewImage.alt = project.title;
        previewImage.classList.add('project-thumbnail'); // Add custom styling class

        // Create title for the project
        const iframeTitle = document.createElement('div');
        iframeTitle.classList.add('iframe-title');
        iframeTitle.innerText = project.title;

        // Append elements to the iframeBox
        iframeBox.appendChild(iframeTitle);
        iframeBox.appendChild(anchor);
        anchor.appendChild(previewImage);

        // Append the iframeBox to the container
        iframeContainer.appendChild(iframeBox);
    });
}

PopulateData(inp_data);
