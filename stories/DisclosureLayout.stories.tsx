import React from 'react';

import DisclosureLayout from '../src/DisclosureLayout';
import DisclosureContent, {
  DisclosureContentProps,
} from '../src/DisclosureContent';
import DisclosureTrigger, {
  DisclosureTriggerProps,
} from '../src/DisclosureTrigger';
import DisclosureStateIndicator from '../src/DisclosureStateIndicator';

export default {
  title: 'DisclosureLayout',
};

export const Default = ({
  triggerProps = {},
  contentProps = {},
}: {
  triggerProps?: DisclosureTriggerProps;
  contentProps?: Omit<DisclosureContentProps, 'children'>;
}) => (
  <DisclosureLayout>
    <DisclosureTrigger {...triggerProps}>Trigger</DisclosureTrigger>
    <DisclosureContent {...contentProps}>Content</DisclosureContent>
  </DisclosureLayout>
);

export const CustomTrigger = () => (
  <DisclosureLayout>
    <DisclosureTrigger show="Show" hide="Hide" />
    <DisclosureContent>Content</DisclosureContent>
  </DisclosureLayout>
);

export const Visible = () => (
  <DisclosureLayout initialVisibility="visible">
    <DisclosureTrigger>Trigger</DisclosureTrigger>
    <DisclosureContent>Content</DisclosureContent>
  </DisclosureLayout>
);

export const StateIndicator = () => (
  <DisclosureLayout>
    <DisclosureTrigger>
      <DisclosureStateIndicator show="+" hide="-" />
      Trigger
    </DisclosureTrigger>
    <DisclosureContent>Content</DisclosureContent>
  </DisclosureLayout>
);
