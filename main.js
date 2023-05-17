const frChDateTimeFormat = Intl.DateTimeFormat('fr-CH', {
    dateStyle: 'medium',
    timeStyle: 'short'
});

const currentdatetimefrch = document.querySelector('#currentdatetimefrch');
currentdatetimefrch.innerText = frChDateTimeFormat.format(new Date());

const supportedlocales = document.querySelector('#supportedlocales');
supportedlocales.innerText = Intl.DateTimeFormat.supportedLocalesOf(['fr-CH', 'en-US', 'fr-ES']).join(', ');
