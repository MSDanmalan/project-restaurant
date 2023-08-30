console.log('hello')
import {createHeader, createMain, createFooter} from './home'
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const loadpage = (function() {
    const content = document.getElementById('content')

    function loadHomePage() {
        content.append(createHeader.headerElement, createMain.mainElement, createFooter.footerElement)

        createHeader.homeButtonElement.addEventListener('click', loadHome)
        createHeader.menuButtonElement.addEventListener('click', loadMenu)
        createHeader.contactButtonElement.addEventListener('click', loadContact)
    }

    return {loadHomePage}

})();

loadpage.loadHomePage()