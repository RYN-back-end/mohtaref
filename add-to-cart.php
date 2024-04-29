<?php
require('system/helper.php');
checkLogin();

if (isset($_GET['id'])) {
    $selectIfExists = runQuery("SELECT * FROM `cart` WHERE product_id ='{$_GET['id']}' AND `status` = 'new' AND `user_id`='{$_SESSION['user']['id']}'");
    if ($selectIfExists->num_rows > 0) {
        header("location: detailsViewTours.php?id={$_GET['id']}&error=لقد قمت بالحجز مسبقاً");
        die();
    }
    $tour = runQuery("SELECT * FROM `products` WHERE id ='{$_GET['id']}'")->fetch_assoc();
    $insertSql = "INSERT INTO cart (`user_id`,`product_id`,`qty`) VALUES ('{$_SESSION['user']['id']}','{$_GET['id']}','{1}',)";
    runQuery($insertSql);
    header("location: cart.php?success=تم الإضافة بنجاح");
    die();
}
