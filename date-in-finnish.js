/******************************************************************************\
|*  date-in-finnish.js
|*  Version: 0.0.1
|*  Author: George Campbell
|*  License: Apache License 2.0
|*  Repository: https://github.com/glcampbell271/date-in-finnish
\******************************************************************************/

const dateInFinnish = (() => {

  const ns = {}

  ns._locale = 'fi-FI'

  // To convert these from CSV to JS notation:
  //   Find         /^(\d+),([a-zäöå]+?),([a-zäöå]+?)$/
  //   Replace with "    { numeral: $1, cardinal: '$2', ordinal: '$3' },"

  // To convert from JS notation to CSV:
  //   Find         /^    \{ numeral: (\d+), cardinal: '([a-zäöå]+?)', ordinal: '([a-zäöå]+?)' \},$/
  //   Replace with "$1,$2,$3"

  ns._finnishNumbers = [
    { numeral: 1, cardinal: 'yksi', ordinal: 'ensimmäinen' },
    { numeral: 2, cardinal: 'kaksi', ordinal: 'toinen' },
    { numeral: 3, cardinal: 'kolme', ordinal: 'kolmas' },
    { numeral: 4, cardinal: 'neljä', ordinal: 'neljäs' },
    { numeral: 5, cardinal: 'viisi', ordinal: 'viides' },
    { numeral: 6, cardinal: 'kuusi', ordinal: 'kuudes' },
    { numeral: 7, cardinal: 'seitsemän', ordinal: 'seitsemäs' },
    { numeral: 8, cardinal: 'kahdeksan', ordinal: 'kahdeksas' },
    { numeral: 9, cardinal: 'yhdeksän', ordinal: 'yhdeksäs' },
    { numeral: 10, cardinal: 'kymmenen', ordinal: 'kymmenes' },
    { numeral: 11, cardinal: 'yksitoista', ordinal: 'yhdestoista' },
    { numeral: 12, cardinal: 'kaksitoista', ordinal: 'kahdestoista' },
    { numeral: 13, cardinal: 'kolmetoista', ordinal: 'kolmastoista' },
    { numeral: 14, cardinal: 'neljätoista', ordinal: 'neljästoista' },
    { numeral: 15, cardinal: 'viisitoista', ordinal: 'viidestoista' },
    { numeral: 16, cardinal: 'kuusitoista', ordinal: 'kuudestoista' },
    { numeral: 17, cardinal: 'seitsemäntoista', ordinal: 'seitsemästoista' },
    { numeral: 18, cardinal: 'kahdeksantoista', ordinal: 'kahdeksastoista' },
    { numeral: 19, cardinal: 'yhdeksäntoista', ordinal: 'yhdeksästoista' },
    { numeral: 20, cardinal: 'kaksikymmentä', ordinal: 'kahdeskymmenes' },
    { numeral: 21, cardinal: 'kaksikymmentäyksi', ordinal: 'kahdeskymmenesensimmäinen' },
    { numeral: 22, cardinal: 'kaksikymmentäkaksi', ordinal: 'kahdeskymmenestoinen' },
    { numeral: 23, cardinal: 'kaksikymmentäkolme', ordinal: 'kahdeskymmeneskolmas' },
    { numeral: 24, cardinal: 'kaksikymmentäneljä', ordinal: 'kahdeskymmenesneljäs' },
    { numeral: 25, cardinal: 'kaksikymmentäviisi', ordinal: 'kahdeskymmenesviides' },
    { numeral: 26, cardinal: 'kaksikymmentäkuusi', ordinal: 'kahdeskymmeneskuudes' },
    { numeral: 27, cardinal: 'kaksikymmentäseitsemän', ordinal: 'kahdeskymmenesseitsemäs' },
    { numeral: 28, cardinal: 'kaksikymmentäkahdeksan', ordinal: 'kahdeskymmeneskahdeksas' },
    { numeral: 29, cardinal: 'kaksikymmentäyhdeksän', ordinal: 'kahdeskymmenesyhdeksäs' },
    { numeral: 30, cardinal: 'kolmekymmentä', ordinal: 'kolmaskymmenes' },
    { numeral: 31, cardinal: 'kolmekymmentäyksi', ordinal: 'kolmaskymmenesensimmäinen' },
  ]

  ns.getForDate = (options) => {
    const {
      date,
      dateFormat,
      outputFormat,
    } = options

    const formattedDate = date.toLocaleDateString(ns._locale, dateFormat)

    const dayOfTheMonth = date.getDate()
    const finnishNumber = ns._finnishNumbers.find(
      finnishNumber => finnishNumber.numeral === dayOfTheMonth
    )

    const formattedOutput = outputFormat
      .replace(/\[formattedDate\]/g, formattedDate)
      .replace(/\[cardinal\]/g, finnishNumber.cardinal)
      .replace(/\[ordinal\]/g, finnishNumber.ordinal)

    return formattedOutput
  }

  ns.getForToday = (options) => {
    const {
      dateFormat,
      outputFormat,
    } = options

    const date = new Date()

    return ns.getForDate({
      date,
      dateFormat,
      outputFormat,
    })
  }

  return ns

})()

// If running in Node, export dateInFinnish to be used by other scripts.
if (typeof process !== 'undefined' && 'env' in process) {
  module.exports = dateInFinnish
}
