
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Information Technology">
    <title>موقع محترف</title>
    <link rel="icon" href="assets/img/logo.png" type="image/png">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/plugins.css">
    <style>
        .alert {
            border-radius: 0px;
            padding: 10px 15px;
        }

        .alert-danger {
            color: #a94442;
            background-color: #f2dede;
            border-color: #ebccd1;
        }

        .alert {
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid transparent;
            border-radius: 4px;
        }

        button.close {
            -webkit-appearance: none;
            padding: 0;
            cursor: pointer;
            background: transparent;
            border: 0;
        }

        .close {
            float: right;
            font-size: 21px;
            font-weight: bold;
            line-height: 1;
            color: #000;
            text-shadow: 0 1px 0 #fff;
            filter: alpha(opacity=20);
            opacity: .2;
        }

        .alert-success {
            color: #3c763d;
            background-color: #dff0d8;
            border-color: #d6e9c6;
        }
    
.ChooseAuth{-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;height:100%}
.ChooseAuth .Box{border:1px solid #8a6143;padding:15px;box-shadow:0 0 1.25rem #0003}@media (max-width:600px){
	.ChooseAuth .Box:first-child{margin-left:0}}
	.ChooseAuth .Box svg{color:#8a6143;width:20rem}
	.ChooseAuth .Box a{width:100%;height:100%;inset:0}
	.d-flex {
  display:-ms-flexbox;
  display:flex
}
.d-inline-block {
  display:inline-block
}
.round-4 {
  border-radius:4px
}
.round-6 {
  border-radius:6px
}
.round-8 {
  border-radius:8px
}
	</style>
</head>
<body>
<?php
require_once 'layout/inc/header.php'
?>


<section class="page-banner">
    <div class="container">
        <div class="page-bread"><p class="head">تسجيل الدخول</p>
            <ul>
                <li><a href="index.php"> 🏠 الرئيسية </a></li>
                <li>/</li>
                <li> تسجيل الدخول</li>
            </ul>
        </div>
    </div>
</section>
<section class="contactUs login">
    <div class="container">
        <div class="row justify-center">

  

  <div class="container ">


 <section class="">
 <div class="" id="container"> 
 <section class="ChooseAuth d-flex items-center justify-center" style="gap: 20px">
 <!-- box for admin --> 
 <div class="Box ml-14 relative text-center round-6" style="position: relative ; height: 200px ;width: 226px;
    text-align: center;">
 <img src="assets/img/admin.jpg" width="200" height="200" style="height: 50%">
<!-- <svg width="1em" height="1em" viewBox="0 0 60 60" data-icon="admin">  -->
 
 <p class="fw-500 fs-18 pt-5 " style="margin-top: 10vh"> تسجيل دخول كمدير للنظام</p>
<!-- </svg>-->
 
 <a href="admin/login.php" title="admin/login.php" class="absolute" style="position: absolute"></a>
 </div> 
 <div class="Box relative text-center round-6" style="position: relative ; height: 200px;width: 226px;
    text-align: center;">
 <img src="assets/img/craftman.jpg" width="500" height="500" style="height: 50%">
<!-- <svg width="1em" height="1em" viewBox="0 0 36 36" data-icon="client">  -->
<!-- </svg> -->
 <p class="fw-500 fs-18 pt-5" style="margin-top: 10vh">تسجيل دخول كحرفي</p>
 <a href="craftman/login.php" title="craftman/login.php" class="absolute" style="position: absolute"></a>
 </div> 
  <div class="Box relative text-center round-6" style="position: relative ; height: 200px ; width: 226px;
    text-align: center;" >
  <img src="assets/img/user.png" width="1456" height="700" style="height: 50%">
<!-- <svg width="1em" height="1em" viewBox="0 0 36 36" data-icon="client">  -->
<!-- </svg> -->
 <p class="fw-500 fs-18 pt-5" style="margin-top: 10vh">تسجيل دخول كمشتري</p>
 <a href="userlogin.php"  class="absolute" style="position: absolute"></a>
 </div> 
 </section> </div> </section> 
 
 </div> </main>   
    </div>
    </div>
</section>
<?php
require_once 'layout/inc/footer.php';

require_once 'layout/assets/js.php';
?></body>
</html>