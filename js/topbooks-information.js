// Info Card
let OrgProducts = JSON.parse(localStorage.getItem("topBooks"));
let productId = localStorage.getItem("TopBooksId");
let itemDom = document.querySelector(".info-content");

let productsDetails = OrgProducts.find((item) => item.id == productId);

if (localStorage.getItem("TopBooksId")) {
    itemDom.innerHTML = `
    <h3 class="sec-title">${productsDetails.heading}</h3>
    
    <img src="${productsDetails.imgUrl}" alt="${productsDetails.heading}">
    
    <h2><span>Name:</span> ${productsDetails.heading} </h2>
    <p><span>Description:</span> ${productsDetails.desc}</p>
    
    <h3 class="iframe-title">10 Things This Book Will Teach You</h3>
    
    <ol type="1">
        ${productsDetails.texh1 ? `<li>${productsDetails.texh1}</li>` : "" }
        ${productsDetails.texh2 ? `<li>${productsDetails.texh2}</li>` : "" }
        ${productsDetails.texh3 ? `<li>${productsDetails.texh3}</li>` : "" }
        ${productsDetails.texh4 ? `<li>${productsDetails.texh4}</li>` : "" }
        ${productsDetails.texh5 ? `<li>${productsDetails.texh5}</li>` : "" }
        ${productsDetails.texh6 ? `<li>${productsDetails.texh6}</li>` : "" }
        ${productsDetails.texh7 ? `<li>${productsDetails.texh7}</li>` : "" }
        ${productsDetails.texh8 ? `<li>${productsDetails.texh8}</li>` : "" }
        ${productsDetails.texh9 ? `<li>${productsDetails.texh9}</li>` : "" }
        ${productsDetails.texh10 ? `<li>${productsDetails.texh10}</li>` : "" }
    </ol>

    <a href="${productsDetails.pdf}" class="download" download> Download Book </a>
    
    ` ;
}

window.addEventListener("DOMContentLoaded", function () {
    var darkon = localStorage.getItem("DarkLightMode");
    if (darkon == "on") {
      darkmode();
    }
  
  });
  
  var fullscreenButton = document.getElementById("fullscreenButton");
  
  fullscreenButton.addEventListener("click", function () {
      toggleFullScreen();
      if (document.fullscreenEnabled) {
        toggleFullScreen();
    } else {
        alert("Fullscreen not supported.");
    }
  });
  
  function toggleFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
  
    setTimeout(function () {
      window.scrollBy(0, 1);
    }, 100);
    
    updateFullscreenIcon();
  }
  
  function updateFullscreenIcon() {
    var fulllIcon = document.getElementById("fullscreenButton");
  
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
      fulllIcon.classList.add("bx-fullscreen");
      fulllIcon.classList.remove("bx-exit-fullscreen");
    } else {
      fulllIcon.classList.add("bx-exit-fullscreen");
      fulllIcon.classList.remove("bx-fullscreen");
    }
  }
  
  // Dark Mode
  const toggle = document.getElementById('toggleDark');
  const body = document.querySelector('body');
  const services = document.querySelector('.servicesH');
  const navH = document.querySelector('nav');
  const info_content_h2 = document.querySelector('.info-content h2');
  const info_content_h2_span = document.querySelector('.info-content h2 span');
  const info_content_p = document.querySelector('.info-content p');
  const info_content_p_span = document.querySelector('.info-content p span');
  const ol = document.querySelector('.info-content ol');

  function darkmode() {
    toggle.classList.toggle('bi-brightness-high-fill');
    if(toggle.classList.toggle('bi-moon')){
        body.style.background = '#fff';
        body.style.color = 'black';
  
        services.style.color = 'black';
        services.style.background = '#fff';
  
        navH.style.background = 'black';

        info_content_h2.style.color = '#fff';
        info_content_h2_span.style.color = '#fff';
        info_content_p.style.color = '#fff';
        info_content_p_span.style.color = '#fff';
        ol.style.color = '#000';
  
    }else{
        body.style.background = '#1f242d';
        body.style.color = '#fff';

        services.style.color = '#fff';
        services.style.background = '#323946';
  
        navH.style.background = '#1f243d';

        info_content_h2.style.color = '#fff';
        info_content_h2_span.style.color = '#fff';
        info_content_p.style.color = '#fff';
        info_content_p_span.style.color = '#fff';
        ol.style.color = '#fff';

    }
  }
  
  toggle.addEventListener('click', function() {
    localStorage.setItem("DarkLightMode", toggle.classList.contains('bi-moon') ? "on" : "Off");
    darkmode();
  });

  // Sub Email  Number
if (localStorage.getItem("subemail-BK") && localStorage.getItem("subnumber-BK")) {
    console.log("There Is Sub Email , Number");
  } else {
    window.location = "../subscribe.html" ;
  }
  

  // New Message
  var newMessage = document.querySelector(".newMessage");
  var newUpdateLocal = localStorage.getItem("Update1-BK")
  
  if (newUpdateLocal) {
    newMessage.style.display = "none" ;
    newMessage.style.opacity = "0" ;
    newMessage.style.visibility = "hidden" ;
  } else {
    newMessage.style.display = "block" ;
    newMessage.style.opacity = "1" ;
    newMessage.style.visibility = "visible" ;
  }
  
  let NewMessage = [
    {
        id: 6 ,
        icon: "bx bxs-cog" ,
        heading: "The New Update 1" ,
        iconheading: "🌟🚀" ,
        time: "In 30/1/2024",
        desc: "what's new ? <br/><br/> * " ,
        btnContent: "OK",
    },
  ];
  
  function drawMSG() {
    let updatesME = NewMessage.map((msg) => {
        return `
        <div class="message-content">
            <i class='${msg.icon}'></i>
            <h3>${msg.heading} <span> ${msg.iconheading}</span></h3>
            <span>${msg.time}</span>
            <p>${msg.desc}</p>
            <button onclick="sound()" type="button" class="okBtnUpdate">${msg.btnContent}</button>
        </div>
        `;
    });
  
    newMessage.innerHTML = updatesME.join(''); 
  }
  drawMSG();
  
  var SendUpdate = document.querySelector(".okBtnUpdate");
  
  SendUpdate.addEventListener('click' , function() {
    localStorage.setItem("Update1-BK" , JSON.stringify("Updated"));
  
    // var itemsToRemove = ["LastUpdate"];
    // itemsToRemove.forEach(function(item) {
    //   localStorage.removeItem(item);
    // });
  
    newMessage.style.display = "none" ;
  })
  
  // New Message
  var subscribeMessage = document.querySelector(".subscribeMessage");
  var subscribedYT = localStorage.getItem("subscribedYT-BK")
  
  if (subscribedYT) {
    subscribeMessage.style.display = "none" ;
    subscribeMessage.style.opacity = "0" ;
    subscribeMessage.style.visibility = "hidden" ;
  } else {
    subscribeMessage.style.display = "block" ;
    subscribeMessage.style.opacity = "1" ;
    subscribeMessage.style.visibility = "visible" ;
  }
  
  let SubMessages = [
    {
        id: 1 ,
        icon: "bx bxl-youtube" ,
        heading: "Support Me" ,
        iconheading: "🌟🚀" ,
        time: "In 15/2/2024",
        desc: "The least you can do to help me or support me is to subscribe to my YouTube channel. I hope you will be honest and help me. Thank you." ,
    },
  ];
  
  function drawSubMSG() {
    let updatesME = SubMessages.map((msg) => {
        return `
        <div class="subscribeMessage-content">
            <i class='${msg.icon}' style="color: red;"></i>
            <h3>${msg.heading} <span> ${msg.iconheading}</span></h3>
            <p>${msg.desc}</p>
            <button onclick="sound()" type="button" class="subBtn">Subscribe</button>
        </div>
        `;
    });
  
    subscribeMessage.innerHTML = updatesME.join(''); 
  }
  drawSubMSG();
  
  var SendUpdate = document.querySelector(".subBtn");
  
  SendUpdate.addEventListener('click' , function() {
    localStorage.setItem("subscribedYT-BK" , JSON.stringify("Subscribed"));
    subscribeMessage.style.display = "none" ;
    window.location = "https://youtube.com/@programmerfero" ;
  })
  
  // Menu Icon
  let menu_icons = document.querySelector('.menu-icons'),
  nav = document.querySelector('nav');
  
  menu_icons.addEventListener('click', () => {
      nav.classList.toggle('active');
  });
  
  