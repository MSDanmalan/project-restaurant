export default loadContact
import { createHeader, createFooter } from "./home";


const createContact = (function() {
    const contactElement = document.createElement('div')
    contactElement.classList.add('contact')

    const contactCard = document.createElement('div')
    contactCard.classList.add('contactCard')

    const phoneElement = document.createElement('p')
    phoneElement.textContent = 'Phone: +000 1234 567 891'

    const adressElement = document.createElement('p')
    adressElement.textContent = '501 lorem ipsum avenue, lorem ipsum'

    contactCard.append(phoneElement, adressElement)
    contactElement.appendChild(contactCard)

    return {contactElement}
})();

function loadContact() {
    content.textContent = ''
    content.append(createHeader.headerElement, createContact.contactElement, createFooter.footerElement)
}