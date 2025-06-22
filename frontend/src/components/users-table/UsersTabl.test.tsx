import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { UsersTable } from './UsersTable';

jest.mock('react-redux')
jest.mock('react-router')

jest.mock('../../store/thunks', () => ({
    getUsers: jest.fn(),
}));

const mockMiddlewares = [thunk as any]

const mockStore = configureStore(mockMiddlewares)

describe(UsersTable, () => {

    it('renders loading state initially', () => {

        const store = mockStore({ users: { users: [], loading: true, error: null } });

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <UsersTable />
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getByText('Loading users...')).toBeInTheDocument();
    })

})