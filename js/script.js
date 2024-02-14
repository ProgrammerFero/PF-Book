// Draw Cards
let topBooks2 = [
  {
      id: 1 ,
      imgUrl: "../assest/topBooks/atomichabits.jfif" ,
      heading: "Atomic Habits" ,
      desc: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones.  You have to read this book . Good Book . " ,
      texh1: "Build a system for getting 1% better every day.",
      texh2: "Break your bad habits and stick to good ones.",
      texh3: "Avoid the common mistakes most people make when changing habits.",
      texh4: "Overcome a lack of motivation and willpower.",
      texh5: "Develop a stronger identity and believe in yourself.",
      texh6: "Make time for new habits (even when life gets crazy).",
      texh7: "Design your environment to make success easier.",
      texh8: "Make tiny, easy changes that deliver big results.",
      texh9: "Get back on track when you get off course.",
      texh10: "And most importantly, how to put these ideas into practice in real life.",
      pdf: "../assest/booksPdf/atomicHabits-Pf-Books.pdf" ,
  },

  {
      id: 2 ,
      imgUrl: "../assest/topBooks/the4hourworkweek.jfif" ,
      heading: "The 4-Hour Work Week" ,
      desc: "that is recommended by lots of people. I was very inspired by some of its ideas and stories. You have to read this book " ,
      texh1: "Work smart",
      texh2: "Fear and uncomfortable",
      texh3: "Life",
      texh4: "Start your own business",
      texh5: "Work on the most important things",
      texh6: "Doing what excites you",
      texh7: "Failures",
      texh8: "The Expert Builder: How to Become a Top Expert",
      texh9: "80/20 rule",
      texh10: "Less Is Not Laziness",
      pdf: "../assest/booksPdf/the4hourweek-Pf-Books.pdf" ,
  },

  {
      id: 3 ,
      imgUrl: "../assest/topBooks/richdad.jfif" ,
      heading: "Rich Dad And Poor Dad" ,
      desc: "'Rich Dad Poor Dad' is not just a book; it's a guide to financial empowerment, teaching us how to achieve financial freedom and build wealth through real-world wisdom." ,
      texh1: "The Importance of Financial Education.",
      texh2: "Assets vs. Liabilities.",
      texh3: "The Rat Race",
      texh4: "The Power of Passive Income",
      texh5: "Entrepreneurship",
      texh6: "The Importance of Mindset" ,
      texh7: "Learning from Failures ",
      texh8: "The Legacy of Wealth",
      texh9: "Overcoming Fear: Confront and overcome the fear of taking financial risks to achieve your goals",
      texh10: "Avoid Debt Traps Learn to use debt wisely and avoid excessive consumer debt that hinders financial progress",
      pdf: "../assest/booksPdf/RichDadAndPoorDad-Pf-Books.pdf" ,    
  },
  
  {
      id: 4 ,
      imgUrl: "../assest/topBooks/sogoodtheycan't.jfif" ,
      heading: "So Good They Can't Ignore You" ,
      desc: "but I think it’s because I am on my journey to discover better ways to be more effective, focused on the real important things and create a greater and faster impact." ,
      texh1: "DON´T FOLLOW YOUR PASSION.",
      texh2: "BE SO GOOD THEY CAN´T IGNORE YOU",
      texh3: "THE IMPORTANCE OF CONTROL",
      texh4: "THINK SMALL, ACT BIG",
      texh5: "DECIDE WHAT CAPITAL MARKET YOU'RE IN",
      texh6: "IDENTIFY YOUR CAPITAL TYPE" ,
      texh7: "STRETCH AND DESTROY",
      texh8: "BE PATIENT",
      pdf: "../assest/booksPdf/soGoodTheyCan't-Pf-Books.pdf" ,
  },

  {
      id: 5 ,
      imgUrl: "../assest/topBooks/todolistformula.jfif" ,
      heading: "To Do List Formula" ,
      desc: "those with to-do lists complete only 41% of their tasks. Productivity expert Damon Zahariades reports, counterintuitively, that to-do lists often make you less productive, not more" ,
      texh1: "Many people don’t know how to use to-do lists correctly.",
      texh2: "As a result, their task management lists can sabotage productivity, a problem called the “productivity paradox.”",
      texh3: "Most people with to-do lists fail to complete 41% of their tasks",
      texh4: "Your to-do lists should support and align with your workflow.",
      texh5: "Prioritize your tasks, put them into context and assign deadlines.",
      texh6: "Break your tasks into segments according to project, type or location" ,
      texh7: "Include time estimates for tasks to tie your chores to your overall goals.",
      texh8: "Cataloging too many tasks can paralyze you. Short-list only seven per day.",
      texh9: "Any negativity depletes the psychological energy you need to complete your tasks.",
      texh10: "Instead, break down your projects into manageable elements, and create separate to-do lists for each project",
      pdf: "../assest/booksPdf/todolistformula-Pf-Books.pdf" ,    
  },

  {
      id: 6 ,
      imgUrl: "../assest/topBooks/deepwork.jfif" ,
      heading: "Deep Work" ,
      desc: "This book outlines the importance of focused, meaningful, high value, low stimulus, rare and difficult to replicate work where distraction and low cognitive work are inevitable with the presence of tools" ,
      texh1: "Machine Vs Human",
      texh2: "Unconscious Thought Theory",
      texh3: "Grand Gestures",
      texh4: "Deep Philosophy",
      texh5: "When you work, work hard and When you are done, be done",
      texh6: "Productive Meditation" ,
      texh7: "Attention Residual",
      texh8: "Day within a day",
      texh9: "Don’t take breaks from Distractions, instead take breaks from focus",
      pdf: "../assest/booksPdf/deepWork-Pf-Books.pdf" ,
  },
  
];
  
  
  // New Message
//   var newMessage = document.querySelector(".newMessage");
//   var newUpdateLocal = localStorage.getItem("Update11")
  
//   if (newUpdateLocal) {
//     newMessage.style.display = "none" ;
//     newMessage.style.opacity = "0" ;
//     newMessage.style.visibility = "hidden" ;
//   } else {
//     newMessage.style.display = "block" ;
//     newMessage.style.opacity = "1" ;
//     newMessage.style.visibility = "visible" ;
//   }
  
//   let NewMessage = [
//     {
//         id: 6 ,
//         icon: "bx bxs-cog" ,
//         heading: "The New Update 11" ,
//         iconheading: "🌟🚀" ,
//         time: "In 30/1/2024",
//         desc: "what's new ? <br/><br/> * Add A New Page For Quotes <br/> * Add Section Called Latest Features <br/> * Remove All Animations <br/> * The Website has been Faster <br/> * Improve All Colors In This Website" ,
//         btnContent: "OK",
//     },
//   ];
  
//   function drawMSG() {
//     let updatesME = NewMessage.map((msg) => {
//         return `
//         <div class="message-content">
//             <i class='${msg.icon}'></i>
//             <h3>${msg.heading} <span> ${msg.iconheading}</span></h3>
//             <span>${msg.time}</span>
//             <p>${msg.desc}</p>
//             <button onclick="sound()" type="button" class="okBtnUpdate">${msg.btnContent}</button>
//         </div>
//         `;
//     });
  
//     newMessage.innerHTML = updatesME.join(''); 
//   }
//   drawMSG();
  
//   var SendUpdate = document.querySelector(".okBtnUpdate");
  
//   SendUpdate.addEventListener('click' , function() {
//     localStorage.setItem("Update11" , JSON.stringify("Updated"));
  
//     var itemsToRemove = ["LastUpdate", "NewUpdate", "Update7" , "Update8" , "Update9" , "Update10" ];
//     itemsToRemove.forEach(function(item) {
//       localStorage.removeItem(item);
//     });
  
//     newMessage.style.display = "none" ;
//   })
  
//   // New Message
//   var subscribeMessage = document.querySelector(".subscribeMessage");
//   var subscribedYT = localStorage.getItem("subscribedYT")
  
//   if (subscribedYT) {
//     subscribeMessage.style.display = "none" ;
//     subscribeMessage.style.opacity = "0" ;
//     subscribeMessage.style.visibility = "hidden" ;
//   } else {
//     subscribeMessage.style.display = "block" ;
//     subscribeMessage.style.opacity = "1" ;
//     subscribeMessage.style.visibility = "visible" ;
//   }
  
//   let SubMessages = [
//     {
//         id: 1 ,
//         icon: "bx bxl-youtube" ,
//         heading: "Support Me" ,
//         iconheading: "🌟🚀" ,
//         time: "In 20/1/2024",
//         desc: "The least you can do to help me or support me is to subscribe to my YouTube channel. I hope you will be honest and help me. Thank you." ,
//     },
//   ];
  
//   function drawSubMSG() {
//     let updatesME = SubMessages.map((msg) => {
//         return `
//         <div class="subscribeMessage-content">
//             <i class='${msg.icon}' style="color: red;"></i>
//             <h3>${msg.heading} <span> ${msg.iconheading}</span></h3>
//             <p>${msg.desc}</p>
//             <button onclick="sound()" type="button" class="subBtn">Subscribe</button>
//         </div>
//         `;
//     });
  
//     subscribeMessage.innerHTML = updatesME.join(''); 
//   }
//   drawSubMSG();
  
//   var SendUpdate = document.querySelector(".subBtn");
  
//   SendUpdate.addEventListener('click' , function() {
//     localStorage.setItem("subscribedYT" , JSON.stringify("Subscribed"));
//     subscribeMessage.style.display = "none" ;
//     window.location = "https://youtube.com/@programmerfero" ;
//   })
  
  
  // Draw Cards
  let topBooks = [
    {
        id: 1 ,
        imgUrl: "assest/topBooks/atomichabits.jfif" ,
        heading: "Atomic Habits" ,
        desc: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones.  You have to read this book . Good Book . " ,
        texh1: "Build a system for getting 1% better every day.",
        texh2: "Break your bad habits and stick to good ones.",
        texh3: "Avoid the common mistakes most people make when changing habits.",
        texh4: "Overcome a lack of motivation and willpower.",
        texh5: "Develop a stronger identity and believe in yourself.",
        texh6: "Make time for new habits (even when life gets crazy).",
        texh7: "Design your environment to make success easier.",
        texh8: "Make tiny, easy changes that deliver big results.",
        texh9: "Get back on track when you get off course.",
        texh10: "And most importantly, how to put these ideas into practice in real life.",
        pdf: "../assest/booksPdf/atomicHabits-Pf-Books.pdf" ,
    },

    {
        id: 2 ,
        imgUrl: "assest/topBooks/the4hourworkweek.jfif" ,
        heading: "The 4-Hour Work Week" ,
        desc: "that is recommended by lots of people. I was very inspired by some of its ideas and stories. You have to read this book " ,
        texh1: "Work smart",
        texh2: "Fear and uncomfortable",
        texh3: "Life",
        texh4: "Start your own business",
        texh5: "Work on the most important things",
        texh6: "Doing what excites you",
        texh7: "Failures",
        texh8: "The Expert Builder: How to Become a Top Expert",
        texh9: "80/20 rule",
        texh10: "Less Is Not Laziness",
        pdf: "../assest/booksPdf/the4hourweek-Pf-Books.pdf" ,
    },

    {
        id: 3 ,
        imgUrl: "assest/topBooks/richdad.jfif" ,
        heading: "Rich Dad And Poor Dad" ,
        desc: "'Rich Dad Poor Dad' is not just a book; it's a guide to financial empowerment, teaching us how to achieve financial freedom and build wealth through real-world wisdom." ,
        texh1: "The Importance of Financial Education.",
        texh2: "Assets vs. Liabilities.",
        texh3: "The Rat Race",
        texh4: "The Power of Passive Income",
        texh5: "Entrepreneurship",
        texh6: "The Importance of Mindset" ,
        texh7: "Learning from Failures ",
        texh8: "The Legacy of Wealth",
        texh9: "Overcoming Fear: Confront and overcome the fear of taking financial risks to achieve your goals",
        texh10: "Avoid Debt Traps Learn to use debt wisely and avoid excessive consumer debt that hinders financial progress",
        pdf: "../assest/booksPdf/RichDadAndPoorDad-Pf-Books.pdf" ,    
    },
    
    {
        id: 4 ,
        imgUrl: "assest/topBooks/sogoodtheycan't.jfif" ,
        heading: "So Good They Can't Ignore You" ,
        desc: "but I think it’s because I am on my journey to discover better ways to be more effective, focused on the real important things and create a greater and faster impact." ,
        texh1: "DON´T FOLLOW YOUR PASSION.",
        texh2: "BE SO GOOD THEY CAN´T IGNORE YOU",
        texh3: "THE IMPORTANCE OF CONTROL",
        texh4: "THINK SMALL, ACT BIG",
        texh5: "DECIDE WHAT CAPITAL MARKET YOU'RE IN",
        texh6: "IDENTIFY YOUR CAPITAL TYPE" ,
        texh7: "STRETCH AND DESTROY",
        texh8: "BE PATIENT",
        pdf: "../assest/booksPdf/soGoodTheyCan't-Pf-Books.pdf" ,
    },

    {
        id: 5 ,
        imgUrl: "assest/topBooks/todolistformula.jfif" ,
        heading: "To Do List Formula" ,
        desc: "those with to-do lists complete only 41% of their tasks. Productivity expert Damon Zahariades reports, counterintuitively, that to-do lists often make you less productive, not more" ,
        texh1: "Many people don’t know how to use to-do lists correctly.",
        texh2: "As a result, their task management lists can sabotage productivity, a problem called the “productivity paradox.”",
        texh3: "Most people with to-do lists fail to complete 41% of their tasks",
        texh4: "Your to-do lists should support and align with your workflow.",
        texh5: "Prioritize your tasks, put them into context and assign deadlines.",
        texh6: "Break your tasks into segments according to project, type or location" ,
        texh7: "Include time estimates for tasks to tie your chores to your overall goals.",
        texh8: "Cataloging too many tasks can paralyze you. Short-list only seven per day.",
        texh9: "Any negativity depletes the psychological energy you need to complete your tasks.",
        texh10: "Instead, break down your projects into manageable elements, and create separate to-do lists for each project",
        pdf: "../assest/booksPdf/todolistformula-Pf-Books.pdf" ,    
    },

    {
        id: 6 ,
        imgUrl: "assest/topBooks/deepwork.jfif" ,
        heading: "Deep Work" ,
        desc: "This book outlines the importance of focused, meaningful, high value, low stimulus, rare and difficult to replicate work where distraction and low cognitive work are inevitable with the presence of tools" ,
        texh1: "Machine Vs Human",
        texh2: "Unconscious Thought Theory",
        texh3: "Grand Gestures",
        texh4: "Deep Philosophy",
        texh5: "When you work, work hard and When you are done, be done",
        texh6: "Productive Meditation" ,
        texh7: "Attention Residual",
        texh8: "Day within a day",
        texh9: "Don’t take breaks from Distractions, instead take breaks from focus",
        pdf: "../assest/booksPdf/deepWork-Pf-Books.pdf" ,
    },
    
  ];
  
  window.onload = function() {
    localStorage.setItem("topBooks" , JSON.stringify(topBooks2));
  }
  
  var servicescards = document.querySelector("#cards");
  
function drawproduct() {
    let productUi = topBooks.map((item) => {
    return `
    <div class="servicesH-card">
    ${item.new ? `<span class="new">${item.new}</span>` : "" }
        <div class="servicesH-img">
            <img src="${item.imgUrl}" loading="lazy" alt="${item.heading}">
        </div>
        <div class="servicesH-info">
            <h3 class="title">${item.heading}</h3>
            <p>${item.desc}</p>
            <a herf="#" onClick="saveTopBooks(${item.id})">Read More</a>
        </div>
    </div>
    `;
});
localStorage.setItem("topBooks" , JSON.stringify(topBooks));
servicescards.innerHTML = productUi.join(''); 
}
drawproduct();

function saveTopBooks(id) {
    localStorage.setItem("TopBooksId" , id);
    window.location = "html/topbooks-information.html" ;
}
  
  // Draw Quotes

  
function searchCards() {
var input, filter, cards, card, title, i;
input = document.getElementById("searchInput");
filter = input.value.toUpperCase();
cards = document.getElementById("cards");
card = cards.getElementsByClassName("servicesQuote-card");

for (i = 0; i < card.length; i++) {
    title = card[i].getElementsByClassName("title")[0];
    if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
        card[i].style.display = "";
    } else {
        card[i].style.display = "none";
    }
}
}
  
  // Btn Top , Down
  var topBtn = document.querySelector(".top");
  var bottomBtn = document.querySelector(".bottom");
  var topI = document.querySelector(".top i");
  
  bottomBtn.addEventListener("click", function() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
  
  
  window.onscroll = function() {
    if (scrollY <= 500) {
      topBtn.style.display = "none" ;
      bottomBtn.style.display = "block" ;
    }
    
    else {
      topBtn.style.display = "block" ;
      bottomBtn.style.display = "none" ;
    }
  }