<?php
require '../helper.php';
checkCompanyLogin();

if (isset($_GET['method']) && isset($_GET['order_details_id']) && isset($_GET['status'])) {
    $updateSql = "UPDATE order_details SET status='{$_GET['status']}' WHERE order_details_id = '{$_GET['order_details_id']}'";
    runQuery($updateSql);

    $orderDetailsRow = runQuery("SELECT `order_id` FROM `order_details`  WHERE order_details_id = '{$_GET['order_details_id']}'")->fetch_assoc();

    $selectCountOrdersDetailsNewUpdate = runQuery("SELECT COUNT(`order_details_id`) AS count_not_ended FROM `order_details` WHERE `status` = 'new' AND `order_id` = '{$orderDetailsRow['order_id']}'")->fetch_assoc()['count_not_ended'];
    $selectCountOrdersDetailsAcceptedUpdate = runQuery("SELECT COUNT(`order_details_id`) AS count_not_ended FROM `order_details` WHERE `status` = 'accepted' AND `order_id` = '{$orderDetailsRow['order_id']}'")->fetch_assoc()['count_not_ended'];
    $selectCountOrdersDetailsRefusedUpdate = runQuery("SELECT COUNT(`order_details_id`) AS count_not_ended FROM `order_details` WHERE `status` = 'refused' AND `order_id` = '{$orderDetailsRow['order_id']}'")->fetch_assoc()['count_not_ended'];
    $selectCountOrdersDetailsEndedUpdate = runQuery("SELECT COUNT(`order_details_id`) AS count_not_ended FROM `order_details` WHERE `status` = 'ended' AND `order_id` = '{$orderDetailsRow['order_id']}'")->fetch_assoc()['count_not_ended'];
    $selectOrdersDetailsAll = runQuery("SELECT COUNT(`order_details_id`) AS count_not_ended FROM `order_details` WHERE `order_id` = '{$orderDetailsRow['order_id']}'")->fetch_assoc()['count_not_ended'];


    if ($selectCountOrdersDetailsAcceptedUpdate > 0 || $selectCountOrdersDetailsRefusedUpdate > 0) {
        runQuery("UPDATE `orders` SET `status` ='in_progress' WHERE `id` ='{$orderDetailsRow['order_id']}'");
    }
    if ($selectCountOrdersDetailsEndedUpdate == $selectOrdersDetailsAll) {
        runQuery("UPDATE `orders` SET `status` ='ended' WHERE `id` ='{$orderDetailsRow['order_id']}'");
    }
    header('Location: index.php?success=تم التعديل بنجاح');
}

$selectAllOrdersSql = "SELECT users.name, users.phone, users.address, orders.date, products.title, order_details.qty ,order_details.*
                              FROM order_details, orders , users, products
                              WHERE order_details.order_details_id = orders.id and
                              orders.user_id = users.id and order_details.product_id = products.id  and order_details.professional_id = '{$_SESSION['professional']['id']}'";
$selectAllOrdersResult = runQuery($selectAllOrdersSql);

?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Information Technology">
    <title>موقع محترف/لوحة تحكم الحرفي</title>
    <link rel="icon" href="assets/img/logo.png" type="image/png">

    <?php
    require_once 'layout/assets/css.php'
    ?>
</head>
<body>
<?php
require_once 'layout/inc/header.php'
?>
<section class="company" style="height: 110vh">
    <div class="container">
        <div class="main-heading"><p class="title"> الطلبات</p></div>
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
                <td>id</td>
                <td> اسم العميل</td>
                <td>العنوان</td>
                <td>رقم الهاتف</td>
                <td> اسم المنتج</td>
                <td> الكمية المطلوبة</td>
                <td>تاريخ الطلب</td>
                <td>حالة الطلب</td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            <?php
            if ($selectAllOrdersResult->num_rows > 0) {
                while ($row = $selectAllOrdersResult->fetch_assoc()) {

                    $status = '';
                    if ($row['status'] == 'new') {
                        $status = '<button class="success" type="button"><a style="color: white" class="confirmation" href="?method=UPDATE&status=accepted&order_details_id=' . $row['order_details_id'] . '">تأكيد</a></button>';
                        $status .= '<button class="danger" type="button"><a style="color: white" class="confirmation" href="?method=UPDATE&status=refused&order_details_id=' . $row['order_details_id'] . '">إلغاء</a></button>';
                    } elseif ($row['status'] == 'accepted') {
                        $status = '<button class="success" type="button"><a style="color: white" class="confirmation" href="?method=UPDATE&status=ended&order_details_id=' . $row['order_details_id'] . '">إنهاء</a></button>';
                    } elseif ($row['status'] == 'refused') {
                        $status = 'تم الرفض';
                    } else {
                        $status = '<i class="fa-solid fa-circle-check correct"></i> تم التسليم';
                    }


                    ?>
                    <tr>
                        <td class="name-user"><?php echo $row['order_details_id'] ?></td>
                        <td class="number-user"> <?php echo $row['name'] ?? '' ?></td>
                        <td class="number-user"> <?php echo $row['address'] ?? '' ?></td>
                        <td class="number-user"> <?php echo $row['phone'] ?? '' ?></td>
                        <td class="number-user"> <?php echo $row['title'] ?? '' ?></td>
                        <td class="number-user"> <?php echo $row['qty'] ?></td>
                        <td class="number-user"> <?php echo $row['date'] ?></td>
                        <td class="delete">
                            <?php echo $status; ?>
                        </td>

                    </tr>
                    <?php

                }
            } ?>
            </tbody>
        </table>
    </div>
</section>
<?php
require_once 'layout/assets/js.php'
?>
</body>
</html>