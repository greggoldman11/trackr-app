const store = require('./store.js')

const signUpSuccess = () => {
  $('form').trigger('reset')
  $('#message').html('You have successfully signed up')
  $('#sign-in-section').show()
  $('#sign-up-section').hide()
  $('#altSignIn').hide()
}
const signUpFailure = () => {
  $('form').trigger('reset')
  $('#message').text('You have failed to sign up')
}
const signInSuccess = (res) => {
  $('form').trigger('reset')
  store.user = res.user.email
  store.token = res.user.token
  $('#message').text(`Welcome ${store.user}!`)
  $('#main-heading').html(`<p>Create a track for anything you want, copy the id to update or delete,
      or click for a random taco... then track it!
    </p>`)
  $('#sign-in-section').hide()
  $('#signOut').show()
  $('#ratr').show()
  $('#update-rating-section').hide()
  $('#index-rating-section').show()
  $('.nav').show()
}
const signInFailure = () => {
  $('form').trigger('reset')
  $('#message').text('You have not signed in successfully')
}
const changePasswordSuccess = () => {
  $('form').trigger('reset')
  $('#change-password-section').hide()
  $('#ratr').show()
  $('#main-heading').text('The best way to keep track of what you like!')
  $('#message').text('You have successfully changed passwords')
}
const changePasswordFailure = () => {
  $('form').trigger('reset')
  $('#message').text('You did not successfully change your password')
}
const signOutSuccess = () => {
  $('form').trigger('reset')
  $('#sign-in-section').show()
  $('#signOut').hide()
  $('#ratr').hide()
  $('.nav').hide()
  $('#change-password-section').hide()
  $('#message').text('Signed out successfully')
  $('#delete-rating-section').hide()
  $('#index-rating-section').hide()
  $('#main-heading').text('The best way to keep track of what you like!')
}
const signOutFailure = () => {
  $('form').trigger('reset')
  $('#message').text('You did not sign out succcessfully')
}
const createRatingSuccess = () => {
  $('form').trigger('reset')
  $('#message').text('You created a track!')
}
const createRatingFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Failed to create a rating')
}
const indexRatingSuccess = (res) => {
  store.rating = res.ratings
  let ratingsHtml = ''
  res.ratings.forEach(function (rating) {
    ratingsHtml += `
      <h2 class='border-top rounded-pill'>Name: ${rating.name}</h2>
      <h4>ID: ${rating._id}</h4>
      <h4>Category: ${rating.category}</h4>
      <h4>Notes: ${rating.notes}</h4>
      <h4 class='border-bottom rounded-pill'>Rating: ${rating.rating}</h4>
      `
  })
  $('#message').show()
  $('#create-rating-section').hide()
  $('#delete-rating-section').hide()
  $('#update-rating-section').hide()
  $('#main-heading').text('Good Tracks!')
  $('#message').css('font-size', '25')
  $('#message').html(`Your tracks are: ${ratingsHtml}`)
}
const indexRatingFailure = () => {
  $('#message').text('Failed to get ratings')
}
const updateRatingSuccess = (res) => {
  store.rating = res.rating
  JSON.stringify(store.rating)
  const ratingsHtml = `
        <h2>Name: ${store.rating.name}</h2>
        <h6>ID: ${store.rating._id}</h6>
        <p>Category: ${store.rating.category}</p>
        <p>Notes: ${store.rating.notes}</p>
        <p>Rating: ${store.rating.rating}</p>
        `
  $('#message').html(`You have successfully updated: ${ratingsHtml}`)
  $('form').trigger('reset')
}
const updateRatingFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Failed to update')
}
const deleteRatingSuccess = () => {
  $('form').trigger('reset')
  $('#message').text('successfully deleted')
}
const deleteRatingFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Failure')
}
const tryTacoSuccess = (res) => {
  store.taco = res
  const taco = `
  <h1>Name: ${store.taco.base_layer.name}</h1>
  <article style="font-size:20px">Recipe: ${store.taco.base_layer.recipe}</article>
  `
  $('#message').html(taco)
  $('#main-heading').text('Since you clicked on the taco you have to make a taco and then track it in this app!')
  $('#create-rating-section').hide()
  $('#update-rating-section').hide()
  $('#delete-rating-section').hide()
}
const tryTacoFailure = () => {
  $('#message').text('no taco for you')
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
  deleteRatingFailure,
  createRatingFailure,
  tryTacoSuccess,
  tryTacoFailure
}
