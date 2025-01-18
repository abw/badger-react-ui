import { test, expect } from 'vitest'
import { iconProps, iconNameOrProps } from '@/src/index'

test(
  'iconProps() should return icon name',
  () => expect(
    iconProps({ icon: 'foo' })
  ).toStrictEqual(
    { name: 'foo' }
  )
)

test(
  'iconProps() should add class',
  () => expect(
    iconProps(
      {
        icon: 'foo',
        iconClass: 'left'
      }
    )
  ).toStrictEqual(
    {
      name: 'foo',
      className: 'left'
    }
  )
)

test(
  'iconProps() should add rotate style',
  () => expect(
    iconProps(
      {
        icon: 'foo',
        iconClass: 'left',
        iconRotate: 90
      }
    )
  ).toStrictEqual(
    {
      name: 'foo',
      className: 'left',
      style: {
        '--icon-rotate': '90deg'
      }
    }
  )
)

test(
  'iconProps() with object should add class',
  () => expect(
    iconProps(
      {
        icon: { name: 'foo', size: 'large', color: 'red', className: 'bold' },
        iconClass: 'on-left'
      }
    )
  ).toStrictEqual(
    {
      name: 'foo',
      size: 'large',
      color: 'red',
      className: 'bold on-left'
    }
  )
)

test(
  'iconProps() should return icon name',
  () => expect(
    iconProps(
      { icon: 'foo' }
    )
  ).toStrictEqual(
    { name: 'foo' }
  )
)

test(
  'iconProps() should add class',
  () => expect(
    iconProps(
      {
        icon: 'foo',
        iconClass: 'left'
      }
    )
  ).toStrictEqual(
    {
      name: 'foo',
      className: 'left'
    }
  )
)

test(
  'iconProps() with side',
  () => expect(
    iconProps(
      { iconLeft: 'foo' },
      { side: 'Left' }
    )
  ).toStrictEqual(
    {
      name: 'foo',
      className: 'on-left'
    }
  )
)

test(
  'iconProps() with side should add options',
  () => expect(
    iconProps(
      {
        iconLeft: 'foo',
        iconLeftClass: 'round',
        iconLeftRotate: 90
      },
      { side: 'Left' }
    )
  ).toStrictEqual(
    {
      name: 'foo',
      className: 'round on-left',
      style: {
        '--icon-rotate': '90deg'
      }
    }
  )
)

test(
  'iconProps() with side should add extra class',
  () => expect(
    iconProps(
      {
        iconLeft: 'foo',
        iconLeftClass: 'round',
        iconLeftRotate: 90
      },
      { side: 'Left' }
    )
  ).toStrictEqual(
    {
      name: 'foo',
      className: 'round on-left',
      style: {
        '--icon-rotate': '90deg'
      }
    }
  )
)

test(
  'iconProps() merging style',
  () => expect(
    iconProps(
      {
        iconLeft: {
          name: 'foo',
          className: 'round',
          style: {
            border: '1px solid red'
          }
        },
        iconLeftRotate: 90
      },
      { side: 'Left' }
    )
  ).toStrictEqual(
    {
      name: 'foo',
      className: 'round on-left',
      style: {
        border: '1px solid red',
        '--icon-rotate': '90deg'
      }
    }
  )
)

test(
  'iconNameOrProps("foo")',
  () => expect(
    iconNameOrProps('foo')
  ).toStrictEqual({ name: 'foo' })
)

test(
  'iconNameOrProps({ name: "bar" })',
  () => expect(
    iconNameOrProps({ name: 'bar' })
  ).toStrictEqual({ name: 'bar' })
)