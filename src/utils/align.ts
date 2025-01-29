export type Alignment = 'left' | 'right' | 'center' | 'centre'
export type AlignmentClasses = Record<Alignment, string>

export const alignClasses: AlignmentClasses = {
  left:    'text-left',
  right:   'text-right',
  center:  'text-center',
  centre:  'text-center',
}