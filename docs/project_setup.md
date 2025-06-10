# Project Setup

High level commands to initialise the project from scratch. Use these as a reference when bootstrapping development.

## Backend

```bash
# Create solution and web API project targeting .NET 10
 dotnet new sln -n ChatApp
 dotnet new webapi -n ChatBackend --framework net10.0 --no-https
 dotnet sln ChatApp.sln add ChatBackend/ChatBackend.csproj

# Add EF Core and Identity packages
 dotnet add ChatBackend package Microsoft.EntityFrameworkCore.Sqlite
 dotnet add ChatBackend package Microsoft.EntityFrameworkCore.Design
 dotnet add ChatBackend package Microsoft.AspNetCore.Identity.EntityFrameworkCore

# Register Identity API endpoints in `Program.cs`
// inside builder configuration:
builder.Services.AddIdentityApiEndpoints<IdentityUser>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

# Enable response compression and static files in `Program.cs`
builder.Services.AddResponseCompression();
...
app.UseResponseCompression();
app.UseDefaultFiles();
app.UseStaticFiles();
```

## Frontend

```bash
# Create Vite React + TypeScript project
 npm create vite@latest frontend -- --template react-ts
 cd frontend
 npm install

# Install dependencies
 npm install tailwindcss postcss autoprefixer
 npm install @tanstack/react-router @tanstack/react-query
 npm install shadcn-ui
 npx tailwindcss init -p

# Initialize shadcn/ui
npx shadcn@latest init

# Example of adding a component
npx shadcn@latest add button
```

## Running Locally

1. Start the backend API
   ```bash
   dotnet run --project ChatBackend
   ```

2. Start the frontend dev server
   ```bash
   cd frontend && npm run dev
   ```

During development the React app should proxy API requests to the backend.

