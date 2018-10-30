import { call, put } from 'redux-saga/effects';
import { fetchUsers,
  fetchUserRoles } from './getUserRolesSaga';
import * as types from '../actions/actionTypes';

describe('Testing User Roles Saga', () => {
  it('can fetch user roles successfully', () => {
    const response = { rights: ['MOCCA_ADMIN'], roles: ['MOCCA_ADMIN_ROLE'], groups: ['mocca_admin'] };
    const generator = fetchUserRoles();

    expect(generator.next().value).toEqual(put({ type: types.GET_USER_ROLES }));
    expect(generator.next().value).toEqual(call(fetchUsers));
    expect(generator.next(response).value).toEqual(put({ type: types.USER_ROLES_RECEIVED, data: response }));
  });
  it('can handle exception', () => {
    const generator = fetchUserRoles();
    expect(generator.next().value).toEqual(put({ type: types.GET_USER_ROLES }));
    expect(generator.next().value).toEqual(call(fetchUsers));
    expect(generator.throw('error').value).toEqual(put({ type: types.USER_ROLES_REQUEST_FAILED, error: 'error' }));
  });
});
