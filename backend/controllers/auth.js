const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");


const generateToken = (user) => {
    return jwt.sign(
        {
            userId : user.userId,
            Email: user.Email,
            role: user.role,
            
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "2h",
        }
    );
};

exports.signUp = async(req, res) => {
    const {userName, Email, password, role} = req.body;   
    if(!userName || !Email || !password){
        return res.status(400).json({message: "Please fill all the fields"});
    }
    try{
        const existingUser = await User.findOne({Email});
        if(existingUser){
            return res.status(400).json({message: "User Already Exists"});
        }
        const newUser = new User({
            userName,
            Email,
            password,
            role,
        })

        const savedUser = await newUser.save();

        const token = generateToken(savedUser);

        res.status(201).json({
            userId: savedUser.userId || savedUser._id,
            userName: savedUser.userName,
            Email: savedUser.Email, 
            role: savedUser.role,

        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

exports.signIn = async(req, res) => {
    const {Email, password} = req.body;

    if(!Email || !password){
        return res.status(400).json({message: "Please fill all the fields"});
    }
    try{
        const user = await User.findOne({ Email });
        if (!user) return res.status(400).json({ message: "User not found" });
        
        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
        
        const token = generateToken(user);

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        });
        res.status(200).json({
            userId: user.userId || user._id,
            userName: user.userName,
            Email: user.Email,
            role: user.role,
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}