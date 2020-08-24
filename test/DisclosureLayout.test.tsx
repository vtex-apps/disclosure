import * as React from 'react';
import { render, waitFor } from '@testing-library/react';

import {
  Default,
  CustomTrigger,
  Visible,
  StateIndicator,
} from '../stories/DisclosureLayout.stories';

test('should change content visibility', async () => {
  const { getByText } = render(<Default />);

  const content = getByText('Content');
  expect(content).not.toBeVisible();

  getByText('Trigger').click();
  expect(content).toBeVisible();

  getByText('Trigger').click();
  await waitFor(() => expect(content).not.toBeVisible());
});

test('should render hide and show props', async () => {
  const { getByText } = render(<CustomTrigger />);

  const content = getByText('Content');
  expect(content).not.toBeVisible();

  getByText('Show').click();
  expect(content).toBeVisible();

  getByText('Hide').click();
  await waitFor(() => expect(content).not.toBeVisible());
});

test('should show if initialVisibility is visible', async () => {
  const { getByText } = render(<Visible />);

  const content = getByText('Content');
  expect(content).toBeVisible();

  getByText('Trigger').click();
  expect(content).not.toBeVisible();
});

test('should render hide and show props of state indicator', async () => {
  const { getByText } = render(<StateIndicator />);

  const content = getByText('Content');
  expect(content).not.toBeVisible();

  getByText('+', { exact: false }).click();
  expect(content).toBeVisible();

  getByText('-', { exact: false }).click();
  await waitFor(() => expect(content).not.toBeVisible());
});

test('should render hide and show props of state indicator', async () => {
  const { getByText } = render(
    <Default
      contentProps={{ as: 'header', htmlProps: { className: 'barfoo' } }}
      triggerProps={{ as: 'section', htmlProps: { className: 'foobar' } }}
    />
  );

  const content = getByText('Content');
  expect(content).toHaveClass('barfoo');
  expect(content.tagName).toBe('HEADER');

  const trigger = getByText('Trigger');
  expect(trigger).toHaveClass('foobar');
  expect(trigger.tagName).toBe('SECTION');
});
