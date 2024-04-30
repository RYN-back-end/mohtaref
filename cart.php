<?php
require 'helper.php';
//session_start();
checkLogin();
// Fetch carts details
$selectCartSql = "SELECT cart.*, products.title AS product_name, products.price AS product_price,products.banner as banner FROM cart 
                  INNER JOIN products ON cart.product_id = products.id
                  WHERE cart.user_id = '{$_SESSION['user']['id']}'";
$selectCartsResult = runQuery($selectCartSql);
//$selectProductsRow = $selectCartsResult->fetch_assoc();

if (isset($_GET['id']) && isset($_GET['qty'])) {
    $updateSql = "UPDATE `cart` SET `qty` = '{$_GET['qty']}' WHERE `id` = '{$_GET['id']}'";
    runQuery($updateSql);
    header("Location: cart.php?success=تم بنجاح");
}
if (isset($_GET['id']) && isset($_GET['method'])) {
    if ($_GET['method'] == 'DELETE'){
        $updateSql = "DELETE FROM `cart`  WHERE `id` = '{$_GET['id']}'";
        runQuery($updateSql);
        header("Location: cart.php?success=تم بنجاح");
    }

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
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
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
        <div class="page-bread">
            <p class="head">سلة الشراء</p>
            <ul>
                <li><a href="index.php"> 🏠 الرئيسية </a></li>
                <li>/</li>
                <li>سلة الشراء</li>
            </ul>
        </div>
    </div>
</section>
<section class="company" style="height: 110vh">
    <div class="container">
        <div class="main-heading"><p class="title"> عناصر السلة</p></div>
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
        <table>
            <thead>
            <tr>
                <td> اسم المنتج</td>
                <td> صورة المنتج</td>
                <td>الكمية</td>
                <td>السعر</td>
                <td>السعر الاجمالي</td>
                <td>حذف</td>
            </tr>
            </thead>
            <tbody>
            <?php
            if ($selectCartsResult->num_rows > 0) {
                while ($selectProductsRow = $selectCartsResult->fetch_assoc()) {
                    ?>
                    <tr>
                        <td><?php echo $selectProductsRow['product_name']; ?></td>
                        <td><img src="<?php echo $selectProductsRow['banner'] ?>" style="width: 100px;height: 60px"
                                 onclick="window.open(this.src)" alt="company-img"></td>
                        <td>
                            <div class="quantity">
                                <button class="plus-btn" type="button" name="button">
                                    <a href="?id=<?php echo $selectProductsRow['id'] ?>&qty=<?php echo $selectProductsRow['qty'] + 1; ?>">
                                        <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt=""/></a>
                                </button>
                                <input type="text" name="name" value="<?php echo $selectProductsRow['qty']; ?>" readonly
                                       disabled>
                                <button class="minus-btn" type="button" name="button">
                                    <a href="?id=<?php echo $selectProductsRow['id'] ?>&qty=<?php echo $selectProductsRow['qty'] > 1 ? $selectProductsRow['qty'] - 1 : 1; ?>">
                                        <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt=""/>
                                    </a>
                                </button>
                            </div>
                        </td>
                        <td><?php echo $selectProductsRow['product_price']; ?></td>
                        <td><?php echo $selectProductsRow['product_price'] * $selectProductsRow['qty']; ?></td>
                        <td>
                            <button class="success edit-btn"
                                    style="color:white;width: 80px;height:30px;background-color: red;-webkit-transition: .3s ease-out;transition: .3s ease-out;border-radius: 8px;border: none;"
                                    type="button">
                                <a style="color: white" href="?method=DELETE&id=<?php echo $selectProductsRow['id'] ?>">حذف</a>
                            </button>
                        </td>
                    </tr>
                    <?php
                }
            }
            ?>
            </tbody>
        </table>

        <style>
            .AE_table button{
                background-color: transparent;
            }
            .AE_table button a{
                color: #B09474 ;
            }
            .AE_table button:hover{
                transform: scale(1.09);
                background: #B09474;
            }
            .AE_table button:hover  a{
                color: white;
            }


        </style>
        <div class="row AE_table" style="justify-content: center;margin-top: 20px">

            <button class="success edit-btn" style="color:white;-webkit-transition: .3s ease-out;transition: .3s ease-out;border-radius: 8px;border: 1px solid #B09474" type="button">
                <a href="payment.php" style="    padding: 10px 25px; ">تأكيد</a>
            </button>
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