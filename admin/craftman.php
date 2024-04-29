<?php
require '../helper.php';
checkAdminLogin();

if (isset($_GET['method']) && isset($_GET['user_id'])) {
    $deleteSql = "DELETE From professionals WHERE id = {$_GET['user_id']}";
    runQuery($deleteSql);
    header('Location: craftman.php?success=تم الحذف بنجاح');
}
if (isset($_POST['active']) && isset($_POST['type']) && $_POST['type'] == 'edit') {
 $active = isset($_POST['active']) ? 1 : 0;	
    $insertSql = "UPDATE professionals SET active = '{$active}' WHERE id = '{$_POST['id']}'";
    runQuery($insertSql);
    header("Location: craftman.php");
}

$selectAllUsersSql = "SELECT * FROM professionals";
$selectAllUsersResult = runQuery($selectAllUsersSql);

?>
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Information Technology">
    <title>محترف | لوحة التحكم</title>
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
        <div class="main-heading"><p class="title"> الحرفيين</p></div>
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
                <td> الاسم</td>
                <td> البريد الالكتروني</td>
                <td> رقم الهاتف</td>
                <td>الصورة</td>
				<td>حالة الحرفي</td>
                <td>العمليات</td>
            </tr>
            </thead>
            <tbody>
            <?php
            if ($selectAllUsersResult->num_rows > 0) {
                while ($row = $selectAllUsersResult->fetch_assoc()) {
                    ?>
                    <tr>
                        <td class="name-user"><?php echo $row['title']?></td>
                        <td class="email-user"> <?php echo $row['email']?></td>
                        <td class="number-user"> <?php echo $row['whatsapp']?></td>
                        <td class="number-user"> <img src="../<?php echo $row['banner']?>" style="width: 100px" onclick="window.open(this.src)"></td>
                        <td class="number-user"> <?php echo $row['active']?'نشط':'غير نشط'?>  </td>
						<td class="delete">
						<button class="success edit-btn" type="button" data-model="editModel<?php echo $row['id'] ?>">تنشيط</button>
                            <button class="danger" type="button"><a style="color: white" class="confirmation" href="?method=DELETE&user_id=<?php echo $row['id']?>">حذف</a></button>
             
			 <section class="model-book" id="editModel<?php echo $row['id'] ?>">
                        <div class="adminModal book"><p>تنشيط <?php echo $row['title']??''?></p>
                            <form action="" enctype="multipart/form-data" method="post">
                                <input type="hidden" name="id" value="<?php echo $row['id'] ?>">
                                <input type="hidden" name="type" value="edit">
                                <div class="book-input">
								
										   <label for="flexSwitchCheckDefault<?php echo $row['id'] ?>">نشط</label>
                                                            <input class="form-check-input" type="checkbox"
                                                                   role="switch"
                                                                   name="active" <?php echo $row['active'] ? 'checked' : '' ?>
                                                                   value="1"
                                                                   id="flexSwitchCheckDefault<?php echo $row['id'] ?>">
                                                            
                                </div>

                                <div class="button">
                                    <button type="submit"><a>تاكيد</a></button>
                                </div>
                            </form>

                        </div>
                    </section>
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