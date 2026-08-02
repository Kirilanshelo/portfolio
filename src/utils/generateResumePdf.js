import pdfMake from 'pdfmake/build/pdfmake.js'
import {
  profile,
  contacts,
  aboutLong,
  career,
  education,
  onlineCourses,
  skills,
  languages,
} from '@/data/resume'

// ---------------------------------------------------------------------------
// Fonts: Barlow (same as the website), embedded into the PDF.
// The TTF files live in /public/fonts and are fetched on first generation,
// so they stay out of the initial JS bundle and load only when the CV is built.
// ---------------------------------------------------------------------------
const FONT = {
  regular: 'Barlow-Regular.ttf',
  medium: 'Barlow-Medium.ttf',
  bold: 'Barlow-Bold.ttf',
  extraBold: 'Barlow-ExtraBold.ttf',
  mediumItalic: 'Barlow-MediumItalic.ttf',
  boldItalic: 'Barlow-BoldItalic.ttf',
}

// pdfmake font families. Each maps the four style slots to a weight of Barlow,
// giving us Medium body text, ExtraBold headings (BarlowHeavy) and lighter
// Regular descriptions (BarlowLight).
const FONT_FAMILIES = {
  Barlow: {
    normal: FONT.medium,
    bold: FONT.bold,
    italics: FONT.mediumItalic,
    bolditalics: FONT.boldItalic,
  },
  BarlowHeavy: {
    normal: FONT.extraBold,
    bold: FONT.extraBold,
    italics: FONT.extraBold,
    bolditalics: FONT.extraBold,
  },
  BarlowLight: {
    normal: FONT.regular,
    bold: FONT.bold,
    italics: FONT.regular,
    bolditalics: FONT.boldItalic,
  },
}

let fontsReady = null

function arrayBufferToBase64(buffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  const chunk = 0x8000
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk))
  }
  return btoa(binary)
}

function ensureFonts() {
  if (fontsReady) return fontsReady

  fontsReady = (async () => {
    const base = import.meta.env.BASE_URL || '/'
    const vfs = {}
    const files = [...new Set(Object.values(FONT))]

    await Promise.all(
      files.map(async (file) => {
        const res = await fetch(`${base}fonts/${file}`)
        if (!res.ok) throw new Error(`Impossibile caricare il font ${file} (${res.status})`)
        vfs[file] = arrayBufferToBase64(await res.arrayBuffer())
      })
    )

    pdfMake.addVirtualFileSystem(vfs)
    pdfMake.fonts = FONT_FAMILIES
  })().catch((err) => {
    // Reset so a later click can retry after a transient failure.
    fontsReady = null
    throw err
  })

  return fontsReady
}

// ---------------------------------------------------------------------------
// Layout (awesome-cv inspired): centered header, section titles with a rule,
// two-column entries with the date pushed to the right.
// ---------------------------------------------------------------------------
const ACCENT = '#CE1212'
const DARK = '#000000'
const MUTED = '#555555'
const RULE = '#cfcfcf'

// Inline SVG icons (FontAwesome Free brand/solid paths), filled with the accent
// color so they can sit next to the contact text in the header.
const icon = (viewBox, path) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}"><path fill="${DARK}" d="${path}"/></svg>`

const ICONS = {
  email: icon(
    '0 0 512 512',
    'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'
  ),
  linkedin: icon(
    '0 0 448 512',
    'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
  ),
  github: icon(
    '0 0 496 512',
    'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z'
  ),
  phone: icon(
    '0 0 512 512',
    'M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.1 18.4-30 11.6-46.3l-40-96z'
  ),
  location: icon(
    '0 0 384 512',
    'M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z'
  ),
}

const PAGE_WIDTH = 595.28 // A4 width in pt
const MARGIN = 50
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2

const sentenceCase = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()

const sectionHeader = (label) => ({
  stack: [
    { text: sentenceCase(label), style: 'sectionTitle' },
    {
      canvas: [
        { type: 'line', x1: 0, y1: 0, x2: CONTENT_WIDTH, y2: 0, lineWidth: 0.8, lineColor: RULE },
      ],
      margin: [0, 3, 0, 8],
    },
  ],
  margin: [0, 10, 0, 0],
})

// Two-column entry: main content on the left, date pushed to the right.
const entry = ({ title, subtitle, subtitleLink, period, body }) => {
  const stack = [
    {
      columns: [
        { width: '*', text: title.text, link: title.link, style: 'entryTitle' },
        { width: 'auto', text: period, style: 'entryPeriod' },
      ],
    },
  ]
  if (subtitle) {
    const subtitleNode = { text: subtitle, style: 'entrySubtitle', margin: [0, 1, 0, 0] }
    if (subtitleLink) {
      subtitleNode.link = subtitleLink
    }
    stack.push(subtitleNode)
  }
  if (body) {
    stack.push({ text: body, style: 'body', margin: [0, 3, 0, 0] })
  }
  return { stack, margin: [0, 0, 0, 10] }
}

// awesome-cv style skills/languages row: right-aligned label, values on the right.
const twoColRow = (label, value) => ({
  columns: [
    { width: 110, text: label, style: 'rowLabel', alignment: 'left' },
    { width: '*', text: value, style: 'rowValue', margin: [12, 0, 0, 0] },
  ],
  margin: [0, 0, 0, 6],
})

function buildDocDefinition() {
  const skillNames = (arr) => arr.map((s) => s.name).join(', ')
  const content = []

  // ---- Header ----
  content.push({
    text: [
      { text: `${profile.firstName} `, color: DARK },
      { text: profile.lastName, bold: true, color: DARK },
    ],
    style: 'name',
    alignment: 'center',
  })
  content.push({ text: profile.title, style: 'roleHeader', alignment: 'center' })
  // Phone (optional, from env) and city, under the role. Degrades gracefully
  // if either is missing.
  const infoCols = [{ width: '*', text: '' }]
  if (contacts.phone) {
    infoCols.push(
      { width: 10, svg: ICONS.phone, margin: [0, 1.5, 0, 0] },
      { width: 'auto', text: contacts.phone, style: 'infoLine' }
    )
  }
  if (contacts.phone && contacts.city) {
    infoCols.push({ width: 16, text: '' })
  }
  if (contacts.city) {
    infoCols.push(
      { width: 9, svg: ICONS.location, margin: [0, 1.5, 0, 0] },
      { width: 'auto', text: contacts.city, style: 'infoLine' }
    )
  }
  infoCols.push({ width: '*', text: '' })
  if (infoCols.length > 2) {
    content.push({ columns: infoCols, columnGap: 5, margin: [0, 6, 0, 0] })
  }
  content.push({
    columns: [
      { width: '*', text: '' },
      { width: 11, svg: ICONS.email, margin: [0, 1, 0, 0] },
      { width: 'auto', text: contacts.email, link: `mailto:${contacts.email}`, style: 'contact' },
      { width: 'auto', text: '|', style: 'contactSep' },
      { width: 11, svg: ICONS.linkedin, margin: [0, 1, 0, 0] },
      { width: 'auto', text: contacts.linkedinLabel, link: contacts.linkedin, style: 'contact' },
      { width: 'auto', text: '|', style: 'contactSep' },
      { width: 11, svg: ICONS.github, margin: [0, 1, 0, 0] },
      { width: 'auto', text: contacts.githubLabel, link: contacts.github, style: 'contact' },
      { width: '*', text: '' },
    ],
    columnGap: 5,
    margin: [0, 8, 0, 0],
  })

  // ---- Profile ----
  content.push(sectionHeader('Profile'))
  content.push({ text: aboutLong, style: 'body' })

  // ---- Experience ----
  content.push(sectionHeader('Experience'))
  career.forEach((job) => {
    let body = job.description
    if (job.technologies) body += `\nTechnologies: ${job.technologies}`
    content.push(
      entry({
        title: { text: job.role },
        subtitle: job.company,
        period: job.period,
        body,
      })
    )
  })

  // ---- Skills ----
  content.push(sectionHeader('Skills'))
  content.push(twoColRow('Proficient', skillNames(skills.good)))
  content.push(twoColRow('Familiar with', skillNames(skills.familiar)))
  content.push(twoColRow('For fun', skillNames(skills.freeTime)))

  // ---- Education ----
  content.push(sectionHeader('Education'))
  education.forEach((edu) => {
    content.push(
      entry({
        title: { text: edu.degree },
        subtitle: edu.institution,
        period: edu.period,
        body: edu.link
          ? [
              { text: edu.description },
              { text: 'here', link: edu.link, color: ACCENT, decoration: 'underline' },
              { text: edu.linkText || '' },
            ]
          : edu.description,
      })
    )
  })

  // ---- Online Courses ----
  content.push(sectionHeader('Online Courses'))
  onlineCourses.forEach((course) => {
    content.push(
      entry({
        title: { text: course.title },
        subtitle: 'Udemy',
        subtitleLink: course.link,
        period: course.period,
        body: course.description,
      })
    )
  })

  // ---- Languages ----
  content.push(sectionHeader('Languages'))
  languages.forEach((lang) => {
    content.push(twoColRow(lang.name, lang.proficiency))
  })

  return {
    pageSize: 'A4',
    pageMargins: [MARGIN, 45, MARGIN, 45],
    content,
    defaultStyle: { font: 'Barlow', fontSize: 10, color: DARK, lineHeight: 1.3 },
    styles: {
      name: { fontSize: 30, characterSpacing: 1 },
      roleHeader: { fontSize: 12, color: ACCENT, margin: [0, 4, 0, 0] },
      contact: { fontSize: 9, color: ACCENT },
      contactSep: { fontSize: 9, color: MUTED },
      infoLine: { fontSize: 10, color: DARK },
      sectionTitle: { font: 'BarlowHeavy', fontSize: 13, color: ACCENT, characterSpacing: 0.3 },
      entryTitle: { fontSize: 11, bold: true, color: DARK },
      entrySubtitle: { fontSize: 10, italics: true, color: ACCENT },
      entryPeriod: { fontSize: 9, italics: true, color: MUTED },
      body: { font: 'BarlowLight', fontSize: 11, color: DARK },
      rowLabel: { fontSize: 10, bold: true, color: DARK },
      rowValue: { fontSize: 10, color: DARK },
    },
  }
}

/**
 * Loads the Barlow fonts (once), builds the CV document from the
 * shared resume data, and triggers the browser download.
 */
export async function generateResumePdf() {
  await ensureFonts()
  const fileName = `${profile.firstName}_${profile.lastName}_CV.pdf`
  await pdfMake.createPdf(buildDocDefinition()).download(fileName)
}

export default generateResumePdf
