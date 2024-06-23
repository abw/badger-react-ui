import React from 'react'
import { Theme, IconLibrary, addIcons } from '@/src/index.jsx'

const myLibrary = structuredClone(IconLibrary)
addIcons(
  {
    github: 'path-fill-stroke=none:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z',
    badger2: `<g stroke="none">
      <path d="M315,302C319,307 319,317 313,321C313,316 311,309 308,306C307,303 301,298 295,297C300,294 311,296 315,302ZM483,408C484,413 464,410 464,426C464,434 467,439 463,440C458,441 457,436 456,429C454,415 464,410 474,408C482,405 482,406 483,408ZM318,293L316,292C301,285 283,289 276,302C271,312 274,324 284,333L272,327C252,311 248,283 253,277C257,271 287,267 307,283L318,293ZM297,82C294,84 286,71 274,73C266,74 262,71 267,68C280,57 304,78 297,82ZM126,116C114,108 100,104 85,108C74,111 67,118 63,127L58,128C48,129 38,132 30,134C53,102 82,91 110,91L112,91L113,89C114,80 109,71 95,64C126,57 165,64 185,76L188,77L189,74C190,70 190,59 182,49C221,56 251,69 274,85C317,122 340,169 359,215C380,264 397,311 432,338L434,340L488,389L496,396C490,396 484,398 475,400C447,406 446,418 449,439C451,449 455,454 462,455C437,462 423,467 392,461C354,453 317,442 281,426C263,418 251,408 245,397L252,393C253,393 253,392 253,391C253,390 252,389 251,389C250,389 249,389 249,389C245,391 240,396 230,395C229,395 228,396 228,398C228,399 229,400 230,400L241,398C246,410 257,420 273,428C241,439 213,431 188,417C161,401 137,377 116,360C98,346 82,336 67,338C57,339 48,345 40,357C25,326 44,295 63,275L65,273L62,272C44,260 24,267 10,283C9,270 15,252 24,236C34,219 47,204 61,199C151,182 194,257 239,323C266,361 325,406 438,443C431,424 434,414 439,406C412,393 378,372 356,332C296,223 269,145 182,123C167,119 147,115 126,116ZM126,134C124,144 95,116 89,131C79,159 69,143 71,135C84,96 127,125 126,134Z" fill="#fff"/>
      <path d="M62,132L59,133C46,134 32,138 25,140L19,141L22,136C47,100 78,87 108,86C109,78 102,71 87,65L80,63L87,61C119,51 161,58 185,70C185,64 182,55 174,48L168,42L176,43C209,48 236,57 258,69C260,64 265,59 275,60C300,62 305,74 306,98C338,125 360,163 377,202C392,236 404,271 415,299L430,328L438,337C448,348 468,364 491,385L503,397C507,399 509,402 510,409C510,410 511,411 511,412L512,420C513,432 509,447 491,452C485,454 478,456 472,457C445,468 427,473 391,466C339,456 290,436 279,431C244,445 213,437 185,421C158,405 134,381 113,364C104,357 96,351 89,348C81,344 74,342 67,343C58,344 50,350 41,364L39,367L37,363C19,330 37,296 57,274C40,265 22,274 10,290L7,293L6,289C2,276 8,254 20,233C27,222 36,210 46,203C31,207 16,213 0,222C16,178 38,152 61,136L62,132ZM315,302C311,296 300,294 295,297C301,298 307,303 308,306C311,309 313,316 313,321C319,317 319,307 315,302ZM483,408C482,406 482,405 474,408C464,410 454,415 456,429C457,436 458,441 463,440C467,439 464,434 464,426C464,410 484,413 483,408ZM318,293L307,283C287,267 257,271 253,277C248,283 252,311 272,327L284,333C274,324 271,312 276,302C283,289 301,285 316,292L318,293ZM297,82C304,78 280,57 267,68C262,71 266,74 274,73C286,71 294,84 297,82ZM126,116C147,115 167,119 182,123C269,145 296,223 356,332C378,372 412,393 439,406C434,414 431,424 438,443C325,406 266,361 239,323C194,257 151,182 61,199C47,204 34,219 24,236C15,252 9,270 10,283C24,267 44,260 62,272L65,273L63,275C44,295 25,326 40,357C48,345 57,339 67,338C82,336 98,346 116,360C137,377 161,401 188,417C213,431 241,439 273,428C257,420 246,410 241,398L230,400C229,400 228,399 228,398C228,396 229,395 230,395C240,396 245,391 249,389C249,389 250,389 251,389C252,389 253,390 253,391C253,392 253,393 252,393L245,397C251,408 263,418 281,426L282,427C296,433 343,452 392,461C423,467 437,462 462,455C455,454 451,449 449,439C446,418 447,406 475,400C484,398 490,396 496,396L488,389L434,340L432,338C397,311 380,264 359,215C340,169 317,122 274,85C251,69 221,56 182,49C190,59 190,70 189,74L188,77L185,76C165,64 126,57 95,64C109,71 114,80 113,89L112,91L110,91C82,91 53,102 30,134C41,131 52,129 63,127C67,118 74,111 85,108C100,104 114,108 126,116ZM126,134C127,125 84,96 71,135C69,143 79,159 89,131C95,116 124,144 126,134Z" fill="#000"/>
    </g>`,
    'badger-white': 'path-solid:M315,302C319,307 319,317 313,321C313,316 311,309 308,306C307,303 301,298 295,297C300,294 311,296 315,302ZM483,408C484,413 464,410 464,426C464,434 467,439 463,440C458,441 457,436 456,429C454,415 464,410 474,408C482,405 482,406 483,408ZM318,293L316,292C301,285 283,289 276,302C271,312 274,324 284,333L272,327C252,311 248,283 253,277C257,271 287,267 307,283L318,293ZM297,82C294,84 286,71 274,73C266,74 262,71 267,68C280,57 304,78 297,82ZM126,116C114,108 100,104 85,108C74,111 67,118 63,127L58,128C48,129 38,132 30,134C53,102 82,91 110,91L112,91L113,89C114,80 109,71 95,64C126,57 165,64 185,76L188,77L189,74C190,70 190,59 182,49C221,56 251,69 274,85C317,122 340,169 359,215C380,264 397,311 432,338L434,340L488,389L496,396C490,396 484,398 475,400C447,406 446,418 449,439C451,449 455,454 462,455C437,462 423,467 392,461C354,453 317,442 281,426C263,418 251,408 245,397L252,393C253,393 253,392 253,391C253,390 252,389 251,389C250,389 249,389 249,389C245,391 240,396 230,395C229,395 228,396 228,398C228,399 229,400 230,400L241,398C246,410 257,420 273,428C241,439 213,431 188,417C161,401 137,377 116,360C98,346 82,336 67,338C57,339 48,345 40,357C25,326 44,295 63,275L65,273L62,272C44,260 24,267 10,283C9,270 15,252 24,236C34,219 47,204 61,199C151,182 194,257 239,323C266,361 325,406 438,443C431,424 434,414 439,406C412,393 378,372 356,332C296,223 269,145 182,123C167,119 147,115 126,116ZM126,134C124,144 95,116 89,131C79,159 69,143 71,135C84,96 127,125 126,134Z',
    'badger-black': 'path-solid:M62,132L59,133C46,134 32,138 25,140L19,141L22,136C47,100 78,87 108,86C109,78 102,71 87,65L80,63L87,61C119,51 161,58 185,70C185,64 182,55 174,48L168,42L176,43C209,48 236,57 258,69C260,64 265,59 275,60C300,62 305,74 306,98C338,125 360,163 377,202C392,236 404,271 415,299L430,328L438,337C448,348 468,364 491,385L503,397C507,399 509,402 510,409C510,410 511,411 511,412L512,420C513,432 509,447 491,452C485,454 478,456 472,457C445,468 427,473 391,466C339,456 290,436 279,431C244,445 213,437 185,421C158,405 134,381 113,364C104,357 96,351 89,348C81,344 74,342 67,343C58,344 50,350 41,364L39,367L37,363C19,330 37,296 57,274C40,265 22,274 10,290L7,293L6,289C2,276 8,254 20,233C27,222 36,210 46,203C31,207 16,213 0,222C16,178 38,152 61,136L62,132ZM315,302C311,296 300,294 295,297C301,298 307,303 308,306C311,309 313,316 313,321C319,317 319,307 315,302ZM483,408C482,406 482,405 474,408C464,410 454,415 456,429C457,436 458,441 463,440C467,439 464,434 464,426C464,410 484,413 483,408ZM318,293L307,283C287,267 257,271 253,277C248,283 252,311 272,327L284,333C274,324 271,312 276,302C283,289 301,285 316,292L318,293ZM297,82C304,78 280,57 267,68C262,71 266,74 274,73C286,71 294,84 297,82ZM126,116C147,115 167,119 182,123C269,145 296,223 356,332C378,372 412,393 439,406C434,414 431,424 438,443C325,406 266,361 239,323C194,257 151,182 61,199C47,204 34,219 24,236C15,252 9,270 10,283C24,267 44,260 62,272L65,273L63,275C44,295 25,326 40,357C48,345 57,339 67,338C82,336 98,346 116,360C137,377 161,401 188,417C213,431 241,439 273,428C257,420 246,410 241,398L230,400C229,400 228,399 228,398C228,396 229,395 230,395C240,396 245,391 249,389C249,389 250,389 251,389C252,389 253,390 253,391C253,392 253,393 252,393L245,397C251,408 263,418 281,426L282,427C296,433 343,452 392,461C423,467 437,462 462,455C455,454 451,449 449,439C446,418 447,406 475,400C484,398 490,396 496,396L488,389L434,340L432,338C397,311 380,264 359,215C340,169 317,122 274,85C251,69 221,56 182,49C190,59 190,70 189,74L188,77L185,76C165,64 126,57 95,64C109,71 114,80 113,89L112,91L110,91C82,91 53,102 30,134C41,131 52,129 63,127C67,118 74,111 85,108C100,104 114,108 126,116ZM126,134C127,125 84,96 71,135C69,143 79,159 89,131C95,116 124,144 126,134Z'
  },
  myLibrary
)

const themeOptions = {
  Icon: {
    library: myLibrary
  }
}

const SiteTheme = ({ children }) =>
  <Theme.Provider {...themeOptions}>
    {children}
  </Theme.Provider>

export default SiteTheme