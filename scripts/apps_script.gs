// scripts/apps_script.gs
function onFormSubmit(e) {
  try {
    const named = e.namedValues || {};
    const payload = {
      name: named['Full Name'] ? named['Full Name'][0] : '',
      whatsapp: named['WhatsApp Number'] ? named['WhatsApp Number'][0].replace(/\s/g,'') : '',
      email: named['Email ID'] ? named['Email ID'][0] : '',
      ageGroup: named['Age group'] ? named['Age group'][0] : '',
      institution: named['Institution / Organization (College/School/Company or Self)'] ? named['Institution / Organization (College/School/Company or Self)'][0] : '',
      likely: named['How likely are you to attend the lecture?'] ? named['How likely are you to attend the lecture?'][0] : ''
    };

    const url = 'https://orogenic-meggan-negational.ngrok-free.dev/api/form-submit';
    const options = {
      method: 'post',
      contentType: 'application/json',
      headers: { 'X-API-KEY': 'quantumcats' },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };
    
    const response = UrlFetchApp.fetch(url, options);
    Logger.log('Response: ' + response.getResponseCode() + ' ' + response.getContentText());
  } catch (err) {
    Logger.log('Error: ' + err);
  }
}