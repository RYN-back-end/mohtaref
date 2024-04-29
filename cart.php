<?php
require 'helper.php';
//session_start();
checkLogin();
// Fetch carts details
$selectCartSql = "SELECT cart.*, products.title AS product_name,products.banner as banner FROM cart 
                  INNER JOIN products ON cart.product_id = products.id
                  WHERE cart.user_id = '{$_SESSION['user']['id']}'";
$selectCartsResult = runQuery($selectCartSql);
//$selectProductsRow = $selectCartsResult->fetch_assoc();


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
<section class="Details-company">
    <div class="container">
        <div class="row gap-1">
            <div class="shopping-cart">
                <!-- Title -->
                <div class="title">
                    عناصر السلة
                </div>

                <!-- Cart Items -->
                <?php
                if ($selectCartsResult->num_rows > 0) {
                    while ($selectProductsRow = $selectCartsResult->fetch_assoc()) {
                        ?>
                        <div class="item">
                            <div class="buttons">
                                <span class="delete-btn"></span>
                            </div>

                            <div class="image">
                                <img src="<?php echo $selectProductsRow['banner']?>" alt="company-img">
                            </div>

                            <div class="description">
                                <span><?php echo $selectProductsRow['product_name']; ?></span>
                                <!-- Add more fields here if needed -->
                            </div>

                            <div class="quantity">
                                <button class="plus-btn" type="button" name="button">
                                    <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
                                </button>
                                <input type="text" name="name" value="<?php echo $selectProductsRow['qty']; ?>">
                                <button class="minus-btn" type="button" name="button">
                                    <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
                                </button>
                            </div>

                            <div class="total-price">$<?php echo 55 ?></div>
                        </div>
                        <?php
                    }
                } else {
                    echo "<p>No items in the cart.</p>";
                }
                ?>
            </div>
        </div>
    </div>
</section>

<section class="model-book">
    <div class="book">
        <p>تاكيد الحجز</p>
        <form method="post" action="">
            <div class="book-input">
                <label>موعد التسليم</label>
                <input type="date" placeholder="20-1-2023" name="date" required>
            </div>
            <div class="book-input">
                <label>الكمية المطلوبة</label>
                <input type="number" placeholder="QTY" name="qty" required>
            </div>
            <div class="button">
                <button type="submit"><a>تاكيد</a></button>
            </div>
        </form>
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