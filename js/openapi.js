function getArtwork(id) {
    fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
    .then(response => response.json())
    .then(data => {

        //fetching the data I want 
        const imgId = data.data.image_id;
        const baseURL = data.config.iiif_url;
        const imgURL = `${baseURL}/${imgId}/full/843,/0/default.jpg`;
        const title = data.data.title;
        const artist = data.data.artist_title;
        const date = data.data.date_display;

        //creating a space to display my details
        const displayArt = document.createElement("div");
        displayArt.classList.add("art-display");
        //creating different elements for each piece of info I want to retrieve
        const titleEl = document.createElement("h2");
        const artistEl = document.createElement("p");
        const dateEl = document.createElement("p");
        const imgEl = document.createElement("img");

        //filling each created variable with corresponding info
        titleEl.textContent = title;
        artistEl.textContent = artist;
        dateEl.textContent = date;
        imgEl.src = imgURL;
        imgEl.alt = `Artwork title ${title}`;

        //appending image details to my space created
        displayArt.appendChild(titleEl);
        displayArt.appendChild(artistEl);
        displayArt.appendChild(dateEl);
        displayArt.appendChild(imgEl);

        //appending my container(space) to my main container in my openapi html file
        const container = document.getElementById("artworks");
        container.appendChild(displayArt);

        console.log(data);
        console.log(imgURL);
        
    });
}

getArtwork(111628);
getArtwork(27992);