<?php
require '../helper.php';
checkAdminLogin();

if (isset($_POST['name']) && isset($_POST['type']) && $_POST['type'] == 'new') {

    $checkExistsEmailSql = "SELECT * FROM admins WHERE email = '{$_POST['email']}'";

    $checkExistsEmailResult = runQuery($checkExistsEmailSql);
    if ($checkExistsEmailResult->num_rows > 0 || $checkExistsEmailResult->num_rows > 0) {
        header("Location: index.php?error=البريد الاكترونى مستخدم من قبل");
    }

    $imagePath = "";
    if (isset($_FILES['image']) && $_FILES['image']) {
        $errors = array();
        $file_name = (time() * 2) . '.jpg';
        $file_size = $_FILES['image']['size'];
        $file_tmp = $_FILES['image']['tmp_name'];
        $file_type = $_FILES['image']['type'];
        if ($file_size > 2097152) {
            header("Location: index.php?error=يجب ان يكون حجم الصورة اقل من 2MB");
        }
        if (move_uploaded_file($file_tmp, "../uploads/admins/" . $file_name)) {
            $imagePath = "uploads/admins/" . $file_name;
        }
    }
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $insertSql = "INSERT INTO admins (name,email,image,password) VALUES ('{$_POST['name']}','{$_POST['email']}','{$imagePath}','{$password}')";;
    runQuery($insertSql);
    header('Location: index.php?success=تم الإضافة بنجاح');


}
if (isset($_POST['id']) && isset($_POST['type']) && $_POST['type'] == 'edit') {
    $checkExistsEmailSql = "SELECT * FROM admins WHERE email = '{$_POST['email']}' AND id != '{$_POST['id']}'";

    $checkExistsEmailResult = runQuery($checkExistsEmailSql);
    if ($checkExistsEmailResult->num_rows > 0) {
        header("Location: index.php?error=البريد الاكترونى مستخدم من قبل");
        die();
    }

    $selectOldAdminSql = "SELECT * from admins where id = '{$_POST['id']}'";
    $getOldAdminResult = runQuery($selectOldAdminSql);
    $oldAdmin = $getOldAdminResult->fetch_assoc();
    $imagePath = $oldAdmin['image'];
    if (isset($_FILES['image']) && $_FILES['image']) {
        $errors = array();
        $file_name = (time() * 2) . '.jpg';
        $file_size = $_FILES['image']['size'];
        $file_tmp = $_FILES['image']['tmp_name'];
        $file_type = $_FILES['image']['type'];
        if ($file_size > 2097152) {
            header("Location: index.php?error=يجب ان يكون حجم الصورة اقل من 2MB");
        }

        if (move_uploaded_file($file_tmp, "../uploads/admins/" . $file_name)) {
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
            $imagePath = "uploads/admins/" . $file_name;
        }
    }

    $password = $oldAdmin['password'];
    if (isset($_POST['password'])) {
        if ($_POST['password'] != '') {
            $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        }
    }
    $updateSql = "UPDATE `admins` SET `name` = '{$_POST['name']}',`email`='{$_POST['email']}',`password`='{$password}',`image`='{$imagePath}' WHERE id = '{$_POST['id']}'";
    runQuery($updateSql);

    if ($_SESSION['admin']['id'] == $oldAdmin['id']) {
        $_SESSION['admin']['name'] = $_POST['name'];
        $_SESSION['admin']['email'] = $_POST['email'];
        $_SESSION['admin']['image'] = $imagePath;
    }
    header('Location: index.php?success=تم التعديل بنجاح');

}
if (isset($_GET['method']) && isset($_GET['admin_id'])) {
    $deleteSql = "DELETE From admins WHERE id = {$_GET['admin_id']}";
    runQuery($deleteSql);
    if ($_SESSION['admin']['id'] == $_GET['admin_id']) {
        $_SESSION['admin'] = [];
        checkAdminLogin();
    }
    header('Location: index.php?success=تم الحذف بنجاح');
}


$getAdminsSql = "SELECT * FROM admins";
$getAdminsResult = runQuery($getAdminsSql);


?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Information Technology">
    <title>محترف | لوحة التحكم</title>
	<link rel="icon" href="assets/img/logo.png" type="image/png">
    <?php
    require_once 'layout/assets/css.php'
    ?>
</head>
<body>
<?php
require_once 'layout/inc/header.php'
?>

<section class="home-offer">
    <div class="container">
        <div class="main-heading"><p class="title">مديرين النظام</p></div>
        <div class="button">
            <button class="add-btn" id="model-book">اضافة جديد 🤵🏼‍</button>
        </div>
        <div class="company">
            <div class="container">
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
                <div class="row gap-1">

                    <?php
                    if ($getAdminsResult->num_rows > 0) {
                        while ($row = $getAdminsResult->fetch_assoc()) {
                            ?>
                            <div class="col-4-lg col-6-md col-12-sm">
                                <div class="company-card">
                                    <div class="company-img"><img style="height:250px" src="../<?php echo $row['image'] ?>"
                                                                  alt="company-img"></div>
                                    <div class="details-company"><p class="name"><?php echo $row['name'] ?></p>
                                        <div class="button">
                                            <button class="edit-btn" data-model="editModel<?php echo $row['id'] ?>"
                                                    type="button" id="editButton"> تعديل
                                            </button>
                                            <button class="danger" type="button"><a
                                                        href="?method=DELETE&admin_id=<?php echo $row['id'] ?>"
                                                        class="confirmation" style="color: white">حذف</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section class="model-book" id="editModel<?php echo $row['id'] ?>">
                                <form method="post" action="" enctype="multipart/form-data">
                                    <input type="hidden" name="id" value="<?php echo $row['id'] ?>">
                                    <input type="hidden" name="type" value="edit">
                                    <div class="adminModal book"><p>تعديل <?php echo $row['name'] ?></p>
                                        <div class="book-input"><label>الصورة </label><input type="file" name="image"
                                                                                             accept="image/*"></div>
                                        <div class="book-input"><label>الاسم </label><input type="text" placeholder=""
                                                                                            name="name" required
                                                                                            value="<?php echo $row['name'] ?>">
                                        </div>
                                        <div class="book-input"><label>البريد الالكتروني </label><input type="email"
                                                                                                        name="email"
                                                                                                        value="<?php echo $row['email'] ?>"
                                                                                                        required
                                                                                                        placeholder="">
                                        </div>
                                        <div class="book-input"><label>كلمة المرور </label><input type="password"
                                                                                                  name="password"
                                                                                                  placeholder="*******">
                                        </div>
                                        <div class="button">
                                            <button type="submit"><a>تاكيد</a></button>
                                        </div>
                                    </div>
                                </form>

                            </section>
                            <?php
                        }
                    } ?>
                </div>
            </div>
        </div>

        <section class="model-book">
            <div class="adminModal book"><p>مدير نظام جديد</p>
                <form action="" enctype="multipart/form-data" method="post">
                    <input type="hidden" name="type" value="new">
                    <div class="book-input"><label>الصورة </label><input type="file" name="image" accept="image/*"
                                                                         required></div>
                    <div class="book-input"><label>الاسم </label><input type="text" placeholder="" name="name" required>
                    </div>
                    <div class="book-input"><label>البريد الالكتروني </label><input type="email" name="email" required
                                                                                    placeholder=""></div>
                    <div class="book-input"><label>كلمة المرور </label><input type="password" name="password" required
                                                                              placeholder="*******"></div>
                    <div class="button">
                        <button type="submit"><a>تاكيد</a></button>
                    </div>
                </form>

            </div>
        </section>
    </div>
</section>
<?php
require_once 'layout/assets/js.php'
?>
</body>
</html>