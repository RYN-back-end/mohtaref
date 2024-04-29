<?php
require(__DIR__ . '/../../helper.php');
if (!isset($_SESSION)) {
    session_start();
}
$selectHeaderCategoriesSql = "SELECT * FROM categories";
$selectHeaderCategoriesResult = runQuery($selectHeaderCategoriesSql);


?>
<header>
    <div class="container">
        <nav class="normal">
            <a class="logo" href="index.php"><img src="assets/img/logo.jpg" alt="logo"></a>
            <ul class="nav-links">
                <li class="nav-items"><a href="index.php">الرئيسية </a></li>
                <li class="nav-items"><a href="craftman.php">مقدمي الخدمات </a></li>
                <li class="nav-items"><a href="#!" id="dropDown2"> الاقسام<i
                                class="fa-solid fa-caret-down"></i></a>
                    <div class="drop-down-2">
                        <ul>
                            <?php
                            if ($selectHeaderCategoriesResult->num_rows > 0) {
                                while ($selectHeaderCategoriesRow = $selectHeaderCategoriesResult->fetch_assoc()) {
                                    ?>
                                    <li>
                                        <a href="products.php?id=<?php echo $selectHeaderCategoriesRow['id'] ?>"> <?php echo $selectHeaderCategoriesRow['title'] ?> </a>
                                    </li>
                                    <?php
                                }
                            }
                            ?>
                        </ul>
                    </div>
                </li>
                <?php
                if (isset($_SESSION['user']['loggedin']) && $_SESSION['user']['loggedin'] == true) {
                    ?>
                    <li class="nav-items"><a href="Orders.php">الطلبات </a></li>
					<li class="nav-items"><a href="cart.php">السلة </a></li>

                    <?php
                }
                ?>
                <li class="nav-items"><a href="contact.php">لديك استفسار ؟ </a></li>
            </ul>

            <?php
            if (isset($_SESSION['user']['loggedin']) && $_SESSION['user']['loggedin'] == true) {
                ?>
                <div class="user-after-login">
                    <div class="user-img"><img src="<?php echo $_SESSION['user']['image'] ?? '' ?>" alt="user-img">
                    </div>
                    <p class="user-name"> <?php echo $_SESSION['user']['name'] ?? '' ?><i
                                class="fa-solid fa-caret-down"></i></p>
                    <div class="drop-down">
                        <ul>
                            <li><a href="profile.php"> <i class="fa-light fa-sliders"></i> الملف الشخصي </a></li>
                            <li><a href="logout.php"> <i class="fa-light fa-arrow-right-from-bracket"></i>تسجيل الخروج
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <?php
            }else{
                ?>
                <div class="user-after-login">

                    <a href="login.php" class="user-name">تسجيل الدخول</a>
                </div>
                <?php
            }
            ?>
        </nav>
    </div>
    <div class="container-full">
        <nav class="responsive">
            <div class="icon-menu"><span> </span><span> </span><span> </span></div>
            <a class="logo" href="#!"><img src="<?php echo $setting['logo'] ?>" alt="logo"></a>
            <div class="user-after-login">
                <div class="user-img"><img src="assets/img/model-3.webp" alt="user-img"></div>

                <div class="drop-down">
                    <ul>
                        <li><a href="#!"> <i class="fa-light fa-sliders"></i>إعدادات </a></li>
                        <li><a href="logout.php"> <i class="fa-light fa-arrow-right-from-bracket"></i>تسجيل
                                الخروج</a>
                        </li>
                    </ul>
                </div>

            </div>
            <?php
            if (isset($_SESSION['user']['loggedin']) && $_SESSION['user']['loggedin'] == true) {
                ?>
                <div class="links-res">
                    <ul>
                        <li><a class="active" href="index.php">الرئيسية </a></li>
                        <li><a href="craftman.php">مقدمي الخدمات </a></li>
                        <li><a href="contact.php">لدلك استفسار ؟</a></li>
                    </ul>
                </div>
                <?php
            }
            ?>
        </nav>
    </div>
</header>
