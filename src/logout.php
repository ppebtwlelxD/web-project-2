<?php
require_once 'core\init.php';

$user = New User();
$user->logout();

redirect::to('index.php');