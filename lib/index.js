'use babel';

import SubAtom from 'sub-atom';
import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'remotedev-app';
import HtmlTab from './htmlTab';

export default {
  activate() {
    this.subs = new SubAtom;
    return this.subs.add(atom.commands.add('atom-workspace', {
      'devtools:open': function() {
        var root = document.getElementById('remotedev');
        if (!root) {
          this.tab = new HtmlTab("Redux DevTools");
          atom.workspace.getActivePane().activateItem(this.tab);
          root = document.getElementById('remotedev');
          ReactDOM.render(<DevTools />, root);
        }
        else atom.workspace.getActivePane().activateItem(this.tab);
      }
    }));
  },
  activateTab() {
    atom.workspace.getActivePane().activateItem(this.tab);
  },
  deactivate() {
    return this.subs.dispose();
  }
};
