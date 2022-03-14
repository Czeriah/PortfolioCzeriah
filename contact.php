<?php

$errors = [];
$message = $_POST['message'];
$headers = 'FROM: czeriah.design@gmail.com';

mail('czeriah.design@gmail.com', 'Formulaire de Contact', $message, $headers);