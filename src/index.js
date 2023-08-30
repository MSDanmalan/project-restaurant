console.log('hello')
import {createHeader, createMain, createFooter} from './home'
import loadHome from './home';

const loadpage = (function() {
    const content = document.getElementById('content')

    function loadHomePage() {
        content.append(createHeader.headerElement, createMain.mainElement, createFooter.footerElement)
    }

    return {loadHomePage}

})();

loadpage.loadHomePage()