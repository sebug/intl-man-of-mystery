const frChDateTimeFormat = Intl.DateTimeFormat('fr-CH', {
    dateStyle: 'full',
    timeStyle: 'full'
});

const currentdatetimefrch = document.querySelector('#currentdatetimefrch');
currentdatetimefrch.innerText = frChDateTimeFormat.format(new Date());
