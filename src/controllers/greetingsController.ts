import { Request, Response } from 'express';
import Greeting from '../models/greeting';

export const getAllGreetings = async (req: Request, res: Response) => {
  try {
    const greetings = await Greeting.findAll();
    res.status(200).json(greetings);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getGreetingById = async (req: Request, res: Response) => {
  try {
    const greeting = await Greeting.findByPk(req.params.id);
    if (greeting) {
      res.status(200).json(greeting);
    } else {
      res.status(404).json({ error: 'Greeting not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createGreeting = async (req: Request, res: Response) => {
  try {
    const newGreeting = await Greeting.create(req.body);
    res.status(201).json(newGreeting);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateGreeting = async (req: Request, res: Response) => {
  try {
    const [updated] = await Greeting.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedGreeting = await Greeting.findByPk(req.params.id);
      res.status(200).json(updatedGreeting);
    } else {
      res.status(404).json({ error: 'Greeting not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteGreeting = async (req: Request, res: Response) => {
  try {
    const deleted = await Greeting.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Greeting not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
