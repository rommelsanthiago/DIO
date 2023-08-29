package com;

public class ParametrosInvalidosException extends Exception {
    private String msg;
    
    public ParametrosInvalidosException() {
    } 
    public ParametrosInvalidosException(String msg){
        super(msg);
        this.msg = msg;
    }

    public String getMessage(){
        return msg;
    }
}   
