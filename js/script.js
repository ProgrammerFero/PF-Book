// Draw Cards
let topBooks2 = [
    {
        id: 1 ,
        imgUrl: "../assest/Books/atomichabits.jpg" ,
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
        pdfAr: "../assest/booksPdf/atomicHabits-Ar-Pf-Books.pdf" ,
        publisher: "Programmer Fero" ,    
    },

    {
        id: 2 ,
        imgUrl: "../assest/Books/the4hourworkweek.jpg" ,
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
        pdfAr: "../assest/booksPdf/the4hourweek-Ar-Pf-Books.pdf" ,
        publisher: "Programmer Fero" ,        
    },

    {
        id: 3 ,
        imgUrl: "../assest/Books/richdad.jpg" ,
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
        pdfAr: "../assest/booksPdf/RichDadAndPoorDad-Ar-Pf-Books.pdf" ,
        publisher: "Programmer Fero" ,        
    },
    
    {
        id: 4 ,
        imgUrl: "../assest/Books/sogoodtheycan't.jpg" ,
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
        publisher: "Programmer Fero" ,       
    },

    {
        id: 5 ,
        imgUrl: "../assest/Books/todolistformula.jpg" ,
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
        publisher: "Programmer Fero" ,        
    },

    {
        id: 6 ,
        imgUrl: "../assest/Books/deepwork.jpg" ,
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
        publisher: "Programmer Fero" ,        
    },

    {
        id: 7 ,
        imgUrl: "../assest/Books/theAlmanackofnaval.png" ,
        heading: "The ALMANACK OF NAVAL" ,
        desc: "The author compiled wisdom shared by Naval Ravikant in interviews, tweets, writings, and other forms." ,
        texh1: "On Wealth — Productize Yourself",
        texh2: "Direct your hard work the right way. Before you grind, figure out what to do.",
        texh3: "Focus on specific knowledge — something you cannot be trained for. If you can train, you can be automated/replaced. (Innate talent + passion + curiosity)",
        texh4: "Build and sell. Code/write/anything. DO it. Society needs new things, figure it out, build it, scale it.",
        texh5: "Renting out time is expensive. Own equity to work for you. Ownership vs wage work.",
        texh6: "Become the best in what you do, keep redefining. If you are not in 100%, someone else who is will outperform you." ,
        texh7: "By learning. When you cannot understand something, go back to the foundation. Foundation knowledge is important.",
        texh8: "99% of the effort is wasted if you look at things goal-oriented. (99 boyfriends before 1 husband — but these are learning moments)",
        pdf: "../assest/booksPdf/theAlmanackofnaval.pdf" ,
        pdf: "../assest/booksPdf/theAlmanackofnaval-Ar.pdf" ,
        publisher: "Programmer Fero" ,        
    },
];
  
  
// Draw Cards
let topBooks = [
    {
        id: 1 ,
        imgUrl: "assest/Books/atomichabits.jpg" ,
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
        pdfAr: "../assest/booksPdf/atomicHabits-Ar-Pf-Books.pdf" ,
        publisher: "Programmer Fero" ,    
    },

    {
        id: 2 ,
        imgUrl: "assest/Books/the4hourworkweek.jpg" ,
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
        pdfAr: "../assest/booksPdf/the4hourweek-Ar-Pf-Books.pdf" ,
        publisher: "Programmer Fero" ,        
    },

    {
        id: 3 ,
        imgUrl: "assest/Books/richdad.jpg" ,
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
        pdfAr: "../assest/booksPdf/RichDadAndPoorDad-Ar-Pf-Books.pdf" ,
        publisher: "Programmer Fero" ,        
    },
    
    {
        id: 4 ,
        imgUrl: "assest/Books/sogoodtheycan't.jpg" ,
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
        publisher: "Programmer Fero" ,       
    },

    {
        id: 5 ,
        imgUrl: "assest/Books/todolistformula.jpg" ,
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
        publisher: "Programmer Fero" ,        
    },

    {
        id: 6 ,
        imgUrl: "assest/Books/deepwork.jpg" ,
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
        publisher: "Programmer Fero" ,        
    },

    {
        id: 7 ,
        imgUrl: "assest/Books/theAlmanackofnaval.png" ,
        heading: "The ALMANACK OF NAVAL" ,
        desc: "The author compiled wisdom shared by Naval Ravikant in interviews, tweets, writings, and other forms." ,
        texh1: "On Wealth — Productize Yourself",
        texh2: "Direct your hard work the right way. Before you grind, figure out what to do.",
        texh3: "Focus on specific knowledge — something you cannot be trained for. If you can train, you can be automated/replaced. (Innate talent + passion + curiosity)",
        texh4: "Build and sell. Code/write/anything. DO it. Society needs new things, figure it out, build it, scale it.",
        texh5: "Renting out time is expensive. Own equity to work for you. Ownership vs wage work.",
        texh6: "Become the best in what you do, keep redefining. If you are not in 100%, someone else who is will outperform you." ,
        texh7: "By learning. When you cannot understand something, go back to the foundation. Foundation knowledge is important.",
        texh8: "99% of the effort is wasted if you look at things goal-oriented. (99 boyfriends before 1 husband — but these are learning moments)",
        pdf: "../assest/booksPdf/theAlmanackofnaval.pdf" ,
        publisher: "Programmer Fero" ,        
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
            <p class="publisher">Publisher: <span> ${item.publisher}</span></p>
            <a herf="#" onClick="saveTopBooks(${item.id})">Read More</a>
        </div>
    </div>
    `;
});
localStorage.setItem("topBooks" , JSON.stringify(topBooks2));
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