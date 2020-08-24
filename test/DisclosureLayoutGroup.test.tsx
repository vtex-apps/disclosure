import * as React from 'react';
import { render, waitFor } from '@testing-library/react';

import {
  Default,
  Trigger,
  CustomTrigger,
  Many,
} from '../stories/DisclosureLayoutGroup.stories';

test('it should have only one content visible at a time', async () => {
  const { getByText } = render(<Default />);

  const content1 = getByText('Content 1');
  const content2 = getByText('Content 2');
  const content3 = getByText('Content 3');

  getByText('Trigger 1').click();
  expect(content1).toBeVisible();
  expect(content2).not.toBeVisible();
  expect(content3).not.toBeVisible();

  getByText('Trigger 2').click();
  await waitFor(() => expect(content1).not.toBeVisible());
  expect(content2).toBeVisible();
  expect(content3).not.toBeVisible();

  getByText('Trigger 3').click();
  await waitFor(() => expect(content1).not.toBeVisible());
  expect(content2).not.toBeVisible();
  expect(content3).toBeVisible();

  getByText('Trigger 3').click();
  expect(content1).not.toBeVisible();
  expect(content2).not.toBeVisible();
  expect(content3).not.toBeVisible();
});

test('it could have many visible content at a time', async () => {
  const { getByText } = render(<Many />);

  const content1 = getByText('Content 1');
  const content2 = getByText('Content 2');
  const content3 = getByText('Content 3');

  getByText('Trigger 1').click();
  expect(content1).toBeVisible();
  expect(content2).not.toBeVisible();
  expect(content3).not.toBeVisible();

  getByText('Trigger 2').click();

  expect(content1).toBeVisible();
  await waitFor(() => expect(content2).toBeVisible());
  expect(content3).not.toBeVisible();

  getByText('Trigger 3').click();
  expect(content1).toBeVisible();
  expect(content2).toBeVisible();
  await waitFor(() => expect(content3).toBeVisible());
});

test('trigger group', async () => {
  const { getByText } = render(<Trigger />);

  const content1 = getByText('Content 1');
  const content1Id = content1.id;
  const content2 = getByText('Content 2');
  const content2Id = content2.id;
  const content3 = getByText('Content 3');
  const content3Id = content3.id;
  const triggerGroup = getByText('Trigger Group');

  expect(content1).not.toBeVisible();
  expect(content2).not.toBeVisible();
  expect(content3).not.toBeVisible();

  expect(triggerGroup).toHaveAttribute('aria-expanded', 'false');
  expect(triggerGroup).toHaveAttribute(
    'aria-controls',
    [content1Id, content2Id, content3Id].join(' ')
  );

  triggerGroup.click();
  await waitFor(() =>
    expect(triggerGroup).toHaveAttribute('aria-expanded', 'true')
  );
  expect(content1).toBeVisible();
  expect(content2).toBeVisible();
  expect(content3).toBeVisible();

  triggerGroup.click();
  expect(content1).not.toBeVisible();
  expect(content2).not.toBeVisible();
  expect(content3).not.toBeVisible();
  await waitFor(() =>
    expect(triggerGroup).toHaveAttribute('aria-expanded', 'false')
  );
});

test('trigger to open all group then close just one content', async () => {
  const { getByText } = render(<Trigger />);

  const content1 = getByText('Content 1');
  const content2 = getByText('Content 2');
  const content3 = getByText('Content 3');
  const triggerGroup = getByText('Trigger Group');

  expect(content1).not.toBeVisible();
  expect(content2).not.toBeVisible();
  expect(content3).not.toBeVisible();

  triggerGroup.click();
  expect(content1).toBeVisible();
  expect(content2).toBeVisible();
  expect(content3).toBeVisible();

  getByText('Trigger 3').click();
  expect(content3).not.toBeVisible();
  expect(content1).toBeVisible();
  expect(content2).toBeVisible();
});

test('trigger group with many', async () => {
  const { getByText } = render(<Many />);

  const content1 = getByText('Content 1');
  const content2 = getByText('Content 2');
  const content3 = getByText('Content 3');

  expect(content1).not.toBeVisible();
  expect(content2).not.toBeVisible();
  expect(content3).not.toBeVisible();

  getByText('Trigger Group').click();
  expect(content1).toBeVisible();
  expect(content2).toBeVisible();
  expect(content3).toBeVisible();

  getByText('Trigger 1').click();
  await waitFor(() => expect(content1).not.toBeVisible());
  expect(content2).toBeVisible();
  expect(content3).toBeVisible();

  getByText('Trigger 2').click();
  expect(content1).not.toBeVisible();
  await waitFor(() => expect(content2).not.toBeVisible());
  expect(content3).toBeVisible();
});

test('trigger group and open just one', async () => {
  const { getByText } = render(<Trigger />);

  const content1 = getByText('Content 1');
  const content2 = getByText('Content 2');
  const content3 = getByText('Content 3');
  const triggerGroup = getByText('Trigger Group');

  triggerGroup.click();
  expect(content1).toBeVisible();
  expect(content2).toBeVisible();
  expect(content3).toBeVisible();
  triggerGroup.click();
  expect(content1).not.toBeVisible();
  expect(content2).not.toBeVisible();
  expect(content3).not.toBeVisible();

  getByText('Trigger 2').click();

  await waitFor(() => expect(content1).not.toBeVisible());
  expect(content2).toBeVisible();
  expect(content3).not.toBeVisible();
});

test('trigger with show and hide', async () => {
  const { getByText } = render(<CustomTrigger />);

  const content1 = getByText('Content 1');
  const content2 = getByText('Content 2');
  const content3 = getByText('Content 3');

  getByText('Show all').click();
  await waitFor(() => expect(content1).toBeVisible());
  expect(content2).toBeVisible();
  expect(content3).toBeVisible();

  getByText('Hide all').click();
  expect(content1).not.toBeVisible();
  expect(content2).not.toBeVisible();
  expect(content3).not.toBeVisible();
});

test('should render hide and show props of state indicator', async () => {
  const { getByText } = render(
    <Trigger
      triggerProps={{ as: 'section', htmlProps: { className: 'foobar' } }}
    />
  );

  const trigger = getByText('Trigger Group');
  expect(trigger).toHaveClass('foobar');
  expect(trigger.tagName).toBe('SECTION');
});
