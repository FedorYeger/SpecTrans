const list = document.querySelector('.products__list'),
  items = document.querySelectorAll('.products__item'),
  listitems = document.querySelectorAll('.products__list-item')

function filter() {
  list.addEventListener('click', event => {
    const targetId = event.target.dataset.id
    const target = event.target

    if(target.classList.contains('products__list-item')){
      listitems.forEach(listItem => listItem.classList.remove('active'))
      target.classList.add('active')
    }

    switch(targetId){
      case 'sand':
        getItems(targetId)
        break

        case 'stone':
        getItems(targetId)
        break
        
        case 'aspchalt':
        getItems(targetId)
        break
    }
  })
}
filter()

function getItems(className){
  items.forEach(item => {
    if (item.classList.contains(className)) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
      
    }
  })
}