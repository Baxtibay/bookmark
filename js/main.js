const elsTabsItem = document.querySelectorAll('.tabs__item')
const elsTabLink = document.querySelectorAll('.js-tab-link')
const elsTabsPanel = document.querySelectorAll('.tabs__panel')

// Remover active item class
function deActiviteElementItem(elements, className) {
  elements.forEach(elItem => {
    elItem.classList.remove(className)
  })
}

elsTabLink.forEach(elTabLink => {
  elTabLink.addEventListener('click', e => {
    // Prevent page move
    e.preventDefault()

    // Remove active class from tabs__item elements
    deActiviteElementItem(elsTabsItem, 'tabs__item--active')

    // Add active class to current item
    elTabLink.parentElement.classList.add('tabs__item--active')

    // Remove active class from tabs__panel elements
    deActiviteElementItem(elsTabsPanel, 'tabs__panel--active')

    // Show active tab panel
    // const activTabItems = document.querySelector(`#${elTabLink.href.split('#')[1]}`)
    const activTabItems = document.querySelector(elTabLink.dataset.tabTarget)
    activTabItems.classList.add('tabs__panel--active')
    console.log(elTabLink.dataset);
  })
})