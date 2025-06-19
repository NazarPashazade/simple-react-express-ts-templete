import { Request, Response, Router } from "express";

export const mainRouter = Router();

mainRouter.get(`/`, (_req: Request, res: Response) => {
  try {
    res.json(`Hello World!`);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

const mockData = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 3, name: 'Carol Lee', email: 'carol@example.com', role: 'Editor', status: 'Active' },
  { id: 4, name: 'David Kim', email: 'david@example.com', role: 'User', status: 'Pending' },
  { id: 5, name: 'Eva Green', email: 'eva@example.com', role: 'Admin', status: 'Active' },
];

mainRouter.get(`/api/users`, (_req: Request, res: Response) => {
  try {
    res.json(mockData);
  } catch (err) {
    res.status(500)
    res.json({ error: err });
  }
});

mainRouter.get(`/api/users:id`, (_req: Request, res: Response) => {
  try {
    res.json(mockData.find(user => user.id === parseInt(_req.params.id)));
  } catch (err) {
    res.status(500)
    res.json({ error: err });
  }
});
