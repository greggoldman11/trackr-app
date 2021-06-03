const store = require('./store.js')

const signUpSuccess = () => {
  $('#sign-up-section').hide()
}
const signUpFailure = () => {
  $('#message').text('Failure')
}
const signInSuccess = (res) => {
  store.token = res.user.token
  console.log('in signInSucces, ', store.token)
  $('#sign-in-section').hide()
}
const signInFailure = () => {
  $('#message').text('Failure')
}
const changePasswordSuccess = () => {
  $('#change-password-section').hide()
}
const changePasswordFailure = () => {
  $('#message').text('Failure')
}
const signOutSuccess = () => {
  $('#sign-in-section').show()
}
const signOutFailure = () => {
  $('#message').text('Failure')
}
const createRatingSuccess = () => {
  $('#create-rating-section').hide()
}
const  createRatingFailure = () => {
  $('#message').text('Failure')
}
const indexRatingSuccess = (res) => {
  const ratingArray = res.ratings
  const ratingString = JSON.stringify(ratingArray)
  $('#message').text(ratingString)
}
const indexRatingFailure = () => {
  $('#message').text('Failure')
}
const updateRatingSuccess = (res) => {
  const ratingArray = res.ratings
  const ratingString = JSON.stringify(ratingArray)
  $('#message').text(ratingString)
}
const updateRatingFailure = () => {
  $('#message').text('Failure')
}
const deleteRatingSuccess = (res) => {
  console.log(res)
}
const deleteRatingFailure = () => {
  $('#message').text('Failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createRatingSuccess,
  indexRatingSuccess,
  updateRatingSuccess,
  deleteRatingSuccess,
  indexRatingFailure,
  updateRatingFailure,
  deleteRatingFailure
}
