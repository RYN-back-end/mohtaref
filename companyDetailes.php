<?php
require 'helper.php';
session_start();
$selectCompanySql = "SELECT * FROM professionals where id = '{$_GET["id"]}'";
$selectCompanyResult = runQuery($selectCompanySql);
$selectCompanyRow = $selectCompanyResult->fetch_assoc();


$selectProductsSql = "SELECT * FROM products WHERE professional_id  = '{$_GET["id"]}'";
$selectProductsResult = runQuery($selectProductsSql);
$myID = $_SESSION['user']['id']??'';
/*
$checkIfExistsRoomSql = "SELECT * FROM room where user_id = '{$myID}' AND professional_id ='{$_GET["id"]}'";
$checkIfExistsRoomResult = runQuery($checkIfExistsRoomSql);
*/

// Establish a database connection
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
<section class="page-banner" style="background-image: url('<?php echo $selectCompanyRow['banner'] ?>')">
    <div class="container">
        <div class="page-bread"><p class="head">تفاصيل الحرفي</p>
            <ul>
                <li><a href="index.php"> 🏠 الرئيسية </a></li>
                <li>/</li>
                <li>تفاصيب الحرفي</li>
            </ul>
        </div>
    </div>
</section>
<section class="Details-company">
    <div class="container">
        <div class="row gap-1">
            <div class="col-6-md col-12-sm">
                <div class="details"><p class="head"><?php echo $selectCompanyRow['title'] ?></p>
                    <p class="des"><?php echo $selectCompanyRow['pro_desc'] ?></p>
                    <p class="des"><?php echo $selectCompanyRow['address'] ?></p>

                </div>
            </div>
            <div class="col-6-md col-12-sm">
                <div class="main-img"><img src="<?php echo $selectCompanyRow['banner'] ?>" alt="main-img"></div>
                <div class="img-gallery">
                    <div class="row gap-1">



                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- <section class="model-book">
   <div class="book"><p>تاكيد الحجز</p>
       <div class="book-input"><label>موعد التسليم</label><input type="number" placeholder="20-1-2023"></div>
       <div class="book-input"><label>الكمية المطلوبة</label><input type="number" placeholder="150"></div>
       <div class="button">
           <button type="button"><a href="chat.php">تاكيد</a></button>
       </div>
   </div>
</section> -->
<section class="some-products">
    <div class="container">
        <div class="main-heading"><p class="title">منتجاتنا</p></div>
        <div class="row gap-1">
            <?php
            if ($selectProductsResult->num_rows > 0) {
                while ($row = $selectProductsResult->fetch_assoc()) {
                    ?>
                    <div class="col-4-lg col-6-md col-12-sm">
                        <div class="company-card">
                            <div class="company-img"><img src="<?php echo $row['banner']?>" alt="company-img"></div>
                            <div class="details-company">
                                <p class="name"><?php echo $row['title']?></p>

                            </div>
                            <div class="details-company">
                                <span class="name">
                                    سعر :
                                    <?php echo $row['price']?>
                                    ر.س
                                </span>
                                <p class="name">
                                    <?php
                                    $averageRating = calculateAverageRating($conn, $row['id']);
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
                            <div class="details-company">
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
<script src="js/plugins.js"></script>
<?php
require_once 'layout/inc/footer.php'
?>


</body>
</html>