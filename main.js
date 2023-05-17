const frChDateTimeFormat = Intl.DateTimeFormat('fr-CH');

const currentdatetimefrch = document.querySelector('#currentdatetimefrch');
currentdatetimefrch.innerText = frChDateTimeFormat.format(new Date());
