// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NxReleaseTestingLib1 } from '@nx-release-testing/nx-release-testing/lib1';
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { NxReleaseTestingLib2 } from '@nx-release-testing/nx-release-testing/lib2';

export function App() {
  return (
    <div>
      <NxWelcome title="nx-release-testing" />
      <NxReleaseTestingLib1 />
      <NxReleaseTestingLib2 />
    </div>
  );
}

export default App;
