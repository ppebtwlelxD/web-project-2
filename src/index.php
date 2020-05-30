<?php
require_once 'core\init.php';

if (Session::exists('home')) {
    echo '<p>' . Session::flash('home') . '</p>';
}


$user = new User();
if($user->isLoggedIn()) {
    ?> <p>Hello <a herf="profile.php?user=<?php echo escape($user->data()->username); ?>"> <?php echo escape($user->data()->username); ?></a>!</p>

    <ul>
        <li><a href="logout.php">Log out</a></li>
    </ul>
<?php
} else {
    echo '<p>You need to make a <a href="register.php">user</a> or <a href="login.php">login</a> </p>';
}


