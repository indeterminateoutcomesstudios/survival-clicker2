import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import head from 'lodash/head';
import last from 'lodash/last';
import startCase from 'lodash/startCase';
import split from 'lodash/split';
import pickBy from 'lodash/pickBy';

function take<Result>(callback: () => Result): Result | undefined {
  try {
    return callback();
  } catch {
    return undefined;
  }
}

export {
  take,
  get,
  isEmpty,
  head,
  last,
  startCase,
  split,
  pickBy,
};
