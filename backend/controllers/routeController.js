const Route = require('../models/Route');
const Driver = require('../models/Driver');

exports.createRoute = async (req, res) => {
  try {
    const driver = await Driver.findOne({ driverId: req.body.assignedDriver });
    if (!driver) {
      return res.status(400).json({ error: 'Invalid assigned driver ID' });
    }
    req.body.assignedDriver = driver._id;
    const route = new Route(req.body);
    await route.save();
    res.status(201).json(route);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find().populate('assignedDriver');
    res.status(200).json(routes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRouteById = async (req, res) => {
  try {
    const route = await Route.findById(req.params.id).populate('assignedDriver');
    if (!route) return res.status(404).json({ error: 'Route not found' });
    res.status(200).json(route);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(route);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRoute = async (req, res) => {
  try {
    await Route.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Route deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};