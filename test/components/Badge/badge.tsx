import React from 'react'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Badge, BadgePrefixType, BadgeSuffixType } from '@/src/index'

test(
  'should render badge',
  async () => {
    const { container } = render(
      <Badge text="Hello World" id="badge1"/>
    )
    const badge1 = container.querySelector('#badge1')
    expect(badge1).toHaveClass('badge')
    expect(badge1).toHaveTextContent('Hello World')
  }
)

test(
  'should add color class',
  async () => {
    const { container } = render(
      <Badge
        text="Hello World"
        color="blue"
        id="badge1"
      />
    )
    const badge1 = container.querySelector('#badge1')
    expect(badge1).toHaveTextContent('Hello World')
    expect(badge1).toHaveClass('blue')
    expect(badge1).toHaveClass('badge')
  }
)

test(
  'should add size class',
  async () => {
    const { container } = render(
      <Badge
        text="Hello World"
        size="large"
        id="badge1"
      />
    )
    const badge1 = container.querySelector('#badge1')
    expect(badge1).toHaveTextContent('Hello World')
    expect(badge1).toHaveClass('large')
    expect(badge1).toHaveClass('badge')
  }
)

test(
  'should add prefix',
  async () => {
    const { container } = render(
      <Badge
        text="Hello World"
        size="large"
        id="badge1"
        prefix="Before"
      />
    )
    const badge1 = container.querySelector('#badge1')
    expect(badge1).toHaveTextContent('Hello World')
    expect(badge1).toHaveClass('large')
    expect(badge1).toHaveClass('badge')
    const prefix = badge1.querySelector('.prefix')
    expect(prefix).toHaveTextContent('Before')
  }
)

test(
  'should add suffix',
  async () => {
    const { container } = render(
      <Badge
        text="Hello World"
        size="large"
        id="badge1"
        suffix="After"
      />
    )
    const badge1 = container.querySelector('#badge1')
    expect(badge1).toHaveTextContent('Hello World')
    expect(badge1).toHaveClass('large')
    expect(badge1).toHaveClass('badge')
    const suffix = badge1.querySelector('.suffix')
    expect(suffix).toHaveTextContent('After')
  }
)

test(
  'prefix and suffix class',
  async () => {
    const { container } = render(
      <Badge
        text="Hello World"
        size="large"
        id="badge1"
        prefix="Before"
        suffix="After"
        prefixClass="ahead"
        suffixClass="behind"
      />
    )
    const badge1 = container.querySelector('#badge1')
    expect(badge1).toHaveTextContent('Hello World')
    expect(badge1).toHaveClass('large')
    expect(badge1).toHaveClass('badge')
    const prefix = badge1.querySelector('.ahead')
    expect(prefix).toHaveTextContent('Before')
    const suffix = badge1.querySelector('.behind')
    expect(suffix).toHaveTextContent('After')
  }
)

test(
  'prefix and suffix components',
  async () => {
    const MyPrefix: BadgePrefixType = ({
      prefix,
      prefixClass='prefix'
    }) =>
      <span className={prefixClass}>PREFIX: {prefix}</span>

    const MySuffix: BadgeSuffixType = ({
      suffix,
      suffixClass='prefix'
    }) =>
      <span className={suffixClass}>SUFFIX: {suffix}</span>

    const { container } = render(
      <Badge
        text="Hello World"
        size="large"
        id="badge1"
        prefix="Before"
        suffix="After"
        prefixClass="ahead"
        suffixClass="behind"
        Prefix={MyPrefix}
        Suffix={MySuffix}
      />
    )
    const badge1 = container.querySelector('#badge1')
    expect(badge1).toHaveTextContent('Hello World')
    expect(badge1).toHaveClass('large')
    expect(badge1).toHaveClass('badge')
    const prefix = badge1.querySelector('span.ahead')
    expect(prefix).toHaveTextContent('PREFIX: Before')
    const suffix = badge1.querySelector('span.behind')
    expect(suffix).toHaveTextContent('SUFFIX: After')
  }
)
