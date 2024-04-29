<?php
require 'helper.php';
//session_start();
checkLogin();
// Fetch carts details
$selectCartSql = "SELECT cart.*, products.title AS product_name,products.banner as banner, products.price , professionals.title as pro_name , professionals.id 
                  FROM cart 
                  INNER JOIN products 
                  ON cart.product_id = products.id 
                  INNER JOIN professionals 
                  ON products.professional_id = professionals.id
                  WHERE cart.user_id = '{$_SESSION['user']['id']}'";
$selectCartsResult = runQuery($selectCartSql);
//$selectProductsRow = $selectCartsResult->fetch_assoc();

$servername = "localhost";
$username = "root";
$password = "";
$database = "mohtaref";
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
<!DOCTYPE html>
<html lang="ar" dir='rtl'>

<head>

    <title>سلة الشراء</title>
    <!-- ****** CSS ****** -->
    <?php
    require_once 'layout/assets/css.php'
    ?>
	

</head>

<body>
<!-- header -->
<?php
require_once 'layout/inc/header.php'
?>
<!-- main wrapper -->
<main>
    <!-- intro section -->
    <section class="section_header">
        <div class="container d-flex justify-content-between">
            <div class="navigation">
                <h2><a href="index.php">الرئيسية /</a>  سلة المشتريات</h2>
            </div>
            
        </div>
    </section>
    <!-- shopping Cart section -->
    <section class="shopppingCart">
      
            <!-- empty cart -->
           
            <!-- items list -->
            <div class="items_list">
                <!-- tabel header -->
                <div class="list_header">
                    <div class="row">
                        <div class="col-4"><span>المنتج</span></div>
						 <div class="col-4"><span>الحرفي</span></div>
                        <div class="col-2"><span>السعر</span></div>
                        <div class="col-3"><span>الكمية</span></div>
                        <div class="col-2"><span>الاجمالي</span></div>
                        <div class="col-1"></div>
                    </div>
                </div>
                <!-- tabel orders -->
                <!-- order -->
                   <?php
                if ($selectCartsResult->num_rows > 0) {
                    while ($selectProductsRow = $selectCartsResult->fetch_assoc()) {
                        ?>
                        <div class="order">
                            <div class="row">
                                <div class="col-4">
                                   <!-- <a href="product-details.php?id=<?php echo $row['product_id'] ?>" class="product_info"> -->
                                        <img src="<?php echo $selectProductsRow['banner']?>" alt="company-img" width="150" height="150">
                                        <p><?php echo $selectProductsRow['product_name'] ?></p>
                                    </a>
                                </div>
								  <div class="col-4">
                                   <!-- <a href="product-details.php?id=<?php echo $row['product_id'] ?>" class="product_info"> -->
                                    <p><?php echo $selectProductsRow['pro_name'] ?></p>
                                    </a>
                                </div>
                                <div class="col-2">
                                    <div class="center_div">
                                    <span>
                                        <?php echo $selectProductsRow['price'] ?>ر.س
                                    </span>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="quantity">
                                    <!--    <button class="cartButton"
                                                data-id="<?php echo $row['product_id'] ?>" data-type="minus"
                                                data-cart="<?php echo $row['id'] ?>">
                                            <i class="fa-sharp fa-light fa-minus"></i>
                                        </button> -->
                                        <input type="number" value="<?php echo $selectProductsRow['qty'] ?>"
                                               id="cartInput<?php echo $row['product_id'] ?>" min="1" max="99" step="1"/>
                                     <!--   <button class="cartButton"
                                                data-id="<?php echo $row['product_id'] ?>" data-type="plus"
                                                data-cart="<?php echo $row['id'] ?>">
                                            <i class="fa-sharp fa-light fa-plus"></i>
                                        </button> -->
                                    </div>
                                </div>
                            <!--    <div class="col-2">
                                    <div class="center_div">
                                    <span>
                                         <?php echo $selectProductsRow['price'] * $row['qty'] ?>ر.س
                                    </span>
                                    </div> 
                                </div> -->
								<!--
                                <div class="col-1">
                                    <a class="action" href="delete-cart.php?id=<?php echo $row['id'] ?>">
                                        <i class="fa-light fa-trash-can"></i>
                                    </a>
                                </div> -->
                            </div>
                        </div>
                        <?php
                    }
                }
                ?>
                <!-- table footer -->
                <div class="list_total_procced">
                    <div class="row justify-content-between">
                        <div class="col-3">
                            <div class="subtotal">
                                <span>Cart Total:</span>
                               <!-- <b><?php echo $selectAllCartResult['total_price'] ?? '0.00' ?>ر.س</b> -->
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="place_order">
                                <a href="checkout.php">
                                    Proceed to checkout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<!-- footer -->
<?php
require_once 'layout/inc/footer.php'
?>
<!-- *********** Javascript *********** -->
<!-- libraries -->
<?php
require_once 'layout/assets/js.php'
?>
</body>

</html>