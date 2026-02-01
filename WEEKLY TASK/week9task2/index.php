<?php
// Start Session to manage login state
session_start();

// --- 1. MOCK DATABASE (Simulating a DB with Session Array) ---
if (!isset($_SESSION['users'])) {
    $_SESSION['users'] = []; // Storage for registered users
}
if (!isset($_SESSION['reviews'])) {
    $_SESSION['reviews'] = []; // Storage for book reviews
}

// Helper: Get current user data
function getCurrentUser() {
    if (isset($_SESSION['logged_in_user'])) {
        $username = $_SESSION['logged_in_user'];
        return $_SESSION['users'][$username] ?? null;
    }
    return null;
}

// --- 2. HANDLE FORM SUBMISSIONS ---
$message = "";
$messageType = ""; // success or error

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $action = $_POST['action'];

    // REGISTRATION
    if ($action == 'register') {
        $user = $_POST['username'];
        $email = $_POST['email'];
        $pass = $_POST['password'];

        if (isset($_SESSION['users'][$user])) {
            $message = "Username already exists!";
            $messageType = "error";
        } else {
            // Save user (In real life: Hash the password!)
            $_SESSION['users'][$user] = [
                'email' => $email,
                'password' => $pass,
                'active' => true
            ];
            $message = "Account successfully registered! Please log in.";
            $messageType = "success";
        }
    }

    // LOGIN
    elseif ($action == 'login') {
        $user = $_POST['username'];
        $pass = $_POST['password'];

        if (isset($_SESSION['users'][$user])) {
            $userData = $_SESSION['users'][$user];
            if (!$userData['active']) {
                $message = "This account has been deactivated.";
                $messageType = "error";
            } elseif ($userData['password'] === $pass) {
                $_SESSION['logged_in_user'] = $user;
                $message = "Welcome back, $user!";
                $messageType = "success";
            } else {
                $message = "Invalid password.";
                $messageType = "error";
            }
        } else {
            $message = "User not found.";
            $messageType = "error";
        }
    }

    // UPDATE PROFILE
    elseif ($action == 'update_profile') {
        $user = $_SESSION['logged_in_user'];
        $newEmail = $_POST['email'];
        $_SESSION['users'][$user]['email'] = $newEmail;
        $message = "Profile updated. New email: $newEmail";
        $messageType = "success";
    }

    // PASSWORD RESET (Simulation)
    elseif ($action == 'reset_password') {
        $email = $_POST['email'];
        $newPass = $_POST['new_password'];
        $found = false;
        
        // Find user by email
        foreach ($_SESSION['users'] as $u => $data) {
            if ($data['email'] === $email) {
                $_SESSION['users'][$u]['password'] = $newPass;
                $found = true;
                break;
            }
        }
        
        if ($found) {
            $message = "Password successfully reset! You can now log in.";
            $messageType = "success";
        } else {
            $message = "No account found with that email.";
            $messageType = "error";
        }
    }

    // SUBMIT REVIEW
    elseif ($action == 'review') {
        if (!getCurrentUser()) {
            $message = "ERROR: You must be logged in to review.";
            $messageType = "error";
        } else {
            $review = $_POST['review_text'];
            $_SESSION['reviews'][] = [
                'user' => $_SESSION['logged_in_user'],
                'text' => $review
            ];
            $message = "Review submitted successfully!";
            $messageType = "success";
        }
    }

    // DEACTIVATE ACCOUNT
    elseif ($action == 'deactivate') {
        $user = $_SESSION['logged_in_user'];
        $_SESSION['users'][$user]['active'] = false;
        unset($_SESSION['logged_in_user']); // Logout
        $message = "Account deactivated. You can no longer log in.";
        $messageType = "success";
    }

    // LOGOUT
    elseif ($action == 'logout') {
        unset($_SESSION['logged_in_user']);
        $message = "Logged out successfully.";
        $messageType = "success";
    }
}

$currentUser = getCurrentUser();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Online Bookstore System</title>
    <style>
        body { font-family: sans-serif; max-width: 800px; margin: 20px auto; padding: 20px; background: #f4f4f4; }
        .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        h1, h2 { color: #2c3e50; }
        .alert { padding: 10px; margin-bottom: 20px; border-radius: 4px; }
        .success { background: #d4edda; color: #155724; }
        .error { background: #f8d7da; color: #721c24; }
        .section { margin-bottom: 30px; border-top: 1px solid #eee; padding-top: 20px; }
        input, textarea { width: 100%; padding: 8px; margin: 5px 0 15px; box-sizing: border-box; }
        button { background: #007bff; color: white; border: none; padding: 10px 15px; cursor: pointer; }
        button.danger { background: #dc3545; }
        button:hover { opacity: 0.9; }
        .nav { margin-bottom: 20px; }
    </style>
</head>
<body>

<div class="container">
    <h1>📚 Online Bookstore</h1>
    
    <?php if ($message): ?>
        <div class="alert <?php echo $messageType; ?>">
            <?php echo $message; ?>
        </div>
    <?php endif; ?>

    <!-- LOGGED IN VIEW -->
    <?php if ($currentUser): ?>
        <div class="nav">
            <strong>Hello, <?php echo $_SESSION['logged_in_user']; ?>!</strong> | 
            <form action="" method="POST" style="display:inline;">
                <input type="hidden" name="action" value="logout">
                <button type="submit" style="background:none; border:none; color:blue; cursor:pointer; padding:0;">Logout</button>
            </form>
        </div>

        <!-- 1. Profile Management -->
        <div class="section">
            <h2>👤 Profile Management</h2>
            <form method="POST">
                <input type="hidden" name="action" value="update_profile">
                <label>Current Email:</label>
                <input type="email" name="email" value="<?php echo $currentUser['email']; ?>" required>
                <button type="submit">Update Email</button>
            </form>
        </div>

        <!-- 2. Write a Review -->
        <div class="section">
            <h2>⭐ Write a Review</h2>
            <p>Book: <em>The Great Gatsby</em></p>
            <form method="POST">
                <input type="hidden" name="action" value="review">
                <textarea name="review_text" placeholder="Write your thoughts..." required></textarea>
                <button type="submit">Submit Review</button>
            </form>
            
            <h3>Recent Reviews:</h3>
            <ul>
                <?php foreach($_SESSION['reviews'] as $r): ?>
                    <li><strong><?php echo $r['user']; ?>:</strong> <?php echo $r['text']; ?></li>
                <?php endforeach; ?>
            </ul>
        </div>

        <!-- 3. Deactivate Account -->
        <div class="section">
            <h2>⚠️ Danger Zone</h2>
            <form method="POST">
                <input type="hidden" name="action" value="deactivate">
                <button type="submit" class="danger">Deactivate My Account</button>
            </form>
        </div>

    <!-- GUEST VIEW -->
    <?php else: ?>
        
        <div class="section">
            <h2>🔐 Login</h2>
            <form method="POST">
                <input type="hidden" name="action" value="login">
                <label>Username</label>
                <input type="text" name="username" required>
                <label>Password</label>
                <input type="password" name="password" required>
                <button type="submit">Log In</button>
            </form>
        </div>

        <div class="section">
            <h2>📝 Sign Up (Register)</h2>
            <form method="POST">
                <input type="hidden" name="action" value="register">
                <label>Username</label>
                <input type="text" name="username" required>
                <label>Email</label>
                <input type="email" name="email" required>
                <label>Password</label>
                <input type="password" name="password" required>
                <button type="submit">Create Account</button>
            </form>
        </div>

        <div class="section">
            <h2>🔑 Forgot Password? (Reset)</h2>
            <form method="POST">
                <input type="hidden" name="action" value="reset_password">
                <label>Registered Email</label>
                <input type="email" name="email" required>
                <label>New Password</label>
                <input type="password" name="new_password" required>
                <button type="submit" style="background: #6c757d;">Reset Password</button>
            </form>
        </div>

        <div class="section">
            <h2>📖 Browse Books</h2>
            <p><strong>The Great Gatsby</strong> - <em>F. Scott Fitzgerald</em></p>
            <!-- Attempting to review while logged out -->
            <form method="POST">
                <input type="hidden" name="action" value="review">
                <textarea name="review_text" placeholder="You must log in to write a review..." disabled></textarea>
                <button type="button" onclick="alert('Please log in to write a review!')" style="opacity: 0.5;">Submit Review</button>
            </form>
        </div>

    <?php endif; ?>

</div>

</body>
</html>
