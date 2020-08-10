import React from 'react';

import DisclosureLayoutGroup from '../src/DisclosureLayoutGroup';
import DisclosureTriggerGroup from '../src/DisclosureTriggerGroup';
import DisclosureLayout from '../src/DisclosureLayout';
import DisclosureContent from '../src/DisclosureContent';
import DisclosureTrigger from '../src/DisclosureTrigger';

export default {
  title: 'DisclosureLayoutGroup',
};

export const Default = () => (
  <DisclosureLayoutGroup>
    <div>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 1</DisclosureTrigger>
        <DisclosureContent>Content 1</DisclosureContent>
      </DisclosureLayout>
    </div>
    <div>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 2</DisclosureTrigger>
        <DisclosureContent>Content 2</DisclosureContent>
      </DisclosureLayout>
    </div>
    <div>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 3</DisclosureTrigger>
        <DisclosureContent>Content 3</DisclosureContent>
      </DisclosureLayout>
    </div>
  </DisclosureLayoutGroup>
);

export const Trigger = () => (
  <DisclosureLayoutGroup>
    <div>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 1</DisclosureTrigger>
        <DisclosureContent>Content 1</DisclosureContent>
      </DisclosureLayout>
    </div>
    <div>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 2</DisclosureTrigger>
        <DisclosureContent>Content 2</DisclosureContent>
      </DisclosureLayout>
    </div>
    <div>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 3</DisclosureTrigger>
        <DisclosureContent>Content 3</DisclosureContent>
      </DisclosureLayout>
    </div>

    <DisclosureTriggerGroup>Trigger Group</DisclosureTriggerGroup>
  </DisclosureLayoutGroup>
);

export const CustomTrigger = () => (
  <DisclosureLayoutGroup>
    <div>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 1</DisclosureTrigger>
        <DisclosureContent>Content 1</DisclosureContent>
      </DisclosureLayout>
    </div>
    <div>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 2</DisclosureTrigger>
        <DisclosureContent>Content 2</DisclosureContent>
      </DisclosureLayout>
    </div>
    <div>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 3</DisclosureTrigger>
        <DisclosureContent>Content 3</DisclosureContent>
      </DisclosureLayout>
    </div>

    <DisclosureTriggerGroup show="Show all" hide="Hide all" />
  </DisclosureLayoutGroup>
);

export const Many = () => (
  <DisclosureLayoutGroup maxVisible="many">
    <div>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 1</DisclosureTrigger>
        <DisclosureContent>Content 1</DisclosureContent>
      </DisclosureLayout>
    </div>
    <div>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 2</DisclosureTrigger>
        <DisclosureContent>Content 2</DisclosureContent>
      </DisclosureLayout>
    </div>
    <div>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 3</DisclosureTrigger>
        <DisclosureContent>Content 3</DisclosureContent>
      </DisclosureLayout>
    </div>

    <DisclosureTriggerGroup>Trigger Group</DisclosureTriggerGroup>
  </DisclosureLayoutGroup>
);