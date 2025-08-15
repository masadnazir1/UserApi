import cors from "cors";

export const corsOptions = {
  origin: [
    "https://snappit-mail.vercel.app",
    "http://localhost:4200",
    "https://snappit.galaxydev.pk",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  credentials: true,
};

export const corsMiddleware = cors(corsOptions);
