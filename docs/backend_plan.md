# Backend Development Plan

This file lists tasks required to build the .NET backend.

## Initial Setup

1. **Create Solution & Project**
   - `dotnet new sln -n ChatApp`
   - `dotnet new webapi -n ChatBackend --framework net10.0 --no-https`
   - `dotnet sln add ChatBackend/ChatBackend.csproj`

2. **Configure EF Core with SQLite**
   - Add packages `Microsoft.EntityFrameworkCore.Sqlite` and `Microsoft.EntityFrameworkCore.Design`
   - Define DbContext with tables for users, conversations and messages
   - Create initial migration and update the database

3. **ASP.NET Core Identity**
   - Add `Microsoft.AspNetCore.Identity.EntityFrameworkCore`
   - Configure Identity with EF Core and SQLite
   - Register built-in Identity API endpoints:
     ```csharp
     builder.Services.AddIdentityApiEndpoints<IdentityUser>()
         .AddEntityFrameworkStores<ApplicationDbContext>();
     ```
   - Map the endpoints with `app.MapIdentityApi<IdentityUser>();`
   - Identity issues cookies at login when `useCookies=true`

4. **Middleware and Configuration**
   - Enable response compression with Gzip/Brotli
   - Serve the React build using `UseDefaultFiles()` and `UseStaticFiles()` instead of `UseSpaStaticFiles`
   - Configure `MapFallbackToFile("/index.html")` for SPA routing

## Chat API

1. **Minimal API Endpoints**
   - `/api/chat` - POST a message and receive LLM response
   - `/api/history` - GET chat history for the authenticated user

2. **LLM Provider Abstraction**
   - Interface for sending prompts to different providers
   - Implement provider for OpenAI using `Microsoft.Extensions.AI` or `OpenAI.Client`

3. **Hosting React**
   - During development serve the React dev server via proxy
   - In production serve the `dist` folder with `UseDefaultFiles()` and `UseStaticFiles()`

