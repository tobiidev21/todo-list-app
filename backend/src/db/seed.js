import db from './connection.js'

// Limpiar datos viejos (opcional para ambiente de desarrollo)
db.exec('DELETE FROM tasks')
db.exec('DELETE FROM workspaces')

// Insertar workspaces
const insertWorkspace = db.prepare('INSERT INTO workspaces (name) VALUES (?)')

const workspace1 = insertWorkspace.run('Workspace Personal').lastInsertRowid
const workspace2 = insertWorkspace.run('Workspace de Trabajo').lastInsertRowid

// Insertar tasks asociadas
const insertTask = db.prepare('INSERT INTO tasks (title, description, progress, workspaceId) VALUES (?, ?, ?, ?)')

// Tareas para Workspace Personal
insertTask.run('Leer libro', 'Leer 30 páginas del libro de Rust', 'completed', workspace1)
insertTask.run('Pasear al perro', 'Dar una vuelta por el parque', 'completed', workspace1)

// Tareas para Workspace de Trabajo
insertTask.run('Responder emails', 'Revisar y contestar correos del proyecto', 'to do', workspace2)
insertTask.run('Hacer presentación', 'Preparar slides para la reunión', 'to do', workspace2)

console.log('Base de datos sembrada con éxito!')
