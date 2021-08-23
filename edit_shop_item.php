<?php
    $title = $_POST['title'];
    $newDesc = $_POST['edit_photo_description'];
    $newPrice = "Price: " . $_POST['edit_price'] . "€";
    $pdo = new PDO('mysql:host=localhost;dbname=second_project', 'root', '');
    $query = "UPDATE photos SET photo_description = :new_Desc , price = :new_Price WHERE title = :title";
    $stmt = $pdo->prepare($query);
    $stmt->execute(array(':new_Desc' => $newDesc, ':new_Price' => $newPrice, ':title' => $title));