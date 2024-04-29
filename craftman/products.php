<?php
require '../helper.php';
checkCompanyLogin();

if (isset($_POST['title']) && isset($_POST['type']) && $_POST['type'] == 'new') {

    $imagePath = "";
    if (isset($_FILES['banner']) && $_FILES['banner']) {
        $errors = array();
        $file_name = (time() * 2) . '.jpg';
        $file_size = $_FILES['banner']['size'];
        $file_tmp = $_FILES['banner']['tmp_name'];
        $file_type = $_FILES['banner']['type'];
        if ($file_size > 2097152) {
            header("Location: products.php?error=يجب ان يكون حجم الصورة اقل من 2MB");
        }
        if (move_uploaded_file($file_tmp, "../uploads/products/" . $file_name)) {
            $imagePath = "uploads/products/" . $file_name;
        }
    }

    $images = [];
    foreach($_FILES['images']['tmp_name'] as $key => $tmp_name ){
        $file_name = $key.(time() * 2). '.jpg';
        $file_size =$_FILES['images']['size'][$key];
        $file_tmp =$_FILES['images']['tmp_name'][$key];
        $file_type=$_FILES['images']['type'][$key];
        if($file_size > 2097152){
            header("Location: products.php?error=يجب ان يكون حجم الصورة اقل من 2MB");
        }

        $desired_dir="../uploads/products";
        if(empty($errors)==true){
            if(is_dir($desired_dir)==false){
                mkdir("$desired_dir", 0700);        // Create directory if it does not exist
            }
            if(is_dir("$desired_dir/".$file_name)==false){
                move_uploaded_file($file_tmp,"$desired_dir/".$file_name);
            }else{                                  // rename the file if another one exist
                $new_dir="$desired_dir/".$file_name.time();
                rename($file_tmp,$new_dir) ;
            }
            $images[] = "$desired_dir/".$file_name;
        }
    }


    $images = json_encode($images);

    $insertSql = "INSERT INTO products (title,category_id,professional_id,price,banner,images,`desc`) VALUES ('{$_POST['title']}','{$_POST['category_id']}','{$_SESSION['professional']['id']}','{$_POST['price']}','{$imagePath}','{$images}','{$_POST['desc']}')";;
    runQuery($insertSql);
    header('Location: products.php?success=تم الإضافة بنجاح');


}
if (isset($_POST['id']) && isset($_POST['type']) && $_POST['type'] == 'edit') {

    $selectOldProductSql = "SELECT * from products where id = '{$_POST['id']}'";
    $getOldProductResult = runQuery($selectOldProductSql);
    $oldProduct = $getOldProductResult->fetch_assoc();
    $imagePath = $oldProduct['banner'];
    if (isset($_FILES['banner']) && $_FILES['banner']) {
        $errors = array();
        $file_name = (time() * 2) . '.jpg';
        $file_size = $_FILES['banner']['size'];
        $file_tmp = $_FILES['banner']['tmp_name'];
        $file_type = $_FILES['banner']['type'];
        if ($file_size > 2097152) {
            header("Location: products.php?error=يجب ان يكون حجم الصورة اقل من 2MB");
        }

        if (move_uploaded_file($file_tmp, "../uploads/products/" . $file_name)) {
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
            $imagePath = "uploads/products/" . $file_name;
        }
    }

    $images = [];
    foreach($_FILES['images']['tmp_name'] as $key => $tmp_name ){
        $file_name = $key.(time() * 2). '.jpg';
        $file_size =$_FILES['images']['size'][$key];
        $file_tmp =$_FILES['images']['tmp_name'][$key];
        $file_type=$_FILES['images']['type'][$key];
        if($file_size > 2097152){
            header("Location: products.php?error=يجب ان يكون حجم الصورة اقل من 2MB");
        }

        $desired_dir="../uploads/products";
        $save_dir="uploads/products";
        if(empty($errors)==true){
            if(is_dir($desired_dir)==false){
                mkdir("$desired_dir", 0700);        // Create directory if it does not exist
            }
            if(is_dir("$desired_dir/".$file_name)==false){
                if ( move_uploaded_file($file_tmp,"$desired_dir/".$file_name))
                $images[] = "$save_dir/".$file_name;

            }
        }
    }



    if (is_array($images)&&count($images))
    {
        $images = json_encode($images);
    }else{
        $images = $oldProduct['images'];
    }



    $updateSql = "UPDATE `products` SET `title` = '{$_POST['title']}',`category_id`='{$_POST['category_id']}',`price`='{$_POST['price']}',`banner`='{$imagePath}',`images`='{$images}',`desc`='{$_POST['desc']}' WHERE id = '{$_POST['id']}'";
    runQuery($updateSql);

    header('Location: products.php?success=تم التعديل بنجاح');

}
if (isset($_GET['method']) && isset($_GET['product_id'])) {
    $deleteSql = "DELETE From products WHERE id = {$_GET['product_id']}";
    runQuery($deleteSql);

    header('Location: products.php?success=تم الحذف بنجاح');
}


$getCategoriesSql = "SELECT * FROM categories";
$getCategoriesResult = runQuery($getCategoriesSql);
$getProductsSql = "SELECT * FROM products where professional_id = '{$_SESSION['professional']['id']}'";
$getProductsResult = runQuery($getProductsSql);


?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Information Technology">
    <title>موقع محترف/لوحة التحكم</title>
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
        <div class="main-heading"><p class="title">منتجاتى</p></div>
        <div class="button">
            <button class="add-btn" id="model-book">اضافة جديد</button>
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
                    if ($getProductsResult->num_rows > 0) {
                        while ($row = $getProductsResult->fetch_assoc()) {
                            ?>
                            <div class="col-4-lg col-6-md col-12-sm">
                                <div class="company-card">
                                    <div class="company-img"><img style="height:250px" src="../<?php echo $row['banner'] ?>"
                                                                  alt="company-img"></div>
                                    <div class="details-company"><p class="name"><?php echo $row['title'] ?></p>
                                        <div class="button">
                                            <button class="edit-btn" data-model="editModel<?php echo $row['id'] ?>"
                                                    type="button" id="editButton"> تعديل
                                            </button>
                                            <button class="danger" type="button"><a
                                                        href="?method=DELETE&product_id=<?php echo $row['id'] ?>"
                                                        class="confirmation" style="color: white">حذف</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section class="model-book" id="editModel<?php echo $row['id'] ?>">
                                <form method="post" action="" enctype="multipart/form-data">
                                    <input type="hidden" name="id" value="<?php echo $row['id'] ?>">
                                    <input type="hidden" name="type" value="edit">
                                    <div class="adminModal book"><p>تعديل <?php echo $row['title'] ?></p>
                                        <div class="book-input"><label>الصورة </label><input type="file" name="banner" accept="image/*"
                                                                                             ></div>

                                        <div class="book-input"><label>الصور </label><input type="file" name="images[]" multiple
                                                                                            accept="image/*"
                                                                                            ></div>
                                        <div class="book-input"><label>الاسم </label><input type="text" placeholder="" value="<?php echo $row['title']?>" name="title"
                                                                                            required>
                                        </div>
                                        <div class="book-input"><label>التصنيف </label>
                                            <select name="category_id" required>
                                                <option value="" selected disabled>إختر التصنيف</option>
                                                <?php
                                                if ($getCategoriesResult->num_rows) {
                                                    $selectRow = null;
                                                    $selectNewCategory = runQuery($getCategoriesSql);
                                                    while ($selectRow = $selectNewCategory->fetch_assoc()) {
                                                        ?>
                                                        <option value="<?php echo $selectRow['id']?>" <?php echo $selectRow['id']==$row['category_id']?'selected':'';?>><?php echo $selectRow['title']?></option>
                                                        <?php
                                                    }
                                                }
                                                ?>
                                            </select>
                                        </div>
                                        <div class="book-input"><label>السعر </label><input type="number" value="<?php echo $row['price']?>" placeholder="" name="price"
                                                                                            required>
                                        </div>
                                        <div class="book-input"><label>الوصف </label><input type="text" placeholder="" value="<?php echo $row['desc']?>" name="desc"
                                                                                            required>
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
            <div class="adminModal book"><p>منتج جديد</p>
                <form action="" enctype="multipart/form-data" method="post">
                    <input type="hidden" name="type" value="new">
                    <div class="book-input"><label>الصورة </label><input type="file" name="banner" accept="image/*"
                                                                         required></div>

                    <div class="book-input"><label>الصور </label><input type="file" name="images[]" multiple
                                                                        accept="image/*"
                                                                        required></div>
                    <div class="book-input"><label>الاسم </label><input type="text" placeholder="" name="title"
                                                                        required>
                    </div>
                    <div class="book-input"><label>التصنيف </label>
                        <select name="category_id" required>
                            <option value="" selected disabled>إختر التصنيف</option>
                            <?php
                            if ($getCategoriesResult = runQuery($getCategoriesSql)) {
                                $rowCategory = null;
                                while ($rowCategory = $getCategoriesResult->fetch_assoc()) {
                                    ?>
                                    <option value="<?php echo $rowCategory['id']?>" ><?php echo $rowCategory['title']?></option>
                                    <?php
                                }
                            }
                            ?>
                        </select>
                    </div>
                    <div class="book-input"><label>السعر </label><input type="number" placeholder="" name="price"
                                                                        required>

                    </div>
                    <div class="book-input"><label>الوصف </label><input type="text" placeholder="" name="desc"
                                                                        required>
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