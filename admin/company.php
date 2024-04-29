<?php
require '../helper.php';
checkAdminLogin();

if (isset($_POST['title']) && isset($_POST['type']) && $_POST['type'] == 'new') {

    $checkExistsEmailSql = "SELECT * FROM professionals WHERE email = '{$_POST['email']}'";

    $checkExistsEmailResult = runQuery($checkExistsEmailSql);
    if ($checkExistsEmailResult->num_rows > 0 || $checkExistsEmailResult->num_rows > 0) {
        header("Location: company.php?error=البريد الاكترونى مستخدم من قبل");
    }

    $imagePath = "";
    if (isset($_FILES['banner']) && $_FILES['banner']) {
        $errors = array();
        $file_name = (time() * 2) . '.jpg';
        $file_size = $_FILES['banner']['size'];
        $file_tmp = $_FILES['banner']['tmp_name'];
        $file_type = $_FILES['banner']['type'];
        if ($file_size > 2097152) {
            header("Location: company.php?error=يجب ان يكون حجم الصورة اقل من 2MB");
        }
        if (move_uploaded_file($file_tmp, "../uploads/professionals/" . $file_name)) {
            $imagePath = "uploads/professionals/" . $file_name;
        }
    }

    
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

   
    $insertSql = "INSERT INTO professionals (title,email,banner,password,whatsapp,`address`,`pro_desc`) VALUES ('{$_POST['title']}','{$_POST['email']}','{$imagePath}','{$password}','{$_POST['whatsapp']}','{$_POST['address']}','{$_POST['pro_desc ']}')";;
    runQuery($insertSql);
    header('Location: company.php?success=تم الإضافة بنجاح');


}
if (isset($_GET['method']) && isset($_GET['admin_id'])) {
    $deleteSql = "DELETE From professionals WHERE id = {$_GET['admin_id']}";
    runQuery($deleteSql);
    if ($_SESSION['admin']['id'] == $_GET['admin_id']) {
        $_SESSION['admin'] = [];
        checkAdminLogin();
    }
    header('Location: company.php?success=تم الحذف بنجاح');
}


$getCompaniesSql = "SELECT * FROM professionals";
$getCompaniesResult = runQuery($getCompaniesSql);


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
        <div class="main-heading"><p class="title">ملفات المحترفين</p></div>
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
                    if ($getCompaniesResult->num_rows > 0) {
                        while ($row = $getCompaniesResult->fetch_assoc()) {
                            ?>
                            <div class="col-4-lg col-6-md col-12-sm">
                                <div class="company-card">
                                    <div class="company-img"><img style="height:250px" src="../<?php echo $row['banner'] ?>"
                                                                  alt="company-img"></div>
                                    <div class="details-company"><p class="name"><?php echo $row['title'] ?></p>
                                        <div class="button">

                                            <button class="danger" type="button"><a
                                                        href="?method=DELETE&admin_id=<?php echo $row['id'] ?>"
                                                        class="confirmation" style="color: white">حذف</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php
                        }
                    } ?>
                </div>
            </div>
        </div>

        <section class="model-book">
            <div class="adminModal book"><p>اضافة محترف جديد</p>
                <form action="" enctype="multipart/form-data" method="post">
                    <input type="hidden" name="type" value="new">
                    <div class="book-input"><label>الصورة </label><input type="file" name="banner" accept="image/*"
                                                                         required></div>

                   
                    <div class="book-input"><label>الاسم </label><input type="text" placeholder="" name="title"
                                                                        required>
                    </div>
                    <div class="book-input"><label>البريد الالكتروني </label><input type="email" name="email" required
                                                                                    placeholder=""></div>
                    <div class="book-input"><label>كلمة المرور </label><input type="password" name="password" required
                                                                              placeholder="*******"></div>
                   
                    <div class="book-input"><label>رقم الهاتف</label><input type="text" name="whatsapp" required
                                                                                    placeholder=""></div>
                    <div class="book-input"><label for="text"> العنوان</label><input type="text" name="address" required></div>
                    <div class="book-input"><label for="text"> الوصف</label>
					<textarea name="pro_desc " required > </textarea>
					</div>
                    

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