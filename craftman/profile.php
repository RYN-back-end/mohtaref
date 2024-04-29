
<?php
require '../helper.php';
checkCompanyLogin();

$selectCompanySql = "SELECT * FROM professionals where id = '{$_SESSION['professional']["id"]}'";
$selectCompanyResult = runQuery($selectCompanySql);
$selectCompanyRow = $selectCompanyResult->fetch_assoc();

if (isset($_POST['title']) ) {

    $checkExistsEmailSql = "SELECT * FROM professionals WHERE email = '{$_POST['email']}' AND id != '{$_SESSION['professional']["id"]}'";

    $checkExistsEmailResult = runQuery($checkExistsEmailSql);
    if ($checkExistsEmailResult->num_rows > 0) {
        header("Location: profile.php?error=البريد الاكترونى مستخدم من قبل");
        die();
    }

    $imagePath = $_SESSION['professional']['banner'];
    if (isset($_FILES['banner']) && $_FILES['banner']) {
        $errors = array();
        $file_name = (time() * 2) . '.jpg';
        $file_size = $_FILES['banner']['size'];
        $file_tmp = $_FILES['banner']['tmp_name'];
        $file_type = $_FILES['banner']['type'];
        if ($file_size > 2097152) {
            header("Location: profile.php?error=يجب ان يكون حجم الصورة اقل من 2MB");
        }
        if (move_uploaded_file($file_tmp, "../uploads/professionals/" . $file_name)) {
            $imagePath = "uploads/professionals/" . $file_name;
        }
    }

    $images = [];
    foreach($_FILES['images']['tmp_name'] as $key => $tmp_name ){
        $file_name = $key.(time() * 2). '.jpg';
        $file_size =$_FILES['images']['size'][$key];
        $file_tmp =$_FILES['images']['tmp_name'][$key];
        $file_type=$_FILES['images']['type'][$key];
        if($file_size > 2097152){
            header("Location: profile.php?error=يجب ان يكون حجم الصورة اقل من 2MB");
        }

        $desired_dir="../uploads/professionals";
        $save_dir="uploads/professionals";
        if(empty($errors)==true){
            if(is_dir($desired_dir)==false){
                mkdir("$desired_dir", 0700);        // Create directory if it does not exist
            }
            if(is_dir("$desired_dir/".$file_name)==false){
                if (move_uploaded_file($file_tmp,"$desired_dir/".$file_name)){
                    $images[] = "$save_dir/".$file_name;
                }
            }
        }
    }


    if (count($images))
    {
        $images = json_encode($images);
    }else{
        $images = $selectCompanyRow['images'];
    }
    $password = $selectCompanyRow['password'];
    if (isset($_POST['password'])) {
        if ($_POST['password'] != '') {
            $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        }
    }
    $updateSql = "UPDATE `companies` SET `banner` = '{$imagePath}',`title`='{$_POST['title']}',`desc`='{$_POST['desc']}',`email`='{$_POST['email']}',`whatsapp`='{$_POST['whatsapp']}',`address`='{$_POST['address']}',`password`='{$password}' WHERE id = '{$selectCompanyRow['id']}'";
    runQuery($updateSql);

    $_SESSION['professional']['title'] = $_POST['title'];
    $_SESSION['professional']['banner'] = $imagePath;
    $_SESSION['professional']['email'] = $_POST['email'];
    $_SESSION['professional']['desc'] = $_POST['desc'];
    
    $_SESSION['professional']['whatsapp'] = $_POST['whatsapp'];
    $_SESSION['professional']['images'] = $images;

    header('Location: profile.php?success=تم الحفظ');


}


?>
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Information Technology">
    <title>موقع محترف / لوحة التحكم</title>
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
        <div class="main-heading"><p class="title"> تحديث الملف الشخصي</p></div>
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
                    <div class="img-present"><img src="../<?php echo $selectCompanyRow['banner']?>" alt="present-img"></div>
                    <form method="post" action="" enctype="multipart/form-data">
                        <div class="model-setting">
                            <div class="book-input"><label>الصورة </label><input type="file" name="banner" accept="image/*"
                                                                                 ></div>

                            
                            <div class="book-input"><label>الاسم </label><input type="text" placeholder="" name="title" value="<?php echo $selectCompanyRow['title']?>"
                                                                                required>
                            </div>
                            <div class="book-input"><label>البريد الالكتروني </label><input type="email" name="email" required  value="<?php echo $selectCompanyRow['email']?>"
                                                                                            placeholder=""></div>
                            <div class="book-input"><label>كلمة المرور </label><input type="password" name="password"
                                                                                      placeholder="*******"></div>
                           
                            <div class="book-input"><label>رقم الهاتف</label><input type="text" name="whatsapp" required  value="<?php echo $selectCompanyRow['whatsapp']?>"
                                                                                    placeholder=""></div>
                            <div class="book-input"><label for="text"> العنوان</label><input type="text" name="address" value="<?php echo $selectCompanyRow['address']?>" required></div>

                            <div class="book-input"><label>الوصف</label><textarea rows="5" cols="66" name="desc" required
                                                                                       placeholder=""> <?php echo $selectCompanyRow['pro_desc']?></textarea></div>

                            <div class="button">
                                <button type="submit">تحديث</button>
                            
							
                                 <button class="danger" type="button"><a style="color: white" class="confirmation" href="?method=DELETE&user_id=<?php echo $selectCompanyRow['id']?>">حذف</a></button>
                            
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