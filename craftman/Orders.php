<?php
require '../helper.php';
checkAdminLogin();


$selectAllOrdersSql = "SELECT * FROM orders";
$selectAllOrdersResult = runQuery($selectAllOrdersSql);

?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Information Technology">
    <title>موقع محترف/ لوحة التحكم</title>
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
        <table>
            <thead>
            <tr>
                <td>id</td>
                <td> اسم المحل</td>
                <td> اسم العميل</td>
                <td> اسم المنتج</td>
                <td> الكمية المطلوبة</td>
                <td>تاريخ التسليم</td>
                <td>حالة الطلب</td>
            </tr>
            </thead>
            <tbody>
            <?php
            if ($selectAllOrdersResult->num_rows > 0) {
                while ($row = $selectAllOrdersResult->fetch_assoc()) {
                    $selectCompanySql = "SELECT * from companies WHERE id = '{$row["company_id"]}'";
                    $selectCompanyResult = runQuery($selectCompanySql);
                    $selectUserSql = "SELECT * from users WHERE id = '{$row["user_id"]}'";
                    $selectUserResult = runQuery($selectUserSql);
                    $selectProductSql = "SELECT * from products WHERE id = '{$row["product_id"]}'";
                    $selectProductResult = runQuery($selectProductSql);
                    $status = '';
                    if ($row['status'] == 'new')
                    {
                        $status = 'طلب جديد';
                    }elseif ($row['status'] == 'accepted')
                    {
                        $status = '<i class="fa-solid fa-circle-check correct"></i> تم القبول';
                    }elseif ($row['status'] == 'refused')
                    {
                        $status = 'تم الرفض';
                    }else{
                        $status = '<i class="fa-solid fa-circle-check correct"></i> تم التسليم';
                    }
                    ?>
                    <tr>
                        <td class="name-user"><?php echo $row['id']?></td>
                        <td class="email-user"> <?php echo $selectCompanyResult->fetch_assoc()['title']??''?></td>
                        <td class="number-user"> <?php echo $selectUserResult->fetch_assoc()['name']??''?></td>
                        <td class="number-user"> <?php echo $selectProductResult->fetch_assoc()['title']??''?></td>
                        <td class="number-user"> <?php echo $row['qty']?></td>
                        <td class="number-user"> <?php echo $row['date']?></td>
                        <td class="stats">
                            <?php echo $status;?>
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