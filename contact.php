<?php
require 'helper.php';
if (isset($_POST['name']))
{
    $insertSql = "INSERT INTO conatct (`name`, email,whatsapp,message) Values ('{$_POST['name']}','{$_POST['email']}','{$_POST['whatsapp']}','{$_POST['massage']}')";
    runQuery($insertSql);
    header('Location: contact.php');
}


?>


<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Information Technology">
    <title>موقع محترف</title>
    <link rel="icon" href="assets/img/logo.png" type="image/png">
    <?php
    require_once 'layout/assets/css.php'
    ?>
</head>
</html>
<body>
<?php
require_once 'layout/inc/header.php'
?>
<section class="page-banner">
    <div class="container">
        <div class="page-bread"><p class="head">الشكاوي والاقتراحات</p>
            <ul>
                <li><a href="index.php"> 🏠 الرئيسية </a></li>
                <li>/</li>
                <li>الشكاوي والاقتراحات</li>
            </ul>
        </div>
    </div>
</section>
<section class="contactUs">
    <div class="container">
        <div class="row gap-1">
            <div class="col-6-md col-12-sm">
                <form action="" method="POST">
                    <div class="form-control"><label for="name">الاسم بالكامل</label><input type="text" required name="name">
                    </div>
                    <div class="form-control"><label for="email">البريد الالكتروني</label><input required type="email"
                                                                                                 name="email"></div>
                    <div class="form-control"><label for="number">رقم واتس اب</label><input type="number" required name="whatsapp">
                    </div>
                    <div class="form-control"><label for="massage">رسالتك</label><textarea name="massage" required> </textarea>
                    </div>
                    <div class="button">
                        <button type="submit">ارسال</button>
                    </div>
                </form>
            </div>
            <div class="col-6-md col-12-sm"><img src="assets/img/contactUs.webp" alt="contact"></div>
        </div>
    </div>
</section>
<footer>
    <div class="container">
        <div class="row">
            <div class="col-4-lg col-6-md col-12-sm">
                <div class="about_notes">
                    <div class="img_footer"><img src="assets/img/logo.png" alt="logo"></div>
                    <p class="des">نبتكر في نامي نظم لتغيير ملامح الويب العربي للأفضل وطموحنا هو إرضاء عملائنا وتقديم
                        أفضل خدمة ممكنة في أنسب وقت وبتكلفة متوازنة واستكمال التعاون مع عملاء هدفهم الإبتكار والتطور
                        والنجاح معنا</p></div>
            </div>
            <div class="col-4-lg col-6-md col-12-sm">
                <div class="important_links"><p class="head">روابط سريعة</p>
                    <ul>
                        <li><a href="#!">اعمالنا</a></li>
                        <li><a href="#!">التسويق</a></li>
                        <li><a href="#!">العروض</a></li>
                        <li><a href="ContactUs.php">تواصل معنا</a></li>
                        <li><a href="#!">الشروط والاحكام</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-4-lg col-6-md col-12-sm">
                <div class="follow"><p class="head">تابعنا</p>
                    <ul>
                        <li><a class="links" href="#!"> <i class="fa-brands fa-facebook-f"></i>فيسبوك</a></li>
                        <li><a class="links" href="#!"> <i class="fa-brands fa-whatsapp"></i>فيسبوك</a></li>
                        <li><a class="links" href="#!"> <i class="fa-brands fa-instagram"></i>فيسبوك</a></li>
                        <li><a class="links" href="#!"> <i class="fa-brands fa-twitter"></i>فيسبوك</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <p class="copy_right">حقوق النشر © 2023 جميع الحقوق محفوظة <a href="#!">فريق المشروع </a></p></div>
</footer>
<script src="js/plugins.js"></script>
</body>