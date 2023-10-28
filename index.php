<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <link rel="stylesheet" href="css/style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>

<body style="background: url('images/bg.png') no-repeat; background-size: cover;">

    <div class="container">
        <div class="form-box">
            <form id="myForm">
                <h2>Register</h2>
                <div id="errorMessage" class="error-message"></div>
                <div id="successMessage" class="success-message"></div>
                <div class="input-box">
                    <i class='bx bxs-user'></i>
                    <input type="text" id="Username" name="Username" placeholder="Username">
                </div>
                <div class="input-box">
                    <i class='bx bxs-envelope'></i>
                    <input type="text" id="Email" name="Email" placeholder="Email">
                </div>
                <div class="input-box">
                    <i class='bx bxs-lock-alt'></i>
                    <input type="password" id="Password" name="Password" placeholder="Password">
                </div>
                <div>
                    <input type="button" class="btn" value="Register" onclick="validation()">
                </div>
            </form>
        </div>
    </div>

    <script src="js/script.js"></script>
    
</body>
</html>
