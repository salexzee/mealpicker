
$(document).ready(() => {
  // Set some main variables
  const $pick = $('#pick')
  let query = 'https://api.yelp.com/v2/search/?'

  // On form submission
  $($pick).submit(( e ) => {
    // Prevent the default action
    e.preventDefault();

    // Build querystring
    let newQuery = `${query}term=food`
    newQuery += `&location=${$pick.find('#location')[0].value.split(' ').join('+')}`

    // Some sanity checks
    console.log(query)
    console.log(newQuery)

  }) // On form submission end
}) // Document ready function end
