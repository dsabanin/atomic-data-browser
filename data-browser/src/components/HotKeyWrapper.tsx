import * as React from 'react';
import { dataURL, editURL } from '../helpers/navigation';
import { useHotkeys } from 'react-hotkeys-hook';
import { useHistory } from 'react-router-dom';
import { useCurrentSubject } from '../helpers/useCurrentSubject';
import { isValidURL } from '@tomic/lib';
import { useSettings } from '../helpers/AppSettings';
import { paths } from '../routes/paths';

type Props = {
  children: React.ReactNode;
};

/** List of used keyboard shortcuts, mapped for OS */
export const shortcuts = {
  edit: osCtrl('e'),
  data: osCtrl('d'),
  home: osCtrl('h'),
  new: osCtrl('n'),
  userSettings: osCtrl('u'),
  themeSettings: osCtrl('t'),
  keyboardShortcuts: 'shift+/',
  search: '/',
  viewToggle: osCtrl('v'),
  menu: osCtrl('m'),
  /** Locks the sidebar menu */
  sidebarToggle: '\\',
  moveLineUp: osAlt('up'),
  moveLineDown: osAlt('down'),
  deleteLine: osAlt('backspace'),
};

function osCtrl(key: string): string {
  return navigator.platform.includes('Mac') ? `cmd+${key}` : `ctrl+${key}`;
}

function osAlt(key: string): string {
  return navigator.platform.includes('Mac') ? `opt+${key}` : `alt+${key}`;
}

/** App-wide keyboard events handler. */
// Keep changes in sync with ShortcutsRoute.tsx
function HotKeysWrapper({ children }: Props): JSX.Element {
  const history = useHistory();
  const [subject] = useCurrentSubject();
  const { sideBarLocked, setSideBarLocked } = useSettings();

  useHotkeys(
    shortcuts.edit,
    e => {
      e.preventDefault();
      isValidURL(subject) && history.push(editURL(subject));
    },
    {},
    [subject],
  );
  useHotkeys(
    shortcuts.data,
    e => {
      e.preventDefault();
      isValidURL(subject) && history.push(dataURL(subject));
    },
    {},
    [subject],
  );
  useHotkeys(shortcuts.home, e => {
    e.preventDefault();
    history.push('/');
  });
  useHotkeys(shortcuts.new, e => {
    e.preventDefault();
    history.push(paths.new);
  });
  useHotkeys(shortcuts.userSettings, e => {
    e.preventDefault();
    history.push(paths.agentSettings);
  });
  useHotkeys(shortcuts.themeSettings, e => {
    e.preventDefault();
    history.push(paths.themeSettings);
  });
  useHotkeys(shortcuts.keyboardShortcuts, e => {
    e.preventDefault();
    history.push(paths.shortcuts);
  });
  useHotkeys(
    shortcuts.sidebarToggle,
    e => {
      e.preventDefault();
      setSideBarLocked(!sideBarLocked);
    },
    {},
    [sideBarLocked],
  );

  return <>{children}</>;
}

export default HotKeysWrapper;
