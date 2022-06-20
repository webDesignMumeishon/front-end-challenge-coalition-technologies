
const closeAllMenuTabs = (menu) => {
    const unselectMenus = document.querySelectorAll('.menu-open')
    if(menu){
        menu.classList.toggle('menu-open')
    }
    unselectMenus.forEach(menu =>{
        menu.classList.remove('menu-open')
    })
}

const closeAllSubMenus = () => {
    const submenusInDropdown = document.querySelectorAll('.sub-menu-open')
    submenusInDropdown.forEach(submenu => {
        submenu.classList.remove('sub-menu-open')
    })
}

const unselectClickedElements = (selected) => {

    const unselectClick = document.querySelectorAll('.select-clicked')
    if(selected){
        selected.classList.toggle('select-clicked')

    }
    unselectClick.forEach(click =>{
        click.classList.remove('select-clicked')
    })
}


const body = document.getElementsByTagName('body')[0]
body.addEventListener('click', (e) => {
    closeAllSubMenus()
    closeAllMenuTabs()
    unselectClickedElements()
})


// get all dropdowns
const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdowns => {

    const select = dropdowns.querySelector('.select')
    const menu = dropdowns.querySelector('.menu')
    const options = dropdowns.querySelectorAll('.menu li')
    const selected = dropdowns.querySelector('.selected')

    //add a click event to the select element
    select.addEventListener('click', (e) => {
        //this is to avoid triggering the click event in the element
        e.stopPropagation();

        closeAllMenuTabs(menu)
        closeAllSubMenus()
        unselectClickedElements(selected)
    })


    //loop through all options elements
    options.forEach(option => {
        //add a click event to the option element
        option.addEventListener('click', (e) => {

            //this is to avoid triggering the click event in the element
            e.stopPropagation();

            //remove active class from all option elements
            options.forEach(option => {
                option.classList.remove('active')
            })

            //add active class to clicked option element
            option.classList.add('active')

            const submenu = option.querySelector('.submenu')

            const checkSubmenuOpen = submenu.className.split(" ").filter(classN => {
                return classN === 'sub-menu-open'
            })

            if(checkSubmenuOpen.length > 0){
                //if there there is a sub-menu-open we close that one
                submenu.classList.remove('sub-menu-open')
            }
            else{
                //if there is not any sub-menu-open in that option element we remove all of then and add in 
                //that particular option element
                closeAllSubMenus()
                submenu.classList.add('sub-menu-open')
            }
        })
    })
})

const icons = document.querySelectorAll('.icon-box')
icons.forEach(icon => {
    icon.addEventListener('click', () =>{
        const checkIfSelected =  Object.values(icon.classList).includes('selected-icon')
        if(checkIfSelected){
            icon.classList.remove('selected-icon')
        }
        else{
            icons.forEach(icon => {
                icon.classList.remove('selected-icon')
            })
            icon.classList.add('selected-icon')
        }
    })
})