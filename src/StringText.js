const arrayOfTexts = [
  "Hold avstand for å begrense smitte. Ved å øke avstanden mellom mennesker forsinkes utbruddet av covid-19. Sykdommen smitter hovedsakelig via dråpe- og kontaktsmitte. Jo mer sannsynlig det er at du er smittsom, jo større avstand må du holde til andre.",
  "Råd til de som skal være i karantene. De som skal i karantene er i utgangspunktet friske, men har vært i en situasjon der de kan ha blitt smittet. Dette gjelder nærkontakter til personer med covid-19 og personer som har vært på reise i et område med mye smitte. Disse skal være i karantene i 10 døgn for å hindre at de smitter andre før de selv får symptomer.",
  "Personer i karantene skal som hovedregel ikke benytte offentlig transport, og aldri hvis de har symptomer på covid-19. Personer i innreisekarantene kan likevel, hvis strengt nødvendig, bruke offentlig transport for å komme seg til egnet karantenested i eller utenfor Norge.",
  "Dersom du har sannsynlig eller påvist covid-19, må du isoleres, enten hjemme, i helseinstitusjon eller et annet sted. Hjemmeisolering er for deg som har sannsynlig eller påvist covid-19, men som ikke trenger å ligge på sykehus.",
  "Hovedregelen er at du som venter på prøvesvar skal holde deg hjemme til du har fått svar. Du skal ikke gå på jobb eller skole, du skal ikke ta offentlig transport eller oppsøke offentlige steder, og du skal holde god avstand til alle andre enn dine nærmeste. Dine husstandsmedlemmer behøver ikke å være i karantene, heller ikke husstandsmedlemmer som jobber i helsetjenesten."
]

function choose(choices) {
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function chooseNew(choices, excludedItem) {
  const newChoices = choices.filter(item => item != excludedItem)
  let index = Math.floor(Math.random() * newChoices.length);
  return newChoices[index];
}

export {arrayOfTexts, choose, chooseNew};