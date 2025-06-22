import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { Users } from './Users';
import '@testing-library/jest-dom';

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockUsers = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        username: 'johndoe',
        phone: '1234567890',
    },
];

describe('Users Component', () => {


    beforeEach(() => {
        mockedAxios.get.mockReset();
    });

    it('renders loading state initially', () => {
        mockedAxios.get.mockResolvedValueOnce({ data: mockUsers });
        render(<Users />);
        expect(screen.getByText('Loading users...')).toBeInTheDocument();
    })


    it('renders error state', async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));
        render(<Users />);
        await waitFor(() => {
            expect(screen.getByText(`Error: Failed to fetch users.`)).toBeInTheDocument();
        })

    })


    it('renders users seccesfully', async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: mockUsers });
        render(<Users />);
        mockUsers.forEach(async (user) => {
            await waitFor(() => {
                expect(screen.getByText(user.name)).toBeInTheDocument();
                expect(screen.getByText(user.email)).toBeInTheDocument();
                expect(screen.getByText(user.phone)).toBeInTheDocument();
             })
        })
    })
})
