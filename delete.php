<?php    
       $title = $_POST['title'];
       $pdo = new PDO('mysql:host=localhost;dbname=second_project', 'root', '');
       $query = 'DELETE FROM photos WHERE title = :title';
       $stmt = $pdo->prepare($query);
       $stmt->bindPARAM(':title', $title);
       $stmt->execute();
    
