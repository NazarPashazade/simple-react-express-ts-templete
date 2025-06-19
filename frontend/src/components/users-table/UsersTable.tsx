import {
    Button,
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { getUsers, type User } from '../../store/thunks';

export const UsersTable = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { users, loading, error } = useSelector((state: any) => state.users);

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;

    if (loading) {
        return <Skeleton variant="circular" width={40} height={40} />
    }

    return (
        <TableContainer>
            <Table aria-label="user table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row: User, index: number) => (
                        <TableRow
                            key={index}
                            onClick={() => console.log(`User ${index + 1} clicked`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <TableCell>  <Link to={`/users/${row.id}`}>{row.name}</Link>  </TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.role}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>
                                {/* <Button onClick={() => setRows((prevRows => prevRows.filter(r => r.id !== row.id)))}>Delete</Button> */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
