<?php
require 'helper.php';

$selectProductSql = "SELECT * FROM products where id = '{$_GET["id"]}'";
$selectProductsResult = runQuery($selectProductSql);
$selectProductsRow = $selectProductsResult->fetch_assoc();

$selectCategorySql = "SELECT * FROM categories WHERE id = '{$selectProductsRow['category_id']}'";
$selectCategoryResult = runQuery($selectCategorySql);
$selectCategoryRow = $selectCategoryResult->fetch_assoc();

if (isset($_POST['qty'])) {
    session_start();
    if (!isset($_SESSION['user']['loggedin'])) {
        header("Location: login.php?error=يجب تسجيل الدخول أولا");
        die();
    }

    $selectPrev = "SELECT * FROM `cart` WHERE `user_id`='{$_SESSION['user']['id']}' AND `product_id`='{$selectProductsRow['id']}'";
    if (runQuery($selectPrev)->num_rows > 0) {
        $insertSql = "UPDATE `cart` SET `qty` = '{$_POST['qty']}' WHERE `user_id`='{$_SESSION['user']['id']}' AND `product_id`='{$selectProductsRow['id']}'";
    } else {
        $insertSql = "INSERT INTO cart (user_id, product_id,qty) Values ('{$_SESSION['user']['id']}','{$selectProductsRow['id']}','{$_POST['qty']}')";
    }
    runQuery($insertSql);

    header("Location: productDetailes.php?id={$selectProductsRow['id']}&success=تم بنجاح");
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
    <?php
    require_once 'layout/assets/css.php'
    ?>
</head>
<body>
<?php
require_once 'layout/inc/header.php'
?>
<section class="page-banner" style="background-image: url('<?php echo $selectProductsRow['banner'] ?>')">
    <div class="container">
        <div class="page-bread"><p class="head">تفاصيل المنتج</p>
            <ul>
                <li><a href="index.php"> 🏠 الرئيسية </a></li>
                <li>/</li>
                <li>تفاصيل المنتج</li>
            </ul>
        </div>
    </div>
</section>
<section class="Details-company">
    <div class="container">
        <div class="row gap-1">

            <div class="col-6-md col-12-sm">
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
                <div class="details"><p class="head"><?php echo $selectProductsRow['title'] ?></p>
                    <div class="bank"><p class="tittle"> القسم :</p>
                        <p class="number"><?php echo $selectCategoryRow['title'] ?></p></div>
                    <div class="bank"><p class="tittle"> السعر :</p>
                        <p class="number"><?php echo $selectProductsRow['price'] ?> SAR</p></div>

                    <div class="bank">
                        <p class="tittle"> الوصف :</p>
                        <p class="number"><?php echo $selectProductsRow['desc'] ?></p></div>

                    <div class="bank">
                        <form method="post" action="" id="Form">
                            <div class="button">

                                <button type="submit" form="Form">اضافة للسلة</button>

                                <input name="id" value="<?php echo $selectProductsRow['id'] ?>" type="hidden">
                            </div>
                            <input class="number" type="number" required value="1" min="1" id="quantiy" name="qty">
                        </form>

                    </div>


                </div>
            </div>
            <div class="col-6-md col-12-sm">

                <div class="main-img"><img src="<?php echo $selectProductsRow['banner'] ?>" alt="main-img"></div>

            </div>
        </div>
    </div>
</section>
<!--
<section class="model-book">
    <div class="book"><p>حدد الكمية</p>
        <form method="post" action="">

            <div class="book-input"><label>الكمية المطلوبة</label><input type="number" placeholder="QTY" name="qty" required></div>
            <div class="button">
                <input name="id" value="<?php echo $selectProductsRow['id'] ?>" type="hidden">
                <button type="submit"><a>تاكيد</a></button>
            </div>
        </form>
    </div>
</section>
-->
<?php
require_once 'layout/inc/footer.php'
?>
<?php
require_once 'layout/assets/js.php'
?>
</body>
</html>