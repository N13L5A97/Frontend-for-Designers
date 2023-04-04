// lists
const comicsList = document.querySelector('#comics ul')
const comics = document.querySelectorAll('#comics ul li')

const showCollection = document.querySelector('#arrow')
const collectionBar = document.querySelector('#collection')
const collectionList = document.querySelector('#collection ul')

new Sortable(comicsList, {
  group: {
      name: 'shared',
      pull: 'clone',
      put: false // Do not allow items to be put into this list
  },
  animation: 150,
  sort: false // To disable sorting: set sort to false
})

new Sortable(collectionList, {
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

    // de button
    //add - to remove button
    removeButton.innerHTML = '-'
    removeButton.classList.add('remove')

    //het plaatje van image
    newComic.src = e.target.src

    //add image to list item
    li.appendChild(newComic)

    //add remove button to list item
    li.appendChild(removeButton)

    //add list item to collection
    collectionList.appendChild(li)

    //count amount of comics in basket
    amountComics ()

    // remove comics from collection basket
    removeButton.addEventListener('click', (e) => {
      console.log("remove")
      collectionList.removeChild(e.target.parentElement)
      //count amount of comics in basket
      amountComics ()
    })
  })
})

// show basket 
showCollection.addEventListener('click', () => {
  collectionBar.classList.toggle('show')
  collectionBar.style.transition = 'all 0.5s ease-in-out'
  console.log("click")
} )


//download comics
const download = document.querySelector('#download')

download.addEventListener('click', () => 
{
  console.log("download")
  const covers = document.querySelectorAll('#collection ul li img')

  //download comics
  covers.forEach(cover => 
  {
    console.log(cover.src)

    //create link
    const link = document.createElement('a')
    link.href = cover.src
    link.download = cover.src
    link.click()
  })

  //give 3 seconds feedback to user comics are downloaded
  // remove comics from basket
  download.innerHTML = 'Downloading...'
  setTimeout(() => 
  { 
    download.innerHTML = 'Download'
    //remove comics from basket
    covers.forEach(cover =>
    {
      collectionList.removeChild(cover.parentElement)
    }) 

    //count amount of comics in basket
    amountComics ()
  }, 3000)

})

// empty state
// display amount of comics in basket
function amountComics() 
{
  if (collectionList.childElementCount === 0) 
  {
    console.log("empty")
    let emptyState = document.createElement('p')
    emptyState.id= 'emptyState';
    emptyState.innerHTML = 'No comics in your collection'
    collectionBar.appendChild(emptyState)

    //remove amount
    const amount = document.querySelector('#amount')
    amount.innerHTML = ''
  }
  else if (collectionList.childElementCount === 1)
  {
    const amount = document.querySelector('#amount')
    amount.innerHTML = collectionList.childElementCount
    console.log(collectionList.childElementCount)
    //remove empty state
    let emptyState = document.getElementById('emptyState')
    collectionBar.removeChild(emptyState)
    console.log(emptyState)
  }
  else
  {
    const amount = document.querySelector('#amount')
    amount.innerHTML = collectionList.childElementCount
    console.log(collectionList.childElementCount)
  }
}

amountComics()

console.log(collectionList.childElementCount)