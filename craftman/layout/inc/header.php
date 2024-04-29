<?php
require (__DIR__.'/../../../helper.php')
?>
<header>

<div class="container">
    <nav class="normal"><a class="logo" href="index.php">
        <ul class="nav-links">
            <li class="nav-items"><a href="index.php">الطلبات </a></li>

            <li class="nav-items"><a href="products.php">المنتجات</a></li>
<!--            <li class="nav-items"><a href="setting.php">الاعدادت </a></li>-->
        </ul>
        <div class="user-after-login">
            <div class="user-img"><img src="../<?php echo $_SESSION['professional']['banner']?>" alt="user-img"></div>
            <p class="user-name"> <?php echo $_SESSION['professional']['title']?><i class="fa-solid fa-caret-down"></i></p>
            <div class="drop-down">
                <ul>
                    <li><a href="profile.php"> <i class="fa-light fa-sliders"></i> الملف الشخصي </a></li>
                    <li><a href="logout.php"> <i class="fa-light fa-arrow-right-from-bracket"></i>تسجيل الخروج </a></li>

                </ul>
            </div>
        </div>
    </nav>
</div>
<div class="container-full">
    <nav class="responsive">
        <div class="icon-menu"><span> </span><span> </span><span> </span></div>
     
        <div class="user-after-login">
            <div class="user-img"><img src="../<?php echo $_SESSION['professional']['banner']?>" alt="user-img"></div>
            <div class="drop-down">
                <ul>
                    <li><a href="#!"> <i class="fa-light fa-sliders"></i>إعدادات </a></li>
                    <li><a href="profile.php"> <i class="fa-light fa-sliders"></i> الملف الشخصي </a></li>
                    <li><a href="logout.php"> <i class="fa-light fa-arrow-right-from-bracket"></i>تسجيل الخروج</a></li>
                </ul>
            </div>
        </div>
        <div class="links-res">
            <ul>
                <li class="nav-items"><a href="index.php">الطلبات </a></li>

                <li class="nav-items"><a href="products.php">المتجات </a></li>
<!--                <li class="nav-items"><a href="setting.php">الاعدادت </a></li>-->
            </ul>
        </div>
    </nav>
</div>
</header>
