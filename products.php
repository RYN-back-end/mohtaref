
<?php
require 'helper.php';
if (!isset($_SESSION)) {
    session_start();
}
$id =$_GET['id']??'';
$selectCategorySql = "SELECT * FROM categories where id = '{$id}'";
$selectCategoryRow = runQuery($selectCategorySql)->fetch_assoc();

$selectProductsSql = "SELECT * FROM products WHERE category_id = '{$id}'";
$selectProductsResult = runQuery($selectProductsSql);

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
<section class="page-banner">
    <div class="container">
        <div class="page-bread"><p class="head">الضيافة</p>
            <ul>
                <li><a href="index.php"> 🏠 الرئيسية </a></li>
                <li>/</li>
                <li><?php echo $selectCategoryRow['title']??''?></li>
            </ul>
        </div>
    </div>
</section>
<section class="company">
    <div class="container">
        <div class="main-heading"><p class="title"><?php echo $selectCategoryRow['title']??''?></p></div>
        <div class="row gap-1">
            <?php
            if ($selectProductsResult->num_rows > 0) {
                while ($row = $selectProductsResult->fetch_assoc()) {
                    ?>
                    <div class="col-4-lg col-6-md col-12-sm">
                        <div class="company-card">
                            <div class="company-img"><img src="<?php echo $row['banner']?>" alt="company-img"></div>
                            <div class="details-company"><p class="name"><?php echo $row['title']?></p>
                                <button type="button"><a href="productDetailes.php?id=<?php echo $row['id']?>">تفاصيل </a></button>
                            </div>
                        </div>
                    </div>
                    <?php
                }
            }
            ?>
        </div>
    </div>
</section>
<?php
require_once 'layout/inc/footer.php'
?>
<?php
require_once 'layout/assets/js.php'
?>
</body>
</html>