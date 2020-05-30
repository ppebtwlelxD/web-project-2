<?php
class Token {
    public static function generate() {
        return Session::put(Config::get('session/tokenNumb'), md5(uniqid()));
    }

    public static function check($token){
        $tokenName = Config::get('session/tokenNumb');

        if (Session::exists($tokenName) && $token === Session::get($tokenName)) {
            Session::delete($tokenName);
            return true;
        }

        return false;
    }
}