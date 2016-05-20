
$(document).ready(() => {
  // Set some main variables
  const $pick = $('#pick')



  // On form submission
  $($pick).submit(( e ) => {
    // Prevent the default action
    e.preventDefault();

    // Setup variables
    let cityVal = $pick.find('#location')[0].value.split(' ').join('+')

    // Error handling here
    if (optionVal === 'Category' || !cityVal) {
      console.log('make another choice')
      return
    }

    // Build querystring
    let query = `term=${optionVal}`


    // Create an AJAX call
    $.ajax({
      url: `/${query}`,
      method: 'Ge'
    })

  }) // On form submission end
}) // Document ready function end
