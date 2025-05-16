import db from './connection.js' // Asegúrate de poner la ruta correcta
import bcrypt from 'bcrypt'

// Hash de contraseña de ejemplo
const passwordHash = bcrypt.hashSync('password123', 10)

// Limpiar tablas antes de insertar (opcional, útil para desarrollo)
db.exec(`
  DELETE FROM tasks;
  DELETE FROM users;
  DELETE FROM workspaces;
`)

// Insertar usuarios
const insertUser = db.prepare(`
  INSERT INTO users (name, email, password) VALUES (?, ?, ?)
`)
insertUser.run('Alice Doe', 'alice@example.com', passwordHash)
insertUser.run('Bob Smith', 'bob@example.com', passwordHash)

// Insertar workspaces
const insertWorkspace = db.prepare(`
  INSERT INTO workspaces (name) VALUES (?)
`)
insertWorkspace.run('Proyecto Alpha')
insertWorkspace.run('Proyecto Beta')

// Obtener IDs de los workspaces para usarlos en las tareas
const workspaces = db.prepare('SELECT * FROM workspaces').all()

// Insertar tareas
const insertTask = db.prepare(`
  INSERT INTO tasks (title, description, progress, workspaceId)
  VALUES (?, ?, ?, ?)
`)

insertTask.run(
  'Diseñar UI',
  'Crear maquetas de la interfaz para escritorio',
  'in_progress',
  workspaces[0].id
)

insertTask.run(
  'Configurar base de datos',
  'Establecer esquema inicial con SQLite',
  'completed',
  workspaces[0].id
)

insertTask.run(
  'Revisar código',
  'Auditoría de seguridad para autenticación',
  'todo',
  workspaces[1].id
)

console.log('🌱 Seed ejecutada correctamente.')
