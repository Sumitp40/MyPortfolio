const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')


function mediaquery(x){
  if (x.matches) { // If media query matches
    about.addEventListener('click', () => {
      const aboutBox = new WinBox({
        title: '/home/Sumit: Whoami',
        // modal: true,
        width: '260px',
        height: '260px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 30,
        mount: aboutContent,
        onfocus: function () {
          this.setBackground('#00aa00')
        },
        onblur: function () {
          this.setBackground('#777')
        },
      })
    })

    contact.addEventListener('click', () => {
      const contactBox = new WinBox({
        title: '/home/Sumit: Contact',
        width: '270px',
        height: '260px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 25,
        mount: contactContent,
        onfocus: function () {
          this.setBackground('#00aa00')
        },
        onblur: function () {
          this.setBackground('#777')
        },
      })
    })
  } else {
    about.addEventListener('click', () => {
      const aboutBox = new WinBox({
        title: '/home/Sumit: Whoami',
        // modal: true,
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function () {
          this.setBackground('#00aa00')
        },
        onblur: function () {
          this.setBackground('#777')
        },
      })
    })

    contact.addEventListener('click', () => {
      const contactBox = new WinBox({
        title: '/home/Sumit: Contact',
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 250,
        mount: contactContent,
        onfocus: function () {
          this.setBackground('#00aa00')
        },
        onblur: function () {
          this.setBackground('#777')
        },
      })
    })
  }
}

var x = window.matchMedia("(max-width: 600px)")
mediaquery(x)
x.addEventListener(mediaquery)