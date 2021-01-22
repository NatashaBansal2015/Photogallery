// listen to the button once clicked
let ImageCreateButton = document.getElementById('imageButton');
let SearchCreateButton2=document.getElementById('searchButton');

    

ImageCreateButton.addEventListener("click", function() {
    // check if the classroom title is provided
    let imageTitle = document.getElementById('imageTitle').value;
    let imageURL = document.getElementById('imageURL').value;

    

    if(imageTitle && imageURL) {
        // if we have a title, then we need to add that to the page
        // create the div

        //wrapper

        let imageWrapper = document.createElement('div');
        imageWrapper.classList = "border rounded shadow p-4";
        
        //image
        var image = document.createElement("img"); 
        image.src = imageURL; 

        //title
        let imageTitleElement=document.createElement("p");
        imageTitleElement.innerHTML=imageTitle;
    
        
        // add the title
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageTitleElement);
        
        // append that somewhere on the actualy page
        document.getElementById('imageBoxes').appendChild(imageWrapper);
        
        // clear the input value
        document.getElementById('imageTitle').value = '';
        document.getElementById('imageURL').value = '';
    }else {
        // if the image title is empty, then we need to show an alert for the teacher
        alert('Please provide both the url and the title of the image');
    }
})
 