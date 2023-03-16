async function getComics() {
    const comics = [];
    const imagesFolder = "http://127.0.0.1:5500/opdracht2/images/";
    
    const response = await fetch(imagesFolder);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const imageElements = doc.querySelectorAll("img");
    
    imageElements.forEach((img) => {
      const imgUrl = imagesFolder + img.getAttribute("src");
      comics.push(imgUrl);
    });
    
    return comics;
  }
  
  async function logComics() {
    const comics = await getComics();
    console.log(comics);
  }
  
  logComics();
  