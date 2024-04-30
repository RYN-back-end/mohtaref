<?php
session_start();

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
    <?php
    require_once 'layout/assets/css.php'
    ?>
</head>

<body>
<?php
require_once 'layout/inc/header.php';
$selectCompaniesSql = "SELECT * FROM professionals";
$selectCompaniesResult = runQuery($selectCompaniesSql);
?>
<section class="home-banner">
    <div class="container">
        <div class="banner-details">
            <h2>&#x2B05; صناعات يدوية &#x27A1;</h2>
            <p> نقدم اليك افضل مقدمي المنتجات للصناعات اليدوية</p></div>
    </div>
</section>
<section class="company">
    <div class="container">
        <div class="main-heading"><p class="title"> مقدمي الخدمات</p></div>
        <div class="row gap-1">
            <?php
            if ($selectCompaniesResult->num_rows > 0) {
                while ($row = $selectCompaniesResult->fetch_assoc()) {
                    ?>
                    <div class="col-3-lg col-6-md col-12-sm">
                        <div class="company-card">
                            <div class="company-img"><img src="<?php echo $row['banner']?>" alt="company-img"></div>
                            <div class="details-company">
                                <p class="name"><?php echo $row['title']?></p>
                                <button type="button"><a href="companyDetailes.php?id=<?php echo $row['id']?>">تفاصيل </a></button>
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
<section class="home-about">
    <div class="container">
        <div class="main-heading"><p class="title"> من نحن</p></div>
        <div class="row gap-1">
            <div class="col-12-md col-12-sm">
                <div class="box"><p class="tittle">يمكنك التعرف علي اختصاصنا بكشل اكبر ...</p>
                    <p class="des">
                        نسعى جاهدين لتقديم خدماتنا كوسيط موثوق بين مقدمي منتجات الصناعات اليدوية والمشترين الذين يبحثون عن منتجات ذات جودة عالية وفريدة.
                        متخصصون في توفير تجربة تسوق مريحة وسلسة لعملائنا. من خلال منصتنا الإلكترونية، يمكنكم الوصول إلى مجموعة متنوعة من المنتجات اليدوية الفريدة
                    </p>
                </div>
            </div>
            <div class="col-12-md col-12-sm">
                <div class="img-about"><img src="assets/img/banner-2.png" alt="img-about"></div>
            </div>
        </div>
    </div>
    <div class="img-animation"><img src="assets/img/circle2.png" alt="animation"></div>
</section>
<?php
require_once 'layout/inc/footer.php'
?>
<?php
require_once 'layout/assets/js.php'
?>
</body>
</html>