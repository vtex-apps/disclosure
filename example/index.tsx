import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  DisclosureLayoutGroup,
  DisclosureTriggerGroup,
  DisclosureLayout,
  DisclosureContent,
  DisclosureTrigger,
} from '../.';

const App = () => {
  return (
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
};

ReactDOM.render(<App />, document.getElementById('root'));
