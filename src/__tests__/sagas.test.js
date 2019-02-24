import { call, put } from 'redux-saga/effects';
import { searchPhoto } from '../api';
import { testWorker } from '../sagas';
import { fetchImagesSuccess } from '../redux/actions';

describe('test worker', () => {
  it('handles a successful image fetch', () => {
    const init = testWorker();
    expect(init.next().value).toEqual(call(searchPhoto));
    expect(init.next().value).toEqual(put(fetchImagesSuccess({ status: 200 })));
  });
});
