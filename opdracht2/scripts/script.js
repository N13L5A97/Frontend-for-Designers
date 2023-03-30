// lists
const comicsList = document.querySelector('#comics ul')
const collection = document.querySelector('#collection ul')
const comics = document.querySelectorAll('#comics ul li')

const showBasket = document.querySelector('#arrow')
const basket = document.querySelector('#collection')
const basketComics = document.querySelector('#collection ul')

new Sortable(comicsList, {
  group: {
      name: 'shared',
      pull: 'clone',
      put: false // Do not allow items to be put into this list
  },
  animation: 150,
  sort: false // To disable sorting: set sort to false
})

new Sortable(collection, {
  group: 'shared',
  animation: 150
  
})

// add comics to collection basket
comics.forEach(comic=> {
  comic.addEventListener('click', (e) => {
    console.log(e.target)

    // de ingredienten
    const li = document.createElement('li')
    const newComic = document.createElement('img')
    const removeButton = document.createElement('button')

    //het plaatje van image
    newComic.src = e.target.src
    //add image to list item
    li.appendChild(newComic)


    // de button
    //add - to remove button
    removeButton.innerHTML = '-'
    removeButton.classList.add('remove')
    // remove comics from collection basket
    removeButton.addEventListener('click', (e) => {
      console.log("remove")
      basketComics.removeChild(e.target.parentElement)
    })
    //add remove button to list item
    li.appendChild(removeButton)

    //add list item to collection
    collection.appendChild(li)
  })

})

// show basket 
showBasket.addEventListener('click', () => {
  basket.classList.toggle('show')
  basket.style.transition = 'all 0.5s ease-in-out'
  console.log("click")
} )


//download comics
const download = document.querySelector('#download')
download.addEventListener('click', () => {
  console.log("download")
  //download comics
  const comics = document.querySelectorAll('#collection ul li img')
  comics.forEach(comic => {
    console.log(comic.src)

    //create link
    const link = document.createElement('a')
    link.href = comic.src
    link.download = comic.src
    link.click()
  })
} )