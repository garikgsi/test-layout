window.addEventListener('load',()=> {
  document.addEventListener('click',(e)=>{
    // if (e.target.className !== 'dropdown') {

    // }
    if (!e.target.classList.contains('dropdown')) {
      const allDropdownContenets = document.getElementsByClassName('dropdown__content')
      if (allDropdownContenets) {
        for(let i=0; i<allDropdownContenets.length; i++) {
          const dropdownContenet = allDropdownContenets[i]
          dropdownContenet.style.display = 'none'
        }
      }

    }
  })

  const dropdowns = document.getElementsByClassName('dropdown');
  if (dropdowns) {
    for (let i=0; i<dropdowns.length; i++) {
      const dropdown = dropdowns[i];
      dropdown.addEventListener('click', ()=>{
        const dropdownContents = dropdown.getElementsByClassName('dropdown__content')
        if (dropdownContents) {
          const dropdownContent = dropdownContents[0]
          const blockStyle = dropdownContent.style.display
          if (blockStyle === 'block') {
            dropdownContent.style.display = 'none'
          } else {
            dropdownContent.style.display = 'block'
          }
        }
      })
    }
  }
})
