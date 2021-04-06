const dateInFinnish = require('./date-in-finnish')

function outputDaysOfTheWeek() {
  for (let i = 1; i <= 7; i++) {
    console.log(dateInFinnish.getForDate({
      date: new Date(2021, 0, i),
      dateFormat: {
        weekday: 'long',
      },
      outputFormat: `[formattedDate]`,
    }))
  }
}

function outputDaysOfTheMonth() {
  for (let i = 1; i <= 31; i++) {
    console.log(dateInFinnish.getForDate({
      date: new Date(2021, 0, i),
      dateFormat: {
        day: 'numeric',
      },
      outputFormat: `[formattedDate]`,
    }))
  }
}

function outputMonths() {
  for (let i = 0; i < 12; i++) {
    console.log(dateInFinnish.getForDate({
      date: new Date(2021, i, 1),
      dateFormat: {
        month: 'long',
      },
      outputFormat: `[formattedDate]`,
    }))
  }
}

function outputCardinalAndOrdinalNumbers() {
  for (let i = 1; i <= 31; i++) {
    console.log(dateInFinnish.getForDate({
      date: new Date(2021, 0, i),
      dateFormat: {},
      outputFormat: `(${i}) [cardinal] → [ordinal]`,
    }))
  }
}

function outputToday() {
  console.log(dateInFinnish.getForToday({
    dateFormat: {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    },
    outputFormat: `Tänään on [formattedDate]
([cardinal] → [ordinal])`,
  }))
}

// outputDaysOfTheWeek()
// outputDaysOfTheMonth()
// outputMonths()
// outputCardinalAndOrdinalNumbers()
// outputToday()
