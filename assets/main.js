var clientBtn = document.querySelector('.js-clients-btn'), 
    clientAll = document.querySelector('.js-clients-all'),
    isClientsOpen = false;
    //aboutSection = document.querySelector('.js-about');

if ( clientBtn != null ) {
  clientBtn.addEventListener('click', function() {
    if (!isClientsOpen) {
      clientAll.style.display = 'inline';
      //aboutSection.style.display = 'block';
      this.innerHTML = '- Clients';
      isClientsOpen = true;
    } else {
      clientAll.style.display = 'none';
      this.innerHTML = '+ Clients';
      isClientsOpen = false;
    }

  }); 
}