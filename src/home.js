export default loadHome
export {createHeader, createMain, createFooter}

const createHeader = (function() {
    const headerElement = document.createElement('div')
    headerElement.setAttribute('id', 'header')

    const labelElement = document.createElement('h1')
    labelElement.textContent = `Manu's Coffee`
    labelElement.setAttribute('id', 'label')

    const tabsDivElement = document.createElement('div')
    tabsDivElement.classList.add('tabs')

    const homeButtonElement = document.createElement('button')
    homeButtonElement.textContent = 'Home'

    const menuButtonElement = document.createElement('button')
    menuButtonElement.textContent = 'Menu'

    const contactButtonElement = document.createElement('button')
    contactButtonElement.textContent = 'Contact'

    tabsDivElement.append(homeButtonElement, menuButtonElement, contactButtonElement)
    
    headerElement.append(labelElement, tabsDivElement)

    return {
        headerElement, homeButtonElement, menuButtonElement, contactButtonElement
    }
})();

const createMain = (function() {
    const mainElement = document.createElement('div')
    mainElement.setAttribute('id', 'main')

    const firstTextElement = document.createElement('p')
    firstTextElement.textContent = 'Best coffee in your country'

    const secondTextElement = document.createElement('p')
    secondTextElement.textContent = 'Made with passion since 1806'

    const mainPhotoDivElement = document.createElement('div')
    mainPhotoDivElement.classList.add('main-photo')

    const lastTextElement = document.createElement('div')
    lastTextElement.textContent = 'Place your order or visit us'

    mainElement.append(firstTextElement, secondTextElement, mainPhotoDivElement, lastTextElement)

    return {mainElement}
})();

const createFooter = (function() {
    const footerElement = document.createElement('div')
    footerElement.textContent = 'Copyright © 2023 msdanmallan'
    footerElement.classList.add('footer')

    return {footerElement}
})();


function loadHome() {
    content.textContent = ''
    content.append(createHeader.headerElement, createMain.mainElement, createFooter.footerElement)
}