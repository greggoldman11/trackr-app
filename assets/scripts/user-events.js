const getFormfields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// A function for when a user wants to sign up
const onSignUp = function (event) {
  event.preventDefault()
  const signUpData = getFormfields(event.target)
  api.signUp(signUpData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onAltSignIn = function () {
  $('#sign-in-section').show()
  $('#sign-up-section').hide()
  $('#createNewAccount').show()
  $('#altSignIn').hide()
  $('#message').text('Please sign in')
  $('form').trigger('reset')
}
const onCreateNewAccount = function () {
  $('#sign-up-section').show()
  $('#sign-in-section').hide()
  $('#createNewAccount').hide()
  $('#altSignIn').show()
  $('#message').text('Please sign up')
  $('form').trigger('reset')
}
const onSignIn = function (event) {
  event.preventDefault()
  const signInData = getFormfields(event.target)
  api.signIn(signInData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormfields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onCreateRating = function (event) {
  event.preventDefault()
  const data = getFormfields(event.target)
  api.createRating(data)
    .then(ui.createRatingSuccess)
    .catch(ui.createRatingFailure)
}
const onIndexRating = function (event) {
  event.preventDefault()
  api.indexRating()
    .then(ui.indexRatingSuccess)
    .catch(ui.indexRatingFailure)
}
const onUpdateRating = function (event) {
  event.preventDefault()
  const data = getFormfields(event.target)
  api.updateRating(data)
    .then(ui.updateRatingSuccess)
    .catch(ui.updateRatingFailure)
}
const onDeleteRating = function (event) {
  event.preventDefault()
  const data = getFormfields(event.target)
  console.log(data.rating.id)
  api.deleteRating(data)
    .then(ui.deleteRatingSuccess)
    .catch(ui.deleteRatingFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateRating,
  onIndexRating,
  onUpdateRating,
  onDeleteRating,
  onAltSignIn,
  onCreateNewAccount
}
