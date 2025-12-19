FINAL ENDPOINT LIST (YOU’VE BUILT ALL THIS)
🔐 Auth

POST /api/auth/register

POST /api/auth/login

POST /api/auth/google

POST /api/auth/logout

👤 User (Private)

GET /api/users/me

PUT /api/users/me

POST /api/users/me/skills

DELETE /api/users/me/skills/:id

PATCH /API/users/me/skills/:id

POST /api/users/me/experience

PUT /api/users/me/experience/:id

DELETE /api/users/me/experience/:id

🌍 Public

GET /api/public/users/:username

GET /api/public/search


Swagger docs
http://localhost:5000/api/docs




 ======================
# APP ENVIRONMENT
# ======================
NODE_ENV=development
PORT=5000

# ======================
# DATABASE
# ======================
MONGODB_URL=mongodb+srv://aolatunji71:Berrified50@e-commerceapp.mwzw00o.mongodb.net/Aliexpress?retryWrites=true&w=majority&appName=E-commerceApp

# ======================
# AUTH
# ======================
JWT_SECRET=ghdjv7b8o87yi7tufb

# ======================
# GOOGLE OAUTH
# ======================
# ======================
# EMAIL (SMTP)
# ======================
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=aolatunji71@gmail.com
EMAIL_PASS=cqmptwnjomnkxifg
SUPPORT_EMAIL=info.johncarterkroos@gmail.com

# ======================
# FRONTEND
# ======================
CLIENT_URL=http://localhost:3000
