/* eslint-env node, mocha */

import { expect } from 'chai';
import { fromJS, Map } from 'immutable';

import { reducer } from '../src/reducer';

it('can be used with reduce', () => {
  const actions = [
    { type: 'SET_ENTRIES', entries: ['Trainspotting', '28 Days Later'] },
    { type: 'NEXT' },
    { type: 'VOTE', entry: 'Trainspotting' },
    { type: 'VOTE', entry: '28 Days Later' },
    { type: 'VOTE', entry: 'Trainspotting' },
    { type: 'NEXT' },
  ];

  const finalState = actions.reduce(reducer, Map());

  expect(finalState).to.equal(fromJS({
    winner: 'Trainspotting',
  }));
});
