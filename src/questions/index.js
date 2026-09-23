import { chapter5Medium } from './chapter5Medium'
import { chapter5Hard } from './chapter5Hard'
import { jlptN4 } from './jlptN4'

export const questionBanks = {
  medium: chapter5Medium,
  hard: chapter5Hard,
  jlpt: jlptN4,
}

export const levelMeta = {
  medium: {
    label: 'Medium',
    scope: 'Irodori A1 Bab 5',
    note: 'Arti, pembuatan kalimat, bunpou, dan kanji yang muncul pada Bab 5.',
  },
  hard: {
    label: 'Hard',
    scope: 'Irodori A1 Bab 5 + kanji Irodori',
    note: 'Bunpou tetap berpusat pada Bab 5; kanji boleh mengambil dari bab Irodori lain.',
  },
  jlpt: {
    label: 'JLPT N4',
    scope: 'JLPT N4 + Irodori lintas bab',
    note: 'Kanji dibatasi level N4; bunpou boleh mengambil materi Irodori dari bab lain.',
  },
}

export const allQuestions = Object.values(questionBanks).flat()
