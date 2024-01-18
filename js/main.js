const elsTabsItem = document.querySelectorAll('.tabs__item')
const elsTabLink = document.querySelectorAll('.js-tab-link')
const elsTabsPanel = document.querySelectorAll('.tabpanels__item')

const elsAccordionItem = document.querySelectorAll('.accordion__item')
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler')

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

    // Remove active class from tabpanels__item elements
    deActiviteElementItem(elsTabsPanel, 'tabpanels__item--active')

    // Show active tab panel
    // const activTabItems = document.querySelector(`#${elTabLink.href.split('#')[1]}`)
    const activTabItems = document.querySelector(elTabLink.dataset.tabTarget)
    activTabItems.classList.add('tabpanels__item--active')
    console.log(elTabLink.dataset);
  })
})

elsAccordionItemToggler.forEach(elAccordionItemToggler => {
  elAccordionItemToggler.addEventListener('click', () => {
    // El accordion item open - class remove
    deActiviteElementItem(elsAccordionItem, 'accordion__item--open')

    elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open')
  })
})