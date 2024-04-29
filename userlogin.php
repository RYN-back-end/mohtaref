<?php
require 'helper.php';
checkLogin();
if (isset($_POST['email']) && isset($_POST['password'])) {
    $sql = "SELECT * FROM `users` WHERE `email` =  '{$_POST['email']}'";
    $data = runQuery($sql);
    if ($data->num_rows > 0) {
        $row = $data->fetch_assoc();
        if (password_verify($_POST['password'], $row['password'])) {
            $_SESSION['user']['id'] = $row['id'];
            $_SESSION['user']['name'] = $row['name'];
            $_SESSION['user']['email'] = $row['email'];
            $_SESSION['user']['image'] = $row['image'];
            $_SESSION['user']['phone'] = $row['phone'];
            $_SESSION['user']['loggedin'] = true;
            header('Location: index.php');
        } else {
            header('Location: login.php?error=كلمة المرور خاطئة');
        }
    } else {
        header('Location: login.php?error=البريد الإلكترونى غير موجود');
    }
    die();

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

            <div class="col-8-md">
                <?php
                if (isset($_GET['error'])) {
                    ?>
                    <div class="alert alert-danger" role="alert" style="text-align: right">
                        <?php echo $_GET['error']; ?>
                        <button type="button" style="float: left" class="close" data-bs-dismiss="alert"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <?php
                }
                if (isset($_GET['success'])) {
                    ?>
                    <div class="alert alert-success" role="alert" style="text-align: right">
                        <?php echo $_GET['success']; ?>
                        <button type="button" style="float: left" class="close" data-bs-dismiss="alert"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <?php
                }
                ?>
                <form action="" method="post"><p>تسجيل الدخول</p>
                    <div class="form-control"><label for="email">البريد الالكتروني</label><input type="email" required
                                                                                                 name="email"></div>
                    <div class="form-control"><label for="password">كلمة المرور </label><input type="password" required
                                                                                               name="password"></div>
                    <div class="details-login"><p> ليس لدي حساب؟<a href="registration.php">اضغط هنا</a></p></div>

                    <div class="button">
                        <button type="submit">تسجيل الدخول</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<?php
require_once 'layout/inc/footer.php';

require_once 'layout/assets/js.php';
?></body>
</html>