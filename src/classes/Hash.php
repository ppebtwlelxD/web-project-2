<?php
class Hash {
    public static function make($string, $salt = '') {
        return hash('sha256', $string . $salt);
    }
    
    public static function salt($length) {
        return random_int(0, $length);
    }
    
    public static function unique() {
        return self::make(uniqid());
    }
}