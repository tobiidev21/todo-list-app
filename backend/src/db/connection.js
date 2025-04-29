import Database from 'better-sqlite3'
import dotenv from 'dotenv'
dotenv.config()

const db = new Database(process.env.DB_PATH, { verbose: console.log })

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS workspaces (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      progress TEXT NOT NULL, 
      workspaceId INTEGER NOT NULL,
      FOREIGN KEY (workspaceId) REFERENCES workspaces(id)
    );
  `)

export default db
