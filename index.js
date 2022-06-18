
// get all dropdowns
const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdowns => {


    const select = dropdowns.querySelector('.select')
    const menu = dropdowns.querySelector('.menu')
    const options = dropdowns.querySelectorAll('.menu li')
    const selected = dropdowns.querySelector('.selected')

    

    //add a click event to the select element
    select.addEventListener('click', () => {
        //add clicked select style to the select element
        selected.classList.toggle('select-clicked')
        console.log(menu)
        menu.classList.toggle('menu-open')
    })


    //loop through all options elements
    options.forEach(option => {
        //add a click event to the option element
        option.addEventListener('click', () => {
            //change selected inner text to the clicked option text
            selected.innerText = option.innerText
            //add the clicked select styles to the select elements
            selected.classList.remove('select-clicked')
            //add the open styles to the menu element
            menu.classList.remove('menu-open')
            //remove active class from all option elements
            options.forEach(option => {
                option.classList.remove('active')
            })
            //add active class to clicked option element
            option.classList.add('active')
        })
    })
})