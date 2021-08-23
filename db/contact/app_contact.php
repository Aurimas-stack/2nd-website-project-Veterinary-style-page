<?php
    try {
        $pdo = new \PDO('mysql:host=localhost;dbname=second_project;charset=utf8', 'root', '', [
            PDO::ATTR_EMULATE_PREPARES => false, 
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]);
    } catch(\PDOException $e) {
        echo "Error connecting to mysql: " . $e->getMessage();
    }
    if($_POST && isset($_POST['submit'])) {
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $message = trim($_POST['message']);
        $stmt = $pdo->prepare("INSERT INTO `contact_message` (name, email, message) VALUES (:name, :email, :message)");
        $stmt->execute(array(':name' => $name, ':email' => $email, ':message' => $message));
    }
