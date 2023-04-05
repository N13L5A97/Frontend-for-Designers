// lists
const comicsList = document.querySelector('#comics ul')
const comics = document.querySelectorAll('#comics ul li')

const showCollection = document.querySelector('#arrow')
const collectionBar = document.querySelector('#collection')
const collectionList = document.querySelector('#collection ul')

// use arrowkeys to navigate through comics
document.addEventListener('keydown', (e) => 
{
  //if right arrow is pressed go to next comic
  if (e.key === 'ArrowRight') 
  {
    console.log('right')
    const currentComic = document.querySelector('.current')
    const nextComic = currentComic.nextElementSibling

    if (nextComic) 
    {
      currentComic.classList.remove('current')
      nextComic.classList.add('current')
      // if next comic is not in middle of the view scroll to next comic and leave some margin
      if (nextComic.offsetTop > window.innerHeight / 2)
      {
        window.scrollTo(0, (nextComic.offsetTop*0.9))
      }
    }

    //if there is no next comic go to first comic
    else
    {
      currentComic.classList.remove('current')
      comics[0].classList.add('current')
      //scroll to top
      window.scrollTo(0, 0)
    }
  }

  //if left arrow is pressed go to previous comic
  else if (e.key === 'ArrowLeft') 
  {
    console.log('left')
    const currentComic = document.querySelector('.current')
    const previousComic = currentComic.previousElementSibling
    if (previousComic) 
    {
      currentComic.classList.remove('current')
      previousComic.classList.add('current')

      // if previous comic is not in middle of the view scroll to previous comic and leave some margin
      if (previousComic.offsetTop < window.innerHeight / 2)
      {
        window.scrollTo(0, (previousComic.offsetTop*0.9))
      }
    }
    //if there is no previous comic go to last comic
    else
    {
      currentComic.classList.remove('current')
      comics[comics.length - 1].classList.add('current')
      //scroll to bottom
      window.scrollTo(0, document.body.scrollHeight)
    }
  }

  //if arrow up is pressed go to the 10th comic after the current comic
  else if (e.key === 'ArrowUp')
  {
    console.log('up')
    // select 10th comic before current comic
    const currentComic = document.querySelector('.current')
    const previousComic = currentComic.previousElementSibling
    const previousComic2 = previousComic.previousElementSibling
    const previousComic3 = previousComic2.previousElementSibling
    const previousComic4 = previousComic3.previousElementSibling
    const previousComic5 = previousComic4.previousElementSibling
    const previousComic6 = previousComic5.previousElementSibling
    const previousComic7 = previousComic6.previousElementSibling
    const previousComic8 = previousComic7.previousElementSibling
    const previousComic9 = previousComic8.previousElementSibling
    const previousComic10 = previousComic9.previousElementSibling

    if (previousComic10)
    {
      currentComic.classList.remove('current')
      previousComic10.classList.add('current')
      // if previous comic is not in middle of the view scroll to previous comic and leave some margin
      if (previousComic10.offsetTop < window.innerHeight / 2)
      {
        window.scrollTo(0, (previousComic10.offsetTop*0.9))
      }
    }
  }

  // if down arrow is pressed go to the 10th comic after the current comic
  else if (e.key === 'ArrowDown')
  {
    console.log('down')
    // select 10th comic after current comic
    const currentComic = document.querySelector('.current')
    const nextComic = currentComic.nextElementSibling
    const nextComic2 = nextComic.nextElementSibling
    const nextComic3 = nextComic2.nextElementSibling
    const nextComic4 = nextComic3.nextElementSibling
    const nextComic5 = nextComic4.nextElementSibling
    const nextComic6 = nextComic5.nextElementSibling
    const nextComic7 = nextComic6.nextElementSibling
    const nextComic8 = nextComic7.nextElementSibling
    const nextComic9 = nextComic8.nextElementSibling
    const nextComic10 = nextComic9.nextElementSibling
    
    if (nextComic10)
    {
      currentComic.classList.remove('current')
      nextComic10.classList.add('current')
      // if next comic is not in middle of the view scroll to next comic and leave some margin
      if (nextComic10.offsetTop > window.innerHeight / 2)
      {
        window.scrollTo(0, (nextComic10.offsetTop*0.9))
      }
    }
  }
  
  //if enter is pressed add comic to collection basket
  else if (e.key === 'Enter')
  {
    console.log('enter')
    const currentComic = document.querySelector('.current')
    const comicSrc = currentComic.children[0].src
    const li = document.createElement('li')
    const newComic = document.createElement('img')
    const removeButton = document.createElement('button')

    // de button
    //add - to remove button
    removeButton.innerHTML = '-'
    removeButton.classList.add('remove')

    //het plaatje van image
    newComic.src = comicSrc

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
  }

  // if backspace is pressed remove comic from collection basket
  else if (e.key === 'Backspace')
  {
    console.log('backspace')
    const lastComic = collectionList.lastElementChild
    collectionList.removeChild(lastComic)
    //count amount of comics in basket
    amountComics ()
  }

  // if spacebar is pressed show collection basket
  else if (e.key === ' ')
  {
    console.log('spacebar')
    collectionBar.classList.toggle('show')
    collectionBar.style.transition = 'all 0.5s ease-in-out'
  }

  // if escape is pressed hide collection basket
  else if (e.key === 'Escape')
  {
    console.log('escape')
    collectionBar.classList.remove('show')
  }

  // if d is pressed download comics
  else if (e.key === 'd')
  {
    // als er geen comics in de basket zitten geef een alert en stop de functie
    if (collectionList.childElementCount === 0)
    {
      alert('There are no comics in your basket')
      return
    }
    else
    {
      console.log('d is pressed')
      //download comics
      console.log("download")
      const covers = document.querySelectorAll('#collection ul li img')

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

        //count amount of comics in basket
        amountComics ()
      }, 3000)  
    }
  }
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
})


//download comics
const download = document.querySelector('#download')

download.addEventListener('click', () => 
{
  // als er geen comics in de basket zitten geef een alert en stop de functie
  if (collectionList.childElementCount === 0)
  {
    alert('There are no comics in your basket')
    return
  }
  else
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
  }
})

const mobile = document.querySelector('#mobile')

mobile.addEventListener('click', () => 
{
  console.log("download")
  const covers = document.querySelectorAll('#collection ul li img')

  // als er geen comics in de basket zitten geef een alert en stop de functie
  if (collectionList.childElementCount === 0)
  {
    alert('There are no comics in your basket')
    return
  }
  else
  {
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
    mobile.innerHTML = '...'
    setTimeout(() => 
    { 
      //remove inner html from button
      mobile.innerHTML = ''
  
      // put image back in button
      const mobileImage = document.createElement('img')
      mobileImage.src = 'images/download.png'
      mobile.appendChild(mobileImage)
  
      //remove comics from basket
      covers.forEach(cover =>
      {
        collectionList.removeChild(cover.parentElement)
      }) 
  
      //count amount of comics in basket
      amountComics ()
    }, 3000)
  }
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