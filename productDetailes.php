<?php
require 'helper.php';
if (!isset($_SESSION)) {
    session_start();
}
$selectProductSql = "SELECT * FROM products where id = '{$_GET["id"]}'";
$selectProductsResult = runQuery($selectProductSql);
$selectProductsRow = $selectProductsResult->fetch_assoc();

$selectCategorySql = "SELECT * FROM categories WHERE id = '{$selectProductsRow['category_id']}'";
$selectCategoryResult = runQuery($selectCategorySql);
$selectCategoryRow = $selectCategoryResult->fetch_assoc();

if (isset($_POST['qty'])) {
    if (!isset($_SESSION)) {
        session_start();
    }
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
                        <p class="tittle"> التقييم :</p>
                        <p class="number">
                            <?php
                            $averageRating = calculateAverageRating($conn, $selectProductsRow['id']);
                            $stars = floor($averageRating);
                            $halfStar = $averageRating - $stars > 0.5;

                            // Display full stars
                            for ($i = 0; $i < $stars; $i++) {
                                echo '<i class="fas fa-star"></i>';
                            }

                            if ($halfStar) {
                                echo '<i class="fas fa-star-half-alt"></i>';
                                $stars++;
                            }

                            for ($i = $stars; $i < 5; $i++) {
                                echo '<i class="far fa-star"></i>';
                            }

                            echo " ($averageRating)";
                            ?>
                        </p>
                    </div>


                    <div class="bank">
                        <form method="post" action="" id="Form" style="    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 5vh;">
                            <div class="button" style="padding-top: 0">

                                <button type="submit" form="Form">اضافة للسلة</button>

                                <input name="id" value="<?php echo $selectProductsRow['id'] ?>" type="hidden">
                            </div>
                            <input class="number" type="number" required value="1" min="1" id="quantiy" name="qty"
                                   style="    padding-right: 0;
    width: 30%;
    height: 53.2px;
    border-radius: 10px;
    text-align: center;
    border-color: #B09474;">
                        </form>

                    </div>


                </div>
            </div>
            <div class="col-6-md col-12-sm">

                <div class="main-img"><img src="<?php echo $selectProductsRow['banner'] ?>" alt="main-img"></div>

            </div>

            <div class="col-12">
                <section class="product-reviews">
                    <div class="container">
                        <div class="main-heading">
                            <p class="title">آراء العملاء</p>
                        </div>
                        <div class="row">
                            <?php
                            // Check if there are reviews for the product
                            $productID = $_GET['id'];
                            $reviewsSql = "SELECT rating.*, users.name AS user_name, users.image AS user_image
                    FROM rating
                    INNER JOIN users ON rating.user_id = users.id
                    WHERE rating.product_id = '$productID'";
                            $reviewsResult = runQuery($reviewsSql);

                            if ($reviewsResult->num_rows > 0) {
                                // Loop through each review and display them
                                while ($row = $reviewsResult->fetch_assoc()) {
                                    ?>
                                    <div class="col-12">
                                        <div class="review">
                                            <div class="user-info">
                                                <img class="user-image" src="<?php echo $row['user_image']; ?>"
                                                     alt="User Image">
                                                <span class="user-name"><?php echo $row['user_name']; ?></span>
                                            </div>
                                            <div class="rating">
                                                <?php
                                                // Display star rating
                                                $stars = $row['rate_no'];
                                                for ($i = 0; $i < $stars; $i++) {
                                                    echo '<i class="fas fa-star"></i>';
                                                }
                                                ?>
                                            </div>

                                            <p class="review-text">
                                                <?php echo $row['comment']; ?>
                                            </p>
                                        </div>
                                    </div>
                                    <?php
                                }
                            } else {
                                // If there are no reviews, display a message
                                echo "<p>لا توجد آراء لهذا المنتج حتى الآن.</p>";
                            }
                            ?>
                        </div>
                    </div>
                </section>
                <?php
                // Check if the user is logged in
                if (isset($_SESSION['user']['loggedin']) && $_SESSION['user']['loggedin']) {
                    ?>
                    <section class="add-review">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 offset-md-3">
                                    <form action="submit_review.php" method="post">
                                        <div class="row" style="justify-content: space-between;">
                                            <label for="comment">اضف تقييمك </label>
                                            <div class="form-group">
                                                <div class="star-rating">
                                                    <input type="radio" id="star5" name="rating" value="5" required/>
                                                    <label for="star5" title="5 نجوم"></label>
                                                    <input type="radio" id="star4" name="rating" value="4"/>
                                                    <label for="star4" title="4 نجوم"></label>
                                                    <input type="radio" id="star3" name="rating" value="3"/>
                                                    <label for="star3" title="3 نجوم"></label>
                                                    <input type="radio" id="star2" name="rating" value="2"/>
                                                    <label for="star2" title="2 نجوم"></label>
                                                    <input type="radio" id="star1" name="rating" value="1"/>
                                                    <label for="star1" title="1 نجمة"></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <textarea name="comment" id="comment" required class="form-control"
                                                      rows="3"></textarea>
                                        </div>
                                        <input type="hidden" name="product_id"
                                               value="<?php echo $selectProductsRow['id']; ?>">
                                        <button type="submit" class="btn btn-primary">إرسال</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <?php
                }
                ?>
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