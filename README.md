# Disclosure

```
yarn add @vtex/disclosure
```

## Usage

Rendering one disclosure:

```jsx
<DisclosureLayout>
  <DisclosureTrigger>Trigger</DisclosureTrigger>
  <DisclosureContent>Content</DisclosureContent>
</DisclosureLayout>
```

Rendering multiple disclosures:

```jsx
<DisclosureLayoutGroup>
  <DisclosureLayout>
    <DisclosureTrigger>Trigger 1</DisclosureTrigger>
    <DisclosureContent>Content 1</DisclosureContent>
  </DisclosureLayout>
  <DisclosureLayout>
    <DisclosureTrigger>Trigger 2</DisclosureTrigger>
    <DisclosureContent>Content 2</DisclosureContent>
  </DisclosureLayout>
  <DisclosureLayout>
    <DisclosureTrigger>Trigger 3</DisclosureTrigger>
    <DisclosureContent>Content 3</DisclosureContent>
  </DisclosureLayout>

  <DisclosureTriggerGroup>Trigger Group</DisclosureTriggerGroup>
</DisclosureLayoutGroup>
```

Run the project's Storybook for a full list of examples with `yarn storybook`.

## API

### DisclosureTrigger

Prop Name | Type | Description | Default value
---|---|---|---
show | ReactNode | This prop will be rendered when prompt to show the content | `undefined`
hide | ReactNode | This prop will be rendered when prompt to hide the content | `undefined`
as | any | Use this to render a different HTML tag | `button`
htmlProps | HTMLProps | Use this to pass any props to the HTML element | `undefined`
children | ReactNode | This prop will be rendered if no `show` or `hide` is set | `undefined`

### DisclosureContent

Prop Name | Type | Description | Default value
---|---|---|---
as | any | Use this to render a different HTML tag | `button`
htmlProps | HTMLProps | Use this to pass any props to the wrapping HTML element | `undefined`
children | ReactNode | This prop is the content of the disclosure | `undefined`

### DisclosureLayout

Prop Name | Type | Description | Default value
---|---|---|---
initialVisibility | `enum` | `visible` to have it's content initially open, or `hidden` to be hidden. | `hidden`
animated | `boolean` or `number` | To perform animations, you must set this to `true`. It'll enable additional data-* attributes on it's content which you can use as selectors in CSS. It will also ensure that the element will only get hidden when the transition has ended. | `false`

### DisclosureLayoutGroup

Prop Name | Type | Description | Default value
---|---|---|---
maxVisible | `enum` | Possible values `one` it will render only one `DisclosureLayout` content per group, or `many` multiple `DisclosureLayout`'s content can be rendered. | `one`

### DisclosureTriggerGroup

Prop Name | Type | Description | Default value
---|---|---|---
show | ReactNode | This prop will be rendered when prompt to show the content | `undefined`
hide | ReactNode | This prop will be rendered when prompt to hide the content | `undefined`
as | any | Use this to render a different HTML tag | `button`
htmlProps | HTMLProps | Use this to pass any props to the HTML element | `undefined`
children | ReactNode | This prop will be rendered if no `show` or `hide` is set | `undefined`

### DisclosureStateIndicator

Prop Name | Type | Description | Default value
---|---|---|---
show | ReactNode | This prop will be rendered when prompt to show the content | `undefined`
hide | ReactNode | This prop will be rendered when prompt to hide the content | `undefined`