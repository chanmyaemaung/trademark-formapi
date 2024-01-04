import { allowedOrigins } from './allowedOrigins';

const corsOptions = {
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

export default corsOptions;
