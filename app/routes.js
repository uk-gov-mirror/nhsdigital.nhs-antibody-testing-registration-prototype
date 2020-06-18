const express = require('express')
const router = express.Router()

// Version 1 - Is your delivery address the same as your home address?
router.post('/v1/action/delivery-address-question', function (req, res) {
  var deliveryAddressAnswer = req.session.data['delivery-address']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/v1/home-test-kit/email-address')
  } else {
    res.redirect('/v1/home-test-kit/delivery-address')
  }

})

// Version 1 - Confirm identity
router.post('/v1/action/confirm-identity', function (req, res) {
  var deliveryAddressAnswer = req.session.data['identity']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/v1/home-test-kit/order-summary')
  } else {
    res.redirect('/v1/home-test-kit/')
  }

})

// Version 1 - Registration - Get email for the Mobile number route
let emailAddress = "";
router.post('/v1/action/email-address', function (req, res) {
  emailAddress = req.session.data['email'];
  res.redirect('/v1/registration/mobile-number');

})


// Version 1 - Registration - Mobile phone route
router.post('/v1/action/mobile-number', function (req, res) {
  var mobilePhoneNumber = req.session.data['mobile-number']

  if (emailAddress == "No" && mobilePhoneNumber == "No"){
    res.redirect('/v1/registration/call-us')
  } else {
    res.redirect('/v1/registration/landline-number')
  }

})

// Version 1 - Registration - Get consent data for the Comfortable doing test route
let consent = "";
router.post('/v1/action/consent', function (req, res) {
  consent = req.session.data['consent'];
  res.redirect('/v1/registration/comfortable-doing-test');

})

// Version 1 - Registration - Comfortable doing test route
router.post('/v1/action/comfortable-doing-test', function (req, res) {
  let comfortableDoingTest = req.session.data['comfortable-doing-test']

  if (comfortableDoingTest == "No" && consent == "No"){
    res.redirect('/v1/registration/not-eligible')
  } else {
    res.redirect('/v1/registration/do-you-have-symptoms')
  }

})

// Version 1 - Registration - Do you have symptoms route
router.post('/v1/action/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/v1/registration/when-did-symptoms-start')
  } else {
    res.redirect('/v1/registration/have-you-had-symptoms')
  }

})

// Version 1 - Registration - Have you had symptoms route
router.post('/v1/action/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']

  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/v1/registration/when-did-symptoms-start')
  } else {
    res.redirect('/v1/registration/name')
  }

})

// Version 1 - Registration - Ethnic group route
router.post('/v1/action/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/v1/registration/ethnic-background')
  } else {
    res.redirect('/v1/registration/tested-positive')
  }

})

// Version 1 - Registration - Tested positive route
router.post('/v1/action/tested-positive', function (req, res) {
  let testedPositive = req.session.data['tested-positive']

  if (testedPositive == "Yes"){
    res.redirect('/v1/registration/tested-positive-date')
  } else {
    res.redirect('/v1/registration/household')
  }

})

module.exports = router
