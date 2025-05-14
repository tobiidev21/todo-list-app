import db from './connection.js' // Ajusta la ruta a donde esté el archivo original con la conexión

// Limpia las tablas (opcional, útil en desarrollo)
db.exec(`
  DELETE FROM tasks;
  DELETE FROM users;
  DELETE FROM workspaces;
  VACUUM;
`)

// Insertar usuarios
const insertUser = db.prepare(`
  INSERT INTO users (name, email) VALUES (?, ?)
`)
insertUser.run('Alice', 'alice@example.com')
insertUser.run('Bob', 'bob@example.com')

// Insertar espacios de trabajo
const insertWorkspace = db.prepare(`
  INSERT INTO workspaces (name) VALUES (?)
`)
const workspace1 = insertWorkspace.run('Marketing')
const workspace2 = insertWorkspace.run('Development')

// Insertar tareas
const insertTask = db.prepare(`
  INSERT INTO tasks (title, description, progress, workspaceId) VALUES (?, ?, ?, ?)
`)
insertTask.run('Landing page', 'Create marketing landing page', 'in-progress', workspace1.lastInsertRowid)
insertTask.run('Fix bug #123', 'Fix login issue on Safari', 'todo', workspace2.lastInsertRowid)
insertTask.run('Write documentation', 'Document the auth system', 'done', workspace2.lastInsertRowid)

console.log('Database seeded successfully.')
