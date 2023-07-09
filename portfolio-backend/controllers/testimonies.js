
import { validationResult } from 'express-validator';




let data = [

  {

    email: 'john@example.com',

    fullName: 'John Doe',

    companyName: 'ABC Inc.',

    testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

  },

  {

    email: 'jane@example.com',

    fullName: 'Jane Smith',

    companyName: 'XYZ Corp.',

    testimony: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',

  },

  {

    email: 'alex@example.com',

    fullName: 'Alex Johnson',

    companyName: '123 Industries',

    testimony: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',

  },

];




const myValidationResult = validationResult.withDefaults({

  formatter: (error) => {

    return {

      [error.param]: error.msg,

    };

  },

});




export const addTestimony = (req, res) => {

  const testimonyInfo = req.body;




  const errors = myValidationResult(req);

  if (!errors.isEmpty()) {

    return res.status(422).json({ errors: errors.array() });

  }




  const itExists = data.find((testimony) => testimony.email === testimonyInfo.email);

  if (itExists) return res.status(422).json([{ key: 'email', message: 'This testimony already exists' }]);




  data.push(testimonyInfo);

  res.status(200).json({ data, message: 'Testimony added successfully' });

};




export const testimonyList = (req, res) => {

  if (!data.length) return res.status(200).json({ error: false, message: 'No testimonies in the list' });

  res.status(200).json({ error: false, data, message: 'Testimony list' });

};




export const updateTestimony = (req, res) => {

  const { email } = req.params;

  const allTestimonyEmails = data.map((testimony) => testimony.email);




  if (!email) {

    res.status(422).json([{ key: 'email', message: 'Testimony email is required' }]);

  } else if (!allTestimonyEmails.includes(email)) {

    res.status(404).json([{ key: 'email', message: 'This testimony does not exist' }]);

  }




  const updatedTestimony = req.body;

  const newData = data.map((testimony) => {

    if (testimony.email === email) {

      return updatedTestimony;

    }

    return testimony;

  });




  data = [...newData];

  res.status(200).json({ message: 'Testimony updated successfully' });

};




export const deleteTestimony = (req, res) => {

  const { email } = req.params;

  const allTestimonyEmails = data.map((testimony) => testimony.email);




  if (!email) {

    res.status(400).json({ error: true, message: 'Testimony email is required' });

  } else if (!allTestimonyEmails.includes(email)) {

    res.status(404).json({ error: true, message: 'This testimony does not exist' });

  }




  const newData = data.filter((testimony) => testimony.email !== email);

  data = newData;

  res.status(200).json({ message: `Testimony with email ${email} has been successfully deleted` });

};




export const getTestimonyByEmail = (req, res) => {

  const { email } = req.params;

  const allTestimonyEmails = data.map((testimony) => testimony.email);




  if (!email) {

    res.status(400).json({ error: true, message: 'Testimony email is required' });

  } else if (!allTestimonyEmails.includes(email)) {

    res.status(404).json({ error: true, message: 'This testimony does not exist' });

  }




  const thisTestimony = data.find((testimony) => testimony.email === email);

  res.status(200).json({ error: false, data: thisTestimony });

};


