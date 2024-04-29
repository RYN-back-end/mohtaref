
<?php
require 'helper.php';
checkLogin();

$selectUserSql = "SELECT * FROM users where id = '{$_SESSION['user']["id"]}'";
$selectUserResult = runQuery($selectUserSql);
$selectUserRow = $selectUserResult->fetch_assoc();

if (isset($_POST['name']) ) {

    $checkExistsEmailSql = "SELECT * FROM users WHERE email = '{$_POST['email']}' AND id != '{$_SESSION['user']["id"]}'";

    $checkExistsEmailResult = runQuery($checkExistsEmailSql);
    if ($checkExistsEmailResult->num_rows > 0) {
        header("Location: profile.php?error=البريد الاكترونى مستخدم من قبل");
        die();
    }

    $imagePath = $_SESSION['user']['image'];
    if (isset($_FILES['image']) && $_FILES['image']) {
        $errors = array();
        $file_name = (time() * 2) . '.jpg';
        $file_size = $_FILES['image']['size'];
        $file_tmp = $_FILES['image']['tmp_name'];
        $file_type = $_FILES['image']['type'];
        if ($file_size > 2097152) {
            header("Location: profile.php?error=يجب ان يكون حجم الصورة اقل من 2MB");
        }
        if (move_uploaded_file($file_tmp, "uploads/users/" . $file_name)) {
            $imagePath = "uploads/users/" . $file_name;
        }
    }

    $password = $selectUserRow['password'];
    if (isset($_POST['password'])) {
        if ($_POST['password'] != '') {
            $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        }
    }
    $updateSql = "UPDATE `users` SET `image` = '{$imagePath}',`name`='{$_POST['name']}',`email`='{$_POST['email']}',`password`='{$password}',`phone`='{$_POST['phone']}' WHERE id = '{$selectUserRow['id']}'";
    runQuery($updateSql);

    $_SESSION['user']['name'] = $_POST['name'];
    $_SESSION['user']['image'] = $imagePath;
    $_SESSION['user']['email'] = $_POST['email'];
    $_SESSION['user']['phone'] = $_POST['phone'];

    header('Location: profile.php?success=تم الحفظ');


}
if (isset($_GET['method']) && isset($_GET['user_id'])) {
    $deleteSql = "DELETE From users WHERE id = {$_GET['user_id']}";
    runQuery($deleteSql);
    header('Location: index.php?success=تم الحذف بنجاح');
}

?>
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Information Technology">
    <title>موقع محترف | لوحة التحكم</title>
    <link rel="icon" href="assets/img/logo.png" type="image/png">
    <?php
    require_once 'layout/assets/css.php'
    ?>
</head>
<body>

<?php
require_once 'layout/inc/header.php'
?>
<section class="company">
    <div class="container">
        <div class="main-heading"><p class="title"> تعديل الملف الشخصي</p></div>
        <div class="setting-admin">
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
                    <div class="img-present"><img src="<?php echo $selectUserRow['image']?>" alt="present-img"></div>
                    <form method="post" action="" enctype="multipart/form-data">
                        <div class="model-setting">
                            <div class="book-input"><label>الصورة </label><input type="file" name="image" accept="image/*"
                                                                                 ></div>
                            <div class="book-input"><label>الاسم </label><input type="text" placeholder="" name="name" value="<?php echo $selectUserRow['name']?>"
                                                                                required>
                            </div>
                            <div class="book-input"><label>البريد الالكتروني </label><input type="email" name="email" required  value="<?php echo $selectUserRow['email']?>"
                                                                                            placeholder=""></div>

                            <div class="book-input"><label>رقم الهاتف </label><input type="number" name="phone" required  value="<?php echo $selectUserRow['phone']?>"
                                                                                            placeholder=""></div>
                            <div class="book-input"><label>كلمة المرور </label><input type="password" name="password"
                                                                                      placeholder="*******"></div>

                            <div class="button">
                                <button type="submit">تحديث</button>
								 <button class="danger" type="button"><a style="color: white" class="confirmation" href="?method=DELETE&user_id=<?php echo $selectUserRow['id']?>">حذف</a></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<?php
require_once 'layout/assets/js.php'
?>
</body>
</html>