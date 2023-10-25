
const loadNavbar = () => {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    });
};

window.addEventListener('DOMContentLoaded', loadNavbar);


const loadPageContent = (page) => {
    fetch(page)
      .then(response => response.text())
      .then(data => {
        document.getElementById('content').innerHTML = data;
      });
  };
  

  window.addEventListener('DOMContentLoaded', loadPageContent("dashboard.html"));
  

const loadFooter = () => {
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      });
  };
  
  window.addEventListener('DOMContentLoaded', loadFooter);


  
