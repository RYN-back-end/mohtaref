<?php

include __DIR__ . '../system/core.php';
require('../helper.php');
checkCompanyLogin();

$_SESSION['professional'] =[];
header('Location: login.php?success=تم تسجيل الخروج بنجاح');