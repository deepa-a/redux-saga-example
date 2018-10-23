import * as types from './actionTypes';

export function getSubscriber() {
  return { type: types.GET_SUBSCRIBER };
}

export function createSubscriber(subscriber) {
    return { type: types.CREATE_SUBSCRIBER, subscriber }
}

export function updateSubscriber(subscriber) {
    return { type: types.UPDATE_SUBSCRIBER, subscriber }
}

