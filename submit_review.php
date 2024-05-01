<?php
// Include necessary dependencies
require 'helper.php'; // Include your helper functions or database connection script
checkLogin();
// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the user is logged in
    session_start();
    if (!isset($_SESSION['user']['loggedin'])) {
        // If not logged in, redirect to login page
        header("Location: login.php?error=يجب تسجيل الدخول أولا");
        exit;
    }
    // Validate form data
    $productID = $_POST['product_id'];
    $userID = $_SESSION['user']['id'];
    $rating = $_POST['rating'];
    $comment = $_POST['comment'];

    // Insert the review into the database
    $insertSql = "INSERT INTO rating (rate_no, comment, product_id, user_id) VALUES ('$rating', '$comment', '$productID', '$userID')";
    runQuery($insertSql);
    header("Location: productDetailes.php?id=$productID&success=تم إضافة التقييم بنجاح");
    exit;
} else {
    $productID = $_POST['product_id'];
    header("Location: productDetailes.php?id=$productID&error=حدث خطأ أثناء تقديم التقييم");
    exit;
}
?>
