<?php
require (__DIR__.'/../../../helper.php')
?>
<header>

<div class="container">
    <nav class="normal">
        <ul class="nav-links">
            <li class="nav-items"><a href="index.php">الرئيسية </a></li>
           
            <li class="nav-items"><a href="company.php">ملفات المحترفين </a></li>
			<li class="nav-items"><a href="categories.php">ادارة الاقسام </a></li>
			<li class="nav-items"><a href="craftman.php">المحترفين </a></li>
			
            <li class="nav-items"><a href="users.php">المستخدمين </a></li>
            <li class="nav-items"><a href="Orders.php">الطلبات </a></li>
           
        </ul>
        <div class="user-after-login">
            <div class="user-img"><img src="../<?php echo $_SESSION['admin']['image']?>" alt="user-img"></div>
            <p class="user-name"> <?php echo $_SESSION['admin']['name']?><i class="fa-solid fa-caret-down"></i></p>
            <div class="drop-down">
                <ul>
                    <li><a href="logout.php"> <i class="fa-light fa-arrow-right-from-bracket"></i>تسجيل الخروج </a></li>

                </ul>
            </div>
        </div>
    </nav>
</div>
<div class="container-full">
    <nav class="responsive">
        
       
        <div class="user-after-login">
            <div class="user-img"><img src="../<?php echo $_SESSION['admin']['image']?>" alt="user-img"></div>
            <div class="drop-down">
                <ul>
                    
                    <li><a href="logout.php"> <i class="fa-light fa-arrow-right-from-bracket"></i>تسجيل الخروج</a></li>
                </ul>
            </div>
        </div>
      
    </nav>
</div>
</header>
