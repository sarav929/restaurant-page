import './styles/base.css'
import logo from './img/logo.png'
import menuIcon from './img/menu.png'

import createHomePage from './home'
import createFooter from './footer'
import createContacts from './contacts'
import createMenuPage from './menu'

const createNav = () => {
    const body = document.querySelector('body')
    const nav = document.createElement('nav')

    body.appendChild(nav)

    
    const logoDiv = document.createElement('div')
    logoDiv.setAttribute('id', 'logo')
    const logoImg = document.createElement('img')
    logoImg.setAttribute('id', 'kiyomi-logo')
    logoImg.src = logo
    logoDiv.appendChild(logoImg)

    const navBtns = document.createElement('div')
    navBtns.setAttribute('id', 'nav-btns')

    const homeBtn = document.createElement('button')
    homeBtn.setAttribute('id', 'home-btn')
    homeBtn.innerText = 'home'
    const menuBtn = document.createElement('button')
    menuBtn.setAttribute('id', 'menu-btn')
    menuBtn.innerText = 'menu'
    const contactsBtn = document.createElement('button')
    contactsBtn.setAttribute('id', 'contacts-btn')
    contactsBtn.innerText = 'contacts'

    navBtns.appendChild(homeBtn)
    navBtns.appendChild(menuBtn)
    navBtns.appendChild(contactsBtn)

    nav.appendChild(logoDiv)
    nav.appendChild(navBtns)    

    homeBtn.addEventListener('click', () => {
        body.innerHTML = ''
        createNav()
        createHomePage()
        createFooter()
    })

    menuBtn.addEventListener('click', () => {
        body.innerHTML = ''
        createNav()
        createMenuPage()
        createFooter()
    })

    contactsBtn.addEventListener('click', () => {
        body.innerHTML = ''
        createNav()
        createContacts()
        createFooter()
    })


}

export default createNav