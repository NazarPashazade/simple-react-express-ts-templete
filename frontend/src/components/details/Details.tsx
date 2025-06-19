import { Link, useParams } from "react-router";
import './Details.css';
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../store/thunks";
import { useEffect } from "react";
import type { AppDispatch } from "../../store/store";

export function DetailsPage() {
    const { id } = useParams<{ id?: string }>();

    const dispatch = useDispatch<AppDispatch>();

    const { user, loading, error } = useSelector((state: any) => state.users);

    useEffect(() => {
        if (id) dispatch(getUserById(id));
    }, [dispatch]);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!user) return <div>User not found</div>;

    return (
        <div>
            <h2>Details for {user.name}</h2>
            <ul>
                <li><strong>Name:</strong> {user.name}</li>
                <li><strong>Email:</strong> {user.email}</li>
                <li><strong>Role:</strong> {user.role}</li>
                <li><strong>Status:</strong> {user.status}</li>
            </ul>
            <Link to="/">Back to User List</Link>
        </div>
    );
}