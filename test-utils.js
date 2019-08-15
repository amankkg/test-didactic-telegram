import { render, queries } from '@testing-library/react'

export * from '@testing-library/react'

const customRender = (ui, options) => render(ui, {...options, queries: {...queries}}) // TODO: render customizations

export { customRender as render }