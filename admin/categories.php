<?php
require '../helper.php';
checkAdminLogin();

if (isset($_POST['title']) && isset($_POST['type']) && $_POST['type'] == 'new') {

    $insertSql = "INSERT INTO categories (title) VALUES ('{$_POST['title']}')";
    runQuery($insertSql);
    header("Location: categories.php");
}

if (isset($_POST['title']) && isset($_POST['type']) && $_POST['type'] == 'edit') {

    $insertSql = "UPDATE categories SET title = '{$_POST['title']}' WHERE id = '{$_POST['id']}'";
    runQuery($insertSql);
    header("Location: categories.php");
}

if (isset($_GET['method']) && isset($_GET['id'])) {
    $deleteSql = "DELETE From categories WHERE id = {$_GET['id']}";
    runQuery($deleteSql);
    header('Location: categories.php');
}


$selectCategoriesSql = "SELECT * FROM categories";
$selectCategoriesResult = runQuery($selectCategoriesSql);

?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Information Technology">
    <title>موقع محترف / لوحة التحكم</title>
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
        <div class="main-heading"><p class="title"> التصنيفات</p></div>
        <div class="button">
            <button class="add-btn" id="model-book">اضافة جديد</button>
        </div>
        <table>
            <thead>
            <tr>
                <td>id</td>
                <td> اسم التصنيف</td>
                <td>إجرائات</td>
            </tr>
            </thead>
            <tbody>
            <?php
            if ($selectCategoriesResult->num_rows > 0) {
                while ($row = $selectCategoriesResult->fetch_assoc()) {
                    ?>
                    <tr>
                        <td class="name-user"><?php echo $row['id']?></td>
                        <td class="email-user"> <?php echo $row['title']??''?></td>
                        <td class="delete">
                            <button class="success edit-btn" type="button" data-model="editModel<?php echo $row['id'] ?>">تعديل</button>
                            <button class="danger"  type="button"><a style="color: white" class="confirmation" href="?method=DELETE&id=<?php echo $row['id'] ;?>">حذف</a></button>
                        </td>
                    </tr>
                    <section class="model-book" id="editModel<?php echo $row['id'] ?>">
                        <div class="adminModal book"><p>تعديل <?php echo $row['title']??''?></p>
                            <form action="" enctype="multipart/form-data" method="post">
                                <input type="hidden" name="id" value="<?php echo $row['id'] ?>">
                                <input type="hidden" name="type" value="edit">
                                <div class="book-input"><label>الاسم </label>
                                    <input type="text" placeholder="" name="title" value="<?php echo $row['title']??''?>"
                                           required>
                                </div>

                                <div class="button">
                                    <button type="submit"><a>تاكيد</a></button>
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

<section class="model-book">
    <div class="adminModal book"><p>تصنيف جديد</p>
        <form action="" enctype="multipart/form-data" method="post">
            <input type="hidden" name="type" value="new">
            <div class="book-input"><label>الاسم </label>
                <input type="text" placeholder="" name="title"
                                                                required>
            </div>

            <div class="button">
                <button type="submit"><a>تاكيد</a></button>
            </div>
        </form>

    </div>
</section>

<?php
require_once 'layout/assets/js.php'
?>
</body>
</html>