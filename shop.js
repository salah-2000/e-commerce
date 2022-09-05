const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML =`
    
    <div class="nav">
    <img src="./brands/dark-logo.png" class="brand-logo" alt="">
    <div class="nav-item">
        <div class="search">
            <input type="text" class="search-box" placeholder="search product">
            <button class="search-btn">search</button>
        </div>
        <a href="#"> <i class='bx bxs-user-circle'></i></a>
       <a href="#"><i class='bx bx-cart'></i></a>
    </div>
</div>
<ul class="link-containers">
    <li class="link-item"><a class="link" href="#home">Home</a></li>
    <li class="link-item"><a class="link" href="#pro">Selling</a></li>
    <li class="link-item"><a class="link" href="#shose">Shose</a></li>
    <li class="link-item"><a class="link" href="#watches">Watches</a></li>
    <li class="link-item"><a class="link" href="#about">About us</a></li>
</ul>
    
    `;
}
createNav();

let scroll = 201;
$(window).scroll(function() {
    $(this).scrollTop();

    if($(window).scrollTop() >= scroll ) 
    {
        $("#up").fadeIn(1000);
        $("#up").click(function() {
            $(window).scrollTop(0);
        });
    }else{
        $("#up").hide();
    }
});

const creatfooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    
    <div class="footer-category">
    <img src="./brands/light-logo.png" alt="">
    <ul>
        <li class="footer-link">Men</li>
        <li><a href="#">T-shirts</a></li>
        <li><a href="#">Trouser</a></li>
        <li><a href="#">switshirt</a></li>
        <li><a href="#">shose</a></li>
        <li><a href="#">watch</a></li>
        <li><a href="#">shirts</a></li>
    </ul>

    <ul>
        <li class="footer-link">Women</li>
        <li><a href="#">T-shirts</a></li>
        <li><a href="#">Trouser</a></li>
        <li><a href="#">switshirt</a></li>
        <li><a href="#">shose</a></li>
        <li><a href="#">watch</a></li>
        <li><a href="#">shirts</a></li>
    </ul>

    <ul>
        <li class="footer-link">Kids</li>
        <li><a href="#">T-shirts</a></li>
        <li><a href="#">Trouser</a></li>
        <li><a href="#">switshirt</a></li>
        <li><a href="#">shose</a></li>
        <li><a href="#">watch</a></li>
        <li><a href="#">shirts</a></li>
    </ul>
</div>
 
<p class="footer-about">About company ..!!</p>
<p class="footer-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quaerat, reprehenderit, excepturi autem eaque explicabo nisi 
    amet beatae architecto est corrupti libero. Autem recusandae natus 
    eos maiores ratione pariatur eius temporibus minima nemo nostrum rem
     placeat veritatis itaque, nihil, minus exercitationem necessitatibus, 
     quod doloribus soluta. Mollitia quisquam vel, illo temporibus minima itaque non ratione,
      ex sequi, doloremque consequuntur dolorem veniam suscipit accusamus asperiores fugiat odit!
       Fuga quidem deleniti, ex itaque optio mollitia aliquid provident. Totam dolore eum dicta possimus 
       ea corporis! Eveniet id aliquid dicta voluptatum quae aut ipsam reiciendis sequi laudantium, 
    ea aspernatur libero ipsum quia amet numquam eius delectus!</p>
    <br>
    <p class="num">01123456789</p>
    <br>
    <p class="footer-info">support emails - help@gmail.com</p>
   <br>
<a class="social" href="https://www.facebook.com/"><i class='bx bxl-facebook-circle'></i></a>
<a class="social" href="https://www.instagram.com/"><i class='bx bxl-instagram-alt'></i></a>
<a class="social" href="https://www.whatsapp.com"><i class='bx bxl-whatsapp'></i></a>
<a class="social" href="https://www.twitter.com"><i class='bx bxl-twitter'></i></a>
<p class="end-footer">&COPY; clothing, best apperals online store</p>


    `;
}
creatfooter();
