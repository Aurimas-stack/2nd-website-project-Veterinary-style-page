<?php
    require __DIR__ . '/db/sub_email/app_blog.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Veterinary Clinic</title>
    <script src="https://kit.fontawesome.com/b090be4e4c.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">
    <link href="css/normalize.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body id="blog">
    <?php
        include_once 'views/blog/header.php';
        include_once 'views/blog/content.php';
        include_once 'views/blog/footer.php';
    ?>
    <script>
        /*Prevent page reload after form submit*/
        if (window.history.replaceState) {
             window.history.replaceState(null, null, window.location.href);
        }
    </script>
    <script src="javascript/jquery.min.js"></script>
    <script src="javascript/javascript.js" type="text/javascript"></script>
</body>
</html>