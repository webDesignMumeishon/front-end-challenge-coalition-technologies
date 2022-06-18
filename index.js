
// get all dropdowns
const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdowns => {


    const select = dropdowns.querySelector('.select')
    const menu = dropdowns.querySelector('.menu')
    const options = dropdowns.querySelectorAll('.menu li')
    const selected = dropdowns.querySelector('.selected')
    const submenusInDropdown = dropdowns.querySelectorAll('.submenu')


    // console.log(submenus)

    

    //add a click event to the select element
    select.addEventListener('click', () => {
        //add clicked select style to the select element
        
        const unselectMenus = document.querySelectorAll('.menu-open')
        const unselectClick = document.querySelectorAll('.select-clicked')
        
        selected.classList.toggle('select-clicked')
        menu.classList.toggle('menu-open')


        unselectMenus.forEach(menu =>{
            menu.classList.remove('menu-open')
        })

        unselectClick.forEach(click =>{
            click.classList.remove('select-clicked')
        })
    })


    //loop through all options elements
    options.forEach(option => {
        //add a click event to the option element
        option.addEventListener('click', () => {

            //change selected inner text to the clicked option text
            // selected.innerText = option.innerText

            //add the clicked select styles to the select elements
            // selected.classList.remove('select-clicked')

            //add the open styles to the menu element
            // menu.classList.remove('menu-open')

            //remove active class from all option elements
            options.forEach(option => {
                option.classList.remove('active')
            })

            //add active class to clicked option element
            option.classList.add('active')

            submenusInDropdown.forEach(submenu => {
                submenu.classList.remove('sub-menu-open')
            })

            const submenu = option.querySelector('.submenu')
            
            //testing submenu
            submenu.classList.add('sub-menu-open')
        })
    })
})