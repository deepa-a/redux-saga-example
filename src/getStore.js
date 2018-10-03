import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from 'reducers/reducers';

const logger = createLogger({
    collapsed: true
});

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'development') {
        return applyMiddleware(thunk, logger)
    } else {
        return applyMiddleware(thunk)
    }
};

export default function configureStore(initialState) {
    return createStore(
        reducer,
        initialState,
        getMiddleware()
    );
}