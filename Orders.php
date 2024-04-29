<?php
require 'helper.php';
checkLogin();


$selectAllOrdersSql = "SELECT * FROM orders WHERE user_id = '{$_SESSION['user']['id']}'";
$selectAllOrdersResult = runQuery($selectAllOrdersSql);

?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Information Technology">
    <title>موقع محترف | لوحة التحكم</title>
    <link rel="icon" href="assets/img/logo.png" type="image/png">
    <?php
    require_once 'layout/assets/css.php'
    ?>
</head>
<style>

    .table-modal {
        display: table;
        width: 100%; /* Set the width to 100% */
        border-collapse: collapse;
    }

    #table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    #table td, #table th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    #table tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    #table tr:hover {
        background-color: #ddd;
    }

    #table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #CF556850;
        color: white;
    }

    .table {
        display: table;
        width: 100%;
        border-collapse: collapse;
    }

    .table-row {
        display: table-row;
    }

    .table-cell {
        display: table-cell;
        border: 1px solid #ddd;
        padding: 8px;
    }

    .header {
        font-weight: bold;
        background-color: #f2f2f2;
    }
</style>

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
                <td>رقم الطلب</td>
                <!--   <td> اسم المحل</td> -->
                <td> اسم العميل</td>
                <!--    <td> اسم المنتج</td> -->
                <!--   <td> الكمية المطلوبة</td> -->
                <td>تاريخ الطلب</td>
                <td>السعر الاجمالي</td>

                <td>حالة الطلب</td>
                <td>تفاصيل الطلب</td>
            </tr>
            </thead>
            <tbody>
            <?php
            if ($selectAllOrdersResult->num_rows > 0) {
                while ($row = $selectAllOrdersResult->fetch_assoc()) {
                    $selectUserSql = "SELECT * from users WHERE id = '{$row["user_id"]}'";
                    $selectUserResult = runQuery($selectUserSql);
                    /*  $select_order_details_Sql = "SELECT order_details.qty, order_details.price, order_details.total,
                      order_details.status , products.title as product, professionals.title as professional , orders.id
                      FROM order_details, products, professionals , orders
                      WHERE order_details.product_id = products.id and
                      order_details.professional_id= professionals.id AND
                      order_details.order_id = orders.id and orders.id = '{$row["id"]}'";
                      $select_order_details_result = runQuery($select_order_details_Sql);


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
                      */
                    ?>
                    <tr>
                        <td class="name-user"><?php echo $row['id'] ?></td>

                        <td class="number-user"> <?php echo $selectUserResult->fetch_assoc()['name'] ?? '' ?></td>


                        <td class="number-user"> <?php echo $row['date'] ?></td>
                        <td class="number-user"> <?php echo $row['total_price'] ?></td>
                        <td class="number-user"> <?php echo $row['status'] ?>
                        </td>
                        <td>
                            <button class="success edit-btn" style="color:white;width: 80px;height:30px;background-color: #B09474;-webkit-transition: .3s ease-out;transition: .3s ease-out;border-radius: 8px;border: none;" type="button"
                                    data-model="editModel<?php echo $row['id'] ?>">تفاصيل
                            </button>
                        </td>
                    </tr>
                    <section class="model-book" id="editModel<?php echo $row['id'] ?>">
                        <div class="adminModal book"><p>تفاصيل الطلب رقم <?php echo $row['id'] ?? '' ?> </p>
                            <form action="" enctype="multipart/form-data" method="post">
                                <input type="hidden" name="id" value="<?php echo $row['id'] ?>">
                                <input type="hidden" name="type" value="edit">

                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="table">
                                                <div class="table-row header">
                                                    <div class="table-cell col-6">اسم الحرفي</div>

                                                    <div class="table-cell col-6">اسم المنتج</div>
                                                    <div class="table-cell col-6">الكمية</div>
                                                    <div class="table-cell col-6">السعر</div>
                                                    <div class="table-cell col-6">السعر الاجمالي</div>
                                                    <div class="table-cell col-6">حالة الطلب</div>
                                                </div>
                                                <?php
                                                $select_order_details_Sql = "SELECT order_details.qty as d_qty, order_details.price as d_price, order_details.total as d_total,
					order_details.status as d_status , products.title as product, professionals.title as professional , orders.id 
					FROM order_details, products, professionals , orders 
					WHERE order_details.product_id = products.id and 
					order_details.professional_id= professionals.id AND
					order_details.order_id = orders.id and orders.id = '{$row["id"]}'";
                                                $select_order_details_result = runQuery($select_order_details_Sql);
                                                if ($select_order_details_result->num_rows > 0) {
                                                    while ($row_details = $select_order_details_result->fetch_assoc()) {
                                                        ?>
                                                        <div class="table-row col-12">
                                                            <div class="table-cell col-6"><?php echo $row_details['professional'] ?></div>
                                                            <div class="table-cell col-6"><?php echo $row_details['product'] ?></div>
                                                            <div class="table-cell col-6"><?php echo $row_details['d_qty'] ?></div>
                                                            <div class="table-cell col-6"><?php echo $row_details['d_price'] ?></div>
                                                            <div class="table-cell col-6"><?php echo $row_details['d_total'] ?></div>
                                                            <div class="table-cell col-6"><?php echo $row_details['d_status'] ?></div>
                                                        </div>
                                                        <?php
                                                    }
                                                }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="button">
                                    <button type="submit"><a>اغلاق</a></button>
                                </div>
                            </form>

                        </div>
                    </section>

                    <?php
                }
            } ?>
            </tbody>
        </table>
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