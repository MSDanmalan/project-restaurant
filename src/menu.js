export default loadMenu
import { createHeader, createFooter } from "./home";

const createMenu = (function() {
    const menuElement = document.createElement('div')
    menuElement.classList.add('menu')

    const item1Element = document.createElement('div')
    item1Element.classList.add('menuItems')
    const flatwhiteElement = document.createElement('p')
    flatwhiteElement.textContent = 'Flatwhite'
    flatwhiteElement.classList.add('itemNames')
    item1Element.append(flatwhiteElement)

    const item2Element = document.createElement('div')
    item2Element.classList.add('menuItems')
    const cappucinoElement = document.createElement('p')
    cappucinoElement.textContent = 'Cappucino'
    cappucinoElement.classList.add('itemNames')
    item2Element.append(cappucinoElement)

    const item3Element = document.createElement('div')
    item3Element.classList.add('menuItems')
    const frappucinoElement = document.createElement('p')
    frappucinoElement.textContent = 'Frappucino'
    frappucinoElement.classList.add('itemNames')
    item3Element.append(frappucinoElement)

    const item4Element = document.createElement('div')
    item4Element.classList.add('menuItems')
    const latteElement = document.createElement('p')
    latteElement.textContent = 'Latte'
    latteElement.classList.add('itemNames')
    item4Element.append(latteElement)

    const item5Element = document.createElement('div')
    item5Element.classList.add('menuItems')
    const espressoElement = document.createElement('p')
    espressoElement.textContent = 'Espresso'
    espressoElement.classList.add('itemNames')
    item5Element.append(espressoElement)

    menuElement.append(item1Element, item2Element, item3Element, item4Element, item5Element)

    return {menuElement}
})();

function loadMenu() {
    content.textContent = ''
    content.append(createHeader.headerElement, createMenu.menuElement, createFooter.footerElement)
}