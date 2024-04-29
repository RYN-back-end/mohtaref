<?php
require('helper.php');
checkCompanyLogin();

    if (isset($_POST['name']))
    {
            $checkExistsSql = "SELECT * FROM professionals WHERE email = '{$_POST['email']}'";

        $checkExistsResult = runQuery($checkExistsSql);
        if ($checkExistsResult->num_rows > 0) {
            header("Location: craftregister.php?error=البريد الإلكترونى مستخدم من قبل");
        }

        $imagePath = null;
        if (isset($_FILES['image'])) {
            $errors = array();
            $file_name = (time() * 2) . '.jpg';
            $file_size = $_FILES['image']['size'];
            $file_tmp = $_FILES['image']['tmp_name'];
            $file_type = $_FILES['image']['type'];
            $imagePath = "uploads/professionals/" . $file_name;
            if ($file_size > 2097152) {
                header("Location: craftregister.php?error=يجب ان يكون حجم الصورة اقل من 2MB");
            }
            move_uploaded_file($file_tmp, $imagePath);
        }
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

            $insertSql = "INSERT INTO professionals (title,email,password,banner,whatsapp,address,pro_desc) VALUES 
                                                         ('{$_POST['name']}','{$_POST['email']}','{$password}','{$imagePath}','{$_POST['phone']}', '{$_POST['address']}','{$_POST['pro_desc']}')";
        
        header('Location: index.php?error= بانتظار تنشيط حسابك من مدير النظام');
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
        <div class="page-bread"><p class="head">تسجيل </p>
            <ul>
                <li><a href="index.php"> 🏠 الرئيسية </a></li>
                <li>/</li>
                <li> تسجيل</li>
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
                <form action="" enctype="multipart/form-data" method="POST"><p>تسجيل </p>
                    <div class="form-control"><label for="image"> الصورة</label><input type="file"  accept="image/*" name="image" required></div>
                    <div class="form-control"><label for="text"> الاسم</label><input type="text" name="name" required></div>
                    <div class="form-control"><label for="email">البريد الالكتروني</label><input type="email"
                                                                                                 name="email" required></div>
					<div class="form-control"><label for="number">العنوان</label><input type="text" name="address" required>
                    </div>
					<div class="form-control"><label for="number">الوصف</label> <textarea name="pro_desc" required>  </textarea>  
                    </div>
                    <div class="form-control"><label for="number">رقم الهاتف</label><input type="text" name="phone" required>
                    </div>
                    <div class="form-control"><label for="password">كلمة المرور </label><input type="password" required
                                                                                               name="password"></div>
                    <div class="button">
                        <button type="submit">التسجيل</button>
                    </div>
                    <div class="details-login"><p> لدي حساب بالفعل؟<a href="login.php">اضغط هنا</a></p></div>
                </form>
            </div>
        </div>
    </div>
</section>
<?php
require_once 'layout/inc/footer.php';

require_once 'layout/assets/js.php';
?>
</body>
</html>