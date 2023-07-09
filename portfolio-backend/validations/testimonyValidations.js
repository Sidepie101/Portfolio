import { body, param } from 'express-validator';




const testimonyRules = [

  body('fullName').isLength({ min: 5 }).withMessage('Full Name must be at least 5 characters long'),

  body('companyName').isLength({ min: 5 }).withMessage('Company Name must be at least 5 characters long'),

  body('email').notEmpty().withMessage('Email cannot be empty').isEmail().withMessage('Invalid email address'),

  body('testimony').notEmpty().withMessage('Testimony cannot be empty'),

//  param('email').notEmpty().withMessage('The email parameter is required'),

];




export default testimonyRules;

{/*
full name
company name
email
testimony */}