<?php


if (!function_exists('runQuery')) {
    function runQuery($query)
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "mohtaref";
        $conn = new mysqli($servername, $username, $password, $database);
        return $conn->query($query);
    }
}

if (!function_exists('checkLogin')) {
    function checkLogin()
    {
        session_start();
        if (!isset($_SESSION['user']['loggedin'])) {
            if (!str_contains($_SERVER['REQUEST_URI'],'login.php') &&
                !str_contains($_SERVER['REQUEST_URI'],'registration.php')){
                header('Location: login.php');
            }
        }elseif(str_contains($_SERVER['REQUEST_URI'],'login.php') ||
            str_contains($_SERVER['REQUEST_URI'],'registration.php')){
            header('Location: index.php');
        }
        if (isset($_SESSION['user']['loggedin']))
        {
            $checkMyUserSql = "SELECT * FROM users WHERE id = '{$_SESSION['user']['id']}'";
            $checkMyUserResult = runQuery($checkMyUserSql);
            if ($checkMyUserResult->num_rows <= 0 && $_SESSION['user']['loggedin'] == true)
            {
                $_SESSION['user'] = [];
                header('Location: login.php');
            }
        }
    }
}
if (!function_exists('checkAdminLogin')) {
    function checkAdminLogin()
    {
        session_start();
        if (!isset($_SESSION['admin']['loggedin'])) {
            if (!str_contains($_SERVER['REQUEST_URI'],'admin/login.php')){
                header('Location: login.php');
            }
//            die('39');
        }elseif(str_contains($_SERVER['REQUEST_URI'],'admin/login.php')){
            header('Location: index.php');
        }
//        die('44');

        if (isset($_SESSION['admin']['loggedin']))
        {
            $checkMyUserSql = "SELECT * FROM admins WHERE id = '{$_SESSION['admin']['id']}'";
            $checkMyUserResult = runQuery($checkMyUserSql);
            if ($checkMyUserResult->num_rows <= 0 && $_SESSION['admin']['loggedin'] == true)
            {
                $_SESSION['admin'] = [];
                header('Location: login.php');
            }
        }
    }
}
if (!function_exists('checkCompanyLogin')) {
    function checkCompanyLogin()
    {
        session_start();
        if (!isset($_SESSION['professional']['loggedin'])) {
            if (!str_contains($_SERVER['REQUEST_URI'],'craftman/login.php')  &&
                !str_contains($_SERVER['REQUEST_URI'],'craftman/craftregister.php')){
                header('Location: login.php');
            }
//            die('39');
        }elseif(str_contains($_SERVER['REQUEST_URI'],'craftman/login.php')  ||
            str_contains($_SERVER['REQUEST_URI'],'craftman/craftregister.php') ){
            header('Location: index.php');
        }
//        die('44');

        if (isset($_SESSION['professional']['loggedin']))
        {
            $checkMyUserSql = "SELECT * FROM professionals WHERE id = '{$_SESSION['professional']['id']}'";
            $checkMyUserResult = runQuery($checkMyUserSql);
            if ($checkMyUserResult->num_rows <= 0 && $_SESSION['professional']['loggedin'] == true)
            {
                $_SESSION['professional'] = [];
                header('Location: craftman/login.php');
            }
        }
    }
}

//$setting = runQuery("SELECT * FROM setting")->fetch_assoc();
