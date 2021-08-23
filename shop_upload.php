<?php
    $msg = "";
    $database = mysqli_connect('localhost', 'root', "", 'second_project');
    if(isset($_POST['submit'])) {
        $errors = array();
        $maxSize = 2097152;
        $acceptable = array (
            'image/png',
            'image/jpg',
            'image/jpeg'
        );
        if(($_FILES['upload']['size'] >= $maxSize) || ($_FILES["upload"]["size"] == 0)) {
            $errors[] = 'File too large. File must be less than 2 megabytes.';
        }

        if((!in_array($_FILES['upload']['type'], $acceptable)) && (!empty($_FILES["upload"]["type"]))) {
            $errors[] = 'Invalid file type. Only JPG, JPEG, and PNG types are accepted.';
        }
        if(mysqli_errno($database) == 1062) {
            $errors[] = 'This title already exists.';
        }
        $fileName = $_FILES['upload']['name'];
        $tempName = $_FILES['upload']['tmp_name'];
        $image_text = mysqli_real_escape_string($database, htmlentities($_POST['photo_description']));
        $image_price = "Price: " . mysqli_real_escape_string($database, htmlentities($_POST['price'])) . "€";
        $image_title = mysqli_real_escape_string($database, htmlentities($_POST['title']));
            $folder = 'uploads/' . $fileName;
        $sql = "INSERT INTO photos (filename, photo_description, price, title) VALUES ('$fileName', '$image_text', '$image_price', '$image_title')";
        $checkTitle = mysqli_query($database, 'SELECT * FROM photos title');
        if (move_uploaded_file($tempName, $folder))  {
            $msg = "Image uploaded successfully";
        }   else{
            $msg = "Failed to upload image";
        }
        if(count($errors) === 0) {
            mysqli_query($database, $sql);
        } else {
            foreach($errors as $error) {
                echo '<h3 class="shop_error">("'.$error.'");</h3>';
            }
            die();
        }
    }
    $result = mysqli_query($database, 'SELECT * FROM photos');
?>
<?php   $count = 1; 
        while($data = mysqli_fetch_array($result)) {
            if($count === 1) {
                echo "<div class='img_container'>";
            }
                echo "<div  class='img_div' id='".$data['title']."'>"; 
                    echo "<img src='uploads/" . $data['filename']."' alt='".$data['filename']."'>";
                    echo "<p class='img_title' >" .$data['title']. "</p>";
                    echo "<p class='img_desc'>" .$data['photo_description']. "</p>";
                    echo "<p>" .$data['price']. "</p>";
                echo "</div>";
            if($count % 5 === 0) {
                echo "</div>";
                $count = 1;
                continue;
            }
            $count++;
        }
?>
